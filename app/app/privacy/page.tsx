import React from "react";

export const metadata = {
  title: "Конфіденційність | MentorConnect",
  description:
    "Політика конфіденційності MentorConnect: принципи обробки даних, безпека та права користувачів.",
};

export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Конфіденційність
          </h1>
          <p className="text-slate-600">Останнє оновлення: 27 серпня 2025</p>
        </header>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">Вступ</h2>
          <p className="text-slate-700">
            Ми поважаємо вашу приватність і прагнемо прозорої обробки
            персональних даних. У цій політиці описано, які дані ми збираємо, з
            якою метою та як забезпечуємо їхню безпеку.
          </p>
        </section>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Збір даних
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Реєстраційні дані (ім’я, електронна адреса, роль).</li>
            <li>Дані профілю та налаштування.</li>
            <li>Технічні дані (IP-адреса, тип пристрою, журнал подій).</li>
            <li>Дані взаємодії з сервісом (пошук менторів, сесії, відгуки).</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Використання даних
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Надання та покращення функцій платформи.</li>
            <li>Персоналізація рекомендацій, підтримка користувачів.</li>
            <li>Аналітика для розвитку продукту та якості сервісу.</li>
            <li>Виконання юридичних зобов’язань.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Зберігання та безпека
          </h2>
          <p className="text-slate-700">
            Дані зберігаються на захищених серверах із сучасними засобами
            безпеки. Доступ до персональних даних обмежений і регулюється
            принципами необхідності.
          </p>
        </section>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Права користувача
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Доступ, виправлення та видалення даних.</li>
            <li>Обмеження обробки та заперечення проти обробки.</li>
            <li>Перенесення даних, якщо це застосовно.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Cookies
          </h2>
          <p className="text-slate-700">
            Ми використовуємо файли cookie для функціональності, аналітики та
            покращення користувацького досвіду. Ви можете керувати своїми
            вподобаннями у налаштуваннях браузера або в налаштуваннях cookie у
            вашому акаунті.
          </p>
        </section>

        <section className="p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            Контакти з питань приватності
          </h2>
          <p className="text-slate-700">
            Якщо у вас є запитання щодо цієї політики, звертайтесь на адресу:
            privacy@mentorconnect.example
          </p>
        </section>
      </main>
    </>
  );
}
