"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-16 flex flex-col items-start">
        {/* Title */}
        <motion.h2
          className="text-5xl md:text-5xl font-bold mb-2"
          style={{ fontFamily: '"EB Garamond", serif' }}
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to{" "}
          <span className="text-white text-5xl">Government Web</span>
        </motion.h2>

        {/* Artistic Resident Portal */}
        <motion.h3
          className="text-4xl md:text-5xl mb-4 font-normal tracking-tight"
          style={{ fontFamily: '"garamond-premier-pro", "EB Garamond", serif' }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          Resident Portal
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mb-6 text-base md:text-lg"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Your digital gateway to community services, local news, job
          opportunities, and civic engagement.
        </motion.p>

        {/* SIGNED OUT → Show Create Account + Login */}
        <SignedOut>
          <motion.div
            className="w-full max-w-sm border-2 border-white rounded-xl p-6 text-center bg-transparent"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h3
              className="text-xl font-semibold text-white cursor-pointer"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              <SignUpButton mode="modal">
                Create Your Gov Account
              </SignUpButton>
            </h3>
          </motion.div>

          <motion.p
            className="mt-3 text-sm text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Already have an account?{" "}
            <SignInButton mode="modal">
              <span className="cursor-pointer text-white underline hover:text-gray-300 font-medium">
                Log in here
              </span>
            </SignInButton>
          </motion.p>
        </SignedOut>

        {/* SIGNED IN → Show Logout */}
        <SignedIn>
          <motion.div
            className="w-full max-w-sm border-2 border-white rounded-xl p-6 text-center bg-transparent"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              You’re signed in 🎉
            </h3>
            <SignOutButton>
              <button className="mt-4 px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
                Logout
              </button>
            </SignOutButton>
          </motion.div>
        </SignedIn>
      </div>
    </section>
  );
}
