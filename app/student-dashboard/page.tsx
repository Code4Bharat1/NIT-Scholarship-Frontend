"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [name, setName] = useState("Student");
  const [showRules, setShowRules] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  const handleStartExam = () => {
    if (accepted) {
      router.push("/student-dashboard/exam/start");
    } else {
      alert("Please accept the rules to start the exam.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 flex items-center justify-center px-4 py-10">

      {/* Main Glass Card */}
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-12 border border-white/40">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-3">
            Welcome, {name}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            You are registered for the National Scholarship Examination.
            Please review the instructions carefully before beginning.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">

          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold mb-3">Total Questions</h2>
            <p className="text-3xl font-bold">120</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold mb-3">Time Limit</h2>
            <p className="text-3xl font-bold">2 Hours</p>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold mb-3">Passing Score</h2>
            <p className="text-3xl font-bold">60%</p>
          </div>

        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition duration-300"
            onClick={() => setShowRules(true)}
          >
            Read Rules & Regulations
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-gray-500 text-sm text-center">
          National Institute of Technology Scholarship Exam Portal
        </p>

        {/* Modal */}
        {showRules && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-10 relative animate-fadeIn">

              <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
                Exam Rules & Instructions
              </h2>

              <ul className="list-decimal list-inside space-y-4 text-gray-700 text-lg mb-8 leading-relaxed">
                <li>Total questions: <span className="font-semibold">120</span></li>
                <li>Time allowed: <span className="font-semibold">2 Hours</span></li>
                <li>Do not refresh or close the browser during the exam</li>
                <li>Each question carries <span className="font-semibold">1 mark</span></li>
                <li>No negative marking for incorrect answers</li>
                <li>Ensure stable internet connection</li>
              </ul>

              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  id="accept"
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <label htmlFor="accept" className="ml-3 text-gray-700 text-lg">
                  I have read and accept all the rules
                </label>
              </div>

              <div className="flex justify-between">
                <button
                  className="px-6 py-3 rounded-xl bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
                  onClick={() => setShowRules(false)}
                >
                  Close
                </button>

                <button
                  disabled={!accepted}
                  onClick={handleStartExam}
                  className={`px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition duration-300 ${
                    accepted
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-105"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Start Exam
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
