import { prisma } from "@/lib/prisma";

export async function listMedications(args: { familyGroupId: string }) {
  const meds = await prisma.medication.findMany({
    where: { familyGroupId: args.familyGroupId },
    orderBy: { createdAt: "desc" },
    include: {
      schedules: { orderBy: { timeOfDay: "asc" } },
    },
  });
  return { medications: meds };
}
