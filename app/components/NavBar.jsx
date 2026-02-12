"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#4B6CB7]">
            NEXCORE
          </span>
          <span className="text-sm text-[#7F53AC] font-semibold">
            Institute
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <Link 
            href="/" 
            className="hover:text-[#4B6CB7] transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/student-register" 
            className="hover:text-[#4B6CB7] transition-colors duration-200"
          >
            Student Register
          </Link>
          <Link 
            href="/student-login" 
            className="hover:text-[#4B6CB7] transition-colors duration-200"
          >
            Student Login
          </Link>
        </div>

      </div>
    </nav>
  );
}
