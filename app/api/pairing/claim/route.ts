import { NextRequest, NextResponse } from "next/server";
import { claimPairingInputSchema } from "@/features/pairing/schemas";
import { claimPairingCode, BadRequestError } from "@/features/pairing/usecases/claimPairingCode";

function parseDeviceToken(req: NextRequest): string | null {
  const auth = req.headers.get("authorization") ?? "";
  const m = auth.match(/^Device\s+(.+)$/i);
  return m?.[1]?.trim() || null;
}

export async function POST(req: NextRequest) {
  try {
    const token = parseDeviceToken(req);
    if (!token) {
      return NextResponse.json(
        { error: "Missing Authorization: Device <token>" },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const input = claimPairingInputSchema.parse(body);

    const { familyGroupId } = await claimPairingCode({
      patientDeviceToken: token,
      code: input.code,
      tz: input.tz,
      label: input.label,
    });

    return NextResponse.json({ familyGroupId });
  } catch (e: any) {
    if (e?.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: e.errors }, { status: 400 });
    }
    if (e instanceof BadRequestError) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
