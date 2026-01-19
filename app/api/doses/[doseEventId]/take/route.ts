import { NextRequest, NextResponse } from "next/server";
import { resolveDeviceContext } from "@/lib/auth/deviceAuth";
import { takeDose, ForbiddenError, NotFoundError } from "@/features/doses/usecases/takeDose";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ doseEventId: string }> }
) {
  try {
    const ctx = await resolveDeviceContext(req);
    const { doseEventId } = await context.params;

    const familyGroupId = ctx.familyGroupId;
    if (!familyGroupId) {
      return NextResponse.json({ error: "Device not paired yet" }, { status: 400 });
    }

    const updated = await takeDose({
      familyGroupId,
      doseEventId,
      source: ctx.role,
    });

    return NextResponse.json({ doseEvent: updated });
  } catch (e: any) {
    if (e?.name === "UnauthorizedError") {
      return NextResponse.json({ error: e.message }, { status: 401 });
    }
    if (e instanceof NotFoundError) {
      return NextResponse.json({ error: e.message }, { status: 404 });
    }
    if (e instanceof ForbiddenError) {
      return NextResponse.json({ error: e.message }, { status: 403 });
    }
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
