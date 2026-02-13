"use client";

import { useState } from "react";
import { Users, Trophy, Clock, LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [active, setActive] = useState("results");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { id: "results", label: "Results", icon: Trophy, path: "/results" },
    { id: "students", label: "Students", icon: Users, path: "/adminstudent-dashboard" },
   
  ];

  return (
   <div
  className={`fixed top-0 left-0 h-screen bg-white text-black flex flex-col justify-between transition-all duration-300 z-50 ${
    sidebarOpen ? "w-64" : "w-20"
  }`}
>

      <div>
        {/* Logo */}
      <div className="flex items-center justify-center mt-4 mb-6 h-12">
  <img
    src="/nexcore3-logo.png"
    alt="Nexcore Logo"
    className={`object-contain transition-all duration-300 ${
      sidebarOpen ? "h-60 w-auto" : "h-8 w-auto"
    }`}
  />
</div>


        {/* Sidebar title */}
        <h1
          className={`text-2xl font-bold text-center mb-8 text-black transition-all duration-300 ${
            sidebarOpen ? "block" : "hidden"
          }`}
        >
          RankBoard
        </h1>

        <ul className="flex flex-col space-y-2">
          {menu.map((item) => (
            <li
              key={item.id}
              className={`flex items-center px-4 py-2 rounded cursor-pointer text-black hover:bg-[#51b4e1] transition-all duration-300 ${
                active === item.id ? "bg-[#51b4e1]" : ""
              }`}
              onClick={() => {
                setActive(item.id);
                router.push(item.path);
              }}
            >
              <item.icon className="text-black" />
              <span
                className={`ml-3 transition-all duration-300 ${
                  sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}

          {/* Logout */}
          <li
            className="flex items-center px-4 py-2 rounded cursor-pointer text-black hover:bg-red-500 transition-all duration-300"
            onClick={() => router.push("/login")}
          >
            
            <span
              className={`ml-1 transition-all duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
              }`}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>

      {/* Collapse/Expand button */}
      <button
        className="mb-6 mx-auto py-2 px-4 bg-[#0284C7] hover:bg-[#0EA5E9] rounded text-white transition-all duration-300"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
