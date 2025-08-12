import { PrismaClient } from "@/generated/prisma";
import JobPostingCard from "./_component/JobPostingCard";
import SuccessMessage from "../news/create/_component/SuccessMessage";

interface JobPostingType {
  id: number;
  title: string;
  address: string;
  description: string;
  salary:number
  createdAt: Date;
}

export type JobPostingCardProps = {
  job: JobPostingType;
};

export default async function AdminJobPostingsPage() {
  const prisma = new PrismaClient(); 
  const jobPostings = await prisma.jobPosting.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Job Postings</h1>
        <SuccessMessage />
      {jobPostings.map((job) => (
        <JobPostingCard key={job.id} job={job} />
      ))}
    </div>
  );
}
