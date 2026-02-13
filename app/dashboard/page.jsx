"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { useRouter } from "next/navigation";
import ResultSidebar from "../components/ResultSidebar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [students, setStudents] = useState([]);
  const [emailModal, setEmailModal] = useState({ open: false, to: "", isBulk: false });
  const [viewModal, setViewModal] = useState({ open: false, student: null });
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    topRankers: 0,
    rejected: 0,
  });

  const router = useRouter();

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/students?page=${page}&limit=1000&search=${search}`
      );
      const allStudents = res.data.students;

      // Pagination for table
      const pageLimit = 5;
      const start = (page - 1) * pageLimit;
      const end = start + pageLimit;
      setStudents(allStudents.slice(start, end));
      setTotalPages(Math.ceil(allStudents.length / pageLimit));

      // Stats calculation
      const total = allStudents.length;
      const pending = allStudents.filter((s) => s.status === "pending").length;
      const approved = allStudents.filter((s) => s.status === "approved").length;
      const rejected = allStudents.filter((s) => s.status === "rejected").length;
      const topRankers = allStudents.filter((s) => s.rank && s.rank <= 5).length;

      setStats({ total, pending, approved, topRankers, rejected });
    } catch (err) {
      console.error("Failed to fetch students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [page, search]);

  const activeUsersToday = students.filter((s) => {
    const lastLogin = new Date(s.lastLogin || 0);
    const today = new Date();
    return lastLogin.toDateString() === today.toDateString();
  }).length;

  return (
    <div className="w-screen h-screen flex overflow-hidden bg-[#F8FBFD] text-[#0F172A]">
      {/* Sidebar */}
      <ResultSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col overflow-auto transition-all duration-300`}
        style={{ marginLeft: sidebarOpen ? "16rem" : "5rem" }} // Adjust according to sidebar width
      >
        <Navbar />
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome, Admin!</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {[
              { label: "Total Students", value: stats.total, color: "#0EA5E9", bg: "#EAF7FB" },
              { label: "Pending", value: stats.pending, color: "#38BDF8", bg: "#EAF7FB" },
              { label: "Approved", value: stats.approved, color: "#22C55E", bg: "#DCFCE7" },
              { label: "Rejected", value: stats.rejected, color: "#EF4444", bg: "#FEE2E2" },
              { label: "Top Rankers", value: stats.topRankers, color: "#8B5CF6", bg: "#EDE9FE" },
              { label: "Active Today", value: activeUsersToday, color: "#0284C7", bg: "#DBEAFE" },
            ].map((card) => (
              <div key={card.label} className="p-4 rounded-xl shadow text-[#0F172A] bg-white">
                <p className="text-sm mb-2">{card.label}</p>
                <p className="text-2xl font-bold mb-2">{card.value}</p>
                <div className="w-full h-2 rounded" style={{ backgroundColor: card.bg }}>
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${Math.min((card.value / stats.total) * 100, 100)}%`,
                      backgroundColor: card.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bar Chart + Sidebar Stats */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Multi-Status Bar Chart */}
            <div className="flex-1 bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2 text-[#0F172A]">Student Status Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[{
                    label: "Students",
                    registered: stats.total,
                    loggedIn: activeUsersToday,
                    pending: stats.pending,
                    approved: stats.approved,
                    rejected: stats.rejected,
                  }]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="label" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <Tooltip contentStyle={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }} itemStyle={{ color: "#0F172A" }} />
                  <Bar dataKey="registered" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="loggedIn" fill="#22C55E" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" fill="#38BDF8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="approved" fill="#0284C7" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="rejected" fill="#EF4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Sidebar Stats with mini bars */}
            <div className="w-full lg:w-1/4 bg-white p-4 rounded-xl shadow flex flex-col justify-start items-start space-y-4">
              <h3 className="font-semibold mb-2 text-[#0F172A]">Stats Overview</h3>
              {[
                { label: "Total Students", value: stats.total, max: stats.total },
                { label: "Active Today", value: activeUsersToday, max: stats.total },
                { label: "Pending", value: stats.pending, max: stats.total },
                { label: "Approved", value: stats.approved, max: stats.total },
                { label: "Rejected", value: stats.rejected, max: stats.total },
                { label: "Top Rankers", value: stats.topRankers, max: stats.total },
              ].map((stat) => (
                <div key={stat.label} className="w-full">
                  <div className="flex justify-between text-sm text-[#475569] mb-1">
                    <span>{stat.label}</span>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                  <div className="w-full h-2 bg-[#E2E8F0] rounded">
                    <div
                      className="h-2 rounded"
                      style={{
                        width: `${(stat.value / stat.max) * 100}%`,
                        backgroundColor:
                          stat.label === "Total Students"
                            ? "#0EA5E9"
                            : stat.label === "Active Today"
                            ? "#22C55E"
                            : stat.label === "Pending"
                            ? "#38BDF8"
                            : stat.label === "Approved"
                            ? "#0284C7"
                            : stat.label === "Rejected"
                            ? "#EF4444"
                            : "#8B5CF6",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
