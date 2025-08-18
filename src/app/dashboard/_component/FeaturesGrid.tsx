"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, FileText, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}     // start slightly below + transparent
        animate={{ opacity: 1, y: 0 }}      // move upward + fade in
        transition={{ duration: 0.6, ease: "easeOut" }} // smooth transition
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card className="shadow-md hover:shadow-lg transition">
          <CardContent className="p-6">
            <FileText className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Submit Request</h3>
            <p className="text-sm text-gray-600">
              Document requests, permits, and certificates
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition">
          <CardContent className="p-6">
            <Briefcase className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Find Jobs</h3>
            <p className="text-sm text-gray-600">
              Browse local employment opportunities
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition">
          <CardContent className="p-6">
            <Bell className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Latest News</h3>
            <p className="text-sm text-gray-600">
              Community updates and announcements
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition">
          <CardContent className="p-6">
            <Users className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Community Programs</h3>
            <p className="text-sm text-gray-600">
              Join our neighborhood initiatives
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
