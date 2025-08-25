import SuccessMessage from "@/app/admin/news/create/_component/SuccessMessage";
import { createBarangayBlotterEntryRequest } from "./action";
import CommonRequestFields from "../component/CommonRequestFields";

export default function BarangayBlotterEntryPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">
        Barangay Blotter Entry Request
      </h1>

      <form action={createBarangayBlotterEntryRequest} className="space-y-4">
        
        <CommonRequestFields />

        {/* Blotter-specific fields */}
        <div>
          <label className="block font-medium">Complainant Name</label>
          <input
            type="text"
            name="complainantName"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Respondent Name</label>
          <input
            type="text"
            name="respondentName"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Incident Date</label>
          <input
            type="date"
            name="incidentDate"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Incident Location</label>
          <input
            type="text"
            name="incidentLocation"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Incident Details</label>
          <textarea
            name="incidentDetails"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <SuccessMessage />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Blotter Entry
        </button>
      </form>
    </div>
  );
}
