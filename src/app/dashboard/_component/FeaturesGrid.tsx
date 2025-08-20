"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, FileText, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Submit Request */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-sm hover:shadow-md hover:bg-green-700 hover:cursor-pointer transition-colors duration-500 ease-in-out group">
            <CardContent className="p-3 flex flex-col h-full">
              <FileText className="h-5 w-5 text-green-700 mb-2 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-medium text-base mb-1 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Submit Request
              </h3>
              <p className="text-xs text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Document requests, permits, and certificates
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Find Jobs */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-sm hover:shadow-md hover:bg-green-700 hover:cursor-pointer transition-colors duration-500 ease-in-out group">
            <CardContent className="p-3 flex flex-col h-full">
              <Briefcase className="h-5 w-5 text-green-700 mb-2 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-medium text-base mb-1 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Find Jobs
              </h3>
              <p className="text-xs text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Browse local employment opportunities
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Latest News */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-sm hover:shadow-md hover:bg-green-700 hover:cursor-pointer transition-colors duration-500 ease-in-out group">
            <CardContent className="p-3 flex flex-col h-full">
              <Bell className="h-5 w-5 text-green-700 mb-2 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-medium text-base mb-1 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Latest News
              </h3>
              <p className="text-xs text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Community updates and announcements
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Community Programs */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <Card className="h-full shadow-sm hover:shadow-md hover:bg-green-700 hover:cursor-pointer transition-colors duration-500 ease-in-out group">
            <CardContent className="p-3 flex flex-col h-full">
              <Users className="h-5 w-5 text-green-700 mb-2 transition-colors duration-500 group-hover:text-white" />
              <h3 className="font-medium text-base mb-1 text-gray-800 transition-colors duration-500 group-hover:text-white">
                Community Programs
              </h3>
              <p className="text-xs text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                Join our neighborhood initiatives
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
