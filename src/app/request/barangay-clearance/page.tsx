// app/(routes)/barangay-clearance/page.tsx
import SuccessMessage from "@/app/admin/news/create/_component/SuccessMessage";
import { createBarangayClearanceRequest } from "./action";

export default function BarangayClearancePage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">
        Barangay Clearance Request
      </h1>

      <form action={createBarangayClearanceRequest} className="space-y-4">
     
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full border p-2 rounded"
          />
        </div>

      
        <div>
          <label className="block font-medium">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Gender</label>
          <select name="gender" required className="w-full border p-2 rounded">
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>

       
        <div>
          <label className="block font-medium">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            required
            className="w-full border p-2 rounded"
          />
        </div>

      
        <div>
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Current Address</label>
          <textarea
            name="currentAddress"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Valid ID Type</label>
          <input
            type="text"
            name="validIdType"
            required
            className="w-full border p-2 rounded"
          />
        </div>

      
        <div>
          <label className="block font-medium">Upload Valid ID</label>
          <input
            type="file"
            name="validIdUrl"
            accept="image/*"
            required
            className="w-full"
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


        <div>
          <label className="block font-medium">Place of Use</label>
          <input
            type="text"
            name="placeOfUse"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <SuccessMessage/>

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
