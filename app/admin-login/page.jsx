"use client";

import { useState, useEffect } from "react";
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

    
    <div className="flex justify-center items-center min-h-[85vh]
                      bg-gradient-to-br from-[#0b1f3a] via-[#0f2e5c] to-[#1e73be]">



        <div className="w-full max-w-lg p-8 rounded-2xl
                        backdrop-blur-xl bg-white/10
                        border border-white/20
                        shadow-[0_0_40px_rgba(30,115,190,0.25)]
                        flex flex-col justify-center">

          <h2 className="text-2xl font-semibold text-white text-center">
            Admin Login
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-2 mb-6 rounded"></div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="email"
              placeholder="Admin Email"
              required
              value={form.email}
              onChange={(e)=>setForm({...form,email:e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e)=>setForm({...form,password:e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-sky-400"
            />

            {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold
                         bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600
                         hover:from-sky-600 hover:to-indigo-700
                         text-white shadow-lg transition duration-300
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
