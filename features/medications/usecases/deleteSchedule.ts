import { prisma } from "@/lib/prisma";

export async function deleteSchedule(args: {
  familyGroupId: string;
  scheduleId: string;
}) {
  const s = await prisma.doseSchedule.findUnique({
    where: { id: args.scheduleId },
    select: { id: true, medication: { select: { familyGroupId: true } } },
  });
  if (!s || s.medication.familyGroupId !== args.familyGroupId) throw new Error("Not found");

  await prisma.doseSchedule.delete({ where: { id: args.scheduleId } });
  return { ok: true };
}
