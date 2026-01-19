import { prisma } from "@/lib/prisma";
import { getTodayRangeUtcFromJstNow } from "@/lib/time";

export async function listTodayDosesForFamilyGroup(args: {
  familyGroupId: string;
  nowUtc?: Date;
}) {
  const nowUtc = args.nowUtc ?? new Date();
  const { startUtc, endUtc } = getTodayRangeUtcFromJstNow(nowUtc);

  const doseEvents = await prisma.doseEvent.findMany({
    where: {
      plannedAt: { gte: startUtc, lt: endUtc },
      schedule: {
        medication: {
          familyGroupId: args.familyGroupId,
          isActive: true,
        },
      },
    },
    orderBy: { plannedAt: "asc" },
    include: {
      schedule: {
        include: {
          medication: true,
        },
      },
    },
  });

  return { startUtc, endUtc, doseEvents };
}
