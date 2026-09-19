import React from "react";
import { Drug, DrugClass } from "../types";
import { AlertTriangle, ShieldCheck, Pill, ArrowRight, Dna, FileText } from "lucide-react";

interface DrugCardProps {
  drug: Drug;
  drugClass?: DrugClass;
  onViewDetails: (drug: Drug) => void;
}

export const DrugCard: React.FC<DrugCardProps> = ({ drug, drugClass, onViewDetails }) => {
  return (
    <div
      id={`drug-card-${drug.id}`}
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between hover:border-emerald-500/50 dark:hover:border-emerald-500/40 group"
    >
      <div>
        {/* Header: Subclass & Phase Badge */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 truncate max-w-[170px]">
            {drug.subclass || drugClass?.title || "Antineoplastic"}
          </span>
          {drug.cellCyclePhase && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
              {drug.cellCyclePhase}
            </span>
          )}
        </div>

        {/* Drug Name & Brand */}
        <div className="mb-2">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {drug.name}
          </h3>
          {drug.phonetic && (
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block -mt-0.5">
              {drug.phonetic}
            </span>
          )}
          {drug.brandNames && drug.brandNames.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {drug.brandNames.map((brand, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-1.5 py-0.5 rounded"
                >
                  {brand}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Mechanism of Action Summary */}
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-3 leading-relaxed">
          {drug.mechanismOfAction}
        </p>

        {/* Highlight Badges (Antidote & Black Box) */}
        <div className="space-y-1.5 mb-3">
          {drug.antidoteOrProtectiveAgent && (
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-start gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="line-clamp-2">
                <strong>Rescue / Protection:</strong> {drug.antidoteOrProtectiveAgent}
              </span>
            </div>
          )}

          {drug.fdaWarnings && drug.fdaWarnings.length > 0 && (
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
              <span className="line-clamp-2">
                <strong>Critical Warning:</strong> {drug.fdaWarnings[0]}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Details Button */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-2">
        <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
          {drug.slideRef || "Slide Data"}
        </span>
        <button
          id={`view-drug-btn-${drug.id}`}
          onClick={() => onViewDetails(drug)}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
        >
          <span>Complete Profile</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
