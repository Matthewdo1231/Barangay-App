/* eslint-disable @typescript-eslint/no-explicit-any */

import SuccessMessage from "@/app/admin/news/create/_component/SuccessMessage";
import { createBarangayBusinessClearanceRequest } from "./action";
import CommonRequestFields from "../component/CommonRequestFields";



export default function BarangayBusinessClearancePage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">
        Barangay Business Clearance Request
      </h1>

      <form action={createBarangayBusinessClearanceRequest} className="space-y-4">
        
        <CommonRequestFields />

        {/* Business-specific fields */}
        <div>
          <label className="block font-medium">Business Name</label>
          <input
            type="text"
            name="businessName"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Business Address</label>
          <textarea
            name="businessAddress"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Nature of Business</label>
          <input
            type="text"
            name="natureOfBusiness"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <SuccessMessage />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
