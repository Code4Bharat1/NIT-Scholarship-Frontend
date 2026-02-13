"use client";

import { useState } from "react";
import { Users, Trophy, Clock, LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("results");

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "results", label: "Results", icon: Trophy },
    { id: "students", label: "Students", icon: Users },
    { id: "pending", label: "Pending", icon: Clock },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 fixed left-0 top-[72px] h-[calc(100vh-72px)] p-6 shadow-sm">

      {/* LOGO */}
      <h2 className="text-2xl font-bold text-sky-600 mb-10">
        RankBoard
      </h2>

      {/* MENU */}
      <div className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-sky-100 text-sky-700 font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
