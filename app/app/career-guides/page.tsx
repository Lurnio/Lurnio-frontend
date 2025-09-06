import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Карьерные гиды — Lurnio",
};

type Guide = {
  title: string;
  summary: string;
  href: string;
  img: string;
  level: "Начальный" | "Средний" | "Продвинутый";
  readTime: string;
};

const GUIDES: Guide[] = [
  {
    title: "Путь в Frontend: от нуля до первого оффера",
    summary: "Стек, проекты, портфолио, собеседования. Чек-листы и примеры.",
    href: "/career-guides/frontend-path",
    img: "/guides/frontend.jpg",
    level: "Начальный",
    readTime: "15 мин",
  },
  {
    title: "Как перейти на TypeScript на работе",
    summary:
      "Миграция, типизация ключевых модулей, стратегия поэтапного внедрения.",
    href: "/career-guides/ts-migration",
    img: "/guides/ts.jpg",
    level: "Средний",
    readTime: "12 мин",
  },
  {
    title: "Подготовка к интервью на Senior",
    summary: "Системный дизайн, поведенческое интервью, переговоры по офферу.",
    href: "/career-guides/senior-interview",
    img: "/guides/senior.jpg",
    level: "Продвинутый",
    readTime: "18 мин",
  },
] as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Карьерные гиды
          </h1>
          <p className="mt-2 text-gray-600">
            Практические руководства по развитию карьеры в IT.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((g) => (
              <Link
                key={g.title}
                href={g.href}
                className="border border-gray-100 rounded-xl overflow-hidden hover:bg-gray-50 transition-colors"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={g.img}
                    alt={g.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        g.level === "Начальный"
                          ? "bg-green-50 text-green-700"
                          : g.level === "Средний"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {g.level}
                    </span>
                    <span className="text-xs text-gray-500">{g.readTime}</span>
                  </div>
                  <div className="mt-2 font-semibold text-gray-900">
                    {g.title}
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{g.summary}</p>
                  <span className="mt-3 inline-block text-sm text-gray-700">
                    Читать гид →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10 mt-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-bold">Нужен индивидуальный план?</h3>
          <p className="mt-1 text-purple-100">
            Выберите ментора и двигайтесь быстрее к цели.
          </p>
          <Link
            href="/experts"
            className="mt-4 inline-block px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-100"
          >
            Найти ментора
          </Link>
        </div>
      </div>
    </main>
  );
}
