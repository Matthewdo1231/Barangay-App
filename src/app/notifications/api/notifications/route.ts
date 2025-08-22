import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { RequestType, RequestStatus } from "@prisma/client";

/**
 * GET /api/notifications
 * - /api/notifications → all requests
 * - /api/notifications?type=Permit → filter by type
 * - /api/notifications?stats=true → return stats
 */
export async function GET(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  // If stats are requested
  if (searchParams.get("stats") === "true") {
    const [total, pending, processing, completed, rejected] = await Promise.all([
      prisma.request.count({ where: { userId } }),
      prisma.request.count({ where: { userId, status: "PENDING" } }),
      prisma.request.count({ where: { userId, status: "IN_PROGRESS" } }),
      prisma.request.count({ where: { userId, status: "COMPLETED" } }),
      prisma.request.count({ where: { userId, status: "REJECTED" } }),
    ]);

    return NextResponse.json({
      total,
      pending,
      processing,
      completed,
      rejected,
    });
  }

  // Otherwise → fetch requests (optionally filtered by type)
  const typeOfRequest = searchParams.get("type") || undefined;
  const validTypes = Object.values(RequestType);
  const isValidType =
    typeOfRequest && validTypes.includes(typeOfRequest as RequestType);

  const requests = await prisma.request.findMany({
    where: {
      userId,
      ...(isValidType ? { requestType: typeOfRequest as RequestType } : {}),
    },
    orderBy: { createdAt: "desc" },
  });

  // Map DB shape → UI Notification shape
const notifications = await prisma.request.findMany({
  where: { userId },
  orderBy: { createdAt: "desc" },
});

  return NextResponse.json(notifications);
}

/**
 * Helper: Map request status → UI priority
 */
function mapPriority(status: RequestStatus) {
  switch (status) {
    case "PENDING":
      return "high";
    case "IN_PROGRESS":
      return "medium";
    case "APPROVED":
    case "COMPLETED":
      return "low";
    case "REJECTED":
      return "medium";
    default:
      return "low";
  }
}
