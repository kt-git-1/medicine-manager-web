import { prisma } from "@/lib/prisma";
import {
  getJstYmd,
  getJstWeekdayMon0,
  isDayIncluded,
  plannedAtUtcFromJstDateTime,
} from "@/lib/time";

export async function generateTodayDosesForFamilyGroup(args: {
  familyGroupId: string;
  nowUtc?: Date;
}) {
  const nowUtc = args.nowUtc ?? new Date();
  const { y, m, d } = getJstYmd(nowUtc);
  const weekdayMon0 = getJstWeekdayMon0(nowUtc);

  const schedules = await prisma.doseSchedule.findMany({
    where: {
      medication: {
        familyGroupId: args.familyGroupId,
        isActive: true,
      },
    },
    select: {
      id: true,
      timeOfDay: true,
      daysOfWeekMask: true,
      dosesPerTime: true,
      medication: { select: { id: true } },
    },
  });

  const targets = schedules.filter((s) => isDayIncluded(s.daysOfWeekMask, weekdayMon0));

  // upsert をループ（MVPでOK、後で最適化可能）
  await prisma.$transaction(async (tx) => {
    for (const s of targets) {
      const plannedAt = plannedAtUtcFromJstDateTime({ y, m, d, timeOfDay: s.timeOfDay });
      await tx.doseEvent.upsert({
        where: {
          scheduleId_plannedAt: {
            scheduleId: s.id,
            plannedAt,
          },
        },
        update: {}, // 既存なら何もしない
        create: {
          scheduleId: s.id,
          plannedAt,
          status: "planned",
        },
      });
    }
  });

  return { createdOrEnsured: targets.length };
}
