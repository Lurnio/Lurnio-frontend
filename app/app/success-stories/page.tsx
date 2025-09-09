import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Истории успеха — Lurnio",
};

type Story = {
  name: string;
  role: string;
  company: string;
  result: string;
  quote: string;
  href: string;
  img: string;
};

const STORIES: Story[] = [
  {
    name: "Алина К.",
    role: "Frontend Developer",
    company: "FinTech Corp",
    result: "оффер через 3 месяца обучения",
    quote:
      "Фокус на практике и ревью кода помогли быстро закрыть пробелы и пройти собес.",
    href: "/success-stories/alina-k",
    img: "/logo/lurnio-logo.jpg",
  },
  {
    name: "Данил П.",
    role: "Full-Stack Engineer",
    company: "SaaS Startup",
    result: "повышение до мидла",
    quote:
      "С mentor-сессиями разобрал архитектуру проекта и стал увереннее в TypeScript.",
    href: "/success-stories/danil-p",
    img: "/logo/lurnio-logo.jpg",
  },
  {
    name: "Мария С.",
    role: "React Developer",
    company: "E-commerce",
    result: "смена сферы и успешный релокейт",
    quote: "План подготовки + проекты в портфолио сделали своё дело.",
    href: "/success-stories/maria-s",
    img: "/logo/lurnio-logo.jpg",
  },
] as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Истории успеха
          </h1>
          <p className="mt-2 text-gray-600">
            Реальные кейсы студентов, которые достигли цели с нашей платформой.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORIES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:bg-gray-50 transition-colors"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={s.img}
                    alt={`${s.name}, ${s.role}`}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold text-gray-900">{s.name}</div>
                  <div className="text-sm text-gray-600">
                    {s.role} • {s.company}
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <span className="font-medium">Результат:</span> {s.result}
                  </div>
                  <blockquote className="mt-3 text-gray-700 leading-relaxed">
                    «{s.quote}»
                  </blockquote>
                  <span className="mt-3 inline-block text-sm text-gray-700">
                    Читать историю →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10 mt-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-bold">Готовы к своей истории?</h3>
          <p className="mt-1 text-purple-100">
            Запишитесь на первую сессию и составим план.
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
