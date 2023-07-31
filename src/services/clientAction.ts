"use server";

import { getServerSession } from "@/lib/auth/authorization";
import { prisma } from "./prismaClient";

export async function banUser({
  userId,
  reason,
}: {
  userId: string;
  reason?: string;
}): Promise<void> {
  const session = await getServerSession();
  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      bannedReason: reason || undefined,
      isBaned: true,
      client: {
        update: {
          category: "BLACKLISTED",
        },
      },
    },
  });
}
