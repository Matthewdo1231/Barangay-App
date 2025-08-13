"use server";
import { PrismaClient } from "@/generated/prisma";
import { requireAdmin } from "@/lib/requireAdmin";

const prisma = new PrismaClient();

export async function DELETE(

  req: Request,
  { params }: { params: { id: string } }
) {

    const adminId = await requireAdmin();
  try {
    const { id } = params;

    await prisma.news.delete({
      where: { id },
    });

    return new Response("News deleted successfully");
  } catch (error) {
    console.error(error);
    return new Response("Failed to delete news post", { status: 500 });
  }
}
