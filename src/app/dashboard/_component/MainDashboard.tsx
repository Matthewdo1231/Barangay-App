"use server";

import { saveUser } from "@/app/actions/aftersignUp";
import { auth, currentUser } from "@clerk/nextjs/server";

import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesGrid from "./FeaturesGrid";
import StatsSection from "./StatsSection";

export default async function MainDashboard() {
  const { userId } = await auth();
  const user = await currentUser();

  if (userId && user) {
    
    const [firstName = "", lastName = ""] = (user.firstName || "").split(" ");

    await saveUser({
      id: user.id,
      email: user.primaryEmailAddress?.emailAddress || "",
      firstName,
      lastName,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header is a client component that handles auth UI */}
      <Header />

      {/* Main content sections */}
      <main className="flex-1">
        <HeroSection />
        <FeaturesGrid />
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
}
