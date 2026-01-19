import { NextRequest, NextResponse } from "next/server";
import { requireCaregiverContext } from "@/lib/auth/deviceAuth";
import { deleteSchedule } from "@/features/medications/usecases/deleteSchedule";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ scheduleId: string }> }
) {
  try {
    const ctx = await requireCaregiverContext(req);
    const { scheduleId } = await context.params;

    const data = await deleteSchedule({ familyGroupId: ctx.familyGroupId, scheduleId });
    return NextResponse.json(data);
  } catch (e: any) {
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
