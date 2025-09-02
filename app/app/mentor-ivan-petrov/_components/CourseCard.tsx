"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Course } from "./types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col"
    >
      <div className="relative h-36 bg-gray-100">
        <Image
          src={course.cover}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="w-4 h-4 fill-amber-400" />
          <span className="text-sm font-medium text-gray-800">
            {course.rating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-400">
            · {course.students.toLocaleString()} учеников
          </span>
        </div>
        <h3 className="mt-2 font-semibold text-gray-900">{course.title}</h3>
        <div className="mt-1 text-sm text-gray-500">
          Уровень: {course.level} · Длительность: {course.duration}
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="text-lg font-bold text-gray-900">{course.price}</div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700 transition"
          >
            Подробнее
          </a>
        </div>
      </div>
    </motion.div>
  );
}
