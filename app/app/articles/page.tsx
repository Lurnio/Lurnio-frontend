import React from "react";
import Header from "../components/Header";

export const metadata = {
  title: "Статті | MentorConnect",
  description:
    "Добірка статей MentorConnect: аналітика, навчальні матеріали та історії успіху користувачів.",
};

export const dynamic = "force-static";

export default function ArticlesPage() {
  return (
    <>
      <Header variant="minimal" />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Статті
          </h1>
          <p className="text-slate-600 max-w-3xl">
            Аналітичні матеріали, поради від менторів та практичні кейси
            розвитку кар'єри.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.title}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="text-slate-500 text-sm mb-2">{a.date}</div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                {a.title}
              </h2>
              <p className="text-slate-700 mb-3">{a.summary}</p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

const articles = [
  {
    title: "Як побудувати план розвитку з ментором",
    date: "2025-07-02",
    summary:
      "Покроковий підхід до постановки цілей, вибору компетенцій та вимірювання прогресу.",
    tags: ["менторство", "кар'єра"],
  },
  {
    title: "5 помилок на перших співбесідах",
    date: "2025-06-14",
    summary:
      "Типові промахи кандидатів та як їх уникнути завдяки практиці з ментором.",
    tags: ["співбесіда", "практика"],
  },
  {
    title: "Індивідуальне навчання з ІІ-асистентом",
    date: "2025-05-21",
    summary:
      "Як поєднувати експертизу наставника та швидкість ІІ у щоденному навчанні.",
    tags: ["освіта", "AI"],
  },
  {
    title: "Перехід у нову сферу: кроки та ризики",
    date: "2025-04-09",
    summary:
      "Реалістичний план зміни професії та як його адаптувати під ринок.",
    tags: ["кар'єрний трек", "план"],
  },
  {
    title: "Як обрати ментора під ваші цілі",
    date: "2025-03-28",
    summary:
      "Критерії відбору, що справді працюють: експертиза, стиль зворотного зв'язку, кейси.",
    tags: ["ментор", "вибір"],
  },
  {
    title: "Як підготуватися до технічної сесії",
    date: "2025-02-11",
    summary:
      "Чек-лист підготовки: середовище, завдання, запитання, очікування від результату.",
    tags: ["техніка", "підготовка"],
  },
];
