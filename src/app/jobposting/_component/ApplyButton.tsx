"use client";

import { useState } from "react";
import { applyToJob } from "../actions";

export default function ApplyButton({ jobId }: { jobId: number }) {
  const [open, setOpen] = useState(false);

  async function handleSubmit(formData: FormData) {
    formData.append("jobId", String(jobId));
    await applyToJob(formData);
    setOpen(false);
    alert("Application submitted!");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 px-4 py-2 bg-[#233353] text-white rounded-xl hover:bg-[#233c53] hover:cursor-pointer"
      >
        Apply
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Apply for this Job</h2>

            <form action={handleSubmit} className="space-y-4">
              <input type="hidden" name="jobId" value={jobId} />

              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="address"
                placeholder="Address"
                required
                className="w-full border p-2 rounded"
              />

              <input
                type="file"
                name="resumeFile"
                accept=".pdf,.doc,.docx"
                required
                className="w-full border p-2 rounded"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#233353] text-white rounded"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
