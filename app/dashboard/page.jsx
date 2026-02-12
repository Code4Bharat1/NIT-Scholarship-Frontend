"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [students, setStudents] = useState([]);
  const [emailModal, setEmailModal] = useState({ open: false, to: "", isBulk: false });
  const [viewModal, setViewModal] = useState({ open: false, student: null });
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data.students);
    } catch (err) {
      console.error("Failed to fetch students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      setStudents(students.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete student");
    }
  };

  // Open email modal
  const openEmailModal = (email = "", isBulk = false) => {
    setEmailModal({ open: true, to: email, isBulk });
    setSubject("");
    setContent("");
  };

  // Send email
  const handleSendEmail = async () => {
    try {
      const recipients = emailModal.isBulk
        ? students.map((s) => s.email)
        : [emailModal.to];

      await axios.post("http://localhost:5000/api/admin/send-email", {
        recipients,
        subject,
        content
      });

      alert("Email sent successfully!");
      setEmailModal({ open: false, to: "", isBulk: false });
    } catch (err) {
      console.error(err);
      alert("Failed to send email");
    }
  };

  // Open view modal
  const openViewModal = (student) => {
    setViewModal({ open: true, student });
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden bg-[#0b1f3a] text-white">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-[#0f2e5c] to-[#071a33] 
        flex flex-col justify-between transition-all duration-300
        ${sidebarOpen ? "w-64" : "w-20"}`}
      >
        <div>
          <h1 className="text-2xl font-bold text-center mt-6 mb-8">
            {sidebarOpen ? "Admin Panel" : "AP"}
          </h1>

          <ul className="space-y-4">
            <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer rounded">
              Dashboard
            </li>
            <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer rounded">
              Students
            </li>
            <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer rounded">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-red-600 cursor-pointer rounded">
              Logout
            </li>
          </ul>
        </div>

        <button
          className="mb-6 mx-auto py-2 px-4 bg-sky-500 hover:bg-sky-600 rounded transition"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Collapse" : "Expand"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Navbar />

        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome, Admin!</h2>

          <button
            className="mb-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition"
            onClick={() => openEmailModal("", true)}
          >
            Send Email to All Students
          </button>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-inner overflow-x-auto">
            <table className="w-full table-auto border-collapse text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Mobile</th>
                  <th className="text-left px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s._id} className="border-b border-white/10 hover:bg-white/10">
                    <td className="px-4 py-2">{s.username}</td>
                    <td className="px-4 py-2">{s.email}</td>
                    <td className="px-4 py-2">{s.mobile || "N/A"}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button onClick={() => openViewModal(s)}>👁️</button>
                      <button onClick={() => openEmailModal(s.email)}>✉️</button>
                      <button onClick={() => handleDelete(s._id)}>🗑️</button>
                      <button onClick={() => alert("Edit student feature")}>✏️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {emailModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#0f2e5c] rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {emailModal.isBulk ? "Send Bulk Email" : `Send Email to ${emailModal.to}`}
            </h3>

            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full mb-3 px-3 py-2 rounded bg-white/10 text-white"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={5}
              className="w-full mb-3 px-3 py-2 rounded bg-white/10 text-white"
            />

            <div className="flex justify-end gap-3">
              <button onClick={() => setEmailModal({ open: false })}>Cancel</button>
              <button onClick={handleSendEmail}>Send</button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal.open && viewModal.student && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#0f2e5c] rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Student Details</h3>
            <p>Name: {viewModal.student.username}</p>
            <p>Email: {viewModal.student.email}</p>
            <button
              className="mt-4"
              onClick={() => setViewModal({ open: false, student: null })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}