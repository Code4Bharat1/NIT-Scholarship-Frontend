"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FileText, Clock, Target } from "lucide-react";
import { useRouter } from "next/navigation";
import Studentnav from "../components/Studentnav"


  type Student = {
  username: string;
  email: string;
};



export default function StudentDashboard() {
  const [student, setStudent] = useState<Student | null>(null);
  const [open, setOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  

  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          router.push("/student-login");
          return;
        }

        const res = await axios.get<Student>(
          "http://localhost:5000/api/students/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStudent(res.data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          router.push("/student-login");
        }
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/student-login");
  };

  const handleStartExam = () => {
    router.push("/student-dashboard/exam/start");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">

     <Studentnav/>

      {/* Content */}
      <div className="flex-1 px-6 py-10 flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg border border-slate-200 p-10">

          {/* Welcome */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-slate-800 mb-2">
              Welcome, {student?.username || "Student"}
            </h1>
            <p className="text-slate-500">
              You are registered for the National Scholarship Examination.
            </p>
          </div>

          {/* Exam Info */}
          <div className="flex justify-center gap-10 text-slate-600 mb-10 flex-wrap">
            <p>
              Status: <span className="font-medium text-indigo-600">Not Started</span>
            </p>
            <p>
              Attempts Left: <span className="font-medium">1</span>
            </p>
            <p>
              Exam Date: <span className="font-medium">25 Feb 2026</span>
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <FileText size={36} className="text-indigo-600" />
                <div>
                  <p className="text-slate-600 text-sm">Total Questions</p>
                  <h3 className="text-2xl font-semibold text-slate-800">120</h3>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <Clock size={36} className="text-emerald-600" />
                <div>
                  <p className="text-slate-600 text-sm">Time Limit</p>
                  <h3 className="text-2xl font-semibold text-slate-800">2 Hours</h3>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <Target size={36} className="text-amber-600" />
                <div>
                  <p className="text-slate-600 text-sm">Passing Score</p>
                  <h3 className="text-2xl font-semibold text-slate-800">60%</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">
            <button
              onClick={handleStartExam}
              className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition"
            >
              Start Exam
            </button>

            <button
              onClick={() => setRulesOpen(true)}
              className="px-8 py-3 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium transition"
            >
              Read Rules
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t text-center text-sm text-slate-400">
            National Institute of Technology Scholarship Examination Portal
          </div>
        </div>
      </div>

      {/* Rules Modal */}
      {rulesOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Scholarship Exam Rules</h2>

            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
              <li>Exam duration is 2 hours.</li>
              <li>Each student can attempt only once.</li>
              <li>Do not refresh or close the browser during the exam.</li>
              <li>Internet or external help is not allowed.</li>
              <li>Minimum 60% is required to qualify.</li>
            </ul>

            <div className="mt-6 text-right">
              <button
                onClick={() => setRulesOpen(false)}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
          
        </div>
      )}

  



    </div>
  );
}
