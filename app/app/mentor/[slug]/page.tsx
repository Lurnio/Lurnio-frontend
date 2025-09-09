"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  Star,
  Users,
  Clock,
  TrendingUp,
  Calendar as CalendarIcon,
  Check,
  Bell,
  CheckCircle2,
  Globe,
  GraduationCap,
  Award,
  Shield,
  HelpCircle,
  ChevronDown,
  ThumbsUp,
  X,
  Download,
} from "lucide-react";

/* ---------------- Types ---------------- */
type ReviewSort = "new" | "top" | "high" | "low";
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
  verified?: boolean;
  languages?: {
    name: string;
    level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";
  }[];
  teaches?: string[]; // тематики/курсы
  timezone?: string;
  trialPrice?: number;
};

type Review = {
  id: string;
  user: string;
  userAvatar: string; // path in /public
  rating: number;
  text: string;
  date: string; // ISO
  likes?: number;
};

type Slot = {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  isBooked: boolean;
};

type ResumeItem = {
  where: string;
  what: string;
  years?: string;
};

type Subject = {
  id: string;
  name: string;
  tags: string[];
  level: "Начальный" | "Средний" | "Продвинутый";
};

type TutorCard = {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  pricePerHour: number;
  lessonsCount: number;
  verified?: boolean;
};

/* Booking-related */
type Booking = {
  id: string;
  slotId?: string; // если выбрали из сетки
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  name: string;
  email: string;
  notes?: string;
  createdAt: string; // ISO
};

type BookingForm = {
  name: string;
  email: string;
  notes: string;
};

type AheadForm = {
  date: string; // HTML date value
  time: string; // HTML time value
};

/* --------------- Mock data (локально, без БД) --------------- */

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
  verified: true,
  languages: [
    { name: "Русский", level: "Native" },
    { name: "Українська", level: "C1" },
    { name: "Deutsch", level: "B2" },
    { name: "English", level: "B2" },
  ],
  teaches: [
    "Next.js с нуля",
    "TypeScript для React",
    "Подготовка к собеседованию",
    "Проект под ключ",
  ],
  timezone: "Europe/Berlin (GMT+2)",
  trialPrice: 1200,
};

const mockReviews: Review[] = [
  {
    id: "r1",
    user: "Алина",
    userAvatar: "/reviews/r1.jpg",
    rating: 5,
    text: "Структурно объясняет сложные темы. Разобрались с архитектурой и серверными компонентами в Next.js.",
    date: "2025-08-12",
    likes: 6,
  },
  {
    id: "r2",
    user: "Данил",
    userAvatar: "/reviews/r2.jpg",
    rating: 5,
    text: "Собрали продакшен-готовый auth, прокачали перформанс. Очень практично.",
    date: "2025-08-08",
    likes: 3,
  },
  {
    id: "r3",
    user: "Мария",
    userAvatar: "/reviews/r3.jpg",
    rating: 4,
    text: "Формат зашел: короткие созвоны + домашки. Хотелось бы больше по тестированию.",
    date: "2025-07-29",
    likes: 2,
  },
];

const mockSlots: Slot[] = Array.from({ length: 28 }).map((_, i) => ({
  id: `slot-${i}`,
  date: new Date(Date.now() + Math.floor(i / 4) * 24 * 3600 * 1000)
    .toISOString()
    .slice(0, 10),
  time: ["09:00", "12:00", "15:00", "19:00"][i % 4],
  isBooked: Math.random() < 0.25,
}));

const resumeEducation: ResumeItem[] = [
  {
    where: "ХНУ им. В.Н. Каразина",
    what: "Компьютерные науки (бакалавр)",
    years: "2016–2020",
  },
];

const resumeExperience: ResumeItem[] = [
  {
    where: "FinTech Corp",
    what: "Senior Frontend Engineer (Next.js/TS)",
    years: "2023–наст.",
  },
  { where: "Product SaaS", what: "Frontend Engineer", years: "2020–2023" },
];

const resumeCerts: ResumeItem[] = [
  { where: "Meta", what: "Advanced React", years: "2023" },
  { where: "Google", what: "Web Vitals Performance", years: "2022" },
];

const specialties: string[] = [
  "Next.js 13/14 App Router",
  "SSR/SSG/ISR",
  "React Server Components",
  "Перфоманс и Web Vitals",
  "Auth (NextAuth, OAuth, JWT)",
  "Type-Safe API (tRPC, Zod)",
  "Сборка форм (React Hook Form)",
  "CI/CD, Vercel",
];

