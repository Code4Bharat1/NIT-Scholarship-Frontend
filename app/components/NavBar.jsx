"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 h-[72px]">
      <div className="max-w-7xl mx-auto px-12 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src="/nexcore3-logo.png"
            alt="Nexcore Logo"
            className="h-70 w-auto object-contain"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/student-register" className="hover:text-blue-600">Student Register</Link>
          <Link href="/student-login" className="hover:text-blue-600">Student Login</Link>
        </div>

      </div>
    </nav>
  );
}
