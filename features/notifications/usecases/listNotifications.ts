import { prisma } from "@/lib/prisma";

export async function listNotifications(args: {
  familyGroupId: string;
  days?: number; // default 30
  limit?: number; // default 50
}) {
  const days = args.days ?? 30;
  const limit = args.limit ?? 50;
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const items = await prisma.notificationEvent.findMany({
    where: {
      familyGroupId: args.familyGroupId,
      occurredAt: { gte: since },
    },
    orderBy: { occurredAt: "desc" },
    take: Math.min(limit, 200),
  });

  return { items };
}
