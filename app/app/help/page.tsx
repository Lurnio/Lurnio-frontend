import React from "react";
import Header from "../components/Header";

export const metadata = {
  title: "Довідка | MentorConnect",
  description:
    "Довідковий розділ MentorConnect: відповіді на часті запитання та поради з використання платформи.",
};

export const dynamic = "force-static";

export default function HelpPage() {
  return (
    <>
      <Header variant="minimal" />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Довідка
          </h1>
          <p className="text-slate-600">
            Зібрали відповіді на поширені запитання, щоб ви швидко знаходили
            рішення.
          </p>
        </header>

        <section className="space-y-6">
          {faq.map((i) => (
            <article
              key={i.q}
              className="p-6 bg-white rounded-2xl shadow-md border border-slate-100"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                {i.q}
              </h2>
              <p className="text-slate-700">{i.a}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

const faq = [
  {
    q: "Як почати користуватися платформою?",
    a: "Створіть акаунт, заповніть профіль і оберіть ментора за спеціальністю або темою, що вас цікавить. Після цього забронюйте сесію у зручний час.",
  },
  {
    q: "Чим відрізняється роль ментора від ролі здобувача знань?",
    a: "Ментор ділиться досвідом та допомагає будувати траєкторію розвитку; здобувач знань отримує персональні поради та практичні кроки.",
  },
  {
    q: "Як скасувати або перенести сесію?",
    a: "Скасування і перенесення доступні у вашому профілі в розділі керування сесіями до початку зустрічі згідно з обраними умовами.",
  },
  {
    q: "Чи зберігаються записи сесій?",
    a: "Записи сесій можуть зберігатися для якості сервісу й навчальних цілей, якщо ви та ментор надали на це згоду.",
  },
  {
    q: "Як захищаються мої дані?",
    a: "Ми використовуємо сучасні методи шифрування та практики безпеки. Деталі описано у розділі Конфіденційність.",
  },
];
