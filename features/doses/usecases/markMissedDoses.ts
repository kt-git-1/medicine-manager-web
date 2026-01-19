import { prisma } from "@/lib/prisma";

export async function markMissedDoses(args: {
  familyGroupId: string;
  graceMinutes?: number; // default 90
  nowUtc?: Date;
}) {
  const nowUtc = args.nowUtc ?? new Date();
  const graceMinutes = args.graceMinutes ?? 90;
  const cutoff = new Date(nowUtc.getTime() - graceMinutes * 60 * 1000);

  // 対象の planned を先に取得（通知ログ作成のため）
  const targets = await prisma.doseEvent.findMany({
    where: {
      status: "planned",
      takenAt: null,
      plannedAt: { lt: cutoff },
      schedule: {
        medication: { familyGroupId: args.familyGroupId, isActive: true },
      },
    },
    include: {
      schedule: { include: { medication: true } },
    },
  });

  if (targets.length === 0) return { updated: 0 };

  await prisma.$transaction(async (tx) => {
    // missed へ更新（まとめて）
    await tx.doseEvent.updateMany({
      where: { id: { in: targets.map((t) => t.id) } },
      data: { status: "missed" },
    });

    // missed 通知（連投防止：同じdoseEventIdは1回だけ）
    for (const t of targets) {
      // 既にmissed通知があるかチェック（payloadJson.doseEventId）
      const exists = await tx.notificationEvent.findFirst({
        where: {
          familyGroupId: args.familyGroupId,
          type: "missed",
          payloadJson: {
            path: ["doseEventId"],
            equals: t.id,
          },
        },
        select: { id: true },
      });
      if (exists) continue;

      await tx.notificationEvent.create({
        data: {
          familyGroupId: args.familyGroupId,
          type: "missed",
          occurredAt: nowUtc,
          payloadJson: {
            doseEventId: t.id,
            medicationId: t.schedule.medication.id,
            medicationName: t.schedule.medication.name,
            plannedAt: t.plannedAt,
          },
        },
      });
    }
  });

  return { updated: targets.length };
}
