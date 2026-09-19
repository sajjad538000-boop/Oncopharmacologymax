import React, { useState } from "react";
import { CELL_CYCLE_PHASES, PATHOPHYSIOLOGY_INFO } from "../data";
import { CellCyclePhase } from "../types";
import { Activity, ShieldAlert, Zap, Clock, CheckCircle2, ChevronRight, Dna } from "lucide-react";

interface CellCycleVisualizerProps {
  onSelectDrugName?: (drugName: string) => void;
}

export const CellCycleVisualizer: React.FC<CellCycleVisualizerProps> = ({ onSelectDrugName }) => {
  const [activePhaseId, setActivePhaseId] = useState<string>("phase-s");

  const activePhase = CELL_CYCLE_PHASES.find((p) => p.id === activePhaseId) || CELL_CYCLE_PHASES[3];

  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm">
      {/* Title & Concept */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 mb-2">
            <Activity className="h-3.5 w-3.5" />
            Cell Cycle & Checkpoint Targeting
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            The Eukaryotic Cell Cycle & Pharmacologic Targets
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            Interactive map of cell cycle phases (G0, G1, S, G2, M) and critical molecular checkpoints (G1/S & G2/M). Select a phase to see the exact antineoplastic agents and regulatory kinases acting on it.
          </p>
        </div>

        {/* Gene classes quick reference badge */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 max-w-xs">
          <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
            <Dna className="h-4 w-4 text-emerald-500" />
            2 Key Carcinogenic Gene Classes:
          </div>
          <p className="line-clamp-2">
            <strong>Oncogenes (OCGs)</strong>: Gain of function (HER family, EGFR).<br />
            <strong>Tumor Suppressors (TSGs)</strong>: Loss of function (p53, Rb).
          </p>
        </div>
      </div>

      {/* Interactive Phase Track / Wheel */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-6">
        {CELL_CYCLE_PHASES.map((phase) => {
          const isSelected = phase.id === activePhaseId;
          return (
            <button
              key={phase.id}
              onClick={() => setActivePhaseId(phase.id)}
              className={`text-left p-3 rounded-xl border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? "border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/50 shadow-md ring-2 ring-indigo-500/30"
                  : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  {phase.shortName}
                </span>
                {isSelected && (
                  <span className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping" />
                )}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                {phase.phaseName}
              </div>
              <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span className="truncate">{phase.timing}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Phase Inspection Box */}
      <div className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/60 dark:to-indigo-950/20 border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="space-y-4 max-w-2xl">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-600 text-white">
                  {activePhase.shortName} Phase Detail
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {activePhase.timing}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                {activePhase.phaseName}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                {activePhase.description}
              </p>
            </div>

            {/* Molecular Regulators & Checkpoint Details */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Molecular Regulators & Cyclins
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  {activePhase.molecularRegulators}
                </p>
              </div>

              {activePhase.checkpointDetails && (
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                  <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1 flex items-center gap-1">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    Checkpoint Function
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {activePhase.checkpointDetails}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Antineoplastic Drugs Acting in this phase */}
          <div className="lg:w-80 flex-shrink-0 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-emerald-500" />
              Anticancer Drugs Acting Here ({activePhase.drugsActingHere.length})
            </h4>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {activePhase.drugsActingHere.map((drugName, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectDrugName && onSelectDrugName(drugName)}
                  className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-800 dark:text-slate-200 flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <span className="font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {drugName}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
