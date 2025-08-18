"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
        {/* Top Bar */}
        <div className="hidden md:flex max-w-7xl mx-auto flex-col md:flex-row md:justify-between md:items-center px-6 py-2 text-sm text-gray-600 gap-2 md:gap-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
            <span>📍 Government Green Hub, City, Province</span>
            <span>📞 (123) 456-7890</span>
            <span>✉️ info@barangaygreenhub.gov.ph</span>
        </div>
        <span>🕒 Mon-Fri 8:00 AM - 5:00 PM</span>
        </div>

      {/* Nav Bar */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="bg-green-600 text-white font-bold rounded-md w-10 h-10 flex items-center justify-center">
            BG
          </div>
          <div>
            <h1 className="font-semibold text-lg">Welcome to Government Web</h1>
            <p className="text-xs text-gray-500">Your Community Portal</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">News</li>
          <li className="hover:text-green-600 cursor-pointer">Request</li>
          <li className="hover:text-green-600 cursor-pointer">Find Jobs</li>
          <li className="hover:text-green-600 cursor-pointer">Login</li>
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
            <li className="hover:text-green-600 cursor-pointer">Login</li>
          </ul>
        )}
      </nav>
    </header>
  );
}
