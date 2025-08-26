"use client";

import { useState } from "react";
import { updateJobPosting } from "../../api/jobs/[id]/action";
import { JobPostingCardProps } from "../page";

export default function JobPostingCard({ job }: JobPostingCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const inputClass = `p-1 rounded w-full border ${
  isEditing ? "border-blue-500" : "border-transparent"
}`;
  return (
    <form
      action={updateJobPosting}
      className="border rounded p-4 bg-white text-black shadow-md space-y-2"
    >
      <input type="hidden" name="id" value={job.id} />

      <div>
        <label className="block font-semibold">Title</label>
        <input
          name="title"
          defaultValue={job.title}
          disabled={!isEditing}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-semibold">Address</label>
        <input
          name="address"
          defaultValue={job.address}
          disabled={!isEditing}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-semibold">Salary</label>
        <input
          name="salary"
          type="number"
          defaultValue={job.salary ?? ""}
          disabled={!isEditing}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-semibold">Description</label>
        <textarea
          name="description"
          defaultValue={job.description}
          disabled={!isEditing}
          className={inputClass}
        />
      </div>

      <div className="flex gap-2 mt-2">
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Modify
        </button>

        <button
          type="submit"
          disabled={!isEditing}
          className={`px-3 py-1 rounded ${
            isEditing
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Confirm Modify
        </button>
      </div>
    </form>
  );
}
