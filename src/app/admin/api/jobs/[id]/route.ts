"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/requireAdmin";

 const prisma = new PrismaClient(); 

export async function createJobPosting(formData: FormData) {

  const adminId = await requireAdmin();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const address = formData.get("address") as string;
  const salary = Number(formData.get("salary"));

  if (!title || !description || !address || isNaN(salary)) {
    throw new Error("Invalid form submission");
  }

  await prisma.jobPosting.create({
    data: {
      title,
      description,
      address,
      salary,
    },
  });

  redirect("?success=true");
}

export async function updateJobPosting(formData: FormData) {

   const adminId = await requireAdmin();
   
  const id = Number(formData.get("id"));
  const title = (formData.get("title") as string)?.trim();
  const address = (formData.get("address") as string)?.trim();
  const salary = Number(formData.get("salary")); 
  const description = (formData.get("description") as string)?.trim();


  if (!id || isNaN(id)) throw new Error("Invalid job ID");
  if (!title || title.length < 3 || title.length > 100) {
    throw new Error("Title must be between 3 and 100 chars");
  }
  if (!address || address.length < 5 || address.length > 200) {
    throw new Error("Address must be between 5 and 200 chars");
  }
  if (isNaN(salary) || salary < 0) {
    throw new Error("Salary must be a valid non-negative number");
  }
  if (!description || description.length < 10) {
    throw new Error("Description too short");
  }

  await prisma.jobPosting.update({
    where: { id },
    data: { title, address, salary, description }, 
  });

  revalidatePath("/admin/jobposting");
 redirect("/admin/jobposting?success=true");
}