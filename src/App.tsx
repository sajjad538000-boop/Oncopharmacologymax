import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { OverviewSection } from "./components/OverviewSection";
import { CellCycleVisualizer } from "./components/CellCycleVisualizer";
import { DrugClassesExplorer } from "./components/DrugClassesExplorer";
import { RegimensMatrix } from "./components/RegimensMatrix";
import { DietarySection } from "./components/DietarySection";
import { FloatingQuizGenerator } from "./components/FloatingQuizGenerator";
import {
  BookOpen,
  Activity,
  Pill,
  FlaskConical,
  Heart
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [activeTab, setActiveTab] = useState<string>("overview");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDrugExternal, setSelectedDrugExternal] = useState<string | null>(null);

  // Sync dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // When searching, switch directly to drugs catalog if query entered
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0 && activeTab !== "drugs" && activeTab !== "superfoods") {
      setActiveTab("drugs");
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectDrugFromVisualizer = (drugName: string) => {
    setSelectedDrugExternal(drugName);
    handleTabChange("drugs");
  };

  const navItems = [
    {
      id: "overview",
      label: "Overview & Signs",
      shortLabel: "Overview",
      icon: BookOpen,
      badge: "Lippincott p.457"
    },
    {
      id: "cell-cycle",
      label: "Cell Cycle & Checkpoints",
      shortLabel: "Cell Cycle",
      icon: Activity,
      badge: "G0-M Phases"
    },
    {
      id: "drugs",
      label: "9 Drug Classes Catalog",
      shortLabel: "45+ Drugs",
      icon: Pill,
      badge: "Groups I–IX"
    },
    {
      id: "regimens",
      label: "Combination Regimens",
      shortLabel: "Regimens",
      icon: FlaskConical,
      badge: "15 Protocols"
    },
    {
      id: "superfoods",
      label: "94 Dietary Superfoods",
      shortLabel: "Superfoods",
      icon: Heart,
      badge: "Slides 12–13"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Sticky Header with integrated permanent Navigation Tabs */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        navItems={navItems}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Content Section Rendering based on Active Tab */}
        <div className="transition-all duration-200">
          {activeTab === "overview" && <OverviewSection />}

          {activeTab === "cell-cycle" && (
            <CellCycleVisualizer onSelectDrugName={handleSelectDrugFromVisualizer} />
          )}

          {activeTab === "drugs" && (
            <DrugClassesExplorer
              searchQuery={searchQuery}
              selectedDrugFromExternal={selectedDrugExternal}
              onClearExternalSelect={() => setSelectedDrugExternal(null)}
            />
          )}

          {activeTab === "regimens" && <RegimensMatrix />}

          {activeTab === "superfoods" && <DietarySection />}
        </div>
      </main>

      {/* Floating AI Quiz Generator (Located at bottom-right) */}
      <FloatingQuizGenerator />

      {/* Educational Footer */}
      <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">
              OncoPharmacology Master Infographic
            </span>
            <span>•</span>
            <span>Comprehensive Medical & Pharmacy Curriculum</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>Lippincott's Illustrated Reviews: Pharmacology (p. 457)</span>
            <span>•</span>
            <span>All 88 Lecture Slides Included Without Omission</span>
            <span>•</span>
            <span>Gemini AI Question Engine Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
