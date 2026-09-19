import React from "react";
import { Sparkles, Moon, Sun, Search } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  highlight?: boolean;
}

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  navItems: NavItem[];
  activeTab: string;
  onSelectTab: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  searchQuery,
  setSearchQuery,
  navItems,
  activeTab,
  onSelectTab
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/90 dark:border-slate-800/90 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Top Row on mobile: Logo + Theme Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 flex-shrink-0">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                OncoPharmacology
              </h1>
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                100% Unabridged
              </span>
            </div>
          </div>

          {/* Theme toggle on mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle-button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="w-full md:max-w-md relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            id="global-drug-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any drug, regimen, mechanism, antidote, or cancer..."
            className="w-full pl-10 pr-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Desktop Theme toggle */}
        <div className="hidden md:flex items-center gap-2.5 justify-end">
          <button
            id="theme-toggle-button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Interactive Navigation Tabs Bar - Fixed at top with Header */}
      <div className="border-t border-slate-200/90 dark:border-slate-800/90 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? item.highlight
                        ? "bg-gradient-to-r from-emerald-600 to-indigo-600 text-white shadow-md shadow-emerald-500/20"
                        : "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${item.highlight ? "text-amber-300" : ""}`} />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.shortLabel}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