const subjects: Subject[] = [
  {
    id: "s1",
    name: "Next.js с нуля",
    tags: ["Начальный", "Практика"],
    level: "Начальный",
  },
  {
    id: "s2",
    name: "TypeScript для React",
    tags: ["Дженерики", "Типобезопасность"],
    level: "Средний",
  },
  {
    id: "s3",
    name: "Подготовка к собеседованию",
    tags: ["Алгоритмы", "Системный дизайн"],
    level: "Продвинутый",
  },
  {
    id: "s4",
    name: "Проект под ключ",
    tags: ["Архитектура", "Деплой"],
    level: "Средний",
  },
];

const similarTutors: TutorCard[] = [
  {
    id: "t1",
    name: "Иван П.",
    avatar: "/similar/t1.jpg",
    title: "Frontend Lead • React/Next",
    rating: 4.8,
    pricePerHour: 3000,
    lessonsCount: 420,
    verified: true,
  },
  {
    id: "t2",
    name: "Екатерина С.",
    avatar: "/similar/t2.jpg",
    title: "Senior JS • TS/Node",
    rating: 4.9,
    pricePerHour: 3700,
    lessonsCount: 610,
  },
  {
    id: "t3",
    name: "Максим К.",
    avatar: "/similar/t3.jpg",
    title: "React Architect",
    rating: 4.7,
    pricePerHour: 2800,
    lessonsCount: 300,
  },
];

/* ---------------- UI helpers ---------------- */

