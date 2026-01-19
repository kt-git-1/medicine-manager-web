-- CreateEnum
CREATE TYPE "DoseStatus" AS ENUM ('planned', 'taken', 'missed', 'skipped');

-- CreateEnum
CREATE TYPE "DoseSource" AS ENUM ('patient', 'caregiver');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('taken', 'missed', 'low_stock');

-- CreateTable
CREATE TABLE "FamilyGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FamilyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaregiverDevice" (
    "id" TEXT NOT NULL,
    "familyGroupId" TEXT NOT NULL,
    "deviceToken" TEXT NOT NULL,
    "label" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CaregiverDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientDevice" (
    "id" TEXT NOT NULL,
    "familyGroupId" TEXT,
    "deviceToken" TEXT NOT NULL,
    "tz" TEXT NOT NULL DEFAULT 'Asia/Tokyo',
    "label" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PatientDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PairingCode" (
    "code" TEXT NOT NULL,
    "familyGroupId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PairingCode_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Medication" (
    "id" TEXT NOT NULL,
    "familyGroupId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "instructions" TEXT,
    "remainingCount" INTEGER,
    "remainingUpdatedAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoseSchedule" (
    "id" TEXT NOT NULL,
    "medicationId" TEXT NOT NULL,
    "timeOfDay" TEXT NOT NULL,
    "daysOfWeekMask" INTEGER NOT NULL,
    "dosesPerTime" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoseSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoseEvent" (
    "id" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "plannedAt" TIMESTAMP(3) NOT NULL,
    "takenAt" TIMESTAMP(3),
    "status" "DoseStatus" NOT NULL DEFAULT 'planned',
    "source" "DoseSource",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoseEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationEvent" (
    "id" TEXT NOT NULL,
    "familyGroupId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "payloadJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotificationEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CaregiverDevice_deviceToken_key" ON "CaregiverDevice"("deviceToken");

-- CreateIndex
CREATE INDEX "CaregiverDevice_familyGroupId_idx" ON "CaregiverDevice"("familyGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "PatientDevice_deviceToken_key" ON "PatientDevice"("deviceToken");

-- CreateIndex
CREATE INDEX "PatientDevice_familyGroupId_idx" ON "PatientDevice"("familyGroupId");

-- CreateIndex
CREATE INDEX "PairingCode_familyGroupId_idx" ON "PairingCode"("familyGroupId");

-- CreateIndex
CREATE INDEX "PairingCode_expiresAt_idx" ON "PairingCode"("expiresAt");

-- CreateIndex
CREATE INDEX "PairingCode_usedAt_idx" ON "PairingCode"("usedAt");

-- CreateIndex
CREATE INDEX "Medication_familyGroupId_idx" ON "Medication"("familyGroupId");

-- CreateIndex
CREATE INDEX "Medication_isActive_idx" ON "Medication"("isActive");

-- CreateIndex
CREATE INDEX "DoseSchedule_medicationId_idx" ON "DoseSchedule"("medicationId");

-- CreateIndex
CREATE INDEX "DoseSchedule_daysOfWeekMask_idx" ON "DoseSchedule"("daysOfWeekMask");

-- CreateIndex
CREATE INDEX "DoseEvent_plannedAt_idx" ON "DoseEvent"("plannedAt");

-- CreateIndex
CREATE INDEX "DoseEvent_status_idx" ON "DoseEvent"("status");

-- CreateIndex
CREATE INDEX "DoseEvent_scheduleId_idx" ON "DoseEvent"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "DoseEvent_scheduleId_plannedAt_key" ON "DoseEvent"("scheduleId", "plannedAt");

-- CreateIndex
CREATE INDEX "NotificationEvent_familyGroupId_occurredAt_idx" ON "NotificationEvent"("familyGroupId", "occurredAt");

-- CreateIndex
CREATE INDEX "NotificationEvent_type_idx" ON "NotificationEvent"("type");

-- AddForeignKey
ALTER TABLE "CaregiverDevice" ADD CONSTRAINT "CaregiverDevice_familyGroupId_fkey" FOREIGN KEY ("familyGroupId") REFERENCES "FamilyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientDevice" ADD CONSTRAINT "PatientDevice_familyGroupId_fkey" FOREIGN KEY ("familyGroupId") REFERENCES "FamilyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PairingCode" ADD CONSTRAINT "PairingCode_familyGroupId_fkey" FOREIGN KEY ("familyGroupId") REFERENCES "FamilyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_familyGroupId_fkey" FOREIGN KEY ("familyGroupId") REFERENCES "FamilyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoseSchedule" ADD CONSTRAINT "DoseSchedule_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoseEvent" ADD CONSTRAINT "DoseEvent_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "DoseSchedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationEvent" ADD CONSTRAINT "NotificationEvent_familyGroupId_fkey" FOREIGN KEY ("familyGroupId") REFERENCES "FamilyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
