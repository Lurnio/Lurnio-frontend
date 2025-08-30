"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Star,
  Users,
  ShoppingCart,
  Bot,
  UserCheck,
  BookOpen,
  Award,
  Filter,
  Grid,
  List,
} from "lucide-react";
import { RenderStoreContent } from "../components/renderStore";
import { RenderAITeachersContent } from "../components/renderAI";
import { RenderMentorsContent } from "../components/renderMentor";

type TabType = "store" | "ai-teachers" | "mentors";
type ViewType = "grid" | "list";

const filterOptions = {
  categories: [
    "Все категории",
    "Frontend Development",
    "Backend Development",
    "Data Science",
    "Product Management",
    "Design",
    "DevOps",
    "Mobile Development",
  ],
  levels: ["Все уровни", "Beginner", "Intermediate", "Advanced", "Expert"],
  prices: [
    "Любая цена",
    "Бесплатно",
    "До 10,000 ₽",
    "10,000-25,000 ₽",
    "25,000-50,000 ₽",
    "50,000+ ₽",
  ],
  ratings: [
    "Все рейтинги",
    "4.0+ звезд",
    "4.5+ звезд",
    "4.7+ звезд",
    "4.9+ звезд",
  ],
  duration: [
    "Любая длительность",
    "До 4 недель",
    "4-8 недель",
    "8-16 недель",
    "16+ недель",
  ],
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("store");
  const [viewType, setViewType] = useState<ViewType>("grid");

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: "Все категории",
    level: "Все уровни",
    price: "Любая цена",
    rating: "Все рейтинги",
    duration: "Любая длительность",
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setOpenDropdown(null);
  };

  const tabs = [
    {
      id: "store",
      label: "Магазин курсов",
      icon: ShoppingCart,
      count: "1,200+",
    },
    { id: "ai-teachers", label: "ИИ-наставники", icon: Bot, count: "24/7" },
    { id: "mentors", label: "Эксперты", icon: UserCheck, count: "2,500+" },
  ];

  return (
    <div className=" bg-gray-50">
      {/* Header */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Образовательная платформа
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              нового поколения
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Курсы от экспертов, ИИ-наставники 24/7 и персональное менторство для
            максимально быстрого развития ваших навыков
          </p>
        </section>

        {/* Navigation Tabs */}
        <section className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-2 flex gap-2 shadow-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all relative ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        activeTab === tab.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Фильтры
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                  3
                </span>
              </button>

              {/* Quick Filters */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-gray-500">Быстрые фильтры:</span>
                {["Популярное", "Новое", "Скидки"].map((filter) => (
                  <button
                    key={filter}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">
                Вид:
              </span>
              <div className="flex bg-white border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-1.5 rounded transition-colors ${
                    viewType === "grid"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-1.5 rounded transition-colors ${
                    viewType === "list"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {Object.entries(filterOptions).map(([key, options]) => {
                  const filterKey = key as keyof typeof filters;
                  const labels: Record<string, string> = {
                    categories: "Категория",
                    levels: "Уровень",
                    prices: "Цена",
                    ratings: "Рейтинг",
                    duration: "Длительность",
                  };

                  return (
                    <div key={key} className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {labels[key]}
                      </label>
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === key ? null : key)
                          }
                          className="w-full p-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        >
                          <span className="text-gray-900 truncate">
                            {filters[filterKey] || options[0]}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform ${
                              openDropdown === key ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openDropdown === key && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-30 max-h-64 overflow-y-auto">
                            {options.map((option) => (
                              <button
                                key={option}
                                onClick={() => handleFilterChange(key, option)}
                                className="w-full p-3 text-left hover:bg-gray-50 text-sm text-gray-900 transition-colors first:rounded-t-lg last:rounded-b-lg"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Content */}
        {activeTab === "store" && <RenderStoreContent />}
        {activeTab === "ai-teachers" && <RenderAITeachersContent />}
        {activeTab === "mentors" && <RenderMentorsContent />}
      </main>
    </div>
  );
}
