import React from "react";
import Header from "../components/Header";


export const metadata = {
  title: "Заява про сучасне рабство | MentorConnect",
  description:
    "Офіційна заява MentorConnect щодо сучасного рабства та експлуатації.",
};

export const dynamic = "force-static";

export default function ModernSlaveryPage() {
  return (
    <>
      <Header variant="minimal" />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Заява про сучасне рабство
          </h1>
          <p className="text-slate-600 max-w-3xl">
            Ми виступаємо проти будь-яких форм примусової праці, торгівлі людьми
            та експлуатації. MentorConnect дотримується міжнародних стандартів
            прав людини.
          </p>
        </header>

        <section className="space-y-6">
          <article className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Наша політика
            </h2>
            <p className="text-slate-700">
              Ми перевіряємо партнерів та постачальників на відповідність
              стандартам етики і не співпрацюємо з тими, хто допускає порушення.
            </p>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Відповідальність
            </h2>
            <p className="text-slate-700">
              Відповідальність за дотримання політики лежить на керівництві
              компанії та всіх співробітниках.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
