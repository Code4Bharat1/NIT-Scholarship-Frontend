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
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/students?page=${page}&limit=5&search=${search}`
      );
      setStudents(res.data.students);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Failed to fetch students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [page, search]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.error(err);
      alert("Failed to delete student");
    }
  };

  const openEmailModal = (email = "", isBulk = false) => {
    setEmailModal({ open: true, to: email, isBulk });
    setSubject("");
    setContent("");
  };

  const handleSendEmail = async () => {
    try {
      const recipients = emailModal.isBulk
        ? students.map((s) => s.email)
        : [emailModal.to];

      await axios.post("http://localhost:5000/api/admin/send-email", {
        recipients,
        subject,
        content,
      });

      alert("Email sent successfully!");
      setEmailModal({ open: false, to: "", isBulk: false });
    } catch (err) {
      console.error(err);
      alert("Failed to send email");
    }
  };

  const openViewModal = (student) => {
    setViewModal({ open: true, student });
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden bg-[#F8FBFD] text-[#0F172A]">
      
      {/* Sidebar */}
      <div className={`bg-[#0EA5E9] flex flex-col justify-between transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}>
        <div>
          <h1 className="text-2xl font-bold text-center mt-6 mb-8 text-white">
            {sidebarOpen ? "Admin Panel" : "AP"}
          </h1>
          <ul className="space-y-4">
            <li className="px-4 py-2 hover:bg-[#0284C7] cursor-pointer rounded text-white">
              Dashboard
            </li>
            <li className="px-4 py-2 hover:bg-[#0284C7] cursor-pointer rounded text-white">
              Students
            </li>
            <li className="px-4 py-2 hover:bg-red-500 cursor-pointer rounded text-white">
              Logout
            </li>
          </ul>
        </div>

        <button
          className="mb-6 mx-auto py-2 px-4 bg-[#0284C7] hover:bg-[#0EA5E9] rounded text-white transition"
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

          {/* Bulk Email Button */}
          <button
            className="mb-4 bg-[#22C55E] hover:bg-[#16A34A] px-4 py-2 rounded text-white transition"
            onClick={() => openEmailModal("", true)}
          >
            Send Email to All Students
          </button>

          <div className="bg-white rounded-xl p-4 shadow overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Mobile</th>
                  <th className="text-left px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {students.map((s) => (
                  <tr key={s._id} className="border-b border-[#E2E8F0] hover:bg-[#EAF7FB]">
                    <td className="px-4 py-2">{s.username}</td>
                    <td className="px-4 py-2">{s.email}</td>
                    <td className="px-4 py-2">{s.mobile || "N/A"}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button
                        onClick={() => openViewModal(s)}
                        className="px-2 py-1 border border-[#E2E8F0] rounded hover:bg-[#EAF7FB] transition"
                      >
                        View
                      </button>
                      <button
                        onClick={() => openEmailModal(s.email)}
                        className="px-2 py-1 border border-[#E2E8F0] rounded hover:bg-[#EAF7FB] transition"
                      >
                        Email
                      </button>
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="px-2 py-1 border border-red-500 rounded hover:bg-red-500 hover:text-white transition"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => alert("Edit student feature")}
                        className="px-2 py-1 border border-[#E2E8F0] rounded hover:bg-[#EAF7FB] transition"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1 bg-[#E2E8F0] rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>Page {page} of {totalPages}</span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 bg-[#E2E8F0] rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {emailModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#EAF7FB] rounded-xl p-6 w-full max-w-md text-[#0F172A]">
            <h3 className="text-xl font-semibold mb-4">
              {emailModal.isBulk ? "Send Bulk Email" : `Send Email to ${emailModal.to}`}
            </h3>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full mb-3 px-3 py-2 rounded border border-[#E2E8F0] outline-none"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={5}
              className="w-full mb-3 px-3 py-2 rounded border border-[#E2E8F0] outline-none"
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-[#64748B] hover:bg-[#475569] rounded text-white"
                onClick={() => setEmailModal({ open: false, to: "", isBulk: false })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#0EA5E9] hover:bg-[#0284C7] rounded text-white"
                onClick={handleSendEmail}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal.open && viewModal.student && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#EAF7FB] rounded-xl p-6 w-full max-w-md text-[#0F172A]">
            <h3 className="text-xl font-semibold mb-4">Student Details</h3>
            <div className="space-y-2">
              <p><strong>Name:</strong> {viewModal.student.username}</p>
              <p><strong>Email:</strong> {viewModal.student.email}</p>
              <p><strong>Mobile:</strong> {viewModal.student.mobile || "N/A"}</p>
              <p><strong>Parent Mobile:</strong> {viewModal.student.parentMobile || "N/A"}</p>
              <p><strong>Address:</strong> {viewModal.student.address || "N/A"}</p>
              <p><strong>Qualifications:</strong> {viewModal.student.qualifications || "N/A"}</p>
              <p><strong>Course Interest:</strong> {viewModal.student.courseInterest || "N/A"}</p>
              <p><strong>Registered On:</strong> {new Date(viewModal.student.createdAt).toLocaleDateString()}</p>
              <p><strong>Login Allowed After:</strong> {new Date(viewModal.student.loginDate).toLocaleString()}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-[#64748B] hover:bg-[#475569] rounded text-white"
                onClick={() => setViewModal({ open: false, student: null })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
