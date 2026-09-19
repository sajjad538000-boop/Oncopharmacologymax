import React, { useState, useMemo } from "react";
import { PREVENTIVE_SUPERFOODS } from "../data";
import { SuperfoodItem } from "../types";
import { Apple, Carrot, Sparkles, Search, Filter, ShieldCheck, Heart } from "lucide-react";

export const DietarySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const categories = ["All", "Fruits", "Vegetables", "Spices & Condiments", "Cereals & Legumes"];

  const filteredFoods = useMemo(() => {
    return PREVENTIVE_SUPERFOODS.filter((food) => {
      const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
      const matchesSearch =
        food.name.toLowerCase().includes(search.toLowerCase()) ||
        food.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      {/* Title & Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-2">
            <Heart className="h-3.5 w-3.5" />
            Nutritional Oncology & Chemoprevention
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            The 94 Dietary Superfoods (Slides 12 & 13)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            Complete unabridged catalog of the 94 dietary foods (16 Fruits, 24 Vegetables, 26 Spices/Condiments, 28 Cereals/Legumes) proven to lower cancer risk through polyphenols, glucosinolates, sulforaphane, and micronutrients.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            Showing {filteredFoods.length} of 94 Foods
          </span>
        </div>
      </div>

      {/* Controls: Search & Category filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            id="superfoods-search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search superfoods by name or active compound (e.g. curcumin, sulforaphane, lycopene)..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Superfoods Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all group"
          >
            {/* Image */}
            <div className="h-28 w-full overflow-hidden relative bg-slate-200 dark:bg-slate-700">
              <img
                src={food.image}
                alt={food.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                #{food.number}
              </span>
            </div>

            {/* Food Content */}
            <div className="p-2.5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                  {food.category}
                </span>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 transition-colors">
                  {food.name}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-tight">
                  {food.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
