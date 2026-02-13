"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Eye, Mail, Trash2, Edit2 } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [students, setStudents] = useState([]);
  const [emailModal, setEmailModal] = useState({ open: false, to: "", isBulk: false });
  const [viewModal, setViewModal] = useState({ open: false, student: null });
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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

  // Open email modal
  const openEmailModal = (email = "", isBulk = false) => {
    setEmailModal({ open: true, to: email, isBulk });
    setContent("");
  };

  // Send email via backend template
const handleSendEmail = async () => {
  try {
    const recipients = emailModal.isBulk
      ? students.map((s) => s.email)
      : [emailModal.to];

    // Ask admin for exam date or use default (optional)
    const examDate = prompt("Enter exam date (e.g., Feb 20, 2026):", "Feb 20, 2026");
    if (!examDate) return alert("Exam date is required!");

    await axios.post("http://localhost:5000/api/admin/send-professional-email", {
      recipients,
      studentName: emailModal.isBulk ? "Student" : students.find(s => s.email === emailModal.to)?.username,
      examDate,
      adminMessage: content, // optional note
    });

    alert("Professional email sent successfully!");
    setEmailModal({ open: false, to: "", isBulk: false });

  } catch (err) {
    console.error(err);
    alert("Failed to send email");
  }
};


  // Open student details modal
  const openViewModal = (student) => {
    setViewModal({ open: true, student });
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden bg-[#F8FBFD] text-[#0F172A]">
      {/* Sidebar */}
      <div className={`bg-[#0EA5E9] flex flex-col justify-between transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}>
        <div>
          <h1 className="text-2xl font-bold text-center mt-6 mb-8 text-white">{sidebarOpen ? "Admin Panel" : "AP"}</h1>
          <ul className="space-y-4">
            <li className="px-4 py-2 hover:bg-[#0284C7] cursor-pointer rounded text-white" onClick={() => router.push("/dashboard")}>Dashboard</li>
            <li className="px-4 py-2 hover:bg-[#0284C7] cursor-pointer rounded text-white" onClick={() => router.push("/adminstudent-dashboard")}>Students</li>
            <li className="px-4 py-2 hover:bg-red-500 cursor-pointer rounded text-white" onClick={() => router.push("/login")}>Logout</li>
          </ul>
        </div>
        <button className="mb-6 mx-auto py-2 px-4 bg-[#0284C7] hover:bg-[#0EA5E9] rounded text-white transition" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "Collapse" : "Expand"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Navbar />
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
                      <button onClick={() => alert("Edit student feature")} className="p-2 border border-[#E2E8F0] rounded hover:bg-[#EAF7FB]">
                        <Edit2 className="w-5 h-5 text-[#22C55E]" />
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-[#0B1324] rounded-xl p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#E5E7EB]">
              {emailModal.isBulk ? "Send Bulk Email" : `Send Email to ${emailModal.to}`}
            </h3>

            <textarea
              placeholder="Optional message from admin..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full mb-3 px-3 py-2 rounded bg-[#EAF7FB] text-[#0F172A] placeholder-[#64748B] outline-none border border-[#E2E8F0] focus:ring-2 focus:ring-[#0EA5E9]"
            />

            <div className="flex justify-end gap-3 mt-2">
              <button className="px-4 py-2 bg-[#E2E8F0] hover:bg-[#CBD5E1] rounded text-[#0F172A] font-medium transition" onClick={() => setEmailModal({ open: false, to: "", isBulk: false })}>Cancel</button>
              <button className="px-4 py-2 bg-[#0EA5E9] hover:bg-[#0284C7] rounded text-white font-medium transition" onClick={handleSendEmail}>Send</button>
            </div>
          </div>
        </div>
      )}

      {/* View Student Modal */}
      {viewModal.open && viewModal.student && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#0B1324] rounded-xl p-6 w-full max-w-md text-[#E5E7EB]">
            <h3 className="text-xl font-semibold mb-4">Student Details</h3>
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
              <button className="px-4 py-2 bg-[#E2E8F0] rounded text-[#0F172A]" onClick={() => setViewModal({ open: false, student: null })}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
