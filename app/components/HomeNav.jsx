'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 h-[72px]">
      <div className="max-w-7xl mx-auto px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src="/verticallogo.png"
            alt="Nexcore Logo"
            className="h-70 w-auto object-contain"
          />
        </div>

        {/* Links */}
         {/* Right - Login & Register buttons - closer together */}
      <div className="flex items-center gap-4">
        <Link href="/student-login">
          <button className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Login
          </button>
        </Link>
        <Link href="/student-register">
          <button className="px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold rounded-md transition-colors">
            Register Now
          </button>
        </Link>
      </div>
    </div>
        
      
    </nav>
  );
}
