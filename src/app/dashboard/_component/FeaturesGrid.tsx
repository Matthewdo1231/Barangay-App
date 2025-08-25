"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, FileText, Briefcase, Users, Link } from "lucide-react";
import { motion } from "framer-motion";
import RequestPopup from "./RequestPopup";

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-white">

      <div className="flex items-center justify-center mx-4 mt-8">
        <span className="h-px w-10 bg-yellow-500"></span>
        <span className="mx-2 text-yellow-500 text-lg">★</span>
        <span className="h-px w-10 bg-yellow-500"></span>
      </div>

      {/* Title */}
     <div className="flex justify-center">
      <h2 className="text-2xl md:text-3xl font-serif text-[#0a1b3c]">
         E-Services Offered
      </h2>
      </div> 

      {/* Bottom underline */}
      <div className="mt-2 w-40 h-[2px] bg-yellow-500 mx-auto"></div>


      <div className="max-w-5xl mx-auto px-4 py-10 w-full bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Submit Request */}
          <RequestPopup/>

          {/* Find Jobs */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="h-full"
          >
            <Card className="h-full shadow-sm hover:shadow-md hover:bg-[#233353] hover:cursor-pointer transition-colors duration-500 ease-in-out group">
              <CardContent className="p-3 flex flex-col h-full">
                <Briefcase className="h-5 w-5 text-[#233353] mb-2 transition-colors duration-500 group-hover:text-white" />
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
            <Card className="h-full shadow-sm hover:shadow-md hover:bg-[#233353] hover:cursor-pointer transition-colors duration-500 ease-in-out group">
              <CardContent className="p-3 flex flex-col h-full">
                <Bell className="h-5 w-5 text-[#233353] mb-2 transition-colors duration-500 group-hover:text-white" />
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
            <Card className="h-full shadow-sm hover:shadow-md hover:bg-[#233353] hover:cursor-pointer transition-colors duration-500 ease-in-out group">
              <CardContent className="p-3 flex flex-col h-full">
                <Users className="h-5 w-5 text-[#233353] mb-2 transition-colors duration-500 group-hover:text-white" />
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
      </div>
    </section>
  );
}
