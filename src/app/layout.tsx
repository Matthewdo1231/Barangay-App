import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barangay Website",
  description: "Official Barangay Information and Services Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <ClerkProvider> 
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
    </ClerkProvider> 
  );
}
