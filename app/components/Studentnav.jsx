"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [student, setStudent] = useState(null);
  const [open, setOpen] = useState(false);

  // Get student from localStorage
  useEffect(() => {
    const storedStudent = localStorage.getItem("student");
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("student");
    router.push("/student-login");
  };

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

        {/* Profile Section */}
        {student && (
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center font-semibold">
                {student.username?.charAt(0).toUpperCase()}
              </div>

              <div className="hidden md:block text-sm text-right">
                <p className="font-medium">{student.username}</p>
                <p className="text-slate-300 text-xs">{student.email}</p>
              </div>
            </div>

            {open && (
              <div className="absolute right-0 mt-3 w-44 bg-white text-slate-700 rounded-xl shadow-xl border z-50">
                <button
                  onClick={() => {
                    setOpen(false);
                    router.push("/profile");
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-slate-100 rounded-t-xl"
                >
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 hover:bg-slate-100 text-red-500 rounded-b-xl"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
