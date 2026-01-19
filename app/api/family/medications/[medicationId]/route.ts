import { NextRequest, NextResponse } from "next/server";
import { requireCaregiverContext } from "@/lib/auth/deviceAuth";
import { medicationUpdateSchema } from "@/features/medications/schemas";
import { updateMedication } from "@/features/medications/usecases/updateMedication";
import { deleteMedication } from "@/features/medications/usecases/deleteMedication";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ medicationId: string }> }
) {
  try {
    const ctx = await requireCaregiverContext(req);
    const { medicationId } = await context.params;

    const body = await req.json().catch(() => ({}));
    const input = medicationUpdateSchema.parse(body);

    const data = await updateMedication({
      familyGroupId: ctx.familyGroupId,
      medicationId,
      ...input,
    });
    return NextResponse.json(data);
  } catch (e: any) {
    if (e?.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: e.errors }, { status: 400 });
    }
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ medicationId: string }> }
) {
  try {
    const ctx = await requireCaregiverContext(req);
    const { medicationId } = await context.params;

    const data = await deleteMedication({
      familyGroupId: ctx.familyGroupId,
      medicationId,
    });
    return NextResponse.json(data);
  } catch (e: any) {
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
