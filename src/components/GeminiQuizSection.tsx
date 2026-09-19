import React, { useState, useEffect } from "react";
import { QuizQuestion } from "../types";
import { Sparkles, RefreshCw, CheckCircle2, XCircle, Award, BookOpen, AlertCircle, HelpCircle, ArrowRight, RotateCcw } from "lucide-react";

export const GeminiQuizSection: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("All Randomized Topics");
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const topics = [
    "All Randomized Topics",
    "Antimetabolites & Methotrexate",
    "Alkylating Agents & Mesna",
    "Cytotoxic Antibiotics & Dexrazoxane",
    "Microtubule Inhibitors (Vincas & Taxanes)",
    "Hormonal Therapy (Tamoxifen & AIs)",
    "Monoclonal Antibodies & Biologics",
    "Tyrosine Kinase Inhibitors (TKIs)",
    "Combination Chemotherapy Regimens",
    "Etiology, Risk Factors & Warning Signs"
  ];

  const fetchQuestions = async (topicToUse?: string) => {
    setLoading(true);
    setError(null);
    setUserAnswers({});
    setShowResults(false);

    try {
      const chosenTopic = topicToUse !== undefined ? topicToUse : selectedTopic;
      const res = await fetch("/api/generate-mcqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: chosenTopic === "All Randomized Topics" ? undefined : chosenTopic,
          count: 10
        })
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      if (data.questions && Array.isArray(data.questions)) {
        setQuestions(data.questions);
      } else {
        throw new Error("Invalid response format received from server");
      }
    } catch (err: any) {
      console.error("Failed to load Gemini MCQs:", err);
      setError("Failed to generate fresh MCQs. Using backup high-yield oncology question bank.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions("All Randomized Topics");
  }, []);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (userAnswers[questionIndex] !== undefined) return; // Answered already
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const totalAnswered = Object.keys(userAnswers).length;

  return (
    <div id="gemini-quiz-section" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500 animate-spin" />
            Gemini-Powered Live Assessment
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Interactive Oncology MCQ Generator (10 Questions)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Generates 10 dynamic multiple-choice questions randomized across the entire lecture notes, with instant feedback, explanations, and exact slide citations.
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <button
            id="generate-new-mcqs-btn"
            onClick={() => fetchQuestions()}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            <span>{loading ? "Generating with Gemini..." : "Generate 10 New Questions"}</span>
          </button>
        </div>
      </div>

      {/* Topic Filter selector */}
      <div className="py-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1">
          Topic Focus:
        </span>
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => {
              setSelectedTopic(t);
              fetchQuestions(t);
            }}
            disabled={loading}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedTopic === t
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Score Tracker Banner */}
      {totalAnswered > 0 && (
        <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-amber-500" />
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">
                Your Current Score
              </span>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {score} / {questions.length} Correct ({Math.round((score / (totalAnswered || 1)) * 100)}% of answered)
              </div>
            </div>
          </div>
          <div className="text-xs font-bold text-slate-500">
            {totalAnswered} of {questions.length} Answered
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && (
        <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
          <div className="h-10 w-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
            Gemini is reading the lecture slides and formulating 10 randomized clinical questions...
          </p>
          <p className="text-xs text-slate-500">
            Selecting random paragraphs, mechanisms, drug toxicity, and antidotes.
          </p>
        </div>
      )}

      {/* Error Notice */}
      {error && !loading && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0 text-amber-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Questions List */}
      {!loading && questions.length > 0 && (
        <div className="space-y-6 mt-4">
          {questions.map((q, qIdx) => {
            const hasAnswered = userAnswers[qIdx] !== undefined;
            const userAnswer = userAnswers[qIdx];
            const isCorrect = userAnswer === q.correctAnswerIndex;

            return (
              <div
                key={q.id || qIdx}
                className={`p-5 rounded-2xl border transition-all ${
                  hasAnswered
                    ? isCorrect
                      ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20"
                      : "border-rose-300 dark:border-rose-800 bg-rose-50/30 dark:bg-rose-950/20"
                    : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    Question {qIdx + 1} of {questions.length}
                  </span>
                  <div className="flex items-center gap-2">
                    {q.topic && (
                      <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                        {q.topic}
                      </span>
                    )}
                    {q.slideReference && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                        {q.slideReference}
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {q.question}
                </h3>

                {/* Options */}
                <div className="space-y-2 mb-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userAnswer === optIdx;
                    const isThisCorrect = optIdx === q.correctAnswerIndex;

                    let btnStyle = "border-slate-200 dark:border-slate-700 hover:border-slate-300 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200";

                    if (hasAnswered) {
                      if (isThisCorrect) {
                        btnStyle = "border-emerald-500 bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-100 font-bold";
                      } else if (isSelected && !isThisCorrect) {
                        btnStyle = "border-rose-500 bg-rose-100/70 dark:bg-rose-950/80 text-rose-950 dark:text-rose-100 font-medium";
                      } else {
                        btnStyle = "border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-400";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={hasAnswered}
                        onClick={() => handleSelectOption(qIdx, optIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="h-6 w-6 rounded-lg bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>

                        {hasAnswered && (
                          <span>
                            {isThisCorrect ? (
                              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                            ) : isSelected ? (
                              <XCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                            ) : null}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {hasAnswered && (
                  <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed space-y-1 animate-fade-in">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                      <BookOpen className="h-4 w-4 text-indigo-500" />
                      <span>Detailed Pharmacologic Rationale:</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{q.explanation}</p>
                    {q.slideReference && (
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 block pt-1">
                        Source Reference: {q.slideReference}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
