import React from "react";
import Header from "../components/Header";


export const metadata = {
  title: "Керування файлами cookie | MentorConnect",
  description:
    "Сторінка керування налаштуваннями cookie для користувачів MentorConnect.",
};

export const dynamic = "force-static";

export default function CookiePreferencesPage() {
  return (
    <>
      <Header variant="minimal" />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Керувати параметрами файлів cookie
          </h1>
          <p className="text-slate-600">
            Ви можете налаштувати використання cookie для зручності та безпеки.
          </p>
        </header>

        <section className="space-y-6">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Необхідні cookie
            </h2>
            <p className="text-slate-700">
              Використовуються для базової роботи сайту: авторизації, збереження
              налаштувань, захисту від шахрайства.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Аналітичні cookie
            </h2>
            <p className="text-slate-700">
              Дозволяють нам аналізувати трафік та покращувати функціонал
              платформи.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Маркетингові cookie
            </h2>
            <p className="text-slate-700">
              Використовуються для персоналізованої реклами та пропозицій.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
