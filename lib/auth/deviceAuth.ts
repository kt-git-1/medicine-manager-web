import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export type DeviceRole = "caregiver" | "patient";

export type DeviceContext =
  | {
      role: "caregiver";
      deviceToken: string;
      familyGroupId: string;
      caregiverDeviceId: string;
    }
  | {
      role: "patient";
      deviceToken: string;
      familyGroupId: string | null; // claim前はnullあり
      patientDeviceId: string;
      tz: string;
    };

function parseDeviceToken(req: NextRequest): string | null {
  const auth = req.headers.get("authorization") ?? "";
  // "Authorization: Device <token>"
  const m = auth.match(/^Device\s+(.+)$/i);
  return m?.[1]?.trim() || null;
}

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export async function resolveDeviceContext(
  req: NextRequest
): Promise<DeviceContext> {
  const token = parseDeviceToken(req);
  if (!token) throw new UnauthorizedError("Missing Authorization: Device <token>");

  const caregiver = await prisma.caregiverDevice.findUnique({
    where: { deviceToken: token },
    select: { id: true, familyGroupId: true },
  });

  if (caregiver) {
    return {
      role: "caregiver",
      deviceToken: token,
      familyGroupId: caregiver.familyGroupId,
      caregiverDeviceId: caregiver.id,
    };
  }

  const patient = await prisma.patientDevice.findUnique({
    where: { deviceToken: token },
    select: { id: true, familyGroupId: true, tz: true },
  });

  if (patient) {
    return {
      role: "patient",
      deviceToken: token,
      familyGroupId: patient.familyGroupId,
      patientDeviceId: patient.id,
      tz: patient.tz,
    };
  }

  // tokenはあるがDBに未登録（初回）
  // ルート/ユースケース側で "作成してよいか" が違うので、ここでは失敗させる
  throw new UnauthorizedError("Unknown device token");
}

export async function requireCaregiverContext(req: NextRequest) {
  const ctx = await resolveDeviceContext(req);
  if (ctx.role !== "caregiver") throw new UnauthorizedError("Caregiver device required");
  return ctx;
}

export async function requirePatientContext(req: NextRequest) {
  const ctx = await resolveDeviceContext(req);
  if (ctx.role !== "patient") throw new UnauthorizedError("Patient device required");
  return ctx;
}
