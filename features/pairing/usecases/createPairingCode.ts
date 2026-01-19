import { prisma } from "@/lib/prisma";
import crypto from "crypto";

function generateCode(len = 8) {
  // 使いやすい英数字（紛らわしい文字を除く）
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.randomBytes(len);
  let out = "";
  for (let i = 0; i < len; i++) {
    out += alphabet[bytes[i] % alphabet.length];
  }
  return out;
}

export async function createPairingCode(args: {
  caregiverDeviceToken: string; // Authorization: Device <token>
  label?: string;
}) {
  // caregiver device が無いなら作る（初回）
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 15 * 60 * 1000);

  const result = await prisma.$transaction(async (tx) => {
    let caregiver = await tx.caregiverDevice.findUnique({
      where: { deviceToken: args.caregiverDeviceToken },
      select: { id: true, familyGroupId: true },
    });

    if (!caregiver) {
      // familyGroup も新規作成
      const fg = await tx.familyGroup.create({ data: {} });
      caregiver = await tx.caregiverDevice.create({
        data: {
          deviceToken: args.caregiverDeviceToken,
          familyGroupId: fg.id,
          label: args.label ?? null,
        },
        select: { id: true, familyGroupId: true },
      });
    }

    // code の衝突を避けるためリトライ
    for (let attempt = 0; attempt < 5; attempt++) {
      const code = generateCode(8);
      try {
        await tx.pairingCode.create({
          data: {
            code,
            familyGroupId: caregiver.familyGroupId,
            expiresAt,
          },
        });
        return { code, expiresAt };
      } catch (e: any) {
        // code重複の可能性 → リトライ
        continue;
      }
    }

    throw new Error("Failed to generate pairing code");
  });

  return result;
}
