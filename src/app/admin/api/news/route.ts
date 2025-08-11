"use server";

import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

const prisma = new PrismaClient();

export async function createNews(formData: FormData) {
  const caption = formData.get("caption") as string;
  const imageFile = formData.get("image") as File; 

  if (!caption || !imageFile) {
    throw new Error("Caption and image are required");
  }

  // this Convert file to a buffer for Cloudinary
  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // tthis will Upload to Cloudinary
  const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
  cloudinary.uploader
    .upload_stream(
      { folder: "barangay-news" },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) reject(error);
        else if (result) resolve(result);
        else reject(new Error("Unknown upload error"));
      }
    )
    .end(buffer);
});


  //  Saves into in database
  await prisma.news.create({
    data: { caption, imageUrl: uploadResult.secure_url },
  });

  revalidatePath("/news");
  redirect("/news/create?success=1");
}
