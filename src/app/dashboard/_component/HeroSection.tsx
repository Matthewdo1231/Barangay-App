"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-green-900/60 text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-start">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to{" "}
          <span className="text-green-300">Government Web</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mb-6 text-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Your digital gateway to community services, local news, job
          opportunities, and civic engagement. Building a stronger, more
          connected neighborhood together.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Get Started →
          </Button>
          <Button variant="outline" className="text-green-700 border-green-600">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
