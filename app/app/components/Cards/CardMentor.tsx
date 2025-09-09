"use client";

import { useState } from "react";
import { Calendar, Star, LayoutGrid, List as ListIcon } from "lucide-react";
import { ButtonHalfWhait } from "@/app/ui/Buttons/ButtonHalfWhait";
import { ButtonHalfBlue } from "@/app/ui/Buttons/ButtonHalfBlue";

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  experience: string;
  rating: number;
  reviews: number;
  description: string;
  avatar: string;
  students: number;
  successRate: number;
  achievements: string[];
  services: { name: string; price: string; duration?: string }[];
  skills: string[];
  isAI?: boolean;
  isOnline?: boolean;
  badge?: string;
  nextAvailable?: string;
  responseTime?: string;
  completedSessions?: number;
}

type ViewType = "grid" | "list";

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Александр Петров",
    title: "Senior Frontend Developer",
    company: "Яндекс",
    experience: "8 лет опыта",
    rating: 4.9,
    reviews: 124,
    description:
      "Ведущий эксперт по React, TypeScript и современной frontend архитектуре. Автор 15+ production проектов.",
    avatar: "АП",
    students: 347,
    successRate: 96,
    achievements: ["Топ 1% менторов", "React мастер", "Яндекс эксперт"],
    services: [
      { name: "Карьерная консультация", price: "6,000 ₽", duration: "60 мин" },
      { name: "Code Review", price: "4,500 ₽", duration: "45 мин" },
      { name: "Интенсив по React", price: "25,000 ₽", duration: "4 недели" },
    ],
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Node.js"],
    isOnline: true,
    badge: "Pro",
    nextAvailable: "Сегодня в 14:00",
    responseTime: "< 2 часов",
    completedSessions: 890,
  },
  {
    id: 2,
    name: "Мария Сидорова",
    title: "Lead Product Manager",
    company: "Сбер",
    experience: "7 лет опыта",
    rating: 5.0,
    reviews: 89,
    description:
      "Product Lead с опытом запуска 12+ продуктов. Эксперт по метрикам, аналитике и продуктовой стратегии.",
    avatar: "МС",
    students: 256,
    successRate: 100,
    achievements: ["Эксперт года", "Product Pro", "Сбер лидер"],
    services: [
      {
        name: "Product Strategy Session",
        price: "8,500 ₽",
        duration: "90 мин",
      },
      { name: "Метрики и аналитика", price: "6,000 ₽", duration: "60 мин" },
    ],
    skills: ["Product Strategy", "Analytics", "A/B Testing", "User Research"],
    isOnline: true,
    badge: "Expert",
    nextAvailable: "Завтра в 10:00",
    responseTime: "< 1 часа",
    completedSessions: 567,
  },
  {
    id: 3,
    name: "Елена Волкова",
    title: "Senior UX Designer",
    company: "Тинькофф",
    experience: "6 лет опыта",
    rating: 4.8,
    reviews: 156,
    description:
      "UX/UI дизайнер с опытом в финтех и e-commerce. Ментор по дизайн-системам и пользовательскому опыту.",
    avatar: "ЕВ",
    students: 198,
    successRate: 94,
    achievements: ["Design System Expert", "UX Champion", "Финтех дизайнер"],
    services: [
      { name: "UX аудит", price: "7,000 ₽", duration: "75 мин" },
      { name: "Портфолио ревью", price: "5,500 ₽", duration: "60 мин" },
    ],
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    isOnline: false,
    badge: "Rising",
    nextAvailable: "Понедельник в 15:00",
    responseTime: "< 3 часов",
    completedSessions: 423,
  },
];

