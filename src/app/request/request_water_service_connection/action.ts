"use server";

import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createWaterServiceConnectionRequest(formData: FormData) {
  const prisma = new PrismaClient();
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");

  // Upload Valid ID
  const validIdFile = formData.get("validIdUrl") as File | null;
  if (!validIdFile) throw new Error("Valid ID is required");

  const arrayBuffer = await validIdFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: "barangay-ids" },
        (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
          if (error) reject(error);
          else if (result) resolve(result);
          else reject(new Error("Unknown upload error"));
        }
      )
      .end(buffer);
  });

  // Save request in DB
  await prisma.request.create({
    data: {
      userId,
      fullName: String(formData.get("fullName") || ""),
      dateOfBirth: new Date(String(formData.get("dateOfBirth") || "")),
      gender: String(formData.get("gender") || ""),
      contactNumber: String(formData.get("contactNumber") || ""),
      emailAddress: String(formData.get("emailAddress") || ""),
      currentAddress: String(formData.get("currentAddress") || ""),
      validIdType: String(formData.get("validIdType") || ""),
      validIdUrl: uploadResult.secure_url,
      requestType: "REQUEST_WATER_SERVICE_CONNECTION",
      details: {
        houseLotNumber: String(formData.get("houseLotNumber") || ""),
        streetSitio: String(formData.get("streetSitio") || ""),
        connectionDate: String(formData.get("connectionDate") || ""),
        purpose: String(formData.get("purpose") || ""),
      },
    },
  });

  revalidatePath("/request-water-service-connection");
  redirect("/request/request-water-service-connection?success=1");
}
