import { prisma } from "@/lib/prisma";

export class NotFoundError extends Error {}
export class ForbiddenError extends Error {}

export async function takeDose(args: {
  familyGroupId: string;
  doseEventId: string;
  source: "patient" | "caregiver";
}) {
  const now = new Date();

  return prisma.$transaction(async (tx) => {
    // 1) doseEvent を取得（familyGroupで権限チェック）
    const ev = await tx.doseEvent.findFirst({
      where: {
        id: args.doseEventId,
        schedule: { medication: { familyGroupId: args.familyGroupId } },
      },
      include: {
        schedule: { include: { medication: true } },
      },
    });

    if (!ev) throw new NotFoundError("DoseEvent not found");
    const doseEvent = ev;

    const dec = doseEvent.schedule.dosesPerTime ?? 1;

    function popcount7(mask: number): number {
      let x = mask & 0x7f;
      let c = 0;
      while (x) {
        x &= x - 1;
        c++;
      }
      return c;
    }

    async function updateLowStockNotification(medicationId: string) {
      const medWithSchedules = await tx.medication.findUnique({
        where: { id: medicationId },
        select: {
          id: true,
          name: true,
          remainingCount: true,
          schedules: { select: { daysOfWeekMask: true, dosesPerTime: true } },
        },
      });
      if (!medWithSchedules || typeof medWithSchedules.remainingCount !== "number") return;

      let weekly = 0;
      for (const s of medWithSchedules.schedules) {
        const days = popcount7(s.daysOfWeekMask);
        weekly += (s.dosesPerTime ?? 1) * days;
      }
      const dailyAvg = weekly / 7;
      const estimatedDaysLeft =
        dailyAvg > 0 ? Number((medWithSchedules.remainingCount / dailyAvg).toFixed(1)) : null;

      const latest = await tx.notificationEvent.findFirst({
        where: {
          familyGroupId: args.familyGroupId,
          type: "low_stock",
          payloadJson: { path: ["medicationId"], equals: medicationId },
        },
        orderBy: { occurredAt: "desc" },
        select: { id: true, payloadJson: true },
      });
      if (!latest) return;

      const existingPayload =
        latest.payloadJson && typeof latest.payloadJson === "object" && !Array.isArray(latest.payloadJson)
          ? (latest.payloadJson as Record<string, unknown>)
          : {};

      await tx.notificationEvent.update({
        where: { id: latest.id },
        data: {
          payloadJson: {
            ...existingPayload,
            medicationId: medWithSchedules.id,
            medicationName: medWithSchedules.name,
            remainingCount: medWithSchedules.remainingCount,
            estimatedDaysLeft,
          },
        },
      });
    }

    async function decrementRemaining() {
      const med = doseEvent.schedule.medication;
      const decremented = await tx.medication.updateMany({
        where: {
          id: med.id,
          remainingCount: { gte: dec },
        },
        data: {
          remainingCount: { decrement: dec },
          remainingUpdatedAt: now,
        },
      });

      if (decremented.count === 0) {
        await tx.medication.updateMany({
          where: {
            id: med.id,
            remainingCount: { gt: 0, lt: dec },
          },
          data: {
            remainingCount: 0,
            remainingUpdatedAt: now,
          },
        });
      }

      await updateLowStockNotification(med.id);

      const refreshed = await tx.doseEvent.findUnique({
        where: { id: doseEvent.id },
        include: { schedule: { include: { medication: true } } },
      });
      if (refreshed) return refreshed;
      return doseEvent;
    }

    // 2) planned 以外は変更しない（taken/skipped は idempotent）
    //    ただし過去の不整合で残薬が減っていない場合は補正する
    //    missed は「遅れて飲んだ」を許可する（taken に更新できる）
    if (doseEvent.status !== "planned" && doseEvent.status !== "missed") {
      const med = doseEvent.schedule.medication;

      // すでに taken なのに残薬が減っていない場合だけ補正
      if (
        doseEvent.status === "taken" &&
        doseEvent.takenAt &&
        typeof med.remainingCount === "number" &&
        (!med.remainingUpdatedAt || med.remainingUpdatedAt < doseEvent.takenAt)
      ) {
        return decrementRemaining();
      }

      return doseEvent;
    }

    // 3) DoseEvent を taken に更新
    const updatedEvent = await tx.doseEvent.update({
      where: { id: ev.id },
      data: {
        status: "taken",
        takenAt: now,
        source: args.source, // DoseSource? の型に合わせて
      },
      include: {
        schedule: { include: { medication: true } },
      },
    });

    // 4) 残薬減算（remainingCount がある薬だけ）
    const med = updatedEvent.schedule.medication;
    if (typeof med.remainingCount === "number") {
      return decrementRemaining();
    }

    return updatedEvent;
  });
}
