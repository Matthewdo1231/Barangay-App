import SuccessMessage from "@/app/admin/news/create/_component/SuccessMessage";
import CommonRequestFields from "../component/CommonRequestFields";
import { createCertificateResidencyRequest } from "./action";

export default function CertificateResidencyPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">
        Certificate of Residency Request
      </h1>

      <form action={createCertificateResidencyRequest} className="space-y-4">
        {/* ✅ Shared fields */}
        <CommonRequestFields />

        {/* ✅ Unique fields for Certificate of Residency */}
        <div>
          <label className="block font-medium">Years of Residency</label>
          <input
            type="number"
            name="yearsOfResidency"
            required
            min="0"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Purpose</label>
          <input
            type="text"
            name="purpose"
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
