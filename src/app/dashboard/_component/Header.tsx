"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useUser, SignedIn, SignedOut, SignOutButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      {/*Top Bar*/}
      <div className="hidden md:flex max-w-7xl mx-auto flex-col md:flex-row md:justify-between md:items-center px-6 py-2 text-sm text-gray-600 gap-2 md:gap-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
          <span>📍 Government Green Hub, City, Province</span>
          <span>📞 (123) 456-7890</span>
          <span>✉️ info@barangaygreenhub.gov.ph</span>
        </div>
        <span>🕒 Mon-Fri 8:00 AM - 5:00 PM</span>
      </div>

      {/*NavBar*/}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/*Logo and Title*/}
        <div className="flex items-center gap-3">
          <div className="bg-green-600 text-white font-bold rounded-md w-10 h-10 flex items-center justify-center">
            BG
          </div>
          <div>
            <h1 className="font-semibold text-lg">Welcome to Government Web</h1>
            <p className="text-xs text-gray-500">Your Community Portal</p>
          </div>
        </div>

        {/*Desktop Menu*/}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 items-center">
          <li>
            <Link href="/" className="hover:text-green-600 cursor-pointer transition-colors">
              Home
            </Link>
          </li>
        <li>
          <Link href="/news" className="hover:text-green-600 cursor-pointer transition-colors">
            News
          </Link>
        </li>
        <li>
          <Link href="/request" className="hover:text-green-600 cursor-pointer transition-colors">
            Request
          </Link>
         </li>
        <li>
          <Link href="/jobs" className="hover:text-green-600 cursor-pointer transition-colors">
            Find Jobs
          </Link>
        </li>

          {/*Auth Section*/}
          <SignedIn>
            <div className="flex items-center gap-2">
              <span>Welcome, {user?.firstName}</span>
              <SignOutButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="absolute top-full right-6 mt-2 w-48 bg-white border rounded-lg shadow-lg flex flex-col gap-2 p-4 font-medium text-gray-700 md:hidden z-50">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">News</li>
            <li className="hover:text-green-600 cursor-pointer">Request</li>
            <li className="hover:text-green-600 cursor-pointer">Find Jobs</li>

            {/* Auth Section (Mobile) */}
            <SignedIn>
              <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">
                <span>{user?.firstName}</span>
                <SignOutButton />
              </li>
            </SignedIn>
            <SignedOut>
              <li className="hover:text-green-600 cursor-pointer">
                <SignInButton mode="modal" />
              </li>
            </SignedOut>
          </ul>
        )}
      </nav>
    </header>
  );
}
