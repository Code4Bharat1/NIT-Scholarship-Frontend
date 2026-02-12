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
  const [message, setMessage] = useState({ type: "", text: "" }); // inline messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" }); // clear previous messages

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

      <div className="flex justify-center items-center min-h-[85vh]
                      bg-gradient-to-br from-[#0b1f3a] via-[#0f2e5c] to-[#1e73be]">

        <div className="w-full max-w-4xl p-8 rounded-2xl
                        backdrop-blur-lg bg-white/10
                        border border-white/20 shadow-xl">

          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Student Registration
          </h2>

          {/* Inline message */}
          {message.text && (
            <p
              className={`text-center mb-4 ${
                message.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {message.text}
            </p>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Student Name */}
            <div className="flex flex-col">
              <label className="text-white mb-1">Student Name</label>
              <input
                placeholder="Student Name"
                required
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-white mb-1">Address</label>
              <input
                placeholder="Address"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col">
              <label className="text-white mb-1">Mobile Number</label>
              <input
                placeholder="Mobile Number"
                required
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Parent's Mobile */}
            <div className="flex flex-col">
              <label className="text-white mb-1">Parent's Mobile</label>
              <input
                placeholder="Parent's Mobile"
                required
                value={form.parentMobile}
                onChange={(e) => setForm({ ...form, parentMobile: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Qualifications */}
            <div className="flex flex-col">
              <label className="text-white mb-1">Qualifications</label>
              <input
                placeholder="Qualifications"
                required
                value={form.qualifications}
                onChange={(e) => setForm({ ...form, qualifications: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Course Dropdown */}
            <div className="flex flex-col">
              <label className="text-white mb-1">Course</label>
              <select
  required
  value={form.courseInterest}
  onChange={(e) => setForm({ ...form, courseInterest: e.target.value })}
  className="w-full px-4 py-2 rounded-lg
             bg-white/10 text-white
             placeholder-gray-300
             outline-none focus:ring-2 focus:ring-sky-400
             appearance-none
             [&>option]:text-black [&>option]:bg-white"
>
  <option value="" disabled>Select Course</option>
  <option value="Artifical intelligence and Machine learning">Artifical intelligence and Machine learning</option>
  <option value="Artifical intelligence and Robotics">Artifical intelligence and Robotics</option>
  <option value="Cyber security">Cyber security</option>
  <option value="Graphics,Animation,VFX and Multimedia">Graphics,Animation,VFX and Multimedia</option>
</select>

            </div>

            {/* Submit button spans full width */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold
                           bg-gradient-to-br from-sky-500 to-blue-600
                           hover:from-sky-600 hover:to-blue-700
                           text-white shadow-lg
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
