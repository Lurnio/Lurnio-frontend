import React from "react";
import Link from "next/link";
import Header from "../components/Header";

export const metadata = {
  title: "Преса | MentorConnect",
  description:
    "Офіційні прес-релізи та публікації MentorConnect. Дізнайтеся останні новини та оновлення нашої платформи.",
};

const PressPage = () => {
  return (
    <>
      <Header variant="minimal" />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Преса
        </h1>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl">
          Тут ви знайдете офіційні прес-релізи, новини компанії та публікації у
          ЗМІ. Ми прагнемо до прозорості та відкритого діалогу з медіа.
        </p>

        <section className="space-y-8">
          {/* Приклад статей */}
          <article className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">
              MentorConnect залучив інвестиції для розвитку платформи
            </h2>
            <p className="text-slate-600 mb-4">
              У 2025 році компанія отримала фінансування від провідних
              європейських венчурних фондів для вдосконалення ІІ-асистентів та
              розширення міжнародної спільноти менторів.
            </p>
            <Link
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Читати більше →
            </Link>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">
              Запуск освітньої програми для студентів
            </h2>
            <p className="text-slate-600 mb-4">
              Ми започаткували спеціальну програму підтримки студентів
              університетів, яка допоможе майбутнім спеціалістам знайти своїх
              перших менторів та розвивати кар’єру.
            </p>
            <Link
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Читати більше →
            </Link>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">
              MentorConnect у медіа
            </h2>
            <p className="text-slate-600 mb-4">
              Про нас пишуть провідні українські та міжнародні видання.
              Ознайомтеся з підбіркою публікацій та інтерв’ю.
            </p>
            <Link
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Переглянути публікації →
            </Link>
          </article>
        </section>
      </main>
    </>
  );
};

export default PressPage;
