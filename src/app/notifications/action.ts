// app/actions/requestActions.ts
"use server";


import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";

export async function getUserRequests() {
  const prisma = new PrismaClient();
  const { userId } = await auth();
  if (!userId) return [];

  return await prisma.request.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}
