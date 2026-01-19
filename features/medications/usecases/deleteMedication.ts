import { prisma } from "@/lib/prisma";

export async function deleteMedication(args: { familyGroupId: string; medicationId: string }) {
  const existing = await prisma.medication.findUnique({
    where: { id: args.medicationId },
    select: { id: true, familyGroupId: true },
  });
  if (!existing || existing.familyGroupId !== args.familyGroupId) {
    throw new Error("Not found");
  }

  // MVP: 論理削除（履歴が残る）
  const med = await prisma.medication.update({
    where: { id: args.medicationId },
    data: { isActive: false },
  });
  return { medication: med };
}
