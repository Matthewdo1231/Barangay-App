"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bell, FileText, Briefcase, Users } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesGrid from "./FeaturesGrid";
import StatsSection from "./StatsSection";

export default function MainDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <HeroSection/>
      <FeaturesGrid/>
      <StatsSection/>
      <Footer/>
    </div>
   

  );
}
