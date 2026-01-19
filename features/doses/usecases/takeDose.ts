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

    // 2) planned 以外は変更しない（taken/missed/skipped は idempotent）
    if (ev.status !== "planned") {
      return ev;
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
      const dec = ev.schedule.dosesPerTime ?? 1;
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

      const refreshed = await tx.doseEvent.findUnique({
        where: { id: ev.id },
        include: { schedule: { include: { medication: true } } },
      });
      if (refreshed) {
        return refreshed;
      }
    }

    return updatedEvent;
  });
}
