"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react"; // install if not installed

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
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

      router.push("/student-dashboard");

    } catch (err) {
      if (err.response?.status === 403) {
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

      <div className="flex justify-center items-center min-h-[85vh] bg-gray-100">
        <div className="w-full max-w-md p-8 rounded-2xl
                        bg-white shadow-lg border border-gray-200">

          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
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

            {/* Password Field With Eye Button */}
          <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    required
    value={form.password}
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
    className="w-full px-4 py-2 pr-10 rounded-lg
               bg-[#EAF7FB] text-[#0F172A]
               placeholder-[#64748B] outline-none
               focus:ring-2 focus:ring-[#0EA5E9]"
  />

  <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
>
  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
</button>

</div>
            <button
              type="submit"
              disabled={loading || disabledUntil}
              className={`w-full py-3 rounded-lg font-semibold text-white transition
              ${disabledUntil
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"}
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
