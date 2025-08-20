"use server";

import { saveUser } from "@/app/actions/aftersignUp";
import { auth, currentUser } from "@clerk/nextjs/server";

import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesGrid from "./FeaturesGrid";
import StatsSection from "./StatsSection";
import Carousel from "@/components/ui/Carousel";


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
    <div className="relative min-h-screen flex flex-col text-white">
      {/* Background applied to parent */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 -z-10"
        style={{
          backgroundImage: "url('/forest-5524525_1280.jpg')",
        }}
      />

      {/* Overlay tint (optional, makes text readable) */}
      <div className="absolute inset-0 bg-green-900/50 -z-10" />

      {/* Header */}
      <Header />

      {/* Main sections */}
      <main className="flex-1">
        <HeroSection />
        <FeaturesGrid />
        <Carousel/>
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
}
