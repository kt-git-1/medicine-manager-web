import { z } from "zod";

export const createPairingInputSchema = z.object({
  label: z.string().min(1).max(50).optional(),
});

export const createPairingOutputSchema = z.object({
  code: z.string(),
  expiresAt: z.string(), // ISO
});

export const claimPairingInputSchema = z.object({
  code: z.string().min(4).max(16),
  tz: z.string().min(1).max(64).optional(), // iOS側が送れるなら
  label: z.string().min(1).max(50).optional(),
});

export const claimPairingOutputSchema = z.object({
  familyGroupId: z.string(),
});
