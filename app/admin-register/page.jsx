"use client";

import { useState } from "react";
import axios from "axios";
import Adminnav from "../components/Adminnav";

export default function AdminRegister() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // <-- success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // reset message

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/register",
        form
      );
      setMessage(res.data.message); // show message on page
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Admin registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Adminnav />

      <div className="flex justify-center items-center min-h-[85vh] bg-[#F8FBFD]">
        <div className="w-full max-w-lg p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-lg flex flex-col justify-center">
          
          <h2 className="text-2xl font-semibold text-[#0F172A] text-center">
            Admin Registration
          </h2>
          <div className="w-16 h-1 bg-[#0EA5E9] mx-auto mt-2 mb-6 rounded"></div>

          {/* Success/Error Message */}
          {message && (
            <div className="mb-4 text-center text-green-600 font-medium">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              placeholder="Admin Username"
              required
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] border border-[#E2E8F0] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
            />

            <input
              type="email"
              placeholder="Admin Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] border border-[#E2E8F0] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] border border-[#E2E8F0] outline-none focus:ring-2 focus:ring-[#0EA5E9]"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold
                         bg-[#0EA5E9] hover:bg-[#0284C7] text-white shadow transition duration-300
                         ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Registering..." : "Register Admin"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
