// app/components/Navbar.tsx (or wherever your navbar file is)

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
        <div className="hidden md:flex items-center gap-4 text-[15px] font-medium">
          <Link href="/">
            <button className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </button>
          </Link>
          <Link href="/student-login">
            <button className="px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold rounded-md transition-colors">
              Student Login
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}