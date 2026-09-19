import React, { useState } from "react";
import { CHEMO_REGIMENS, CHEMOTHERAPY_MODALITIES } from "../data";
import { ChemoRegimen } from "../types";
import { FlaskConical, Stethoscope, ChevronRight, ShieldCheck, Clock, Layers } from "lucide-react";

export const RegimensMatrix: React.FC = () => {
  const [selectedCancer, setSelectedCancer] = useState<string>("all");

  const cancerTypes = Array.from(new Set(CHEMO_REGIMENS.map((r) => r.targetCancer)));

  const filteredRegimens =
    selectedCancer === "all"
      ? CHEMO_REGIMENS
      : CHEMO_REGIMENS.filter((r) => r.targetCancer === selectedCancer);

  return (
    <div className="space-y-8">
      {/* Chemotherapy Timing & Modalities */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-2">
            <Clock className="h-3.5 w-3.5" />
            Clinical Oncology Principles
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Chemotherapy Timing & Therapeutic Modalities
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Understanding why and when chemotherapeutic combinations are administered (preoperative vs postoperative vs maintenance).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHEMOTHERAPY_MODALITIES.slice(0, 4).map((mod) => (
            <div
              key={mod.id}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                  {mod.name.split("(")[1]?.replace(")", "") || "Modality"}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {mod.name.split("(")[0]}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {mod.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400">
                <strong>Example:</strong> {mod.clinicalExample}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regimens Matrix */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 mb-2">
              <FlaskConical className="h-3.5 w-3.5" />
              Multi-Agent Oncology Protocols
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Standard Combination Chemotherapy Regimens
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Complete catalog of famous clinical multi-agent cocktails taught across the oncology curriculum.
            </p>
          </div>

          {/* Cancer Type Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedCancer("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                selectedCancer === "all"
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              All Cancers ({CHEMO_REGIMENS.length})
            </button>
            {cancerTypes.map((cancer) => (
              <button
                key={cancer}
                onClick={() => setSelectedCancer(cancer)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  selectedCancer === cancer
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {cancer}
              </button>
            ))}
          </div>
        </div>

        {/* Regimens Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRegimens.map((regimen) => (
            <div
              key={regimen.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-5 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-base font-black px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white tracking-wide">
                    {regimen.acronym}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {regimen.targetCancer}
                  </span>
                </div>

                <h3 className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-3 line-clamp-2">
                  {regimen.fullName}
                </h3>

                {/* Agents List */}
                <div className="space-y-1.5 mb-4">
                  {regimen.agents.map((agent, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-black flex items-center justify-center text-[10px]">
                          {agent.symbol}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {agent.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {agent.brand}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                  {regimen.indicationDetails}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80 text-[11px] text-amber-800 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-950/20 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/60">
                <strong>Clinical Notes & Safety:</strong> {regimen.clinicalNotes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