export const CardMentor = () => {
  const [viewType, setViewType] = useState<ViewType>("grid");

  return (
    <>
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
                  ? "bg-blue-600 text-white shadow-sm"
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
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            title="Списком"
          >
            <ListIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {viewType === "grid" ? (
        /* ---------------- GRID (оригинальные карточки — НЕ ТРОГАЕМ) ---------------- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-200  flex-col h-full"
            >
              {/* Badge */}
              {mentor.badge && (
                <div
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                    mentor.badge === "Pro"
                      ? "bg-blue-500 text-white"
                      : mentor.badge === "Expert"
                      ? "bg-purple-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {mentor.badge}
                </div>
              )}

              {/* Header */}
              <div className="flex gap-2 mb-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-medium text-sm">
                    {mentor.avatar}
                  </div>
                  {mentor.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-1 truncate">
                    {mentor.title}
                  </p>
                  <p className="text-gray-500 text-xs truncate">
                    {mentor.company}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-900">
                      {mentor.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({mentor.reviews})
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-xs mb-2 line-clamp-2">
                {mentor.description}
              </p>

              {/* Availability */}
              <div className="bg-gray-50 rounded p-2 mb-2 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Доступен
                  </span>
                  <span className="font-medium text-gray-900">
                    {mentor.nextAvailable}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Ответ</span>
                  <span className="font-medium text-green-600">
                    {mentor.responseTime}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-2 py-1 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900">
                    {mentor.students}
                  </div>
                  <div className="text-xs text-gray-500">Менти</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900">
                    {mentor.completedSessions}
                  </div>
                  <div className="text-xs text-gray-500">Сессий</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900">
                    {mentor.successRate}%
                  </div>
                  <div className="text-xs text-gray-500">Успех</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-2">
                <div className="flex flex-wrap gap-1">
                  {mentor.achievements.slice(0, 2).map((achievement, index) => (
                    <span
                      key={index}
                      className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-2">
                <div className="flex flex-wrap gap-1">
                  {mentor.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="border border-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service & Price */}
              <div className="bg-gray-50 rounded p-2 mb-3">
                <div className="text-xs font-medium text-gray-900 mb-1">
                  {mentor.services[0].name}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900">
                    {mentor.services[0].price}
                  </span>
                  <span className="text-xs text-gray-500">
                    {mentor.services[0].duration}
                  </span>
                </div>
              </div>

              <div className="mt-auto flex gap-1">
                <ButtonHalfBlue text="Забронировать" />
                <ButtonHalfWhait text="Профиль" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ---------------- LIST (аккуратный список, отдельный шаблон) ---------------- */
        <div className="flex flex-col gap-3">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-200"
            >
              {/* Верхняя строка: аватар + ФИО/титул + бейдж + рейтинг */}
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-medium text-sm">
                    {mentor.avatar}
                  </div>
                  {mentor.isOnline && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      {mentor.name}
                    </h3>
                    {mentor.badge && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium
                          ${
                            mentor.badge === "Pro"
                              ? "bg-blue-500 text-white"
                              : mentor.badge === "Expert"
                              ? "bg-purple-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                      >
                        {mentor.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-900">
                        {mentor.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({mentor.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-600">
                    {mentor.title} •{" "}
                    <span className="text-gray-500">{mentor.company}</span>
                  </div>

                  <p className="text-gray-700 text-xs mt-1 line-clamp-2">
                    {mentor.description}
                  </p>

                  {/* chips: достижения + скиллы */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {mentor.achievements.slice(0, 2).map((a, i) => (
                      <span
                        key={`ach-${i}`}
                        className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {a}
                      </span>
                    ))}
                    {mentor.skills.slice(0, 3).map((s, i) => (
                      <span
                        key={`sk-${i}`}
                        className="border border-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Правая инфо-колонка: доступность + ответ */}
                <div className="hidden md:flex md:flex-col md:items-end md:gap-1 md:w-56">
                  <div className="bg-gray-50 rounded p-2 w-full">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Доступен
                      </span>
                      <span className="font-medium text-gray-900">
                        {mentor.nextAvailable}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs mt-1">
                      <span className="text-gray-600">Ответ</span>
                      <span className="font-medium text-green-600">
                        {mentor.responseTime}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 w-full mt-2">
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {mentor.students}
                      </div>
                      <div className="text-xs text-gray-500">Менти</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {mentor.completedSessions}
                      </div>
                      <div className="text-xs text-gray-500">Сессий</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {mentor.successRate}%
                      </div>
                      <div className="text-xs text-gray-500">Успех</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Нижняя строка: выбранная услуга + цена + кнопки */}
              <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="bg-gray-50 rounded p-2 flex-1">
                  <div className="text-xs font-medium text-gray-900 mb-1">
                    {mentor.services[0].name}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">
                      {mentor.services[0].price}
                    </span>
                    <span className="text-xs text-gray-500">
                      {mentor.services[0].duration}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <ButtonHalfBlue text="Забронировать" />
                  <ButtonHalfWhait text="Профиль" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
