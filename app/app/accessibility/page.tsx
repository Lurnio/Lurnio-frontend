import React from "react";


export const metadata = {
  title: "Доступність | MentorConnect",
  description:
    "Заява про доступність MentorConnect: зобов'язання, заходи, відомі обмеження та підтримувані технології.",
};

export const dynamic = "force-static";

export default function AccessibilityPage() {
  return (
    <>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Доступність
          </h1>
          <p className="text-slate-600">
            Ми прагнемо зробити сервіс зручним для всіх користувачів незалежно
            від можливостей.
          </p>
        </header>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Наше зобовязання
          </h2>
          <p className="text-slate-700">
            Ми керуємося принципами WCAG і впроваджуємо кращі практики
            доступності у дизайн, розробку та контент платформи.
          </p>
        </section>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Що ми робимо
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Семантична розмітка і коректні заголовки.</li>
            <li>Помітні фокуси та достатній контраст.</li>
            <li>Клавіатурна навігація і ARIA-атрибути, де це потрібно.</li>
            <li>Періодичні перевірки доступності та внутрішні тренінги.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Відомі обмеження
          </h2>
          <p className="text-slate-700">
            Попри зусилля, деякі розділи можуть тимчасово мати недоліки
            доступності. Ми працюємо над їх усуненням у міру пріоритизації та
            технічних можливостей.
          </p>
        </section>

        <section className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Підтримувані технології
          </h2>
          <p className="text-slate-700">
            Платформа тестується у сучасних браузерах і сумісна з поширеними
            допоміжними технологіями. Рекомендуємо оновлювати браузер до
            останньої версії для найкращого досвіду.
          </p>
        </section>
      </main>
    </>
  );
}
