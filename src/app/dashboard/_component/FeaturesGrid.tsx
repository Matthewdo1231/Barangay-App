"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, FileText, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Submit Request */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-md hover:shadow-lg hover:bg-green-700 hover:cursor-pointer transition-colors duration-500 ease-in-out group">
            <CardContent className="p-6 flex flex-col h-full">
              <FileText className="h-8 w-8 text-green-700 mb-4 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Submit Request
              </h3>
              <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Document requests, permits, and certificates
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Find Jobs */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-md hover:shadow-lg hover:bg-green-700 hover:cursor-pointer  transition-colors duration-500 ease-in-out group">
            <CardContent className="p-6 flex flex-col h-full">
              <Briefcase className="h-8 w-8 text-green-700 mb-4 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Find Jobs
              </h3>
              <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Browse local employment opportunities
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Latest News */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-md hover:shadow-lg hover:bg-green-700 hover:cursor-pointer transition-colors duration-500 ease-in-out group">
            <CardContent className="p-6 flex flex-col h-full">
              <Bell className="h-8 w-8 text-green-700 mb-4 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Latest News
              </h3>
              <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Community updates and announcements
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Community Programs */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-md hover:shadow-lg hover:bg-green-700 hover:cursor-pointer transition-colors duration-500 ease-in-out group">
            <CardContent className="p-6 flex flex-col h-full">
              <Users className="h-8 w-8 text-green-700 mb-4 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Community Programs
              </h3>
              <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Join our neighborhood initiatives
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
