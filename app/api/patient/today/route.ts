import { NextRequest, NextResponse } from "next/server";
import { requirePatientContext } from "@/lib/auth/deviceAuth";
import { ensureTodayDoseEvents } from "@/features/doses/usecases/ensureTodayDoseEvents";

export async function GET(req: NextRequest) {
  try {
    const ctx = await requirePatientContext(req);
    if (!ctx.familyGroupId) {
      return NextResponse.json({ error: "Device not paired yet" }, { status: 400 });
    }

    const { startUtc, endUtc, doseEvents } = await ensureTodayDoseEvents({
      familyGroupId: ctx.familyGroupId,
    });

    return NextResponse.json({ startUtc, endUtc, doseEvents });
  } catch (e: any) {
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
