"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import ResultSidebar from "../components/ResultSidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Eye, Mail, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [students, setStudents] = useState([]);
  const [emailModal, setEmailModal] = useState({ open: false, to: "", isBulk: false });
  const [viewModal, setViewModal] = useState({ open: false, student: null });
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null });
  const [loginDate, setLoginDate] = useState(""); 
  const [successMsg, setSuccessMsg] = useState(""); // success notification

  // Fetch students with search + pagination
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

  // Delete student
  const handleDelete = (id) => setDeleteModal({ open: true, id });
  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${deleteModal.id}`);
      fetchStudents();
      setDeleteModal({ open: false, id: null });
    } catch (err) {
      console.error(err);
    }
  };

  // Open email modal
  const openEmailModal = (email = "", isBulk = false) => {
    setEmailModal({ open: true, to: email, isBulk });
    setContent("");
    setLoginDate("");
  };

  // Send email
  const handleSendEmail = async () => {
    if (!loginDate) return;

    const recipients = emailModal.isBulk
      ? students.map((s) => s.email)
      : [emailModal.to];

    try {
      await axios.post("http://localhost:5000/api/admin/send-email", {
        recipients,
        studentName: "Student",
        examDate: loginDate,
        adminMessage: content
      });

      // Close modal and reset states
      setEmailModal({ open: false, to: "", isBulk: false });
      setLoginDate("");
      setContent("");

      // Show success message
      setSuccessMsg("Email sent successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);

    } catch (err) {
      console.error(err);
    }
  };

  const openViewModal = (student) => setViewModal({ open: true, student });

  return (
    <div className="w-screen h-screen flex overflow-hidden bg-[#F8FBFD] text-[#0F172A]">
      {/* Sidebar */}
      <ResultSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto ml-64">
        <Navbar />

        {/* Success Notification */}
        {successMsg && (
          <div className="fixed top-20 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-slide-in">
            {successMsg}
          </div>
        )}

        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome, Admin!</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="mb-4 px-3 py-2 rounded bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none w-full max-w-md"
          />

          {/* Bulk Email */}
          <button
            className="mb-4 bg-[#0EA5E9] hover:bg-[#0284C7] px-4 py-2 rounded text-white transition"
            onClick={() => openEmailModal("", true)}
          >
            Send Email to All Students
          </button>

          {/* Student Table */}
          <div className="bg-[#FFFFFF] rounded-xl p-4 shadow overflow-x-auto">
            <table className="w-full table-auto border-collapse text-[#0F172A]">
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
                      <button onClick={() => openViewModal(s)} className="p-2 border border-[#E2E8F0] rounded hover:bg-[#EAF7FB]">
                        <Eye className="w-5 h-5 text-[#0EA5E9]" />
                      </button>
                      <button onClick={() => openEmailModal(s.email)} className="p-2 border border-[#E2E8F0] rounded hover:bg-[#EAF7FB]">
                        <Mail className="w-5 h-5 text-[#0284C7]" />
                      </button>
                      <button onClick={() => handleDelete(s._id)} className="p-2 border border-[#E2E8F0] rounded hover:text-white">
                        <Trash2 className="w-5 h-5 text-[#EF4444]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-3 py-1 bg-[#E2E8F0] rounded disabled:opacity-50">Prev</button>
              <span>Page {page} of {totalPages}</span>
              <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1 bg-[#E2E8F0] rounded disabled:opacity-50">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {emailModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">
              {emailModal.isBulk ? "Send Bulk Email" : `Send Email to ${emailModal.to}`}
            </h3>

            <div className="mb-3">
              <label className="block text-sm font-medium text-[#1e293b] mb-1">
                Login Available From:
              </label>
              <input
                type="date"
                value={loginDate}
                onChange={(e) => setLoginDate(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#f1f5f9] text-[#0f172a] border border-[#e2e8f0] focus:ring-2 focus:ring-[#0ea5e9] outline-none"
              />
            </div>

            <textarea
              placeholder="Optional message from admin..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full mb-3 px-3 py-2 rounded bg-[#f1f5f9] text-[#0f172a] placeholder-[#64748B] outline-none border border-[#e2e8f0] focus:ring-2 focus:ring-[#0ea5e9]"
            />

            <div className="flex justify-end gap-3 mt-2">
              <button
                className="px-4 py-2 bg-[#e2e8f0] hover:bg-[#cbd5e1] rounded text-[#1e293b] font-medium transition"
                onClick={() => setEmailModal({ open: false, to: "", isBulk: false })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] rounded text-white font-medium transition"
                onClick={handleSendEmail}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Student Modal */}
      {viewModal.open && viewModal.student && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg text-[#334155]">
            <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">Student Details</h3>
            <div className="space-y-2">
              <p><strong>Name:</strong> {viewModal.student.username}</p>
              <p><strong>Email:</strong> {viewModal.student.email}</p>
              <p><strong>Mobile:</strong> {viewModal.student.mobile || "N/A"}</p>
              <p><strong>Address:</strong> {viewModal.student.address || "N/A"}</p>
              <p><strong>Qualifications:</strong> {viewModal.student.qualifications || "N/A"}</p>
              <p><strong>Course:</strong> {viewModal.student.courseInterest || "N/A"}</p>
              <p><strong>Login Date:</strong> {viewModal.student.loginDate ? new Date(viewModal.student.loginDate).toLocaleString() : "N/A"}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-[#e2e8f0] hover:bg-[#cbd5e1] rounded text-[#1e293b]"
                onClick={() => setViewModal({ open: false, student: null })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Delete Student?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteModal({ open: false, id: null })}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
