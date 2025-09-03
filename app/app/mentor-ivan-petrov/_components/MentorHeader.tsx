"use client"
import Image from "next/image";
import {
  Star,
  Users,
  GraduationCap,
  MapPin,
  MessageCircle,
} from "lucide-react";
import type { Mentor } from "./types";
import type { IconType } from "./types";

type StatProps = {
  icon: IconType;
  label: string;
  value: string | number;
};

function Stat({ icon: Icon, label, value }: StatProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

export default function MentorHeader({ mentor }: { mentor: Mentor }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <Image
                src={mentor.avatar}
                alt={mentor.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {mentor.name}
              </h1>
              <p className="text-gray-600">{mentor.title}</p>
            </div>
          </div>

          <div className="flex-1" />

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <Stat
              icon={Star}
              label="Рейтинг"
              value={mentor.rating.toFixed(1)}
            />
            <Stat
              icon={Users}
              label="Ученики"
              value={mentor.students.toLocaleString()}
            />
            <Stat
              icon={GraduationCap}
              label="Курсы"
              value={mentor.coursesCount}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
            <MapPin className="w-4 h-4" />
            {mentor.location}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
            <MessageCircle className="w-4 h-4" />
            Ответ: {mentor.responseTime}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
            Языки: {mentor.languages.join(" · ")}
          </span>
        </div>

        <p className="mt-4 text-gray-700">{mentor.bio}</p>
      </div>
    </section>
  );
}
