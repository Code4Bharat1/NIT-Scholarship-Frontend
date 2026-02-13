'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ExamFeedback() {
  const [difficulty, setDifficulty] = useState('moderate');
  const [timeSufficient, setTimeSufficient] = useState('yes');
  const [clarityRating, setClarityRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [technicalIssues, setTechnicalIssues] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  // Student details (would come from backend/props)
  const studentData = {
    fullName: 'Anjali Sharma',
    rollNumber: 'NX-2024-8842',
    examDate: '2024-10-15',
    program: 'AI & Machine Learning',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      difficulty,
      timeSufficient,
      clarityRating,
      technicalIssues,
      additionalComments,
    });
  };

  const renderStars = () => {
  return [1, 2, 3, 4, 5].map((star) => {
    const isActive = star <= (hoveredStar || clarityRating);

    return (
      <button
        key={star}
        type="button"
        onClick={() => setClarityRating(star)}
        onMouseEnter={() => setHoveredStar(star)}
        onMouseLeave={() => setHoveredStar(0)}
        className="transition-transform hover:scale-110 focus:outline-none"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={isActive ? '#facc15' : '#d1d5db'}   // ⭐ GOLD / GRAY
          />
        </svg>
      </button>
    );
  });
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 h-[72px] sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-12 h-full flex items-center justify-between">

    {/* Logo – SAME AS HOME / LOGIN / REGISTER */}
  

<div className="flex items-center h-full">
  <Image
    src="/nexcore3-logo.png"
    alt="Nexcore Institute of Technology"
    width={400}
    height={70}
    priority
    style={{ width: "auto", height: "full" }}
  />
</div>

    {/* Close (only on feedback page) */}
   

  </div>
</header>
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 mt-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exam Feedback
          </h1>
          <p className="text-gray-600 text-lg">
            Please share your honest experience about the recent entrance
            examination.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student Details Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">
                Student Details
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={studentData.fullName}
                  disabled
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roll Number / Exam ID
                </label>
                <input
                  type="text"
                  value={studentData.rollNumber}
                  disabled
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exam Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value="Oct 15, 2024"
                    disabled
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium cursor-not-allowed"
                  />
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program Applied For
                </label>
                <div className="relative">
                  <select
                    value={studentData.program}
                    disabled
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium appearance-none cursor-not-allowed"
                  >
                    <option>{studentData.program}</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Survey Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">
                Experience Survey
              </h2>
            </div>

            <div className="space-y-8">
              {/* Difficulty Level */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  How would you rate the difficulty level of the exam?
                </label>
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: 'easy', label: 'Too Easy' },
                    { value: 'moderate', label: 'Moderate' },
                    { value: 'challenging', label: 'Challenging' },
                    { value: 'difficult', label: 'Very Difficult' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="difficulty"
                        value={option.value}
                        checked={difficulty === option.value}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Sufficiency */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Was the time allotted sufficient to complete all sections?
                </label>
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: 'yes', label: 'Yes, sufficient' },
                    { value: 'no', label: 'No, needed more time' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="timeSufficient"
                        value={option.value}
                        checked={timeSufficient === option.value}
                        onChange={(e) => setTimeSufficient(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Rate the clarity of questions
                </label>
                <div className="flex gap-2">{renderStars()}</div>
                {clarityRating > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    You rated: {clarityRating} out of 5 stars
                  </p>
                )}
              </div>

              {/* Technical Issues */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Did you face any technical issues during the exam?
                </label>
                <textarea
                  value={technicalIssues}
                  onChange={(e) => setTechnicalIssues(e.target.value)}
                  placeholder="No technical issues encountered."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Any additional suggestions or comments?
                </label>
                <textarea
                  value={additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                  placeholder="The logical reasoning section was quite well structured, but the math section could use clearer instructions. Overall good experience."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-[1.01] shadow-lg text-lg"
          >
            Submit Feedback
          </button>
        </form>
) : (
  <div className="bg-white rounded-2xl border border-gray-200 p-12 shadow-sm text-center">
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mb-2">
      Thank You!
    </h2>

    <p className="text-gray-600 text-lg mb-6">
      Your feedback has been submitted successfully.
    </p>

    <p className="text-sm text-gray-500 mb-8">
      We truly appreciate your time and valuable input.
    </p>

    <Link
      href="/"
      className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
    >
      Go to Home
    </Link>
  </div>
)
        {/* Footer Message */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Your feedback helps us maintain the quality and integrity of our
          scholarship program.
        </p>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Nexcore Institute of Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}