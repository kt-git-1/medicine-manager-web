import { prisma } from "@/lib/prisma";

function popcount7(mask: number): number {
  let x = mask & 0x7f; // 0..127
  let c = 0;
  while (x) {
    x &= x - 1;
    c++;
  }
  return c;
}

export async function computeLowStock(args: {
  familyGroupId: string;
  thresholdDays?: number; // default 3
  dedupeHours?: number; // default 24
  nowUtc?: Date;
}) {
  const nowUtc = args.nowUtc ?? new Date();
  const thresholdDays = args.thresholdDays ?? 3;
  const dedupeHours = args.dedupeHours ?? 24;
  const dedupeSince = new Date(nowUtc.getTime() - dedupeHours * 60 * 60 * 1000);

  // remainingCount がある薬のみ対象
  const meds = await prisma.medication.findMany({
    where: {
      familyGroupId: args.familyGroupId,
      isActive: true,
      remainingCount: { not: null },
    },
    include: {
      schedules: true,
    },
  });

  let created = 0;

  await prisma.$transaction(async (tx) => {
    for (const med of meds) {
      const remaining = med.remainingCount ?? null;
      if (remaining === null) continue;

      // 週あたり消費量を計算（曜日ビット数×dosesPerTime）
      let weekly = 0;
      for (const s of med.schedules) {
        const days = popcount7(s.daysOfWeekMask);
        weekly += (s.dosesPerTime ?? 1) * days;
      }
      if (weekly <= 0) continue;

      const dailyAvg = weekly / 7;
      if (dailyAvg <= 0) continue;

      const daysLeft = remaining / dailyAvg;

      if (daysLeft <= thresholdDays) {
        // 直近dedupeHours内に同薬のlow_stockがあるなら作らない
        const exists = await tx.notificationEvent.findFirst({
          where: {
            familyGroupId: args.familyGroupId,
            type: "low_stock",
            occurredAt: { gte: dedupeSince },
            payloadJson: { path: ["medicationId"], equals: med.id },
          },
          select: { id: true },
        });
        if (exists) continue;

        await tx.notificationEvent.create({
          data: {
            familyGroupId: args.familyGroupId,
            type: "low_stock",
            occurredAt: nowUtc,
            payloadJson: {
              medicationId: med.id,
              medicationName: med.name,
              remainingCount: remaining,
              estimatedDaysLeft: Number(daysLeft.toFixed(1)),
              thresholdDays,
            },
          },
        });
        created++;
      }
    }
  });

  return { created };
}
