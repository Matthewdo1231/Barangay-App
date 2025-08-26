import SuccessMessage from "../../news/create/_component/SuccessMessage";  
import { createJobPosting } from "../../api/jobs/[id]/action";

export default function CreateJobPostingFormPage() {
  return (
    <>
      <form
        action={createJobPosting}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="border px-3 py-2 block w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Job Description"
          className="border px-3 py-2 block w-full"
          rows={4}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="job/company adress"
          className="border px-3 py-2 block w-full"
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          className="border px-3 py-2 block w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Job Posting
        </button>
      </form>

      <SuccessMessage />
    </>
  );
}
