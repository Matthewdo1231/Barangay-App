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

  // Custom link styles with animated underline
  const linkClass =
    "relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors backdrop-blur-sm duration-100 ${
        scrolled
          ? "bg-white border-b border-[#233353]"
          : "bg-[#233353]/70 border-white"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`hidden md:flex max-w-7xl mx-auto flex-col md:flex-row md:justify-between md:items-center px-6 py-2 text-base gap-2 md:gap-4 transition-colors duration-100 ${
          scrolled ? "text-[#233353]" : "text-white"
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
          scrolled
            ? "border-[#233353] bg-white"
            : "border-white bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div
              className={`font-bold rounded-md w-10 h-10 flex items-center justify-center transition-colors duration-100 ${
                scrolled
                  ? "bg-[#233353] text-white"
                  : "bg-[#233353] text-white"
              }`}
            >
              BG
            </div>
            <div>
              <h1
                className={`font-semibold text-xl transition-colors duration-100 ${
                  scrolled ? "text-[#233353]" : "text-white"
                }`}
              >
                Welcome to Government Web
              </h1>
              <p
                className={`text-sm transition-colors duration-100 ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Your Community Portal
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex gap-6 font-semibold text-lg items-center uppercase ${
              scrolled ? "text-[#233353]" : "text-white"
            }`}
          >
            {["Home", "News", "Notifications", "Find Jobs"].map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                  className={linkClass}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-100 ${
              scrolled ? "text-[#233353]" : "text-white"
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
            className={`md:hidden flex flex-col px-6 py-4 space-y-4 text-lg font-medium uppercase border-t-4 border-white ${
              scrolled
                ? "bg-white text-[#233353] border-[#233353]"
                : "bg-transparent text-white border-[#233353]"
            }`}
          >
            {["Home", "News", "Request", "Find Jobs"].map((item, index) => (
              <Link
                key={index}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
