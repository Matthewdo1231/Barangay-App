"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Building2, Droplet, Home, ScrollText, Users, Receipt } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Enum equivalent in TS
enum RequestType {
  BARANGAY_CLEARANCE = "BARANGAY_CLEARANCE",
  CERTIFICATE_RESIDENCY = "CERTIFICATE_RESIDENCY",
  BARANGAY_BUSINESS_CLEARANCE = "BARANGAY_BUSINESS_CLEARANCE",
  TRANSFER_RESIDENCY = "TRANSFER_RESIDENCY",
  BARANGAY_BLOTTER_ENTRY = "BARANGAY_BLOTTER_ENTRY",
  REQUEST_WATER_BILL = "REQUEST_WATER_BILL",
  REQUEST_WATER_SERVICE_CONNECTION = "REQUEST_WATER_SERVICE_CONNECTION",
}

const requestItems = [
  { type: RequestType.BARANGAY_CLEARANCE, label: "Barangay Clearance", icon: ScrollText },
  { type: RequestType.CERTIFICATE_RESIDENCY, label: "Certificate of Residency", icon: Home },
  { type: RequestType.BARANGAY_BUSINESS_CLEARANCE, label: "Business Clearance", icon: Building2 },
  { type: RequestType.TRANSFER_RESIDENCY, label: "Transfer of Residency", icon: Users },
  { type: RequestType.BARANGAY_BLOTTER_ENTRY, label: "Blotter Entry", icon: FileText },
  { type: RequestType.REQUEST_WATER_BILL, label: "Water Bill Request", icon: Receipt }, // 📑 Changed
  { type: RequestType.REQUEST_WATER_SERVICE_CONNECTION, label: "Water Service Connection", icon: Droplet }, // 💧 Kept
];

export default function RequestPopup() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger (your card button) */}
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="group shadow-sm hover:shadow-md hover:bg-[#233353] hover:cursor-pointer transition-colors duration-500 ease-in-out">
            <CardContent className="p-4 flex flex-col">
              <FileText className="h-6 w-6 text-[#233353] mb-2 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-medium text-base text-gray-800 transition-colors duration-500 group-hover:text-white">
                Submit Request
              </h3>
              <p className="text-xs text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Document requests, permits, and certificates
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>

      {/* Popup Content */}
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle>Select Request Type</DialogTitle>
      </DialogHeader>

      <div className="grid gap-3 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {requestItems.map(({ type, label, icon: Icon }) => (
          <Link key={type} href={`/request/${type.toLowerCase()}`} className="h-full">
            <Card className="h-full flex flex-col justify-center p-3 gap-3 hover:bg-[#233353] hover:text-white transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-[#233353] group-hover:text-white" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </DialogContent>

  </Dialog>
  );
}
