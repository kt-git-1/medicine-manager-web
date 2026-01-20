import { NextRequest, NextResponse } from "next/server";
import { requireCaregiverContext } from "@/lib/auth/deviceAuth";
import { markMissedDoses } from "@/features/doses/usecases/markMissedDoses";
import { computeLowStock } from "@/features/notifications/usecases/computeLowStock";

export async function POST(req: NextRequest) {
  try {
    const ctx = await requireCaregiverContext(req);
    const missed = await markMissedDoses({ familyGroupId: ctx.familyGroupId, graceMinutes: 90 });
    const low = await computeLowStock({ familyGroupId: ctx.familyGroupId, thresholdDays: 3, dedupeHours: 24 });

    return NextResponse.json({
      missedUpdated: missed.updated,
      lowStockCreated: low.created,
      lowStockUpdated: low.updated,
    });
  } catch (e: any) {
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