function RatingStars({
  rating,
  withValue = true,
}: {
  rating: number;
  withValue?: boolean;
}) {
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
      {withValue && (
        <span className="ml-1 text-sm font-medium text-gray-700">
          {rating.toFixed(1)}
        </span>
      )}
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

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

/* ---------------- Booking helpers (frontend) ---------------- */

const LS_KEY = "mentor_bookings_v1";

function loadBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Booking[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveBookings(next: Booking[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LS_KEY, JSON.stringify(next));
}

function combineDateTime(date: string, time: string): Date {
  // интерпретируем как локальное время пользователя
  const [h, m] = time.split(":").map((x) => parseInt(x, 10));
  const parts = date.split("-").map((x) => parseInt(x, 10));
  const d = new Date(parts[0], parts[1] - 1, parts[2], h, m, 0, 0);
  return d;
}

function toICS(booking: Booking, mentor: Mentor): string {
  // простейший .ics для 60-мин сессии
  const start = combineDateTime(booking.date, booking.time);
  const end = new Date(start.getTime() + 60 * 60 * 1000);

  const pad = (n: number) => String(n).padStart(2, "0");
  const fmt = (dt: Date) =>
    `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(
      dt.getUTCDate()
    )}T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}${pad(
      dt.getUTCSeconds()
    )}Z`;

  const uid = `${booking.id}@mentor.local`;
  const summary = `Занятие с ${mentor.name}`;
  const descLines = [
    `Тема: Индивидуальная сессия`,
    `Имя: ${booking.name}`,
    `Email: ${booking.email}`,
    booking.notes ? `Заметки: ${booking.notes}` : undefined,
  ].filter(Boolean) as string[];

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mentor Booking//RU",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${descLines.join("\\n")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function downloadICS(ics: string, filename: string) {
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ---------------- Page ---------------- */

export default function Page() {
  const mentor = mockMentor;

  /* UI state */
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [faqOpen, setFaqOpen] = useState<string | null>(null);
  const [reviewSort, setReviewSort] = useState<ReviewSort>("new");

  /* Booking state */
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    notes: "",
  });
  const [ahead, setAhead] = useState<AheadForm>({ date: "", time: "" });
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setBookings(loadBookings());
  }, []);

  // мапа занятых дат/времени из сохранённых броней
  const bookedMap = useMemo(() => {
    const map: Record<string, true> = {};
    bookings.forEach((b) => {
      map[`${b.date}T${b.time}`] = true;
      if (b.slotId) map[b.slotId] = true;
    });
    return map;
  }, [bookings]);

  const slotsWithState: Slot[] = useMemo(() => {
    return mockSlots.map((s) => ({
      ...s,
      isBooked:
        s.isBooked ||
        bookedMap[s.id] ||
        bookedMap[`${s.date}T${s.time}`] ||
        false,
    }));
  }, [bookedMap]);

  const groupedSlots = useMemo(() => {
    const map: Record<string, Slot[]> = {};
    slotsWithState.forEach((s) => {
      map[s.date] = map[s.date] ? [...map[s.date], s] : [s];
    });
    return Object.entries(map).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  }, [slotsWithState]);

  const ratingDist = useMemo(() => {
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<number, number>;
    mockReviews.forEach((r) => (dist[r.rating] = (dist[r.rating] || 0) + 1));
    const total = mockReviews.length || 1;
    return { dist, total };
  }, []);

  const sortedReviews = useMemo(() => {
    const arr = [...mockReviews];
    switch (reviewSort) {
      case "top":
        return arr.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      case "high":
        return arr.sort((a, b) => b.rating - a.rating);
      case "low":
        return arr.sort((a, b) => a.rating - b.rating);
      case "new":
      default:
        return arr.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    }
  }, [reviewSort]);

  const selectedSlotObj: Slot | null = useMemo(() => {
    if (!selectedSlot) return null;
    return slotsWithState.find((s) => s.id === selectedSlot) ?? null;
  }, [selectedSlot, slotsWithState]);

  function openBookingForSlot(slotId: string) {
    setSelectedSlot(slotId);
    setShowModal(true);
    setMessage("");
  }

  function createBookingPayload(): Booking | null {
    // из выбранного слота
    if (selectedSlotObj) {
      const key = `${selectedSlotObj.date}T${selectedSlotObj.time}`;
      if (bookedMap[key]) {
        setMessage("Увы, этот слот только что заняли. Выберите другой.");
        return null;
      }
      const now = new Date();
      const start = combineDateTime(selectedSlotObj.date, selectedSlotObj.time);
      if (start.getTime() < now.getTime()) {
        setMessage("Нельзя бронировать прошедшее время.");
        return null;
      }
      return {
        id: `b-${Date.now()}`,
        slotId: selectedSlotObj.id,
        date: selectedSlotObj.date,
        time: selectedSlotObj.time,
        name: form.name.trim(),
        email: form.email.trim(),
        notes: form.notes.trim(),
        createdAt: new Date().toISOString(),
      };
    }

    // «Наперед»: произвольная дата/время
    if (ahead.date && ahead.time) {
      const key = `${ahead.date}T${ahead.time}`;
      if (bookedMap[key]) {
        setMessage("На выбранные дату и время уже есть бронь.");
        return null;
      }
      const now = new Date();
      const start = combineDateTime(ahead.date, ahead.time);
      if (start.getTime() < now.getTime()) {
        setMessage("Выберите время в будущем.");
        return null;
      }
      return {
        id: `b-${Date.now()}`,
        date: ahead.date,
        time: ahead.time,
        name: form.name.trim(),
        email: form.email.trim(),
        notes: form.notes.trim(),
        createdAt: new Date().toISOString(),
      };
    }

    setMessage("Выберите слот в календаре или укажите дату и время ниже.");
    return null;
  }

  function handleConfirmBooking(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setMessage("");

    if (!form.name.trim() || !form.email.trim()) {
      setMessage("Укажите имя и email.");
      return;
    }

    const payload = createBookingPayload();
    if (!payload) return;

    const next = [...bookings, payload];
    setBookings(next);
    saveBookings(next);

    // генерим .ics
    const ics = toICS(payload, mentor);
    downloadICS(ics, `booking_${payload.date}_${payload.time}.ics`);

    setShowModal(false);
    setForm({ name: "", email: "", notes: "" });
    setAhead({ date: "", time: "" });
    setSelectedSlot(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        {/* Шапка профиля */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3">
            {/* Левая колонка с изображением */}
            <div className="relative md:col-span-1 min-h-[260px]">
              <Image
                src="/logo/lurnio-logo.jpg"
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
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                    {mentor.name}
                    {mentor.verified && (
                      <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5" /> Верифицирован
                      </span>
                    )}
                  </h1>
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
                    {mentor.languages && (
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        <span>
                          Языки:{" "}
                          {mentor.languages
                            .map((l) => `${l.name} (${l.level})`)
                            .join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-end gap-2">
                  <button
                    onClick={() => setIsSubscribed((v) => !v)}
                    className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                      isSubscribed
                        ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                        : "bg-white text-purple-600 border-purple-200 hover:bg-purple-50"
                    }`}
                  >
                    <Bell className="w-4 h-4" />
                    {isSubscribed ? "Подписаны" : "Подписаться"}
                  </button>

                  <div className="text-right">
                    <div className="flex items-baseline gap-2 justify-end">
                      <span className="text-3xl font-bold text-gray-900">
                        ₽{mentor.pricePerHour.toLocaleString()}
                      </span>
                      <span className="text-gray-500">/ час</span>
                    </div>
                    {mentor.trialPrice && (
                      <div className="text-xs text-gray-500 mt-1">
                        Пробный урок — ₽{mentor.trialPrice.toLocaleString()}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-medium flex items-center gap-2"
                      onClick={() => {
                        const el = document.getElementById("booking");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <CalendarIcon className="w-5 h-5" /> Забронировать
                    </button>
                    <button className="cursor-pointer px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50">
                      Задать вопрос
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-gray-800 leading-relaxed">{mentor.bio}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Быстрые факты */}
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <Stat
              icon={<Shield className="w-5 h-5 text-purple-600" />}
              label="Безопасная оплата"
              value="Гарантия возврата"
            />
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <Stat
              icon={<CalendarIcon className="w-5 h-5 text-purple-600" />}
              label="Гибкий график"
              value="Утро/день/вечер"
            />
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <Stat
              icon={<Award className="w-5 h-5 text-purple-600" />}
              label="Топ-наставник"
              value="Рейтинг 4.9/5"
            />
          </div>
        </div>

        {/* Медиа (видео баннер) */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/logo/lurnio-logo.jpg"
                alt="Знакомство с менторством"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
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

          {/* Что получите */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900">
              Что вы получите
            </h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              {[
                "Индивидуальный план под ваш стек",
                "Разбор кода и ревью PR",
                "Подготовка к собеседованиям",
                "Домашние задания + фидбек",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 text-green-600" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Календарь */}
        <div id="booking" className="mt-10 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Календарь</h2>
              <p className="text-gray-600 mt-1">
                Выберите удобное время для сессии 60 минут.
              </p>
              <div className="text-xs text-gray-500 mt-1">
                Часовой пояс: {mentor.timezone || "Ваш локальный"}
              </div>
            </div>
            {selectedSlot && (
              <button
                className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl hover:from-purple-700 hover:to-pink-700"
                onClick={() => setShowModal(true)}
              >
                Забронировать слот
              </button>
            )}
          </div>

          {/* Бронирование наперед */}
          <div className="mt-6 border border-gray-100 rounded-xl p-4">
            <div className="text-sm text-gray-800 font-medium">
              Бронировать наперёд (произвольная дата и время)
            </div>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                value={ahead.date}
                onChange={(e) =>
                  setAhead((v) => ({ ...v, date: e.target.value }))
                }
              />
              <input
                type="time"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                value={ahead.time}
                onChange={(e) =>
                  setAhead((v) => ({ ...v, time: e.target.value }))
                }
              />
              <button
                className="cursor-pointer border border-purple-200 hover:bg-purple-50 text-purple-700 rounded-lg px-4 py-2 text-sm"
                onClick={() => {
                  setSelectedSlot(null);
                  setShowModal(true);
                  setMessage("");
                }}
              >
                Забронировать на выбранные дату/время
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Проверка на коллизии выполняется при подтверждении брони.
            </div>
          </div>

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
                      className={`cursor-pointer px-3 py-1.5 rounded-lg border text-sm transition-all ${
                        s.isBooked
                          ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                          : selectedSlot === s.id
                          ? "bg-purple-600 text-white border-purple-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                      }`}
                      title={s.isBooked ? "Слот занят" : "Выбрать слот"}
                    >
                      {s.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* О репетиторе + Резюме/Специализации/Предметы */}
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* О репетиторе */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                О репетиторе
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Опираюсь на практику и результаты: двигаемся от целей
                (джун-оффер, апгрейд в компании, выход в прод). Разбираем
                реальные куски кода, подтягиваем теорию там, где она нужна для
                инженерных решений.
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 text-green-600" /> Создаем
                  pet-проект с чистой архитектурой
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 text-green-600" /> Практика с
                  RSC, маршрутизацией и кешированием
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 text-green-600" /> Улучшаем
                  Lighthouse и Web Vitals
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 text-green-600" /> Подготовка
                  к интервью (live-coding + системный дизайн)
                </li>
              </ul>
            </div>

            {/* Резюме */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">Резюме</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <GraduationCap className="w-5 h-5 text-purple-600" />{" "}
                    Образование
                  </div>
                  <ul className="mt-3 space-y-2">
                    {resumeEducation.map((e) => (
                      <li key={e.where}>
                        <div className="font-semibold">{e.where}</div>
                        <div className="text-sm text-gray-600">{e.what}</div>
                        <div className="text-xs text-gray-500">{e.years}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Award className="w-5 h-5 text-purple-600" /> Сертификаты
                  </div>
                  <ul className="mt-3 space-y-2">
                    {resumeCerts.map((c) => (
                      <li key={c.what}>
                        <div className="font-semibold">{c.what}</div>
                        <div className="text-sm text-gray-600">{c.where}</div>
                        <div className="text-xs text-gray-500">{c.years}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                  <Shield className="w-5 h-5 text-purple-600" /> Опыт
                </div>
                <ul className="mt-3 space-y-2">
                  {resumeExperience.map((x) => (
                    <li key={`${x.where}-${x.what}`}>
                      <div className="font-semibold">{x.what}</div>
                      <div className="text-sm text-gray-600">{x.where}</div>
                      <div className="text-xs text-gray-500">{x.years}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Специализации */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Специализации
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>

            {/* Предметы / Курсы */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">Предметы</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {subjects.map((subj) => (
                  <div
                    key={subj.id}
                    className="border border-gray-100 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-gray-900">
                        {subj.name}
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          subj.level === "Начальный"
                            ? "bg-green-50 text-green-700"
                            : subj.level === "Средний"
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {subj.level}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {subj.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-600">60 минут</div>
                      <div className="text-gray-900 font-semibold">
                        ₽{mentor.pricePerHour.toLocaleString()}
                      </div>
                    </div>
                    <button
                      className="cursor-pointer mt-3 w-full border border-purple-200 hover:bg-purple-50 text-purple-700 rounded-lg py-2 text-sm"
                      onClick={() => {
                        const el = document.getElementById("booking");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Выбрать время
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ / Политики */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Частые вопросы
              </h2>
              <div className="mt-4 divide-y">
                {[
                  {
                    id: "f1",
                    q: "Можно ли перенести урок?",
                    a: "Да, при уведомлении не менее чем за 12 часов до начала занятия слот можно перенести.",
                  },
                  {
                    id: "f2",
                    q: "Есть ли домашние задания?",
                    a: "Да, по итогам каждой встречи даю практические задачи. Разбираем на следующей сессии.",
                  },
                  {
                    id: "f3",
                    q: "Работаете ли с полным нулем?",
                    a: "Да, но потребуется больше времени. Для старта дам список тем и мини-проект.",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setFaqOpen((v) => (v === item.id ? null : item.id))
                    }
                    className="cursor-pointer w-full text-left py-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-medium text-gray-900 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-purple-600" />{" "}
                        {item.q}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          faqOpen === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {faqOpen === item.id && (
                      <p className="mt-2 text-gray-700">{item.a}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Похожие репетиторы */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Похожие репетиторы
              </h3>
              <div className="mt-4 space-y-4">
                {similarTutors.map((t) => (
                  <div key={t.id} className="flex gap-3">
                    <div className="relative w-14 h-14">
                      <Image
                        src="/logo/lurnio-logo.jpg"
                        alt={t.name}
                        fill
                        sizes="56px"
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-gray-900 truncate">
                          {t.name}
                        </div>
                        {t.verified && (
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <div className="text-sm text-gray-600 truncate">
                        {t.title}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <RatingStars rating={t.rating} withValue={false} />
                        <span className="text-xs text-gray-500">
                          {t.lessonsCount}+ уроков
                        </span>
                      </div>
                      <div className="mt-1 text-sm font-medium text-gray-900">
                        ₽{t.pricePerHour.toLocaleString()} / ч
                      </div>
                    </div>
                    <button className="cursor-pointer self-start text-sm px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                      Перейти
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">Преподаёт</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {mentor.teaches?.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Отзывы */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-xl font-semibold text-gray-900">Отзывы</h2>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Сортировать:</label>
              <select
                value={reviewSort}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setReviewSort(e.target.value as ReviewSort)
                }
                className="text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white"
              >
                <option value="new">Сначала новые</option>
                <option value="top">Самые полезные</option>
                <option value="high">Высокая оценка</option>
                <option value="low">Низкая оценка</option>
              </select>
            </div>
          </div>

          {/* Рейтинг + распределение */}
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex items-center justify-center bg-gray-50 rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-gray-900">
                  {mockMentor.rating.toFixed(1)}
                </div>
                <div className="mt-1 flex items-center justify-center">
                  <RatingStars rating={mockMentor.rating} />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {mockReviews.length} отзыв(ов)
                </div>
              </div>
            </div>
            <div className="md:col-span-2 grid gap-2 content-center">
              {[5, 4, 3, 2, 1].map((r) => {
                const count = ratingDist.dist[r] || 0;
                const pct = Math.round((count / ratingDist.total) * 100);
                return (
                  <div key={r} className="flex items-center gap-3">
                    <span className="w-6 text-sm text-gray-600">{r}★</span>
                    <div className="flex-1 h-3 bg-gray-100 rounded">
                      <div
                        className="h-3 rounded bg-purple-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm text-gray-600">
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {sortedReviews.map((r) => (
              <div key={r.id} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logo/lurnio-logo.jpg"
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
                <button className="cursor-pointer mt-3 inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                  <ThumbsUp className="w-4 h-4" /> Полезно ({r.likes || 0})
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Гарантии/CTA внизу */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 mt-12 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold">
            Готовы прокачать навыки в Next.js и TypeScript?
          </h3>
          <p className="mt-2 text-purple-100">
            Забронируйте первую сессию — вместе составим план развития
          </p>
          <div className="mt-4 text-sm text-purple-100 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Гарантия возврата, безопасная оплата
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("booking");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer mt-6 px-8 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-100"
          >
            Забронировать
          </button>
        </div>

        <div className="h-16" />
      </div>

      {/* Modal: Подтверждение брони */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
            <button
              className="cursor-pointer absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
              aria-label="Закрыть"
              title="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-semibold text-gray-900">
              Подтверждение брони
            </h3>

            <div className="mt-2 text-sm text-gray-600">
              {selectedSlotObj ? (
                <>
                  Вы выбрали:{" "}
                  <span className="font-medium text-gray-900">
                    {new Date(selectedSlotObj.date).toLocaleDateString(
                      "ru-RU",
                      {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>{" "}
                  в{" "}
                  <span className="font-medium text-gray-900">
                    {selectedSlotObj.time}
                  </span>
                </>
              ) : ahead.date && ahead.time ? (
                <>
                  Вы выбрали:{" "}
                  <span className="font-medium text-gray-900">
                    {new Date(ahead.date).toLocaleDateString("ru-RU", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>{" "}
                  в{" "}
                  <span className="font-medium text-gray-900">
                    {ahead.time}
                  </span>
                </>
              ) : (
                <>Выберите слот или укажите дату и время ниже</>
              )}
            </div>

            <form className="mt-4 grid gap-3">
              {/* Если бронирование "наперед" и слот не выбран — покажем поля даты/времени внутри модалки тоже */}
              {!selectedSlotObj && (
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={ahead.date}
                    onChange={(e) =>
                      setAhead((v) => ({ ...v, date: e.target.value }))
                    }
                  />
                  <input
                    type="time"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={ahead.time}
                    onChange={(e) =>
                      setAhead((v) => ({ ...v, time: e.target.value }))
                    }
                  />
                </div>
              )}

              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                value={form.name}
                onChange={(e) =>
                  setForm((v) => ({ ...v, name: e.target.value }))
                }
              />
              <input
                type="email"
                placeholder="Email для подтверждения"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                value={form.email}
                onChange={(e) =>
                  setForm((v) => ({ ...v, email: e.target.value }))
                }
              />
              <textarea
                placeholder="Заметки (необязательно)"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm min-h-[80px]"
                value={form.notes}
                onChange={(e) =>
                  setForm((v) => ({ ...v, notes: e.target.value }))
                }
              />

              {message && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {message}
                </div>
              )}

              <div className="mt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  className="cursor-pointer px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50"
                  onClick={() => setShowModal(false)}
                >
                  Отмена
                </button>
                <button
                  type="button"
                  onClick={handleConfirmBooking}
                  className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl hover:from-purple-700 hover:to-pink-700 inline-flex items-center gap-2"
                  title="Подтвердить и скачать .ics"
                >
                  <Download className="w-4 h-4" />
                  Подтвердить бронь (.ics)
                </button>
              </div>

              <div className="text-xs text-gray-500 mt-2">
                После подтверждения мы сохраним бронь локально и предложим
                календарный файл (.ics) на 60 минут.
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
