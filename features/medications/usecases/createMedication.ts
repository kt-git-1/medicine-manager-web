import { prisma } from "@/lib/prisma";

export async function createMedication(args: {
  familyGroupId: string;
  name: string;
  instructions?: string;
  remainingCount?: number;
}) {
  const now = new Date();
  const med = await prisma.medication.create({
    data: {
      familyGroupId: args.familyGroupId,
      name: args.name,
      instructions: args.instructions ?? null,
      remainingCount: typeof args.remainingCount === "number" ? args.remainingCount : null,
      remainingUpdatedAt: typeof args.remainingCount === "number" ? now : null,
      isActive: true,
    },
    include: { schedules: true },
  });
  return { medication: med };
}
