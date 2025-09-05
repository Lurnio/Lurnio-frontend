"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Star,
  Users,
  Clock,
  TrendingUp,
  Calendar as CalendarIcon,
  Check,
  Bell,
} from "lucide-react";

// ---------------- Types ----------------

type Mentor = {
  slug: string;
  name: string;
  avatar: string; // path in /public
  title: string;
  bio: string;
  skills: string[];
  rating: number;
  studentsCount: number;
  lessonsCount: number;
  pricePerHour: number;
  isPopular?: boolean;
  level?: "Начинающий" | "Средний" | "Продвинутый";
};

type Review = {
  id: string;
  user: string;
  userAvatar: string; // path in /public
  rating: number;
  text: string;
  date: string; // ISO
};

type Slot = {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  isBooked: boolean;
};

// --------------- Mock data (локально, без БД) ---------------

const mockMentor: Mentor = {
  slug: "tima",
  name: "Тимофей А.",
  avatar: "/mentor/avatar.jpg",
  title: "Senior Frontend Engineer • Next.js / TypeScript",
  bio: "Помогаю быстро прокачаться в современном фронтенде: архитектура Next.js, продвинутый React/TS, работа с формами, оптимизация и деплой.",
  skills: ["Next.js", "TypeScript", "React", "TailwindCSS", "Zustand", "tRPC"],
  rating: 4.9,
  studentsCount: 128,
  lessonsCount: 540,
  pricePerHour: 3500,
  isPopular: true,
  level: "Продвинутый",
};

const mockReviews: Review[] = [
  {
    id: "r1",
    user: "Алина",
    userAvatar: "/reviews/r1.jpg",
    rating: 5,
    text: "Структурно объясняет сложные темы. Разобрались с архитектурой и серверными компонентами в Next.js.",
    date: "2025-08-12",
  },
  {
    id: "r2",
    user: "Данил",
    userAvatar: "/reviews/r2.jpg",
    rating: 5,
    text: "Собрали продакшен-готовый auth, прокачали перформанс. Очень практично.",
    date: "2025-08-08",
  },
  {
    id: "r3",
    user: "Мария",
    userAvatar: "/reviews/r3.jpg",
    rating: 4,
    text: "Формат зашел: короткие созвоны + домашки. Хотелось бы больше по тестированию.",
    date: "2025-07-29",
  },
];

const mockSlots: Slot[] = Array.from({ length: 18 }).map((_, i) => ({
  id: `slot-${i}`,
  date: new Date(Date.now() + Math.floor(i / 3) * 24 * 3600 * 1000)
    .toISOString()
    .slice(0, 10),
  time: ["10:00", "14:00", "19:00"][i % 3],
  isBooked: Math.random() < 0.25,
}));

// ---------------- UI helpers ----------------

function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < full
              ? "text-yellow-400 fill-current"
              : i === full && half
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-gray-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded">
      {children}
    </span>
  );
}

// ---------------- Page ----------------

export default function Page() {
  const mentor = mockMentor;
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const groupedSlots = useMemo(() => {
    const map: Record<string, Slot[]> = {};
    mockSlots.forEach((s) => {
      map[s.date] = map[s.date] ? [...map[s.date], s] : [s];
    });
    return Object.entries(map).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        {/* Карточка ментора */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3">
            {/* Левая колонка с изображением */}
            <div className="relative md:col-span-1 min-h-[260px]">
              <Image
                src={mentor.avatar}
                alt={mentor.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {mentor.isPopular && (
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Популярный
                  </span>
                )}
              </div>
              <div className="absolute top-4 right-4">
                {mentor.level && (
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      mentor.level === "Начинающий"
                        ? "bg-green-100 text-green-700"
                        : mentor.level === "Средний"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {mentor.level}
                  </span>
                )}
              </div>
            </div>

            {/* Правая колонка — контент */}
            <div className="md:col-span-2 p-6">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {mentor.name}
                </h1>
                <button
                  onClick={() => setIsSubscribed((v) => !v)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                    isSubscribed
                      ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                      : "bg-white text-purple-600 border-purple-200 hover:bg-purple-50"
                  }`}
                >
                  <Bell className="w-4 h-4" />{" "}
                  {isSubscribed ? "Подписаны" : "Подписаться"}
                </button>
              </div>

              <p className="mt-1 text-gray-600">{mentor.title}</p>

              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-700">
                <RatingStars rating={mentor.rating} />
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{mentor.studentsCount} учеников</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{mentor.lessonsCount}+ уроков</span>
                </div>
              </div>

              <p className="mt-6 text-gray-800 leading-relaxed">{mentor.bio}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      ₽{mentor.pricePerHour.toLocaleString()}
                    </span>
                    <span className="text-gray-500">/ час</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Оплата за индивидуальную сессию
                  </div>
                </div>

                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 font-medium flex items-center gap-2"
                  onClick={() => {
                    const el = document.getElementById("booking");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <CalendarIcon className="w-5 h-5" /> Забронировать
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Секция: демо-баннер (локальный файл) */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/mentor/demo-hero.jpg"
                alt="Знакомство с менторством"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  {/* иконка play из стилевого набора карточки */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-purple-600 ml-1"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Знакомство с менторством
              </h3>
              <p className="text-gray-600 mt-2">
                Короткое видео о форматах работы, примерах задач и ожиданиях.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900">
              Что вы получите
            </h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 text-green-600" />{" "}
                Индивидуальный план под ваш стек
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 text-green-600" /> Разбор кода
                и ревью PR
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 text-green-600" /> Подготовка к
                собеседованиям
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 text-green-600" /> Домашние
                задания + фидбек
              </li>
            </ul>
          </div>
        </div>

        {/* Календарь */}
        <div id="booking" className="mt-10 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Календарь</h2>
            {selectedSlot && (
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl hover:from-purple-700 hover:to-pink-700">
                Забронировать слот
              </button>
            )}
          </div>
          <p className="text-gray-600 mt-1">
            Выберите удобное время для сессии 60 минут.
          </p>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedSlots.map(([date, slots]) => (
              <div key={date} className="border border-gray-100 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-3">
                  {new Date(date).toLocaleDateString("ru-RU", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex flex-wrap gap-2">
                  {slots.map((s) => (
                    <button
                      key={s.id}
                      disabled={s.isBooked}
                      onClick={() => setSelectedSlot(s.id)}
                      className={`px-3 py-1.5 rounded-lg border text-sm transition-all ${
                        s.isBooked
                          ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                          : selectedSlot === s.id
                          ? "bg-purple-600 text-white border-purple-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                      }`}
                    >
                      {s.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Отзывы */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900">Отзывы</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {mockReviews.map((r) => (
              <div key={r.id} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src={r.userAvatar}
                      alt={r.user}
                      fill
                      sizes="40px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{r.user}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(r.date).toLocaleDateString("ru-RU")}
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <RatingStars rating={r.rating} />
                </div>
                <p className="mt-2 text-gray-700 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Нижний CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 mt-12 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold">
            Готовы прокачать навыки в Next.js и TypeScript?
          </h3>
          <p className="mt-2 text-purple-100">
            Забронируйте первую сессию — вместе составим план развития
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("booking");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 px-8 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-100"
          >
            Забронировать
          </button>
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
}
