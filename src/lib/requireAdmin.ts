import { auth } from "@clerk/nextjs/server";

export async function requireAdmin() {
  const { userId } = await auth();

  if (!userId || (await auth()).sessionClaims?.metadata?.role !== 'admin') {
    throw new Error("Unauthorized");
  }

  return userId;
}
