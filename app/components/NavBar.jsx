"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-slate-800">
            NEXCORE
          </span>
          <span className="text-sm text-blue-600 font-semibold">
            Institute
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/student-register">Student Register</Link>
          <Link href="/student-login">Student Login</Link>
          <Link href="/admin-register">Admin Register</Link>
          <Link href="/admin-login">Admin Login</Link>
        </div>

      </div>
    </nav>
  );
}
