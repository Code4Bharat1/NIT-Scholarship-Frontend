"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ResultsPage() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const fetchResults = async (name = "") => {
    try {
      const res = await axios.get("http://localhost:5000/api/results", {
        params: { name },
      });
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1f3a] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Student Ranking</h1>

      {/* SEARCH */}
      <div className="flex gap-3 mb-6">
        <input
          placeholder="Search student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded bg-white/10 w-64 outline-none"
        />

        <button
          onClick={() => fetchResults(search)}
          className="bg-sky-500 px-5 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white/10 rounded-xl p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/20 text-left">
              <th className="p-2 w-14">Rank</th>

              {/* GAP REDUCED HERE */}
              <th className="p-2 w-32">Name</th>

              <th className="p-2 w-20">Attempted</th>

              <th className="p-2 w-20">Marks</th>

              <th className="p-2 w-28">Time</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="border-b border-white/10">
                <td className="p-2 font-bold">{s.rank}</td>

                <td className="p-2">{s.username}</td>

                <td className="p-2">
                  {s.attemptedQuestions ?? s.attendedQuestions ?? 0}
                </td>

                <td className="p-2 text-green-400 font-semibold">
                  {s.marks}
                </td>

                <td className="p-2">{s.timeTaken} sec</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
