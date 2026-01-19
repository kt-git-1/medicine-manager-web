import { prisma } from "@/lib/prisma";

export async function updateMedication(args: {
  familyGroupId: string;
  medicationId: string;
  name?: string;
  instructions?: string | null;
  remainingCount?: number | null;
  isActive?: boolean;
}) {
  // 所属確認
  const existing = await prisma.medication.findUnique({
    where: { id: args.medicationId },
    select: { id: true, familyGroupId: true },
  });
  if (!existing || existing.familyGroupId !== args.familyGroupId) {
    throw new Error("Not found");
  }

  const now = new Date();
  const med = await prisma.medication.update({
    where: { id: args.medicationId },
    data: {
      name: args.name ?? undefined,
      instructions: args.instructions ?? undefined,
      isActive: typeof args.isActive === "boolean" ? args.isActive : undefined,
      remainingCount: args.remainingCount ?? undefined,
      remainingUpdatedAt:
        typeof args.remainingCount === "number" ? now : undefined,
    },
    include: { schedules: { orderBy: { timeOfDay: "asc" } } },
  });
  return { medication: med };
}
