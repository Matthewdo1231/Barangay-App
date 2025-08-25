import SuccessMessage from "@/app/admin/news/create/_component/SuccessMessage";
import { createWaterServiceConnectionRequest } from "./action";
import CommonRequestFields from "../component/CommonRequestFields";

export default function WaterServiceConnectionPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">
        Request for Water Service Connection
      </h1>

      <form action={createWaterServiceConnectionRequest} className="space-y-4">
        
        <CommonRequestFields />

        {/* Water connection-specific fields */}
        <div>
          <label className="block font-medium">House Number / Lot Number</label>
          <input
            type="text"
            name="houseLotNumber"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Street / Sitio</label>
          <input
            type="text"
            name="streetSitio"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Preferred Connection Date</label>
          <input
            type="date"
            name="connectionDate"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Purpose (Residential/Commercial)</label>
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
