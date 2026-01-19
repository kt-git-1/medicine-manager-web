import { z } from "zod";

export const medicationCreateSchema = z.object({
  name: z.string().min(1).max(80),
  instructions: z.string().max(300).optional(),
  remainingCount: z.number().int().min(0).max(9999).optional(),
});

export const medicationUpdateSchema = z.object({
  name: z.string().min(1).max(80).optional(),
  instructions: z.string().max(300).optional().nullable(),
  remainingCount: z.number().int().min(0).max(9999).optional().nullable(),
  isActive: z.boolean().optional(),
});

export const scheduleCreateSchema = z.object({
  medicationId: z.string().min(1),
  timeOfDay: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .refine((v) => {
      const [h, m] = v.split(":").map(Number);
      return h >= 0 && h <= 23 && m >= 0 && m <= 59;
    }, "Invalid timeOfDay"),
  daysOfWeekMask: z.number().int().min(0).max(127),
  dosesPerTime: z.number().int().min(1).max(10).optional(),
});

export const scheduleUpdateSchema = z.object({
  timeOfDay: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .refine((v) => {
      const [h, m] = v.split(":").map(Number);
      return h >= 0 && h <= 23 && m >= 0 && m <= 59;
    }, "Invalid timeOfDay")
    .optional(),
  daysOfWeekMask: z.number().int().min(0).max(127).optional(),
  dosesPerTime: z.number().int().min(1).max(10).optional(),
});
