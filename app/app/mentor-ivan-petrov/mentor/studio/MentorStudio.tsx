"use client";

import { useMemo, useState } from "react";
import { Eye, EyeOff, Save } from "lucide-react";

import type {
  Mentor,
  Course,
  Product,
  ScheduleItem,
  Review,
  IconType,
} from "../../_components/types"
import { GraduationCap, ShoppingBag, CalendarDays, Star } from "lucide-react";

import MentorHeader from "../../_components/MentorHeader";
import SegmentedTabs from "../../_components/SegmentedTabs";
import ReviewsEditor from "../editors/ReviewsEditor";
import PreviewArea from "../editors/PreviewArea";
import ScheduleEditor from "../editors/ScheduleEditor";
import ProductsEditor from "../editors/ProductsEditor";
import CoursesEditor from "../editors/CoursesEditor";

type TabKey = "courses" | "products" | "schedule" | "reviews" | "preview";

const TABS: Readonly<Array<{ key: TabKey; label: string; icon: IconType }>> = [
  { key: "courses", label: "Курсы", icon: GraduationCap },
  { key: "products", label: "Товары", icon: ShoppingBag },
  { key: "schedule", label: "Расписание", icon: CalendarDays },
  { key: "reviews", label: "Отзывы", icon: Star },
  { key: "preview", label: "Превью", icon: Eye },
] as const;

export default function MentorStudio() {
  // Стартовые моки (заменишь на fetch из API)
  const [mentor, setMentor] = useState<Mentor>({
    name: "Иван Петров",
    title: "Senior Python Engineer · Data/AI ментор",
    avatar: "/mentors/ivan.jpg",
    rating: 4.8,
    students: 3120,
    coursesCount: 7,
    location: "Берлин, Германия",
    languages: ["Русский", "English", "Deutsch"],
    responseTime: "обычно за 2 часа",
    bio: "Помогаю разработчикам прокачать Python, алгоритмы, пайплайны данных и MLOps. Упор на практику и портфолио.",
  });

  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "Python с нуля до джуна",
      cover: "/placeholders/course-1.jpg",
      rating: 4.8,
      students: 1850,
      duration: "24 ч",
      price: "€39",
      level: "Beginner",
    },
    {
      id: "c2",
      title: "Алгоритмы и структуры данных на Python",
      cover: "/placeholders/course-2.jpg",
      rating: 4.7,
      students: 920,
      duration: "18 ч",
      price: "€29",
      level: "Intermediate",
    },
  ]);

  const [products, setProducts] = useState<Product[]>([
    {
      id: "p1",
      title: "Гайд: 100 задач для портфолио Python",
      cover: "/placeholders/product-1.jpg",
      price: "€9",
      type: "Гайд",
      short: "Подборка задач от простого к сложному с разбором подходов.",
    },
    {
      id: "p2",
      title: "Чек-лист собеседования Python",
      cover: "/placeholders/product-2.jpg",
      price: "€5",
      type: "Чек-лист",
      short: "Темы, вопросы и практические советы, чтобы пройти интервью.",
    },
  ]);

  const [schedule, setSchedule] = useState<ScheduleItem[]>([
    {
      id: "s1",
      dateISO: "2025-09-06T18:00:00+02:00",
      title: "Групповая сессия: Python Best Practices",
      kind: "Групповая сессия",
      durationMin: 90,
      slotsLeft: 4,
    },
    {
      id: "s2",
      dateISO: "2025-09-07T19:00:00+02:00",
      title: "1:1 консультация (резюме + план развития)",
      kind: "1:1 консультация",
      durationMin: 60,
      slotsLeft: 1,
    },
  ]);

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "r1",
      user: "Анна К.",
      avatar: "/avatars/a1.png",
      rating: 5,
      text: "Чёткие объяснения и сильная практика. Получила оффер.",
      date: "05.08.2025",
      course: "Python с нуля до джуна",
    },
    {
      id: "r2",
      user: "Дмитрий Л.",
      avatar: "/avatars/a2.png",
      rating: 4,
      text: "Много конкретики по пайплайнам. Хочу больше системдиза.",
      date: "21.07.2025",
    },
  ]);

  const [tab, setTab] = useState<TabKey>("courses");
  const [saved, setSaved] = useState(false);

  const publishDisabled = useMemo(
    () => mentor.name.trim().length === 0 || courses.length === 0,
    [mentor.name, courses.length]
  );

  function handleSave() {
    setSaved(true);
    // TODO: fetch('/api/mentor', {method:'POST', body: JSON.stringify({ mentor, courses, products, schedule, reviews })})
    setTimeout(() => setSaved(false), 900);
    console.log({ mentor, courses, products, schedule, reviews });
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* превью “шапки” */}
      <MentorHeader mentor={mentor} />

      {/* панель */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 mb-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Режим:{" "}
            <span className="font-medium text-gray-900">редактирование</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab(tab === "preview" ? "courses" : "preview")}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 hover:bg-gray-50 transition text-sm"
            >
              {tab === "preview" ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              {tab === "preview" ? "Выйти из превью" : "Превью"}
            </button>
            <button
              onClick={handleSave}
              disabled={publishDisabled || saved}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              {saved ? "Сохранено" : "Сохранить"}
            </button>
          </div>
        </div>
      </section>

      {/* табы */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative mb-6">
          <SegmentedTabs tabs={TABS} value={tab} onChange={setTab} />
        </div>

        <div className="mb-16">
          {tab === "courses" && (
            <CoursesEditor value={courses} onChange={setCourses} />
          )}
          {tab === "products" && (
            <ProductsEditor value={products} onChange={setProducts} />
          )}
          {tab === "schedule" && (
            <ScheduleEditor value={schedule} onChange={setSchedule} />
          )}
          {tab === "reviews" && (
            <ReviewsEditor value={reviews} onChange={setReviews} />
          )}
          {tab === "preview" && (
            <PreviewArea
              mentor={mentor}
              courses={courses}
              products={products}
              schedule={schedule}
              reviews={reviews}
            />
          )}
        </div>
      </section>
    </main>
  );
}
