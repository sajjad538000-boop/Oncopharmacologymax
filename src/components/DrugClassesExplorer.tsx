import React, { useState, useMemo } from "react";
import { ALL_DRUG_CLASSES, ALL_DRUGS } from "../data";
import { Drug, DrugClass } from "../types";
import { DrugCard } from "./DrugCard";
import { DrugDetailModal } from "./DrugDetailModal";
import { Filter, Layers, Pill, ShieldCheck, Sparkles, Dna, Activity, Search } from "lucide-react";

interface DrugClassesExplorerProps {
  searchQuery: string;
  selectedDrugFromExternal?: string | null;
  onClearExternalSelect?: () => void;
}

export const DrugClassesExplorer: React.FC<DrugClassesExplorerProps> = ({
  searchQuery,
  selectedDrugFromExternal,
  onClearExternalSelect
}) => {
  const [selectedClassId, setSelectedClassId] = useState<string>("all");
  const [filterPhase, setFilterPhase] = useState<string>("all");
  const [onlyWithAntidotes, setOnlyWithAntidotes] = useState<boolean>(false);
  const [activeModalDrug, setActiveModalDrug] = useState<Drug | null>(null);

  // If selected from external (e.g. cell cycle visualizer)
  React.useEffect(() => {
    if (selectedDrugFromExternal) {
      const match = ALL_DRUGS.find(
        (d) =>
          d.name.toLowerCase().includes(selectedDrugFromExternal.toLowerCase()) ||
          selectedDrugFromExternal.toLowerCase().includes(d.name.toLowerCase())
      );
      if (match) {
        setActiveModalDrug(match);
      }
      if (onClearExternalSelect) onClearExternalSelect();
    }
  }, [selectedDrugFromExternal, onClearExternalSelect]);

  const phases = ["all", "S-Phase", "M-Phase", "G2-M Phase", "Non-Specific"];

  const filteredDrugs = useMemo(() => {
    return ALL_DRUGS.filter((drug) => {
      // Filter by class
      const matchesClass =
        selectedClassId === "all" || drug.classId === selectedClassId;

      // Filter by phase
      const matchesPhase =
        filterPhase === "all" ||
        (drug.cellCyclePhase &&
          drug.cellCyclePhase.toLowerCase().includes(filterPhase.toLowerCase()));

      // Filter by antidote
      const matchesAntidote = !onlyWithAntidotes || Boolean(drug.antidoteOrProtectiveAgent);

      // Search query filter (matches name, brand, mechanism, antidote, cancer)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        drug.name.toLowerCase().includes(q) ||
        (drug.brandNames && drug.brandNames.some((b) => b.toLowerCase().includes(q))) ||
        drug.mechanismOfAction.toLowerCase().includes(q) ||
        (drug.antidoteOrProtectiveAgent && drug.antidoteOrProtectiveAgent.toLowerCase().includes(q)) ||
        drug.therapeuticUses.some((u) => u.toLowerCase().includes(q)) ||
        (drug.subclass && drug.subclass.toLowerCase().includes(q));

      return matchesClass && matchesPhase && matchesAntidote && matchesSearch;
    });
  }, [selectedClassId, filterPhase, onlyWithAntidotes, searchQuery]);

  const activeDrugClass =
    selectedClassId === "all"
      ? null
      : ALL_DRUG_CLASSES.find((c) => c.id === selectedClassId);

  return (
    <div id="drug-classes-catalog" className="space-y-6">
      {/* Header & Class Tabs */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-2">
              <Pill className="h-3.5 w-3.5" />
              Complete Oncology Pharmacopeia
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              The 9 Anticancer Drug Classes (Groups I to IX)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
              Unabridged catalog of all 45+ antineoplastic agents across all 9 major pharmacologic classes, with exact mechanisms, brand names, antidotes, and slide references.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
              Showing {filteredDrugs.length} of {ALL_DRUGS.length} Drugs
            </span>
          </div>
        </div>

        {/* 9 Classes Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
          <button
            onClick={() => setSelectedClassId("all")}
            className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all flex items-center justify-between border ${
              selectedClassId === "all"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow"
                : "bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100"
            }`}
          >
            <span>All 9 Groups</span>
            <span className="text-[10px] opacity-70">({ALL_DRUGS.length})</span>
          </button>

          {ALL_DRUG_CLASSES.map((cls) => {
            const isSelected = selectedClassId === cls.id;
            const count = ALL_DRUGS.filter((d) => d.classId === cls.id).length;
            return (
              <button
                key={cls.id}
                onClick={() => setSelectedClassId(cls.id)}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all flex items-center justify-between border ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow"
                    : "bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-slate-300"
                }`}
              >
                <div className="truncate mr-1">
                  <span className="block text-[10px] font-mono opacity-80 uppercase">
                    Group {cls.romanNumeral}
                  </span>
                  <span className="truncate">{cls.title.split("(")[0]}</span>
                </div>
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Class Banner Details (if single class selected) */}
        {activeDrugClass && (
          <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 mb-6 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-600 text-white uppercase">
                Group {activeDrugClass.romanNumeral} Overview
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                {activeDrugClass.title}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeDrugClass.shortDesc}
            </p>
            {activeDrugClass.keyHighlights && (
              <div className="pt-1 flex flex-wrap gap-2 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
                {activeDrugClass.keyHighlights.map((hl, i) => (
                  <span key={i} className="bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    ✓ {hl}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Secondary Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-500">Cell Cycle:</span>
            {phases.map((p) => (
              <button
                key={p}
                onClick={() => setFilterPhase(p)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  filterPhase === p
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                }`}
              >
                {p === "all" ? "All Phases" : p}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOnlyWithAntidotes((prev) => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all border ${
              onlyWithAntidotes
                ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Has Antidote / Rescue Only</span>
          </button>
        </div>
      </div>

      {/* Drugs Grid */}
      {filteredDrugs.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDrugs.map((drug) => {
            const cls = ALL_DRUG_CLASSES.find((c) => c.id === drug.classId);
            return (
              <DrugCard
                key={drug.id}
                drug={drug}
                drugClass={cls}
                onViewDetails={(d) => setActiveModalDrug(d)}
              />
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <Pill className="h-10 w-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            No drugs match the current filters
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Try resetting your search query, cell cycle phase, or class selection.
          </p>
          <button
            onClick={() => {
              setSelectedClassId("all");
              setFilterPhase("all");
              setOnlyWithAntidotes(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Full Drug Detail Monograph Modal */}
      <DrugDetailModal
        drug={activeModalDrug}
        onClose={() => setActiveModalDrug(null)}
      />
    </div>
  );
};
