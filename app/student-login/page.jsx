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

      // SAVE TOKEN
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("student", JSON.stringify(res.data.student));

      alert(res.data.message);

      // Redirect to dashboard
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

  // Auto-enable login button after allowed date
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

      <div className="flex justify-center items-center min-h-[85vh]
                      bg-gradient-to-br from-[#0b1f3a] via-[#0f2e5c] to-[#1e73be]">

        <div className="w-full max-w-md p-8 rounded-2xl
                        backdrop-blur-lg bg-white/10
                        border border-white/20 shadow-xl">

          <h2 className="text-2xl font-semibold text-white text-center mb-6">
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
              className="w-full px-4 py-3 rounded-lg
                         bg-white/10 text-white
                         placeholder-gray-300 outline-none
                         focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg
                         bg-white/10 text-white
                         placeholder-gray-300 outline-none
                         focus:ring-2 focus:ring-sky-400"
            />

            <button
              type="submit"
              disabled={loading || disabledUntil}
              className={`w-full py-3 rounded-lg font-semibold text-white transition
              ${disabledUntil
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"}
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
