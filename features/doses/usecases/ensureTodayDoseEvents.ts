import { prisma } from "@/lib/prisma";

const JST_TZ = "Asia/Tokyo";

function startOfTodayJst(now = new Date()) {
  // Intlを使ってJSTで年月日を確定 → Date(UTC)に組み直す
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: JST_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const y = Number(parts.find(p => p.type === "year")?.value);
  const m = Number(parts.find(p => p.type === "month")?.value);
  const d = Number(parts.find(p => p.type === "day")?.value);

  // JST 00:00 を UTC に変換した Date を作る
  // JST 00:00 = UTC 前日 15:00
  const utc = new Date(Date.UTC(y, m - 1, d, 0 - 9, 0, 0));
  return utc;
}

function endOfTodayJst(now = new Date()) {
  const start = startOfTodayJst(now);
  return new Date(start.getTime() + 24 * 60 * 60 * 1000);
}

function dayOfWeekJst(now = new Date()) {
  // JSTで曜日を取る（旧実装と同じ Mon=0〜Sun=6 の規約）
  const fmt = new Intl.DateTimeFormat("en-US", { timeZone: JST_TZ, weekday: "short" });
  const w = fmt.format(now); // Sun, Mon...
  const map: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
  return map[w];
}

function plannedAtForTodayJst(timeOfDay: string, now = new Date()) {
  // timeOfDay "HH:MM" を JSTの今日に当ててUTC Dateにする
  const [hh, mm] = timeOfDay.split(":").map(Number);

  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: JST_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const y = Number(parts.find(p => p.type === "year")?.value);
  const m = Number(parts.find(p => p.type === "month")?.value);
  const d = Number(parts.find(p => p.type === "day")?.value);

  // JST y-m-d hh:mm を UTC に直す（-9h）
  return new Date(Date.UTC(y, m - 1, d, hh - 9, mm, 0));
}

function isScheduledToday(mask: number, jstDow: number) {
  const bit = 1 << jstDow;
  return (mask & bit) !== 0;
}

export async function ensureTodayDoseEvents(args: { familyGroupId: string; now?: Date }) {
  const now = args.now ?? new Date();
  const jstDow = dayOfWeekJst(now);
  const start = startOfTodayJst(now);
  const end = endOfTodayJst(now);

  // 有効な薬のみのスケジュールを取得
  const schedules = await prisma.doseSchedule.findMany({
    where: {
      medication: { familyGroupId: args.familyGroupId, isActive: true },
    },
    select: { id: true, timeOfDay: true, daysOfWeekMask: true },
  });

  const targets = schedules
    .filter(s => isScheduledToday(s.daysOfWeekMask, jstDow))
    .map(s => ({
      scheduleId: s.id,
      plannedAt: plannedAtForTodayJst(s.timeOfDay, now),
    }));

  // idempotentに upsert
  if (targets.length > 0) {
    await prisma.$transaction(
      targets.map(t =>
        prisma.doseEvent.upsert({
          where: { scheduleId_plannedAt: { scheduleId: t.scheduleId, plannedAt: t.plannedAt } },
          create: { scheduleId: t.scheduleId, plannedAt: t.plannedAt },
          update: {},
        })
      )
    );
  }

  // 生成後に今日分を返したいならここで取得も可
  const doseEvents = await prisma.doseEvent.findMany({
    where: {
      plannedAt: { gte: start, lt: end },
      schedule: { medication: { familyGroupId: args.familyGroupId, isActive: true } },
    },
    include: {
      schedule: { include: { medication: true } },
    },
    orderBy: { plannedAt: "asc" },
  });

  return { startUtc: start.toISOString(), endUtc: end.toISOString(), doseEvents };
}
