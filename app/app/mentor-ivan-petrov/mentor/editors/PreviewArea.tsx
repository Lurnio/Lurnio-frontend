"use client";


import CourseCard from "../../_components/CourseCard";
import ProductCard from "../../_components/ProductCard";
import ReviewCard from "../../_components/ReviewCard";
import ScheduleRow from "../../_components/ScheduleRow";
import type {
  Mentor,
  Course,
  Product,
  ScheduleItem,
  Review,
} from "../../_components/types";

export default function PreviewArea({
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
  return (
    <div className="grid gap-8">
      {/* можно показать мини-превью секций так, как видит пользователь */}
      <section>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Курсы</h4>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Товары</h4>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          Ближайшие события
        </h4>
        <div className="grid gap-3">
          {schedule.map((s) => (
            <ScheduleRow key={s.id} item={s} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Отзывы</h4>
        <div className="grid gap-3">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
