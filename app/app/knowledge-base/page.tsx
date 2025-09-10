import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "База знаний — Lurnio",
};

type Category = {
  title: string;
  desc: string;
  href: string;
  img: string;
};

type Article = {
  title: string;
  href: string;
  img: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Начало работы",
    desc: "Первые шаги, профиль, onboarding.",
    href: "/knowledge-base/getting-started",
    img: "/logo/lurnio-logo.jpg",
  },
  {
    title: "Настройки аккаунта",
    desc: "Безопасность, пароли, уведомления.",
    href: "/knowledge-base/account",
    img: "/logo/lurnio-logo.jpg",
  },
  {
    title: "Оплата и биллинг",
    desc: "Методы оплаты, возвраты, чеки.",
    href: "/knowledge-base/billing",
    img: "/logo/lurnio-logo.jpg",
  },
] as const;

const POPULAR: Article[] = [
  {
    title: "Как перенести занятие",
    href: "/knowledge-base/lessons/reschedule",
    img: "/logo/lurnio-logo.jpg",
  },
  {
    title: "Сброс пароля",
    href: "/knowledge-base/account/reset-password",
    img: "/logo/lurnio-logo.jpg",
  },
  {
    title: "Изменить способ оплаты",
    href: "/knowledge-base/billing/payment-methods",
    img: "/logo/lurnio-logo.jpg",
  },
  { title: "Проверка статуса сервиса", href: "/status", img: "/kb/status.jpg" },
] as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            База знаний
          </h1>
          <p className="mt-2 text-gray-600">
            Справочные материалы и инструкции по работе с платформой.
          </p>

          {/* Категории */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="border border-gray-100 rounded-xl overflow-hidden hover:bg-gray-50 transition-colors"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold text-gray-900">{c.title}</div>
                  <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
                  <span className="mt-3 inline-block text-sm text-gray-700">
                    Открыть →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Популярные статьи */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              Популярные статьи
            </h2>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {POPULAR.map((a) => (
                <Link
                  key={a.title}
                  href={a.href}
                  className="border border-gray-100 rounded-xl overflow-hidden hover:bg-gray-50 transition-colors"
                >
                  <div className="relative h-28 w-full">
                    <Image
                      src={a.img}
                      alt={a.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-medium text-gray-900">
                      {a.title}
                    </div>
                    <span className="mt-2 inline-block text-xs text-gray-600">
                      Читать
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Нижний блок */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10 mt-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-bold">Не нашли ответ?</h3>
          <p className="mt-1 text-purple-100">
            Загляните в Центр помощи или напишите нам.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link
              href="/help-center"
              className="px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-100"
            >
              Центр помощи
            </Link>
            <Link
              href="/contacts"
              className="px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-100"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
