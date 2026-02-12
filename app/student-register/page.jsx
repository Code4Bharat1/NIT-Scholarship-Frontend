"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    address: "",
    mobile: "",
    parentMobile: "",
    qualifications: "",
    courseInterest: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/register",
        form
      );
      setMessage({ type: "success", text: res.data.message });
      setForm({
        username: "",
        email: "",
        address: "",
        mobile: "",
        parentMobile: "",
        qualifications: "",
        courseInterest: "",
      });
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Registration failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[85vh] bg-[#F8FBFD]">

        <div className="w-full max-w-4xl p-10 rounded-2xl bg-white shadow-xl border border-[#E2E8F0]">
          <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-6">
            Student Registration
          </h2>

          {/* Inline message */}
          {message.text && (
            <p
              className={`text-center mb-4 font-medium ${
                message.type === "success" ? "text-[#22C55E]" : "text-[#38BDF8]"
              }`}
            >
              {message.text}
            </p>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Student Name */}
            <div className="flex flex-col">
              <label className="text-[#0F172A] mb-1 font-medium">Student Name</label>
              <input
                placeholder="Student Name"
                required
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#0F172A] mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#0F172A] mb-1 font-medium">Address</label>
              <input
                placeholder="Address"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col">
              <label className="text-[#0F172A] mb-1 font-medium">Mobile Number</label>
              <input
                placeholder="Mobile Number"
                required
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>

            {/* Parent's Mobile */}
            <div className="flex flex-col">
              <label className="text-[#0F172A] mb-1 font-medium">Parent's Mobile</label>
              <input
                placeholder="Parent's Mobile"
                required
                value={form.parentMobile}
                onChange={(e) => setForm({ ...form, parentMobile: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>

            {/* Qualifications */}
            <div className="flex flex-col">
              <label className="text-[#0F172A] mb-1 font-medium">Qualifications</label>
              <input
                placeholder="Qualifications"
                required
                value={form.qualifications}
                onChange={(e) => setForm({ ...form, qualifications: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>

            {/* Course Dropdown */}
            <div className="flex flex-col">
              <label className="text-[#0F172A] mb-1 font-medium">Course</label>
              <select
                required
                value={form.courseInterest}
                onChange={(e) => setForm({ ...form, courseInterest: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#0EA5E9] appearance-none [&>option]:text-[#0F172A] [&>option]:bg-white"
              >
                <option value="" disabled>Select Course</option>
                <option value="AI & ML">AI & ML</option>
                <option value="AI & Robotics">AI & Robotics</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Graphics, Animation, VFX & Multimedia">Graphics, Animation, VFX & Multimedia</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold
                           bg-[#0EA5E9] hover:bg-[#0284C7] text-white shadow-lg
                           transition duration-300
                           ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
