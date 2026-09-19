import React, { useState, useEffect } from "react";
import {
  Sparkles,
  X,
  Key,
  Eye,
  EyeOff,
  ExternalLink,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sliders,
  HelpCircle,
  Stethoscope,
  BookOpen,
  Award,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Target
} from "lucide-react";
import { QuizQuestion } from "../types";
import { generateQuiz, getCuratedQuestions } from "../services/quizService";

export const FloatingQuizGenerator: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<"config" | "loading" | "quiz" | "results">("config");

  // User configuration states
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [count, setCount] = useState<number>(10);
  const [questionType, setQuestionType] = useState<"direct" | "clinical" | "mixed">("mixed");
  const [selectedTopic, setSelectedTopic] = useState<string>("All Topics");

  // Quiz execution states
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [error, setError] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [showErrorDetails, setShowErrorDetails] = useState<boolean>(false);

  // Load saved API key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem("visitor_gemini_api_key");
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const topicsList = [
    { id: "All Topics", label: "جميع مواضيع المحاضرة (شامل - 88 شريحة)" },
    { id: "Antimetabolites & Methotrexate", label: "مضادات الأيض (Methotrexate, 5-FU, 6-MP)" },
    { id: "Alkylating Agents & Mesna", label: "العوامل المؤلكلة ووقاية المثانة (Cyclophosphamide, Cisplatin, Mesna)" },
    { id: "Cytotoxic Antibiotics & Dexrazoxane", label: "المضادات الحيوية الخلوية وحماية القلب (Anthracyclines, Bleomycin)" },
    { id: "Microtubule Inhibitors (Vincas & Taxanes)", label: "مثبطات الأنيبيبات الدقيقة (Vincristine, Paclitaxel)" },
    { id: "Hormonal Therapy (Tamoxifen & AIs)", label: "العلاج الهرموني (Tamoxifen, Aromatase Inhibitors)" },
    { id: "Monoclonal Antibodies & Biologics", label: "الأجسام المضادة وحيدة النسيلة (Rituximab, Trastuzumab, Bevacizumab)" },
    { id: "Tyrosine Kinase Inhibitors (TKIs)", label: "مثبطات التيروزين كينيز (Imatinib, Erlotinib)" },
    { id: "Combination Chemotherapy Regimens", label: "الأنظمة الكيميائية المركبة (MOPP, ABVD, CHOP, FOLFOX)" },
    { id: "Etiology, Risk Factors & Warning Signs", label: "أسباب السرطان، عوامل الخطر، وعلامات الإنذار المبكر" }
  ];

  const [quizSource, setQuizSource] = useState<string>("gemini_ai");

  const handleStartGeneration = async () => {
    const trimmedKey = apiKey.trim().replace(/^["']|["']$/g, "");
    if (!trimmedKey) {
      setError("حقل مفتاح API إلزامي لتوليد أسئلة متجددة بالذكاء الاصطناعي، أو يمكنك استخدام بنك الأسئلة المعتمد أدناه مباشرة.");
      setErrorDetails(null);
      return;
    }

    // Save key locally for convenience
    localStorage.setItem("visitor_gemini_api_key", trimmedKey);
    setError(null);
    setErrorDetails(null);
    setShowErrorDetails(false);
    setStep("loading");
    setUserAnswers({});
    setCurrentIndex(0);

    try {
      const result = await generateQuiz({
        apiKey: trimmedKey,
        count,
        questionType,
        topic: selectedTopic === "All Topics" ? undefined : selectedTopic
      });

      if (result.success && Array.isArray(result.questions) && result.questions.length > 0) {
        setQuestions(result.questions);
        setQuizSource(result.source);
        setStep("quiz");
      } else {
        throw new Error(result.error || "لم تصل أسئلة صالحة من النموذج، يرجى إعادة المحاولة.");
      }
    } catch (err: any) {
      console.error("Quiz generation error:", err);
      setError(err.message || "حدث خطأ أثناء معالجة الطلب عبر الذكاء الاصطناعي.");
      if (err.rawDetails) {
        setErrorDetails(err.rawDetails);
      }
      setStep("config");
    }
  };

  const handleUseCuratedBank = () => {
    setError(null);
    setErrorDetails(null);
    setShowErrorDetails(false);
    setStep("loading");
    setUserAnswers({});
    setCurrentIndex(0);

    try {
      // Direct local extraction - works instantly on Netlify and offline!
      const loadedQuestions = getCuratedQuestions(
        count,
        selectedTopic === "All Topics" ? undefined : selectedTopic,
        questionType
      );

      if (Array.isArray(loadedQuestions) && loadedQuestions.length > 0) {
        setQuestions(loadedQuestions);
        setQuizSource("curated_archive");
        setStep("quiz");
      } else {
        throw new Error("تعذر تحميل بنك الأسئلة المعتمد.");
      }
    } catch (err: any) {
      setError(err.message || "تعذر تحميل بنك الأسئلة المعتمد.");
      setStep("config");
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    if (userAnswers[currentIndex] !== undefined) return; // Answered already
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
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

  const currentQ = questions[currentIndex];
  const isAnswered = userAnswers[currentIndex] !== undefined;
  const isCorrect = isAnswered && userAnswers[currentIndex] === currentQ?.correctAnswerIndex;
  const score = calculateScore();

  return (
    <>
      {/* 1. Floating Action Button (FAB) at Bottom-Right */}
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
        <button
          id="floating-ai-quiz-btn"
          onClick={() => {
            setIsOpen(true);
            setError(null);
          }}
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
          title="توليد أسئلة واختبارات بالذكاء الاصطناعي (Gemini)"
          aria-label="مولد الأسئلة التفاعلي بالذكاء الاصطناعي"
        >
          <div className="relative">
            <Sparkles className="h-5 w-5 text-amber-300 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
            </span>
          </div>
          <span className="font-bold text-xs sm:text-sm tracking-wide">مولد الأسئلة AI</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-white/20 text-white">
            Gemini
          </span>
        </button>
      </div>

      {/* 2. Interactive Modal Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-900/70">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>مولد الأسئلة التفاعلي بالذكاء الاصطناعي</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    أسئلة وحالات سريرية مخصصة ومولدة فورياً عبر Gemini
                  </p>
                </div>
              </div>

              <button
                id="close-quiz-modal-btn"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="إغلاق النافذة"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* STEP 1: CONFIGURATION */}
              {step === "config" && (
                <div className="space-y-6">
                  {/* Error Notification */}
                  {error && (
                    <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 text-xs sm:text-sm space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="h-4 w-4 text-rose-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 font-semibold leading-relaxed">
                          {error}
                        </div>
                      </div>

                      {/* Technical Details Accordion */}
                      {errorDetails && (
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={() => setShowErrorDetails(!showErrorDetails)}
                            className="text-[11px] text-rose-600 dark:text-rose-400 underline font-medium hover:text-rose-800 dark:hover:text-rose-300 flex items-center gap-1"
                          >
                            <span>{showErrorDetails ? "إخفاء التفاصيل الفنية للخطأ" : "عرض التفاصيل الفنية للخطأ (Technical Details)"}</span>
                          </button>
                          {showErrorDetails && (
                            <div className="mt-2 p-2.5 rounded-lg bg-black/10 dark:bg-black/30 font-mono text-[11px] text-slate-800 dark:text-slate-300 overflow-x-auto break-all select-all">
                              {errorDetails}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Instant Fallback Button */}
                      <div className="pt-1.5 border-t border-rose-200/60 dark:border-rose-900/60 flex items-center justify-between">
                        <span className="text-[11px] text-slate-600 dark:text-slate-400">لا ترغب باستخدام مفتاح API الآن؟</span>
                        <button
                          type="button"
                          onClick={handleUseCuratedBank}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                        >
                          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                          <span>ابدأ بأسئلة السلايدات المعتمدة فوراً</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 1. Mandatory Visitor API Key Field */}
                  <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Key className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <span>مفتاح Gemini API الخاص بك</span>
                        <span className="text-rose-600 dark:text-rose-400 font-bold text-xs">* (إلزامي للتوليد الحي)</span>
                      </label>

                      <a
                        href="https://aistudio.google.com/app/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>احصل على مفتاح مجاني</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      لكي لا تتأثر الحصة الشخصية لحساب المنصة، يتطلب التوليد إدخال مفتاح Gemini API المجاني الخاص بك. يتم حفظ المفتاح في متصفحك محلياً فقط (Local Storage) دون مشاركته.
                    </p>

                    <div className="relative">
                      <input
                        id="visitor-api-key-input"
                        type={showApiKey ? "text" : "password"}
                        value={apiKey}
                        onChange={(e) => {
                          setApiKey(e.target.value.trim());
                          if (error) setError(null);
                        }}
                        placeholder="الصق مفتاحك هنا (مثال: AIzaSy...)"
                        className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                      />
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <button
                        type="button"
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        title={showApiKey ? "إخفاء المفتاح" : "إظهار المفتاح"}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                      <span>💡 نصيحة: تأكد من نسخ المفتاح كاملاً بدون مسافات إضافية.</span>
                      <button
                        type="button"
                        onClick={handleUseCuratedBank}
                        className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                      >
                        أو تصفح بنك الأسئلة بدون مفتاح
                      </button>
                    </div>
                  </div>

                  {/* 2. Number of Questions */}
                  <div className="space-y-2.5">
                    <label className="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <Target className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>عدد الأسئلة المطلوب توليدها:</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[5, 10, 15, 20].map((num) => (
                        <button
                          key={num}
                          type="button"
                          id={`question-count-${num}`}
                          onClick={() => setCount(num)}
                          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                            count === num
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750"
                          }`}
                        >
                          {num} أسئلة
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Question Type Selector */}
                  <div className="space-y-2.5">
                    <label className="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <Sliders className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      <span>نوع الأسئلة (Question Style):</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {/* Direct Questions */}
                      <button
                        type="button"
                        id="type-direct-btn"
                        onClick={() => setQuestionType("direct")}
                        className={`p-3.5 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                          questionType === "direct"
                            ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 ring-2 ring-emerald-500/20"
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <BookOpen className={`h-5 w-5 ${questionType === "direct" ? "text-emerald-600" : "text-slate-400"}`} />
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${questionType === "direct" ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}>
                            مباشرة
                          </span>
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">أسئلة مباشرة</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                            آليات العمل، الإنزيمات، مضادات التسمم، وتصنيفات الأدوية.
                          </div>
                        </div>
                      </button>

                      {/* Clinical Cases */}
                      <button
                        type="button"
                        id="type-clinical-btn"
                        onClick={() => setQuestionType("clinical")}
                        className={`p-3.5 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                          questionType === "clinical"
                            ? "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-500 ring-2 ring-indigo-500/20"
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Stethoscope className={`h-5 w-5 ${questionType === "clinical" ? "text-indigo-600" : "text-slate-400"}`} />
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${questionType === "clinical" ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}>
                            سريرية
                          </span>
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">حالات سريرية</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                            سيناريوهات مرضى واقعية، اختيار العلاج، وتدبير السمية.
                          </div>
                        </div>
                      </button>

                      {/* Mixed Questions */}
                      <button
                        type="button"
                        id="type-mixed-btn"
                        onClick={() => setQuestionType("mixed")}
                        className={`p-3.5 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                          questionType === "mixed"
                            ? "bg-teal-50 dark:bg-teal-950/30 border-teal-500 ring-2 ring-teal-500/20"
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Sparkles className={`h-5 w-5 ${questionType === "mixed" ? "text-teal-600" : "text-slate-400"}`} />
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${questionType === "mixed" ? "bg-teal-600 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}>
                            مختلط 50/50
                          </span>
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">مختلط (شامل)</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                            توازن بين الاستذكار المباشر والحالات السريرية المعقدة.
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* 4. Optional Topic Selection */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-slate-500" />
                      <span>تركيز الموضوع (اختياري):</span>
                    </label>
                    <select
                      id="topic-select"
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {topicsList.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: LOADING ANIMATION */}
              {step === "loading" && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 animate-pulse">
                      <RefreshCw className="h-8 w-8 animate-spin" />
                    </div>
                  </div>
                  <div className="space-y-1.5 max-w-md">
                    <h4 className="text-base font-black text-slate-900 dark:text-white">
                      جاري صياغة الأسئلة بواسطة Gemini AI...
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      يتم الآن استرجاع وتحليل سلايدات المحاضرة وصياغة {count} أسئلة بنمط ({questionType === "direct" ? "مباشر" : questionType === "clinical" ? "حالات سريرية" : "مختلط"}) مع التفسيرات المرجعية.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 3: INTERACTIVE QUIZ QUESTIONS */}
              {step === "quiz" && currentQ && (
                <div className="space-y-5">
                  {/* Question header info */}
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                        السؤال {currentIndex + 1} من {questions.length}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {currentQ.questionType === "clinical" ? "حالة سريرية 🩺" : "سؤال مباشر 🎯"}
                      </span>
                      {quizSource === "curated_archive" ? (
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          بنك السلايدات المعتمد ✨
                        </span>
                      ) : (
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                          Gemini AI ⚡
                        </span>
                      )}
                    </div>

                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                      {currentQ.slideReference}
                    </span>
                  </div>

                  {/* Question text */}
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                    {currentQ.question}
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5 pt-1">
                    {currentQ.options.map((option, optIdx) => {
                      const selected = userAnswers[currentIndex] === optIdx;
                      const isOptionCorrect = optIdx === currentQ.correctAnswerIndex;

                      let btnStyle = "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200";

                      if (isAnswered) {
                        if (isOptionCorrect) {
                          btnStyle = "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500/20";
                        } else if (selected && !isOptionCorrect) {
                          btnStyle = "bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-100 font-bold";
                        } else {
                          btnStyle = "opacity-50 bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-500";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          id={`option-${currentIndex}-${optIdx}`}
                          onClick={() => handleSelectOption(optIdx)}
                          disabled={isAnswered}
                          className={`w-full p-3.5 sm:p-4 rounded-xl border text-right text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <span className="leading-normal">{option}</span>
                          {isAnswered && isOptionCorrect && (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          )}
                          {isAnswered && selected && !isOptionCorrect && (
                            <XCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation card after answering */}
                  {isAnswered && (
                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2 animate-in fade-in duration-200">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>إجابة صحيحة وممتازة!</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
                            <XCircle className="h-4 w-4" />
                            <span>إجابة غير دقيقة</span>
                          </div>
                        )}
                        <span className="text-[11px] text-slate-400 font-mono mr-auto">
                          {currentQ.topic}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: RESULTS SUMMARY */}
              {step === "results" && (
                <div className="py-6 space-y-6 text-center">
                  <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                    <Award className="h-10 w-10 text-amber-300" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">
                      اكتمل الاختبار بنجاح!
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      نتيجتك الإجمالية بناءً على الإجابات المسجلة
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 max-w-xs mx-auto">
                    <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                      {score} / {questions.length}
                    </div>
                    <div className="text-xs font-bold text-slate-500 mt-1">
                      نسبة الإتقان: {Math.round((score / questions.length) * 100)}%
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setUserAnswers({});
                        setCurrentIndex(0);
                        setStep("quiz");
                      }}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>إعادة محاولة نفس الأسئلة</span>
                    </button>

                    <button
                      onClick={() => setStep("config")}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:from-emerald-500 hover:to-indigo-500 transition-all flex items-center gap-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>توليد أسئلة جديدة أو تعديل الإعدادات</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="px-5 py-3.5 sm:px-6 sm:py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 flex items-center justify-between">
              {step === "config" && (
                <>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    >
                      إلغاء
                    </button>

                    <button
                      type="button"
                      onClick={handleUseCuratedBank}
                      className="hidden sm:flex px-3.5 py-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-xl border border-emerald-300 dark:border-emerald-800 items-center gap-1.5 transition-all"
                      title="بدء الاختبار فوراً باستخدام الأسئلة المعتمدة المحفوظة دون الحاجة لـ API"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>بنك الأسئلة المعتمد</span>
                    </button>
                  </div>

                  <button
                    id="start-quiz-btn"
                    onClick={handleStartGeneration}
                    disabled={!apiKey.trim()}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:from-emerald-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>بدء توليد الاختبار بالذكاء الاصطناعي 🚀</span>
                  </button>
                </>
              )}

              {step === "quiz" && (
                <>
                  <button
                    onClick={() => {
                      if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
                    }}
                    disabled={currentIndex === 0}
                    className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-30 flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span>السابق</span>
                  </button>

                  <button
                    onClick={() => setStep("config")}
                    className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium"
                  >
                    تغيير الإعدادات
                  </button>

                  {currentIndex < questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex((prev) => prev + 1)}
                      disabled={!isAnswered}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold disabled:opacity-40 flex items-center gap-1.5"
                    >
                      <span>التالي</span>
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setStep("results")}
                      disabled={!isAnswered}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 text-white text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 shadow-sm"
                    >
                      <span>عرض النتيجة</span>
                      <Award className="h-4 w-4" />
                    </button>
                  )}
                </>
              )}

              {step === "results" && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="mr-auto px-4 py-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  إغلاق النافذة
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
