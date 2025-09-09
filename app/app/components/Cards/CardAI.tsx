"use client";

import { useState } from "react";
import { Bot, Star, LayoutGrid, List as ListIcon } from "lucide-react";
import { ButtonPurple } from "@/app/ui/Buttons/ButtonPurple";

//#region types & data
interface AITeacher {
  id: number;
  name: string;
  subject: string;
  level: string;
  rating: number;
  reviews: number;
  description: string;
  avatar: string;
  features: string[];
  price: string;
  languages: string[];
  availability: string;
  responseTime: string;
  totalChats: number;
  specializations: string[];
}

type ViewType = "grid" | "list";

const aiTeachers: AITeacher[] = [
  {
    id: 1,
    name: "LinguaBot AI",
    subject: "Изучение языков",
    level: "A1-C2",
    rating: 4.9,
    reviews: 2156,
    description:
      "Персональный ИИ-наставник с адаптивными уроками, проверкой произношения и разговорной практикой 24/7.",
    avatar: "LB",
    features: ["Произношение", "Грамматика", "Разговоры", "Тесты"],
    price: "2,990 ₽/мес",
    languages: ["English", "Deutsch", "Español", "Français", "中文", "日本語"],
    availability: "24/7",
    responseTime: "Мгновенно",
    totalChats: 45000,
    specializations: [
      "Business English",
      "IELTS/TOEFL",
      "Разговорный",
      "Техническая лексика",
    ],
  },
  {
    id: 2,
    name: "CodeMentor AI",
    subject: "Программирование",
    level: "Junior-Senior",
    rating: 4.8,
    reviews: 1789,
    description:
      "ИИ-наставник по программированию с code review, отладкой кода и архитектурными решениями.",
    avatar: "CM",
    features: ["Code Review", "Debugging", "Архитектура", "Best Practices"],
    price: "3,990 ₽/мес",
    languages: ["Python", "JavaScript", "Java", "C++", "Go", "Rust"],
    availability: "24/7",
    responseTime: "< 1 сек",
    totalChats: 38000,
    specializations: ["Web Dev", "Data Science", "Mobile", "Backend", "DevOps"],
  },
  {
    id: 3,
    name: "DataGuru AI",
    subject: "Data Science & ML",
    level: "Beginner-Expert",
    rating: 4.7,
    reviews: 1234,
    description:
      "Специализированный ИИ для изучения анализа данных, машинного обучения и статистики.",
    avatar: "DG",
    features: ["ML алгоритмы", "Визуализация", "Статистика", "Deep Learning"],
    price: "4,490 ₽/мес",
    languages: ["Python", "R", "SQL", "Scala"],
    availability: "24/7",
    responseTime: "< 2 сек",
    totalChats: 29000,
    specializations: ["Computer Vision", "NLP", "Time Series", "MLOps"],
  },
];
//#endregion

export const AICard = () => {
  const [viewType, setViewType] = useState<ViewType>("grid");

  return (
    <div className="w-full">
      {/* Тогглер вида */}
      <div className="flex items-center justify-end mb-3">
        <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            aria-label="Плиткой"
            aria-pressed={viewType === "grid"}
            onClick={() => setViewType("grid")}
            className={`cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition
              ${
                viewType === "grid"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            title="Плиткой"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Списком"
            aria-pressed={viewType === "list"}
            onClick={() => setViewType("list")}
            className={`cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition
              ${
                viewType === "list"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            title="Списком"
          >
            <ListIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {viewType === "grid" ? (
        /* -------- GRID (оригинальные карточки — НЕ ТРОГАЕМ) -------- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {aiTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              {/* AI Badge */}
              <div className="flex items-center justify-between mb-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Bot className="w-3 h-3" />
                  ИИ
                </div>
                <div className="text-green-600 text-xs font-medium flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  24/7
                </div>
              </div>

              {/* Контент карточки */}
              <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex gap-2 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {teacher.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                      {teacher.name}
                    </h3>
                    <p className="text-gray-600 text-xs truncate">
                      {teacher.subject}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-900">
                        {teacher.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({teacher.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-xs mb-2 line-clamp-2">
                  {teacher.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-2 py-1 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">
                      {(teacher.totalChats / 1000).toFixed(0)}k
                    </div>
                    <div className="text-xs text-gray-500">Чатов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">
                      {teacher.responseTime}
                    </div>
                    <div className="text-xs text-gray-500">Ответ</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-2">
                  <div className="flex flex-wrap gap-1">
                    {teacher.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {teacher.languages.slice(0, 4).map((lang, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer чтобы кнопка ушла вниз */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900 text-sm">
                      {teacher.price}
                    </span>
                    <span className="text-xs text-green-600">
                      7 дней бесплатно
                    </span>
                  </div>
                  <ButtonPurple text="Попробовать" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* -------- LIST (аккуратный горизонтальный список) -------- */
        <div className="flex flex-col gap-3">
          {aiTeachers.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                {/* Аватар + бейджи */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-1.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1">
                      <Bot className="w-3 h-3" />
                      ИИ
                    </div>
                  </div>
                </div>

                {/* Контент */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-900">
                        {t.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({t.reviews})
                      </span>
                    </div>
                    <span className="text-green-600 text-xs font-medium flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      {t.availability}
                    </span>
                  </div>

                  <div className="text-xs text-gray-600">
                    {t.subject} •{" "}
                    <span className="text-gray-500">{t.level}</span>
                  </div>

                  <p className="text-gray-700 text-xs mt-1 line-clamp-2">
                    {t.description}
                  </p>

                  {/* chips: фичи + языки */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {t.features.slice(0, 3).map((f, i) => (
                      <span
                        key={`f-${i}`}
                        className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs"
                      >
                        {f}
                      </span>
                    ))}
                    {t.languages.slice(0, 4).map((lang, i) => (
                      <span
                        key={`l-${i}`}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Правая колонка */}
                <div className="hidden md:flex md:flex-col md:items-end md:gap-2 md:w-56">
                  <div className="bg-gray-50 rounded p-2 w-full">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Ответ</span>
                      <span className="font-medium text-purple-700">
                        {t.responseTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs mt-1">
                      <span className="text-gray-600">Чатов</span>
                      <span className="font-medium text-gray-900">
                        {(t.totalChats / 1000).toFixed(0)}k
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">
                      {t.price}
                    </div>
                    <div className="text-xs text-green-600">
                      7 дней бесплатно
                    </div>
                  </div>

                  <div className="w-full">
                    <ButtonPurple text="Попробовать" />
                  </div>
                </div>
              </div>

              {/* Низ для мобильных: цена + кнопка */}
              <div className="mt-3 flex items-center justify-between md:hidden">
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {t.price}
                  </div>
                  <div className="text-xs text-green-600">7 дней бесплатно</div>
                </div>
                <div className="w-36">
                  <ButtonPurple text="Попробовать" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
