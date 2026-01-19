import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { markMissedDoses } from "@/features/doses/usecases/markMissedDoses";
import { computeLowStock } from "@/features/notifications/usecases/computeLowStock";

function requireCronAuth(req: NextRequest): boolean {
  const auth = req.headers.get("authorization") ?? "";
  const m = auth.match(/^Bearer\s+(.+)$/i);
  const token = m?.[1]?.trim() ?? "";
  return token.length > 0 && token === process.env.CRON_SECRET;
}

export async function POST(req: NextRequest) {
  try {
    if (!requireCronAuth(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // MVP：全FamilyGroupに対して処理（規模が小さい想定）
    const groups = await prisma.familyGroup.findMany({ select: { id: true } });

    let totalMissed = 0;
    let totalLowStock = 0;

    for (const g of groups) {
      const missed = await markMissedDoses({ familyGroupId: g.id, graceMinutes: 90 });
      const low = await computeLowStock({ familyGroupId: g.id, thresholdDays: 3, dedupeHours: 24 });
      totalMissed += missed.updated;
      totalLowStock += low.created;
    }

    return NextResponse.json({
      ok: true,
      groups: groups.length,
      missedUpdated: totalMissed,
      lowStockCreated: totalLowStock,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
