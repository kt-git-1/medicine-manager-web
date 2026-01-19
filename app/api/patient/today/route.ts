import { NextRequest, NextResponse } from "next/server";
import { requirePatientContext } from "@/lib/auth/deviceAuth";
import { generateTodayDosesForFamilyGroup } from "@/features/doses/usecases/generateTodayDoses";
import { listTodayDosesForFamilyGroup } from "@/features/doses/usecases/listTodayDoses";

export async function GET(req: NextRequest) {
  try {
    const ctx = await requirePatientContext(req);
    if (!ctx.familyGroupId) {
      return NextResponse.json({ error: "Device not paired yet" }, { status: 400 });
    }

    await generateTodayDosesForFamilyGroup({ familyGroupId: ctx.familyGroupId });
    const { startUtc, endUtc, doseEvents } = await listTodayDosesForFamilyGroup({
      familyGroupId: ctx.familyGroupId,
    });

    return NextResponse.json({
      startUtc: startUtc.toISOString(),
      endUtc: endUtc.toISOString(),
      doseEvents,
    });
  } catch (e: any) {
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
