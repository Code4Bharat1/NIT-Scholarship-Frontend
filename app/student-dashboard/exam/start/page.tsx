"use client";
import React, { useState, useEffect, useRef } from "react";
import questionsData from "@/public/data/questions.json";

export default function ExamPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const switchCount = useRef(0);
  const violationCount = useRef(0);

  useEffect(() => {
    setQuestions(questionsData.slice(0, 30));
  }, []);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (questions.length === 0 || submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, questions, submitted]);

  /* ================= TAB SWITCH DETECTION ================= */
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !submitted) {
        switchCount.current++;

        if (switchCount.current <= 2) {
          alert(
            `Warning: You have switched the tab ${switchCount.current} time(s).`,
          );
        } else if (switchCount.current === 3) {
          alert("This is your LAST warning!");
        } else {
          alert("You are exited from the exam.");
          window.location.href = "/";
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [submitted]);

  /* ================= COPY BLOCK ================= */
  useEffect(() => {
    const handleViolation = () => {
      const count = violationCount.current;

      if (count <= 2) {
        alert(`Warning ${count}: Copying is not allowed.`);
      } else if (count === 3) {
        alert("Final warning!");
      } else {
        alert("You are exited from the exam.");
        window.location.href = "/";
      }
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      violationCount.current++;
      handleViolation();
    };

    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      violationCount.current++;
      handleViolation();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && ["c", "C", "x", "X", "a", "A"].includes(e.key)) {
        e.preventDefault();
        violationCount.current++;
        handleViolation();
      }
    };

    document.addEventListener("copy", handleCopy);
    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ================= ANSWERS ================= */
  const handleAnswer = (answer: string) => {
    const updated = [...answers];
    updated[currentIndex] = answer;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(30);
    } else {
      setShowSubmitModal(true);
    }
  };

  const confirmSubmit = () => {
    setShowSubmitModal(false);
    setSubmitted(true);
    console.log("Submitted Answers:", answers);
  };

  if (questions.length === 0)
    return <div className="text-center mt-20 text-gray-600">Loading...</div>;

  const question = questions[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#f1f5f9]">

      {!submitted && (
        <div className="w-full max-w-4xl p-10 bg-white border border-gray-200 rounded-lg shadow-sm">

          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[#1e3a8a] text-lg font-semibold tracking-wide">
              NEXCORE Institute Scholarship Examination
            </h2>

            {/* Timer */}
            <div className="relative w-14 h-14">
              <svg className="transform -rotate-90 w-14 h-14">
                <circle
                  cx="28"
                  cy="28"
                  r="22"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  fill="transparent"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="22"
                  stroke={timeLeft <= 10 ? "#dc2626" : "#1e3a8a"}
                  strokeWidth="5"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 22}
                  strokeDashoffset={2 * Math.PI * 22 * (1 - timeLeft / 30)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#0f172a]">
                {timeLeft}
              </div>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-[#0f172a] text-xl font-medium mb-8">
            Q{currentIndex + 1}. {question?.question}
          </h3>

          {/* Options */}
          <div className="flex flex-col gap-4">
            {question?.options?.map((opt: string, idx: number) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className={`w-full text-left px-5 py-3 rounded-md border transition ${
                  answers[currentIndex] === opt
                    ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                    : "bg-white text-[#0f172a] border-gray-300 hover:bg-gray-50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-10">
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-md font-medium bg-[#1e3a8a] hover:bg-[#162c66] text-white transition"
            >
              {currentIndex === questions.length - 1
                ? "Submit Exam"
                : "Next"}
            </button>
          </div>
        </div>
      )}

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white border border-gray-200 rounded-lg p-8 w-[380px] text-center shadow-sm">
            <h2 className="text-lg font-semibold text-[#0f172a] mb-4">
              Confirm Submission
            </h2>

            <p className="text-gray-600 mb-6">
              You are about to submit your examination.
            </p>

            <button
              onClick={confirmSubmit}
              className="w-full py-3 rounded-md bg-[#1e3a8a] hover:bg-[#162c66] text-white font-medium transition"
            >
              Confirm & Submit
            </button>
          </div>
        </div>
      )}

      {/* Success Screen */}
      {submitted && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">
            Exam Submitted Successfully
          </h2>
          <p className="text-gray-600">
            Thank you for completing the examination.
          </p>
        </div>
      )}
    </div>
  );
}
