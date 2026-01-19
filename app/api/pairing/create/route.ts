import { NextRequest, NextResponse } from "next/server";
import { createPairingInputSchema } from "@/features/pairing/schemas";
import { createPairingCode } from "@/features/pairing/usecases/createPairingCode";

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
    const input = createPairingInputSchema.parse(body);

    const { code, expiresAt } = await createPairingCode({
      caregiverDeviceToken: token,
      label: input.label,
    });

    return NextResponse.json({
      code,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (e: any) {
    if (e?.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: e.errors }, { status: 400 });
    }
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
