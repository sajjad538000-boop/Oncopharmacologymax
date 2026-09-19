import React from "react";
import { Drug } from "../types";
import { X, ShieldAlert, ShieldCheck, Pill, Dna, Activity, HeartCrack, Info, Clock, AlertCircle } from "lucide-react";

interface DrugDetailModalProps {
  drug: Drug | null;
  onClose: () => void;
}

export const DrugDetailModal: React.FC<DrugDetailModalProps> = ({ drug, onClose }) => {
  if (!drug) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {drug.subclass || "Anticancer Monograph"}
              </span>
              {drug.cellCyclePhase && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                  {drug.cellCyclePhase}
                </span>
              )}
              {drug.slideRef && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {drug.slideRef}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {drug.name}
            </h2>
            {drug.phonetic && (
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5">
                Pronunciation: {drug.phonetic}
              </p>
            )}
            {drug.brandNames && drug.brandNames.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-xs font-bold text-slate-500">Brands:</span>
                {drug.brandNames.map((brand, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Antidote / Protection Highlight Banner */}
          {drug.antidoteOrProtectiveAgent && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-emerald-900 dark:text-emerald-200 text-sm">
                  Protective Antidote / Rescue Agent
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mt-0.5 font-medium">
                  {drug.antidoteOrProtectiveAgent}
                </p>
              </div>
            </div>
          )}

          {/* FDA Black Box Warnings */}
          {drug.fdaWarnings && drug.fdaWarnings.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-amber-900 dark:text-amber-200 text-sm">
                  Boxed Warning / Urgent Clinical Alert
                </h4>
                {drug.fdaWarnings.map((warn, i) => (
                  <p key={i} className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 font-medium">
                    {warn}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Mechanism of Action */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 mb-2">
              <Dna className="h-4 w-4 text-emerald-600" />
              Mechanism of Action (Unabridged)
            </h3>
            <p className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              {drug.mechanismOfAction}
            </p>
            {drug.mechanismPoints && drug.mechanismPoints.length > 0 && (
              <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs sm:text-sm pl-2 text-slate-600 dark:text-slate-400">
                {drug.mechanismPoints.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Therapeutic Uses */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-indigo-600" />
              Therapeutic Indications & Cancers
            </h3>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <ul className="space-y-1.5">
                {drug.therapeuticUses.map((use, idx) => (
                  <li key={idx} className="text-xs sm:text-sm flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side Effects & Adverse Events */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <Info className="h-4 w-4 text-blue-500" />
                Common Adverse Effects
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                {drug.commonSideEffects.map((se, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-blue-500">•</span>
                    <span>{se}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900">
              <h4 className="font-bold text-rose-900 dark:text-rose-300 text-sm mb-2 flex items-center gap-1.5">
                <HeartCrack className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                Severe / Dose-Limiting Toxicities
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm text-rose-800 dark:text-rose-300">
                {drug.severeSideEffects.map((se, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-500">⚠</span>
                    <span>{se}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pharmacokinetics & Pharmacogenomics */}
          {drug.pharmacokinetics && (
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-amber-500" />
                Pharmacokinetics & Pharmacogenomics
              </h3>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm space-y-2">
                {drug.pharmacokinetics.absorption && (
                  <p><strong>Absorption & Administration:</strong> {drug.pharmacokinetics.absorption}</p>
                )}
                {drug.pharmacokinetics.distribution && (
                  <p><strong>Distribution:</strong> {drug.pharmacokinetics.distribution}</p>
                )}
                {drug.pharmacokinetics.metabolism && (
                  <p><strong>Metabolism:</strong> {drug.pharmacokinetics.metabolism}</p>
                )}
                {drug.pharmacokinetics.excretion && (
                  <p><strong>Excretion:</strong> {drug.pharmacokinetics.excretion}</p>
                )}
                {drug.pharmacokinetics.pharmacogenomics && (
                  <div className="mt-2 p-2.5 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300">
                    <strong>Pharmacogenomic Biomarker:</strong> {drug.pharmacokinetics.pharmacogenomics}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Drug Interactions & Resistance */}
          {(drug.drugInteractions || drug.resistanceMechanisms) && (
            <div className="grid md:grid-cols-2 gap-4">
              {drug.drugInteractions && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Key Drug Interactions</h4>
                  <ul className="space-y-1">
                    {drug.drugInteractions.map((inter, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400">• {inter}</li>
                    ))}
                  </ul>
                </div>
              )}

              {drug.resistanceMechanisms && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Mechanisms of Resistance</h4>
                  <ul className="space-y-1">
                    {drug.resistanceMechanisms.map((res, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400">• {res}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Administration Routes */}
          {drug.administration && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold text-slate-500">Allowed Routes:</span>
              {drug.administration.map((route, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {route}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 transition-colors"
          >
            Close Monograph
          </button>
        </div>
      </div>
    </div>
  );
};
