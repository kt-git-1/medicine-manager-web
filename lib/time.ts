// JST = UTC+9 (no DST)
const JST_OFFSET_MIN = 9 * 60;

export function getJstNow(): Date {
  return new Date(Date.now() + JST_OFFSET_MIN * 60 * 1000);
}

export function getJstYmd(dateUtc: Date): { y: number; m: number; d: number } {
  const jst = new Date(dateUtc.getTime() + JST_OFFSET_MIN * 60 * 1000);
  return { y: jst.getUTCFullYear(), m: jst.getUTCMonth() + 1, d: jst.getUTCDate() };
}

/**
 * JSTのその日(00:00〜24:00)をUTCのDate範囲に変換
 */
export function getTodayRangeUtcFromJstNow(nowUtc: Date): { startUtc: Date; endUtc: Date } {
  const { y, m, d } = getJstYmd(nowUtc);
  // JST 00:00 -> UTC 前日 15:00
  const startUtc = new Date(Date.UTC(y, m - 1, d, 0 - 9, 0, 0, 0));
  const endUtc = new Date(startUtc.getTime() + 24 * 60 * 60 * 1000);
  return { startUtc, endUtc };
}

/**
 * JSTの年月日 + "HH:MM" を plannedAt(UTC Date) に変換
 */
export function plannedAtUtcFromJstDateTime(args: {
  y: number;
  m: number;
  d: number;
  timeOfDay: string; // "HH:MM"
}): Date {
  const [hhStr, mmStr] = args.timeOfDay.split(":");
  const hh = Number(hhStr);
  const mm = Number(mmStr);
  if (!Number.isFinite(hh) || !Number.isFinite(mm)) throw new Error("Invalid timeOfDay");

  // JST hh:mm = UTC (hh-9):mm
  return new Date(Date.UTC(args.y, args.m - 1, args.d, hh - 9, mm, 0, 0));
}

/**
 * JST曜日(0=Mon..6=Sun) のビットが mask に含まれるか
 */
export function isDayIncluded(mask: number, weekdayMon0: number): boolean {
  const bit = 1 << weekdayMon0;
  return (mask & bit) !== 0;
}

/**
 * JSTでの曜日(0=Mon..6=Sun)を返す
 */
export function getJstWeekdayMon0(nowUtc: Date): number {
  const jst = new Date(nowUtc.getTime() + JST_OFFSET_MIN * 60 * 1000);
  // JS: 0=Sun..6=Sat を JST上で取り、Mon0へ変換
  const js = jst.getUTCDay(); // 0=Sun..6=Sat
  return (js + 6) % 7; // Mon=0..Sun=6
}
