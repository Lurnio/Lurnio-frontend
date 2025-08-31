import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Умови користування | MentorConnect",
  description:
    "Правила користування платформою MentorConnect: обов'язки користувачів, оплати, обмеження відповідальності, інтелектуальна власність та контакти.",
};

export const dynamic = "force-static";

export default function TermsPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Умови користування
          </h1>
          <p className="text-slate-600">Останнє оновлення: 27 серпня 2025</p>
        </header>

        {/* Зміст */}
        <nav aria-label="Зміст" className="mb-10">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">Зміст</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>
              <a className="hover:underline" href="#acceptance">
                1. Прийняття умов
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#definitions">
                2. Терміни та визначення
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#accounts">
                3. Акаунти та безпека
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#payments">
                4. Оплати та підписки
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#use">
                5. Правила користування сервісом
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#content">
                6. Контент користувачів
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#ip">
                7. Інтелектуальна власність
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#privacy">
                8. Конфіденційність та cookie
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#prohibited">
                9. Заборонені дії
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#liability">
                10. Обмеження відповідальності
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#warranty">
                11. Відмова від гарантій
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#termination">
                12. Припинення доступу
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#changes">
                13. Зміни до умов
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#law">
                14. Застосовне право
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#contact">
                15. Контакти
              </a>
            </li>
          </ul>
        </nav>

        <section id="acceptance" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            1. Прийняття умов
          </h2>
          <p className="text-slate-700">
            Використовуючи платформу{" "}
            <span className="font-semibold">MentorConnect</span> та повязані
            сервіси, ви погоджуєтесь із цими Умовами користування (надалі —
            «Умови»). Якщо ви не згодні з будь-якою частиною Умов, будь ласка,
            не користуйтеся сервісом.
          </p>
        </section>

        <section id="definitions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            2. Терміни та визначення
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>
              <span className="font-medium">Сервіс</span> — веб-платформа та
              мобільні/веб застосунки MentorConnect.
            </li>
            <li>
              <span className="font-medium">Користувач</span> — будь-яка фізична
              або юридична особа, що користується Сервісом.
            </li>
            <li>
              <span className="font-medium">Ментор</span> — користувач, що надає
              експертні консультації.
            </li>
            <li>
              <span className="font-medium">Сесія</span> — взаємодія між
              користувачем і ментором у межах Сервісу.
            </li>
          </ul>
        </section>

        <section id="accounts" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            3. Акаунти та безпека
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>
              Ви зобовязані надати актуальні та повні дані під час реєстрації.
            </li>
            <li>
              Ви несете відповідальність за збереження конфіденційності
              облікових даних.
            </li>
            <li>
              Повідомляйте нас про будь-яке несанкціоноване використання вашого
              акаунта.
            </li>
          </ul>
        </section>

        <section id="payments" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            4. Оплати та підписки
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>
              Оплата може здійснюватися за підпискою або за кожну сесію окремо.
            </li>
            <li>
              Податки та збори можуть додаватися відповідно до законодавства.
            </li>
            <li>
              Повернення коштів регулюється окремою політикою повернень, якщо
              така передбачена.
            </li>
          </ul>
        </section>

        <section id="use" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            5. Правила користування сервісом
          </h2>
          <p className="text-slate-700 mb-2">Ви погоджуєтеся, що не будете:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Порушувати чинне законодавство або права третіх осіб.</li>
            <li>
              Здійснювати спроби несанкціонованого доступу до будь-яких частин
              Сервісу.
            </li>
            <li>
              Використовувати Сервіс для розповсюдження спаму, шкідливого ПЗ або
              образливого контенту.
            </li>
          </ul>
        </section>

        <section id="content" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            6. Контент користувачів
          </h2>
          <p className="text-slate-700">
            Ви зберігаєте права на власний контент, який завантажуєте або
            створюєте в Сервісі, але надаєте MentorConnect невиключну,
            всесвітню, безоплатну ліцензію на його зберігання та технічну
            обробку з метою надання Сервісу.
          </p>
        </section>

        <section id="ip" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            7. Інтелектуальна власність
          </h2>
          <p className="text-slate-700">
            Усі права на торговельні марки, логотипи, програмний код, тексти та
            дизайн, що належать MentorConnect або ліцензіарам, захищені законом.
            Копіювання або використання без письмового дозволу заборонено.
          </p>
        </section>

        <section id="privacy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            8. Конфіденційність та cookie
          </h2>
          <p className="text-slate-700">
            Обробка персональних даних здійснюється згідно з{" "}
            <Link href="/ua/privacy" className="text-blue-600 hover:underline">
              Політикою конфіденційності
            </Link>
            . Керування файлами cookie доступне в розділі{" "}
            <Link
              href="/ua/cookie-preferences"
              className="text-blue-600 hover:underline"
            >
              Налаштування cookie
            </Link>
            .
          </p>
        </section>

        <section id="prohibited" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            9. Заборонені дії
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Обхід технічних обмежень або втручання у роботу Сервісу.</li>
            <li>
              Видавання себе за іншу особу або неправдиве представлення
              афілійованості.
            </li>
            <li>Збір персональних даних інших користувачів без їх згоди.</li>
          </ul>
        </section>

        <section id="liability" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            10. Обмеження відповідальності
          </h2>
          <p className="text-slate-700">
            У межах, дозволених законом, MentorConnect не несе відповідальності
            за будь-які непрямі, випадкові, штрафні чи опосередковані збитки,
            включно з втратою прибутку або даних, що виникли внаслідок
            користування Сервісом.
          </p>
        </section>

        <section id="warranty" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            11. Відмова від гарантій
          </h2>
          <p className="text-slate-700">
            Сервіс надається «як є» та «як доступно». Ми не гарантуємо
            безперервну чи безпомилкову роботу, а також відповідність Сервісу
            вашим очікуванням.
          </p>
        </section>

        <section id="termination" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            12. Припинення доступу
          </h2>
          <p className="text-slate-700">
            Ми можемо тимчасово призупинити або припинити доступ до Сервісу у
            разі порушення Умов або за вимогою закону. Ви можете видалити акаунт
            у будь-який час у налаштуваннях.
          </p>
        </section>

        <section id="changes" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            13. Зміни до умов
          </h2>
          <p className="text-slate-700">
            Ми можемо періодично оновлювати ці Умови. Дата останнього оновлення
            вказана у верхній частині сторінки. Продовжуючи користуватися
            Сервісом після змін, ви погоджуєтесь із оновленими умовами.
          </p>
        </section>

        <section id="law" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            14. Застосовне право
          </h2>
          <p className="text-slate-700">
            Ці Умови регулюються застосовним законодавством відповідної
            юрисдикції діяльності MentorConnect, якщо інше не передбачено
            імперативними нормами права вашої країни.
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">
            15. Контакти
          </h2>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-700">
              З питань, повязаних з цими Умовами, звертайтесь на адресу:
            </p>
            <p className="text-slate-700 font-medium">
              legal@mentorconnect.example
            </p>
            <p className="text-slate-500 text-sm mt-1">
              * Використовуйте корпоративну пошту лише для юридичних запитів.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
