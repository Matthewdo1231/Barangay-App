import SuccessMessage from "@/app/admin/news/create/_component/SuccessMessage";
import { createRequestWaterBill } from "./action";
import CommonRequestFields from "../component/CommonRequestFields";

export default function RequestWaterBillPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">
        Request Water Bill
      </h1>

      <form action={createRequestWaterBill} className="space-y-4">
        
        <CommonRequestFields />

        {/* Water Bill specific fields */}
        <div>
          <label className="block font-medium">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Meter Number</label>
          <input
            type="text"
            name="meterNumber"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Billing Month</label>
          <input
            type="month"
            name="billingMonth"
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
