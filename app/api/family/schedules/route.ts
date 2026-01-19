import { NextRequest, NextResponse } from "next/server";
import { requireCaregiverContext } from "@/lib/auth/deviceAuth";
import { scheduleCreateSchema } from "@/features/medications/schemas";
import { createSchedule } from "@/features/medications/usecases/createSchedule";

export async function POST(req: NextRequest) {
  try {
    const ctx = await requireCaregiverContext(req);
    const body = await req.json().catch(() => ({}));
    const input = scheduleCreateSchema.parse(body);

    const data = await createSchedule({ familyGroupId: ctx.familyGroupId, ...input });
    return NextResponse.json(data);
  } catch (e: any) {
    if (e?.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: e.errors }, { status: 400 });
    }
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
