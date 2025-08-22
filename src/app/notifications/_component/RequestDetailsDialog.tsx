"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type RequestDetailsProps = {
  request: {
    fullName: string;
    contactNumber: string;
    emailAddress: string;
    currentAddress: string;
    createdAt: Date;
    status: string;
    requestType: string;
    message?: string | null;
  };
};

export default function RequestDetailsDialog({ request }: RequestDetailsProps) {
  // Status → badge helper
  const statusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>;
      case "IN_PROGRESS":
        return <Badge className="bg-blue-100 text-blue-700">Processing</Badge>;
      case "COMPLETED":
        return <Badge className="bg-green-100 text-green-700">Completed</Badge>;
      case "REJECTED":
        return <Badge className="bg-red-100 text-red-700">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          See More
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Request Details</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 mt-4">
          {/* Left side - Personal Info */}
          <div>
            <h3 className="font-semibold mb-2">Personal Information</h3>
            <p><strong>Full Name:</strong> {request.fullName}</p>
            <p><strong>Phone Number:</strong> {request.contactNumber}</p>
            <p><strong>Email Address:</strong> {request.emailAddress}</p>
            <p><strong>Address:</strong> {request.currentAddress}</p>
          </div>

          {/* Right side - Request Info */}
          <div>
            <h3 className="font-semibold mb-2">Request Details</h3>
            <p><strong>Date Submitted:</strong> {new Date(request.createdAt).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {statusBadge(request.status)}</p>
            <p><strong>Type:</strong> {request.requestType}</p>
          </div>
        </div>

        {/* Additional Info */}
        {request.message && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <h3 className="font-semibold mb-1">Additional Information</h3>
            <p>{request.message}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
