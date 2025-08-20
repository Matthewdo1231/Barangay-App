"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-100 ${
        scrolled
          ? "bg-white border-b border-green-800"
          : "bg-transparent border-white"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`hidden md:flex max-w-7xl mx-auto flex-col md:flex-row md:justify-between md:items-center px-6 py-2 text-sm gap-2 md:gap-4 transition-colors duration-100 ${
          scrolled ? "text-green-900" : "text-white"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
          <span>📍 Government Green Hub, City, Province</span>
          <span>📞 (123) 456-7890</span>
          <span>✉️ info@barangaygreenhub.gov.ph</span>
        </div>
        <span>🕒 Mon-Fri 8:00 AM - 5:00 PM</span>
      </div>

      {/* NavBar */}
      <nav
        className={`w-full border-t-4 border-b-4 ${
          scrolled ? "border-green-800 bg-white" : "border-white bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div
              className={`font-bold rounded-md w-10 h-10 flex items-center justify-center transition-colors duration-100 ${
                scrolled ? "bg-green-700 text-white" : "bg-green-600 text-white"
              }`}
            >
              BG
            </div>
            <div>
              <h1
                className={`font-semibold text-lg transition-colors duration-100 ${
                  scrolled ? "text-green-900" : "text-white"
                }`}
              >
                Welcome to Government Web
              </h1>
              <p
                className={`text-xs transition-colors duration-100 ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Your Community Portal
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex gap-6 font-medium items-center ${
              scrolled ? "text-green-900" : "text-white"
            }`}
          >
            <li>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-green-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="transition-colors duration-300 hover:text-green-500"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/request"
                className="transition-colors duration-300 hover:text-green-500"
              >
                Request
              </Link>
            </li>
            <li>
              <Link
                href="/jobs"
                className="transition-colors duration-300 hover:text-green-500"
              >
                Find Jobs
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-100 ${
              scrolled ? "text-green-900" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            className={`md:hidden flex flex-col px-6 py-4 space-y-4 font-medium border-t-4 border-white ${
              scrolled ? "bg-white text-green-900 border-green-200" : "bg-transparent text-white border-green-600"
            }`}
          >
            <Link href="/" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/news" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>
              News
            </Link>
            <Link href="/request" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>
              Request
            </Link>
            <Link href="/jobs" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>
              Find Jobs
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
