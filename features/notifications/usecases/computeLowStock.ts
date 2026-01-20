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

  let created = 0;
  let updated = 0;

  await prisma.$transaction(async (tx) => {
    // ✅ meds 取得も tx 内で
    const meds = await tx.medication.findMany({
      where: {
        familyGroupId: args.familyGroupId,
        isActive: true,
        remainingCount: { not: null },
      },
      include: { schedules: true },
    });

    for (const med of meds) {
      const remaining = med.remainingCount;
      if (typeof remaining !== "number") continue;

      // 週あたり消費量
      let weekly = 0;
      for (const s of med.schedules) {
        const days = popcount7(s.daysOfWeekMask);
        weekly += (s.dosesPerTime ?? 1) * days;
      }
      if (weekly <= 0) continue;

      const dailyAvg = weekly / 7;
      if (dailyAvg <= 0) continue;

      const daysLeft = remaining / dailyAvg;

      // low_stock 対象でないなら何もしない（MVP）
      if (daysLeft > thresholdDays) continue;

      // ✅ 直近dedupeHours内の同薬low_stock（最新1件）を探す
      const latest = await tx.notificationEvent.findFirst({
        where: {
          familyGroupId: args.familyGroupId,
          type: "low_stock",
          occurredAt: { gte: dedupeSince },
          payloadJson: { path: ["medicationId"], equals: med.id },
        },
        orderBy: { occurredAt: "desc" },
        select: { id: true },
      });

      const payload = {
        medicationId: med.id,
        medicationName: med.name,
        remainingCount: remaining,
        estimatedDaysLeft: Number(daysLeft.toFixed(1)),
        thresholdDays,
      };

      if (latest) {
        // ✅ 既存があるなら「作らずに最新化」して dashboard 表示を常に更新
        await tx.notificationEvent.update({
          where: { id: latest.id },
          data: { payloadJson: payload },
        });
        updated++;
        continue;
      }

      await tx.notificationEvent.create({
        data: {
          familyGroupId: args.familyGroupId,
          type: "low_stock",
          occurredAt: nowUtc,
          payloadJson: payload,
        },
      });
      created++;
    }
  });

  return { created, updated };
}
