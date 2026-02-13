"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";

export default function AdminLogin() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // show errors below inputs

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        form
      );

      // Store admin token
      localStorage.setItem("adminToken", res.data.token);

      alert(res.data.message);
      setForm({ email: "", password: "" });

      // Redirect to admin dashboard
      window.location.href = "/dashboard";  // simple redirect
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[85vh] bg-[#F8FBFD]">

        <div className="w-full max-w-lg p-8 rounded-2xl bg-white
                        border border-[#E2E8F0] shadow-lg flex flex-col justify-center">

          <h2 className="text-2xl font-semibold text-[#0F172A] text-center">
            Admin Login
          </h2>

          <div className="w-16 h-1 bg-[#0EA5E9] mx-auto mt-2 mb-6 rounded"></div>

          <form onSubmit={handleSubmit} className="space-y-4">

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

            {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold
                         bg-[#0EA5E9] hover:bg-[#0284C7] text-white shadow transition duration-300
                         ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
