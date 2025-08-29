"use server";

import { auth } from "@clerk/nextjs/server";
import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";
import { revalidatePath } from "next/cache";


import { prisma } from "@/lib/prisma";

export async function getJobPostings() {
  try {
    const jobs = await prisma.jobPosting.findMany({
      orderBy: { createdAt: "desc" },
    });
    return jobs;
  } catch (error) {
    console.error("Error fetching job postings:", error);
    return [];
  }
}

export async function applyToJob(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");

  const resumeFile = formData.get("resumeFile") as File | null;
  if (!resumeFile) throw new Error("Resume is required");

  const fileName = resumeFile.name; 
 
  const arrayBuffer = await resumeFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  

  const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "job-resumes",
          use_filename: true,
          unique_filename:false
         },
        
        (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
          if (error) reject(error);
          else if (result) resolve(result);
          else reject(new Error("Unknown upload error"));
        }
      )
      .end(buffer);
  });


  // Save applicant into DB via Prisma
  await prisma.applicant.create({
    data: {
      jobId: Number(formData.get("jobId")),
      userId,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phoneNumber: String(formData.get("phoneNumber") || ""),
      address: String(formData.get("address") || ""),
      resumeUrl: uploadResult.secure_url,
    },
  });

  revalidatePath("/jobs");
}
