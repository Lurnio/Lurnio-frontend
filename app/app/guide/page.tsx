import React from "react";
import Header from "../components/Header";

export const metadata = {
  title: "Довідник | MentorConnect",
  description:
    "Довідник MentorConnect: короткі пояснення основних розділів і процесів платформи.",
};

export const dynamic = "force-static";

export default function GuidePage() {
  return (
    <>
      <Header variant="minimal" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Довідник
          </h1>
          <p className="text-slate-600 max-w-3xl">
            Зібрали короткі пояснення про ключові можливості платформи, щоб ви
            швидко орієнтувалися.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((i) => (
            <article
              key={i.title}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-slate-100"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                {i.title}
              </h2>
              <p className="text-slate-700">{i.text}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

const items = [
  {
    title: "Початок роботи",
    text: "Створіть акаунт, вкажіть досвід та цілі, щоб отримати персональні рекомендації менторів.",
  },
  {
    title: "Пошук ментора",
    text: "Фільтруйте за компетенціями, галузями та мовами. Переглядайте профілі, досвід і відгуки.",
  },
  {
    title: "Сесії",
    text: "Бронюйте зустрічі в календарі, узгоджуйте формат (онлайн/офлайн) і готуйте короткий опис запиту.",
  },
  {
    title: "Оплата",
    text: "Оплачуйте підписку або сесії разово. Перевіряйте історію платежів у налаштуваннях акаунта.",
  },
  {
    title: "Зворотний зв'язок",
    text: "Після сесій залишайте оцінки та коментарі — це впливає на рекомендації та якість сервісу.",
  },
  {
    title: "Безпека",
    text: "Двоетапна автентифікація, сповіщення про входи та керування активними сесіями.",
  },
];
