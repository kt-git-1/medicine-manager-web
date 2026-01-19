import { prisma } from "@/lib/prisma";

export async function createSchedule(args: {
  familyGroupId: string;
  medicationId: string;
  timeOfDay: string;
  daysOfWeekMask: number;
  dosesPerTime?: number;
}) {
  // medication所属確認
  const med = await prisma.medication.findUnique({
    where: { id: args.medicationId },
    select: { id: true, familyGroupId: true },
  });
  if (!med || med.familyGroupId !== args.familyGroupId) throw new Error("Not found");

  const s = await prisma.doseSchedule.create({
    data: {
      medicationId: args.medicationId,
      timeOfDay: args.timeOfDay,
      daysOfWeekMask: args.daysOfWeekMask,
      dosesPerTime: args.dosesPerTime ?? 1,
    },
  });
  return { schedule: s };
}
