"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Student = {
  username: string;
  email: string;
  address?: string;
  studentId?: string;
  courseintrest?: string;
  parentMobile?: string;
  mobile?: string;
  loginDate?: string;
};

export default function StudentProfilePage() {
  const [student, setStudent] = useState<Student | null>(null);
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
            headers: { Authorization: `Bearer ${token}` },
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

  if (!student) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <div className="w-full bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold tracking-wide">
          NIT Scholarship Portal
        </h1>
        <button
          onClick={() => router.push("/student-dashboard")}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 text-white font-medium"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto bg-white mt-10 rounded-2xl shadow-lg border border-slate-200 p-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Student Profile
        </h1>

        {/* Personal Info */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
            <p><span className="font-medium">Name:</span> {student.username}</p>
            <p><span className="font-medium">Email:</span> {student.email}</p>
            <p><span className="font-medium">Address:</span> {student.address || "N/A"}</p>
            <p><span className="font-medium">Student ID:</span> {student.studentId || Math.floor(100000 + Math.random() * 900000)}</p>
            <p><span className="font-medium">Login Date:</span> {student.loginDate || new Date().toLocaleString()}</p>
          </div>
        </section>

        {/* Course Info */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-emerald-600 mb-4">
            Course & Exam Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
            <p><span className="font-medium">Course Interest:</span> {student.courseintrest || "N/A"}</p>
            <p><span className="font-medium">Parent Phone:</span> {student.parentMobile || "N/A"}</p>
            <p><span className="font-medium">Mobile:</span> {student.mobile || "N/A"}</p>
          </div>
        </section>

        {/* Contact & Privacy */}
        <section>
          <h2 className="text-xl font-semibold text-amber-600 mb-4">
            Contact & Privacy
          </h2>
          <div className="space-y-2 text-slate-700 text-sm">
            <p><span className="font-medium">Contact Details:</span> Reach us at support@nitportal.com</p>
            <p><span className="font-medium">Privacy Policies:</span> Your data is safe and secure with us.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
