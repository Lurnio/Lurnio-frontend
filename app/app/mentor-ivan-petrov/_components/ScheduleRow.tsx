"use client";

import { CalendarDays, Clock } from "lucide-react";
import type { ScheduleItem } from "./types";

export default function ScheduleRow({ item }: { item: ScheduleItem }) {
  const d = new Date(item.dateISO);
  const date = d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "short",
    weekday: "short",
  });
  const time = d.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 flex items-center gap-4 shadow-sm">
      <div className="w-14 text-center">
        <div className="text-xs text-gray-500">{date}</div>
        <div className="text-lg font-bold text-gray-900">{time}</div>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-gray-900">{item.title}</div>
        <div className="text-sm text-gray-500 flex items-center gap-3 mt-0.5">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" /> {item.durationMin} мин
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> {item.kind}
          </span>
          {typeof item.slotsLeft === "number" && (
            <span className="inline-flex items-center gap-1">
              Осталось мест: {item.slotsLeft}
            </span>
          )}
        </div>
      </div>
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
      >
        Записаться
      </a>
    </div>
  );
}
