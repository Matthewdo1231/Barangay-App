"use client";

export default function CommonRequestFields() {
  return (
    <>
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
    </>
  );
}
