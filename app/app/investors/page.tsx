import React from "react";
import Link from "next/link";
import Header from "../components/Header";

export const metadata = {
  title: "Інвестори | MentorConnect",
  description:
    "Інформація для інвесторів: огляд компанії, ключові показники, документи та контакти служби по роботі з інвесторами.",
};

export default function InvestorsPage() {
  return (
    <>
    <Header variant="minimal"/>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Інвестори
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Ласкаво просимо до розділу для інвесторів MentorConnect. Тут ви
            знайдете ключову інформацію про бізнес, фінансові та операційні
            показники, корпоративне управління та офіційні документи.
          </p>
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Користувачів", value: "1,2 млн+" },
            { label: "Активні ментори", value: "8 500+" },
            { label: "Сесій на місяць", value: "120 тис." },
            { label: "CSAT (задоволеність)", value: "4.9/5" },
          ].map((card) => (
            <div
              key={card.label}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-slate-500 mb-1">{card.label}</p>
              <p className="text-2xl font-semibold text-slate-800">
                {card.value}
              </p>
            </div>
          ))}
        </section>

        {/* Інвестпропозиція */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Інвестпропозиція
          </h2>
          <p className="text-slate-600 mb-6 max-w-4xl">
            MentorConnect створює масштабовану платформу менторства з
            використанням ІІ, що поєднує експертів і здобувачів знань у
            реальному часі. Наша стратегія — зростання через якість сервісу,
            партнерства з навчальними закладами та корпоративними клієнтами, а
            також вихід на нові регіони.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Модель монетизації: підписка + комісія з транзакцій.</li>
            <li>
              Утримання користувачів завдяки персоналізації та ІІ-асистентам.
            </li>
            <li>Стійка економіка юніту та позитивний внесок маржі.</li>
            <li>Фокус на B2B-угоди для стабільного MRR.</li>
          </ul>
        </section>

        {/* Документи для інвесторів */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Документи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DocCard title="One-pager компанії" href="#" note="PDF, 2 стор." />
            <DocCard title="Пітч-дек" href="#" note="PDF, 18 слайдів" />
            <DocCard
              title="Фінансова довідка (огляд)"
              href="#"
              note="PDF, квартальний огляд"
            />
            <DocCard
              title="Політика корпоративного управління"
              href="/ua/governance"
              note="Сторінка сайту"
            />
          </div>
        </section>

        {/* Новини/преса */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Новини та преса
          </h2>
          <div className="space-y-4">
            <NewsItem
              title="MentorConnect оголосив про запуск програми для університетів"
              date="2025-05-20"
              href="/ua/press"
            />
            <NewsItem
              title="Партнерство з європейським фондом підтримки талантів"
              date="2025-03-11"
              href="/ua/press"
            />
            <NewsItem
              title="Розширення мережі менторів у Центральній та Східній Європі"
              date="2025-01-30"
              href="/ua/press"
            />
          </div>
          <div className="mt-4">
            <Link
              href="/ua/press"
              className="text-blue-600 font-medium hover:underline"
            >
              Усі матеріали прес-розділу →
            </Link>
          </div>
        </section>

        {/* Контакти IR */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Контакти для інвесторів
          </h2>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="text-slate-700">
              <span className="font-semibold">
                Відділ по роботі з інвесторами (IR):
              </span>{" "}
              ir@mentorconnect.example
            </p>
            <p className="text-slate-700">
              Прес-служба: press@mentorconnect.example
            </p>
            <p className="text-slate-500 text-sm mt-2">
              * Використовуйте корпоративну пошту лише для ділових звернень.
            </p>
          </div>
        </section>

        {/* Додатково */}
        <section className="border-t pt-10">
          <h3 className="text-xl font-semibold mb-3 text-slate-800">
            Корисні посилання
          </h3>
          <div className="flex flex-wrap gap-4 text-blue-600">
            <Link className="hover:underline" href="/ua/privacy">
              Політика конфіденційності
            </Link>
            <Link className="hover:underline" href="/ua/terms">
              Умови користування
            </Link>
            <Link className="hover:underline" href="/ua/modern-slavery">
              Заява про сучасне рабство
            </Link>
            <Link className="hover:underline" href="/ua/accessibility">
              Доступність
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function DocCard({
  title,
  href,
  note,
}: {
  title: string;
  href: string;
  note?: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-slate-100"
    >
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
      {note ? <p className="text-slate-500 text-sm">{note}</p> : null}
    </Link>
  );
}

function NewsItem({
  title,
  date,
  href,
}: {
  title: string;
  date: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-slate-800 font-medium">{title}</h3>
        <time className="text-slate-500 text-sm">
          {new Date(date).toLocaleDateString("uk-UA")}
        </time>
      </div>
    </Link>
  );
}
