import { NextRequest, NextResponse } from "next/server";
import { requireCaregiverContext } from "@/lib/auth/deviceAuth";
import { listNotifications } from "@/features/notifications/usecases/listNotifications";

export async function GET(req: NextRequest) {
  try {
    const ctx = await requireCaregiverContext(req);

    const url = new URL(req.url);
    const limit = Number(url.searchParams.get("limit") ?? "50");
    const days = Number(url.searchParams.get("days") ?? "30");

    const { items } = await listNotifications({
      familyGroupId: ctx.familyGroupId,
      limit,
      days,
    });

    return NextResponse.json({ items });
  } catch (e: any) {
    const status = e?.name === "UnauthorizedError" ? 401 : 500;
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status });
  }
}
