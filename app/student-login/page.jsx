"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [disabledUntil, setDisabledUntil] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("student", JSON.stringify(res.data.student));

      alert(res.data.message);
      router.push("/student-dashboard");

    } catch (err) {
      if (err.response?.status === 403) {
        alert(err.response.data.message);
        setDisabledUntil(err.response.data.loginDate);
      } else {
        alert(err.response?.data?.message || "Login failed");
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!disabledUntil) return;

    const timer = setInterval(() => {
      if (new Date() >= new Date(disabledUntil)) {
        setDisabledUntil(null);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [disabledUntil]);

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[85vh] bg-[#F8FBFD]">

        <div className="w-full max-w-md p-8 rounded-2xl
                        bg-[#FFFFFF] shadow-lg border border-[#E2E8F0]">

          <h2 className="text-2xl font-semibold text-[#0F172A] text-center mb-6">
            Student Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg
                         bg-[#EAF7FB] text-[#0F172A]
                         placeholder-[#64748B] outline-none
                         focus:ring-2 focus:ring-[#0EA5E9]"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg
                         bg-[#EAF7FB] text-[#0F172A]
                         placeholder-[#64748B] outline-none
                         focus:ring-2 focus:ring-[#0EA5E9]"
            />

            <button
              type="submit"
              disabled={loading || disabledUntil}
              className={`w-full py-3 rounded-lg font-semibold text-white transition
              ${disabledUntil
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0EA5E9] hover:bg-[#0284C7]"}
              `}
            >
              {disabledUntil
                ? "Login locked until allowed date"
                : loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
