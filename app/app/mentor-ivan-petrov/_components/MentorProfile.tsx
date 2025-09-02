"use client";

import { useState } from "react";
import {
  GraduationCap,
  ShoppingBag,
  CalendarDays,
  Star,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SegmentedTabs from "./SegmentedTabs";
import MentorHeader from "./MentorHeader";
import CourseCard from "./CourseCard";
import ProductCard from "./ProductCard";
import ScheduleRow from "./ScheduleRow";
import ReviewCard from "./ReviewCard";
import type {
  Mentor,
  Course,
  Product,
  ScheduleItem,
  Review,
  IconType,
} from "./types";

type TabKey = "courses" | "products" | "schedule" | "reviews";

const TABS: Readonly<Array<{ key: TabKey; label: string; icon: IconType }>> = [
  { key: "courses", label: "Курсы", icon: GraduationCap },
  { key: "products", label: "Товары", icon: ShoppingBag },
  { key: "schedule", label: "Расписание", icon: CalendarDays },
  { key: "reviews", label: "Отзывы", icon: Star },
] as const;

export default function MentorProfile({
  mentor,
  courses,
  products,
  schedule,
  reviews,
}: {
  mentor: Mentor;
  courses: Course[];
  products: Product[];
  schedule: ScheduleItem[];
  reviews: Review[];
}) {
  const [tab, setTab] = useState<TabKey>("courses");

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <MentorHeader mentor={mentor} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative mb-6">
          <SegmentedTabs tabs={TABS} value={tab} onChange={setTab} />
        </div>

        <div className="mb-16">
          {tab === "courses" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          )}

          {tab === "products" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          {tab === "schedule" && (
            <div className="grid gap-4">
              {schedule.map((s) => (
                <ScheduleRow key={s.id} item={s} />
              ))}
              <div className="text-sm text-gray-500 mt-2">
                * Время по вашему часовому поясу (Europe/Berlin).
              </div>
            </div>
          )}

          {tab === "reviews" && (
            <div className="grid gap-4">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Есть вопрос?</h3>
          <p className="text-gray-600 mt-1">
            Напишите ментору — обсудите ваш план обучения и подходящие форматы.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
          >
            <MessageCircle className="w-4 h-4" />
            Открыть чат <ArrowRight className="w-4 h-4" />
          </a>
          <button className="ml-3 inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50 transition">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Подписаться
          </button>
        </div>
      </section>
    </main>
  );
}
