import { prisma } from "@/lib/prisma";

export class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
  }
}

export async function claimPairingCode(args: {
  patientDeviceToken: string; // Authorization: Device <token>
  code: string;
  tz?: string;
  label?: string;
}) {
  const now = new Date();

  const result = await prisma.$transaction(async (tx) => {
    const pairing = await tx.pairingCode.findUnique({
      where: { code: args.code },
      select: { code: true, familyGroupId: true, expiresAt: true, usedAt: true },
    });

    if (!pairing) throw new BadRequestError("Invalid code");
    if (pairing.usedAt) throw new BadRequestError("Code already used");
    if (pairing.expiresAt.getTime() <= now.getTime()) throw new BadRequestError("Code expired");

    // patient device が無いなら作る（初回起動）
    const patient = await tx.patientDevice.upsert({
      where: { deviceToken: args.patientDeviceToken },
      update: {
        familyGroupId: pairing.familyGroupId,
        tz: args.tz ?? undefined,
        label: args.label ?? undefined,
      },
      create: {
        deviceToken: args.patientDeviceToken,
        familyGroupId: pairing.familyGroupId,
        tz: args.tz ?? "Asia/Tokyo",
        label: args.label ?? null,
      },
      select: { id: true, familyGroupId: true },
    });

    await tx.pairingCode.update({
      where: { code: args.code },
      data: { usedAt: now },
    });

    return { familyGroupId: patient.familyGroupId! };
  });

  return result;
}
