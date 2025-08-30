import React from "react";
import Header from "../components/Header";

export const metadata = {
  title: "Контакти | MentorConnect",
  description:
    "Контактна інформація MentorConnect: адреса, електронна пошта та години роботи.",
};

export const dynamic = "force-static";

export default function ContactsPage() {
  return (
    <>
      <Header variant="minimal" />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Контакти
          </h1>
          <p className="text-slate-600">
            Зв'яжіться з нами з будь-яких організаційних чи партнерських питань.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Штаб-квартира
            </h2>
            <p className="text-slate-700">MentorConnect, GmbH</p>
            <p className="text-slate-700">Example Strasse 12</p>
            <p className="text-slate-700">10115 Berlin, Germany</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Електронна пошта
            </h2>
            <p className="text-slate-700">
              Загальні питання: info@mentorconnect.example
            </p>
            <p className="text-slate-700">
              Партнерства: partnerships@mentorconnect.example
            </p>
            <p className="text-slate-700">Преса: press@mentorconnect.example</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Години роботи
            </h2>
            <p className="text-slate-700">Пн — Пт: 09:00 – 18:00 (CET)</p>
            <p className="text-slate-700">Сб — Нд: вихідні</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Реквізити
            </h2>
            <p className="text-slate-700">VAT: DE123456789</p>
            <p className="text-slate-700">
              Реєстр: Amtsgericht Berlin (Charlottenburg)
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
