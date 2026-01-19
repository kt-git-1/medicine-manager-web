import { PrismaClient } from "./generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const caregiverToken = "dev-caregiver-token";
  const patientToken = "dev-patient-token";

  // family + caregiver
  const fg = await prisma.familyGroup.create({ data: {} });
  await prisma.caregiverDevice.create({
    data: { familyGroupId: fg.id, deviceToken: caregiverToken, label: "Dev Caregiver" },
  });

  // patient
  await prisma.patientDevice.create({
    data: { familyGroupId: fg.id, deviceToken: patientToken, tz: "Asia/Tokyo", label: "Dev Patient" },
  });

  // medication + schedule
  const med = await prisma.medication.create({
    data: {
      familyGroupId: fg.id,
      name: "アムロジピン",
      instructions: "朝1錠",
      remainingCount: 30,
      remainingUpdatedAt: new Date(),
    },
  });

  await prisma.doseSchedule.create({
    data: {
      medicationId: med.id,
      timeOfDay: "08:00",
      daysOfWeekMask: 127, // 毎日
      dosesPerTime: 1,
    },
  });

  console.log("Seeded:", { fgId: fg.id, caregiverToken, patientToken });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
