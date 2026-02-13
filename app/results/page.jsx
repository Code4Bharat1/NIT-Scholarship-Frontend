"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Sidebar from "../components/ResultSidebar";


export default function ResultsPage() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  // ✅ TIME FORMAT FUNCTION (MATCHES BACKEND SCHEMA)
  const formatTime = (time) => {
    if (!time) return "0 sec 0 ms 0 microsec";

    const sec = time?.sec ?? 0;
    const ms = time?.ms ?? 0;
    const micro = time?.micro ?? 0;

    return `${sec} sec ${ms} ms ${micro} microsec`;
  };

  // ✅ FETCH RESULTS FROM BACKEND
  const fetchResults = async (type = "", name = "") => {
    try {
      const res = await axios.get("http://localhost:5000/api/results", {
        params: { type, name },
      });

      setStudents(res.data);
      setCurrentPage(1);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const btnBase =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow";

  // ✅ PAGINATION LOGIC
  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = students.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  return (
    <>
      <NavBar />

      <div className="flex min-h-screen bg-[#F8FBFD]">
        <Sidebar />

        <div className="flex-1 ml-64 pt-8 pb-10 px-6">
          <div className="max-w-7xl mx-auto">

            <h1 className="text-3xl font-bold mb-8 text-[#0F172A]">
              Student Ranking Dashboard
            </h1>

            {/* 🔹 FILTER + SEARCH */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => fetchResults()}
                  className={`${btnBase} bg-white border border-[#E2E8F0]`}
                >
                  All Students
                </button>

                <button
                  onClick={() => fetchResults("top")}
                  className={`${btnBase} bg-[#22C55E] text-white`}
                >
                  Top Rank List
                </button>

                <button
                  onClick={() => fetchResults("waiting")}
                  className={`${btnBase} bg-[#38BDF8] text-white`}
                >
                  Pending List
                </button>
              </div>

              <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] shadow-sm rounded-lg px-3 py-2">
                <input
                  placeholder="Search student name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && fetchResults("", search)
                  }
                  className="outline-none w-60 text-sm"
                />

                <button
                  onClick={() => fetchResults("", search)}
                  className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-4 py-2 rounded-md text-sm font-semibold"
                >
                  Search
                </button>
              </div>

            </div>

            {/* 🔹 TABLE */}
            <div className="bg-white rounded-xl shadow-md border border-[#E2E8F0] overflow-hidden">

              <table className="w-full">
                <thead className="bg-[#EAF7FB]">
                  <tr>
                    <th className="p-4 text-left">Rank</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Attempted</th>
                    <th className="p-4 text-left">Marks</th>
                    <th className="p-4 text-left">Time Taken</th>
                  </tr>
                </thead>

                <tbody>
                  {currentStudents.map((s) => (
                    <tr key={s._id} className="border-b hover:bg-[#F1FAFF]">

                      <td className="p-4 font-bold text-[#0284C7]">
                        {s.rank}
                      </td>

                      <td className="p-4">{s.username}</td>

                      <td className="p-4">
                        {s.attemptedQuestions ?? 0}
                      </td>

                      <td className="p-4 text-green-600 font-semibold">
                        {s.marks}
                      </td>

                      {/* ✅ TIME DISPLAY */}
                      <td className="p-4">
                        {formatTime(s.timeTaken)}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>

              {/* 🔹 PAGINATION */}
              <div className="flex justify-center gap-2 p-6">

                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-[#0EA5E9] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  Next
                </button>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
