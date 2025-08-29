  import { getJobPostings } from "./actions";
import ApplyButton from "./_component/ApplyButton";

export default async function JobPage() {
  const jobs = await getJobPostings();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-[#233353]">
        Job Opportunities
      </h1>
      <p className="text-center text-gray-600">
        Discover exciting career opportunities in our thriving community. 
        Join us in building a sustainable future.
      </p>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No job postings available.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
            >
              {/* Job Title */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h2>
              </div>  

              {/* Job Address + Salary + Date */}
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                <span>📍 {job.address}</span>
                <span>💰 ₱{job.salary.toLocaleString()}/month</span>
                <span>
                  📅 {new Date(job.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Job Description */}
              <p className="mt-3 text-gray-700">{job.description}</p>
              <ApplyButton jobId={job.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
