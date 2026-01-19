import { NextRequest, NextResponse } from "next/server";
import { requireCaregiverContext } from "@/lib/auth/deviceAuth";
import { medicationCreateSchema } from "@/features/medications/schemas";
import { listMedications } from "@/features/medications/usecases/listMedications";
import { createMedication } from "@/features/medications/usecases/createMedication";

export async function GET(req: NextRequest) {
  try {
    const ctx = await requireCaregiverContext(req);
    const data = await listMedications({ familyGroupId: ctx.familyGroupId });
    return NextResponse.json(data);
  } catch (e: any) {
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    const ctx = await requireCaregiverContext(req);
    const body = await req.json().catch(() => ({}));
    const input = medicationCreateSchema.parse(body);
    const data = await createMedication({ familyGroupId: ctx.familyGroupId, ...input });
    return NextResponse.json(data);
  } catch (e: any) {
    if (e?.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: e.errors }, { status: 400 });
    }
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
