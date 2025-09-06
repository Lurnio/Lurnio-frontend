import { HelpCircle, Search, BookOpen, LifeBuoy, Settings } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Центр помощи — Lurnio",
};

const categories = [
  {
    icon: BookOpen,
    title: "Начало работы",
    desc: "Регистрация, профиль, первые шаги.",
    href: "/help/getting-started",
  },
  {
    icon: Settings,
    title: "Настройки и безопасность",
    desc: "Учетная запись, пароль, конфиденциальность.",
    href: "/help/settings",
  },
  {
    icon: LifeBuoy,
    title: "Платежи и биллинг",
    desc: "Подписки, возвраты, способы оплаты.",
    href: "/help/billing",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-purple-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Центр помощи
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Найдите ответы на частые вопросы или перейдите к нужному разделу.
          </p>

          {/* Поле поиска (без client-логики, просто разметка) */}
          <form action="/help/search" method="GET" className="mt-6">
            <label className="sr-only" htmlFor="q">
              Поиск по базе знаний
            </label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Опишите вопрос или проблему…"
                className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </form>

          {/* Категории */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="block border border-gray-100 rounded-xl p-5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-purple-600" />
                  <div className="font-semibold text-gray-900">{title}</div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
                <span className="mt-3 inline-block text-sm text-gray-700">
                  Перейти →
                </span>
              </Link>
            ))}
          </div>

          {/* Быстрые ссылки */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              Популярные темы
            </h2>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3">
              {[
                {
                  label: "Как перенести урок?",
                  href: "/help/lessons/reschedule",
                },
                { label: "Возврат средств", href: "/help/billing/refunds" },
                {
                  label: "Проблема со входом",
                  href: "/help/account/login-issues",
                },
                {
                  label: "Изменить способ оплаты",
                  href: "/help/billing/payment-methods",
                },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижний CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10 mt-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-bold">Не нашли ответ?</h3>
          <p className="mt-1 text-purple-100">
            Напишите нам — ответим в ближайшее время
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-100"
          >
            Связаться с поддержкой
          </Link>
        </div>
      </div>
    </main>
  );
}
