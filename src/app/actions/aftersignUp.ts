"use server";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient()

export async function saveUser({
  id,
  email,
  firstName,
  lastName
}: {
  id: string;
  email: string;
  firstName: string;
  lastName:string
}) {
  await prisma.user.upsert({
    where: { id },
    update: {},
    create: { id, email, firstName, lastName },
  });
}


