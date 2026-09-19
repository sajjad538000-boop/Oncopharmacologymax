import React, { useState } from "react";
import { CANCER_OVERVIEW, WARNING_SIGNS } from "../data";
import { AlertOctagon, ShieldAlert, Sparkles, BookOpen, Cigarette, Wine, Utensils, Zap, Radiation, HeartPulse, Stethoscope, CheckCircle2 } from "lucide-react";

export const OverviewSection: React.FC = () => {
  const [warningTab, setWarningTab] = useState<"adult" | "child">("adult");

  const adultSigns = WARNING_SIGNS.filter((s) => s.category === "adult_7_signs");
  const childSigns = WARNING_SIGNS.filter((s) => s.category === "child_8_signs");

  return (
    <div className="space-y-8">
      {/* Hero Definition & Lippincott Principle */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <BookOpen className="h-3.5 w-3.5" />
            Core Oncology Principles • Lippincott p. 457
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            {CANCER_OVERVIEW.definition.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {CANCER_OVERVIEW.definition.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs">
              <span className="font-bold text-emerald-400 block mb-1">Neoplasm / Tumor:</span>
              <p className="text-slate-300">{CANCER_OVERVIEW.definition.tumorDefinition}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs">
              <span className="font-bold text-indigo-400 block mb-1">Metastasis vs Benign:</span>
              <p className="text-slate-300">{CANCER_OVERVIEW.definition.metastasisVsBenign}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 leading-relaxed">
            <span className="font-extrabold block text-emerald-300 mb-1">
              The Fundamental Dilemma of Cancer Chemotherapy:
            </span>
            {CANCER_OVERVIEW.definition.lippincottPrinciple}
          </div>
        </div>
      </div>

      {/* Epidemiology & Stats Grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">US Mortality Rank</span>
            <h3 className="text-xl font-black text-rose-600 dark:text-rose-400 mt-1">
              2nd Leading Cause of Death
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              Second only to cardiovascular disease in annual mortality rates.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">4 Most Common Cancers</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {CANCER_OVERVIEW.epidemiology.fourCommonCancers.map((c, i) => (
                <span key={i} className="px-2 py-1 rounded-md text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deadliest Malignancy</span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
              Lung Cancer
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              {CANCER_OVERVIEW.epidemiology.deadliestCancer}
            </p>
          </div>
        </div>
      </div>

      {/* Etiology & Risk Factors Breakdown */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 mb-2">
            <Zap className="h-3.5 w-3.5" />
            Etiology & Carcinogenesis
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Environmental (90–95%) vs Hereditary (5–10%) Etiology
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            {CANCER_OVERVIEW.etiology.statement} {CANCER_OVERVIEW.etiology.percentages.environmental} {CANCER_OVERVIEW.etiology.percentages.hereditary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CANCER_OVERVIEW.riskFactors.map((factor, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                  Factor #{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {factor.name}
                </h4>
                <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">
                  {factor.stats}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {factor.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning Signs (Adult C-A-U-T-I-O-N vs Pediatric 8 Signs) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 mb-2">
              <AlertOctagon className="h-3.5 w-3.5" />
              Clinical Early Detection
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Recognizing Cancer Warning Signs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Comparison between adult American Cancer Society signs (C-A-U-T-I-O-N) and the 8 Pediatric Warning Signs (Slide 19).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setWarningTab("adult")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                warningTab === "adult"
                  ? "bg-rose-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              7 Adult Signs (C-A-U-T-I-O-N)
            </button>
            <button
              onClick={() => setWarningTab("child")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                warningTab === "child"
                  ? "bg-rose-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              8 Pediatric Signs (Slide 19)
            </button>
          </div>
        </div>

        {warningTab === "adult" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adultSigns.map((sign) => (
              <div
                key={sign.id}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 relative overflow-hidden"
              >
                <span className="text-3xl font-black text-rose-500/20 absolute top-2 right-3 select-none">
                  {sign.mnemonicLetter}
                </span>
                <span className="h-7 w-7 rounded-lg bg-rose-600 text-white font-black flex items-center justify-center text-sm mb-2">
                  {sign.mnemonicLetter}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {sign.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                  {sign.description}
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-rose-700 dark:text-rose-400 font-semibold">
                  {sign.highRiskSymptoms}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {childSigns.map((sign, idx) => (
              <div
                key={sign.id}
                className="p-4 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 relative overflow-hidden"
              >
                <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 block mb-1">
                  Child Sign #{idx + 1}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {sign.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                  {sign.description}
                </p>
                <div className="pt-2 border-t border-indigo-200 dark:border-indigo-800 text-[11px] text-indigo-700 dark:text-indigo-300 font-semibold">
                  High suspicion: {sign.highRiskSymptoms}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chemoprevention Recommendations */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          Evidence-Based Chemoprevention Recommendations (Slides 14 & 15)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CANCER_OVERVIEW.prevention.keyRecommendations.map((rec, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                Recommendation #{i + 1}
              </span>
              {rec}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
