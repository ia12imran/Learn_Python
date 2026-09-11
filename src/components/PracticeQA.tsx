"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { QAQuestion } from "@/data/types";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

const CodeEditor = dynamic(() => import("@/components/CodeEditor"), { ssr: false });

function EditorPlaceholder({ height }: { height: number }) {
  return (
    <div
      className="rounded-xl border border-gray-700 bg-[#282c34] flex items-center justify-center text-gray-400 text-sm"
      style={{ height }}
    >
      Loading code editor...
    </div>
  );
}

interface PracticeQAProps {
  questions: QAQuestion[];
}

function QuestionEditor({ q }: { q: QAQuestion }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount code editor only on the client
    setMounted(true);
  }, []);

  const initialCode = `# Question ${q.id}\n# Write and run your Python code below\n`;

  if (!mounted) return <EditorPlaceholder height={210} />;
  return <CodeEditor key={q.id} initialCode={initialCode} height="160px" />;
}

export default function PracticeQA({ questions }: PracticeQAProps) {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const total = questions.length;
  const q = questions[current];
  if (!q) return null;

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((c) => c - 1);
      setRevealed(false);
    }
  };

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent((c) => c + 1);
      setRevealed(false);
    }
  };

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">
          Question {current + 1} of {total}
        </span>
        <span className="text-xs text-gray-400">
          {Math.round(((current + 1) / total) * 100)}% complete
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col">
        <div className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Question #{q.id}</div>
        <p className="text-lg sm:text-xl font-medium leading-relaxed">{q.question}</p>
        <p className="text-sm text-slate-400 mt-3">Write and run code below to test your answer.</p>
      </div>

      {/* Code editor to write and run code */}
      <div className="mt-4">
        <QuestionEditor q={q} />
      </div>

      {/* Answer */}
      <div className="mt-4 flex items-center justify-between">
        {revealed ? (
          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <div className="text-xs text-emerald-600 font-semibold mb-1 uppercase tracking-wider">Answer</div>
              <p className="text-emerald-800">{q.answer}</p>
            </div>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition cursor-pointer"
            >
              <EyeOff size={18} /> Hide Answer
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition cursor-pointer"
          >
            <Eye size={18} /> Show Answer
          </button>
        )}
      </div>

      {/* Previous / Next navigation */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
        <button
          type="button"
          onClick={handlePrev}
          disabled={current === 0}
          className={`flex items-center gap-2 px-5 py-3 font-medium rounded-xl transition cursor-pointer ${
            current === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          <ChevronLeft size={18} /> Previous
        </button>
        <span className="text-sm text-gray-400">
          {current + 1} / {total}
        </span>
        <button
          type="button"
          onClick={handleNext}
          disabled={current === total - 1}
          className={`flex items-center gap-2 px-5 py-3 font-medium rounded-xl transition cursor-pointer ${
            current === total - 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}