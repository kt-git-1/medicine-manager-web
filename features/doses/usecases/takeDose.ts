import { prisma } from "@/lib/prisma";

export class NotFoundError extends Error {
  constructor(msg = "Not found") {
    super(msg);
    this.name = "NotFoundError";
  }
}

export class ForbiddenError extends Error {
  constructor(msg = "Forbidden") {
    super(msg);
    this.name = "ForbiddenError";
  }
}

export async function takeDose(args: {
  familyGroupId: string;
  doseEventId: string;
  source: "patient" | "caregiver";
  nowUtc?: Date;
}) {
  const nowUtc = args.nowUtc ?? new Date();

  const updated = await prisma.$transaction(async (tx) => {
    const updatedCount = await tx.doseEvent.updateMany({
      where: {
        id: args.doseEventId,
        status: "planned",
        schedule: {
          medication: { familyGroupId: args.familyGroupId },
        },
      },
      data: {
        status: "taken",
        takenAt: nowUtc,
        source: args.source,
      },
    });

    if (updatedCount.count === 0) {
      const existing = await tx.doseEvent.findUnique({
        where: { id: args.doseEventId },
        include: {
          schedule: {
            include: {
              medication: true,
            },
          },
        },
      });
      if (!existing) throw new NotFoundError("DoseEvent not found");
      if (existing.schedule.medication.familyGroupId !== args.familyGroupId)
        throw new ForbiddenError();
      return existing;
    }

    const updatedEvent = await tx.doseEvent.findUnique({
      where: { id: args.doseEventId },
      include: {
        schedule: { include: { medication: true } },
      },
    });
    if (!updatedEvent) throw new NotFoundError("DoseEvent not found");

    const dosesPerTime = updatedEvent.schedule.dosesPerTime ?? 1;

    // remainingCount を減らす（ある場合のみ、0未満にしない）
    const med = updatedEvent.schedule.medication;
    if (typeof med.remainingCount === "number") {
      const decremented = await tx.medication.updateMany({
        where: {
          id: med.id,
          remainingCount: { gte: dosesPerTime },
        },
        data: {
          remainingCount: { decrement: dosesPerTime },
          remainingUpdatedAt: nowUtc,
        },
      });

      if (decremented.count === 0) {
        await tx.medication.updateMany({
          where: {
            id: med.id,
            remainingCount: { gt: 0, lt: dosesPerTime },
          },
          data: {
            remainingCount: 0,
            remainingUpdatedAt: nowUtc,
          },
        });
      }
    }

    // 通知ログ（MVPでは taken は任意だが、あとで便利なので残す）
    await tx.notificationEvent.create({
      data: {
        familyGroupId: args.familyGroupId,
        type: "taken",
        occurredAt: nowUtc,
        payloadJson: {
          medicationId: med.id,
          medicationName: med.name,
          plannedAt: updatedEvent.plannedAt,
          takenAt: updatedEvent.takenAt,
        },
      },
    });

    return updatedEvent;
  });

  return updated;
}
