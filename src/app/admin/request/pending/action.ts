"use server";

import { PrismaClient } from "@prisma/client";
import { RequestStatus } from "@prisma/client";

export type Props = {
  initialData: Awaited<ReturnType<typeof getPendingRequests>>;
};


export async function getPendingRequests() {
  const prisma = new PrismaClient();
  try {
    return await prisma.request.findMany({
      where: {
        status: RequestStatus.PENDING,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error fetching pending requests:", error);
    throw new Error("Failed to fetch pending requests");
  }
}
