import React from "react";



export const metadata = {
  title: "Філії | MentorConnect",
  description:
    "Перелік регіональних офісів та партнерських центрів MentorConnect.",
};

export const dynamic = "force-static";

export default function BranchesPage() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Філії
          </h1>
          <p className="text-slate-600 max-w-3xl">
            Ми розширюємо присутність у світі через локальні офіси та
            партнерські центри. Це дозволяє бути ближче до наших користувачів.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-1">
              Берлін
            </h2>
            <p className="text-slate-700">Центральний європейський офіс.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-1">Київ</h2>
            <p className="text-slate-700">Регіональний центр Східної Європи.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-1">
              Варшава
            </h2>
            <p className="text-slate-700">
              Офіс підтримки міжнародних проєктів.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
