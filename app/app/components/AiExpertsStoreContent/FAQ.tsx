export function FAQ() {
  const items = [
    {
      q: "Как выбрать курс?",
      a: "Смотрите программу, практику и отзывы. Начните с базового уровня и двигайтесь выше.",
    },
    {
      q: "Есть ли сертификаты?",
      a: "Да, после завершения — цифровой сертификат, который можно добавить в резюме/LinkedIn.",
    },
    {
      q: "Как работает ИИ-наставник?",
      a: "Доступен 24/7, отвечает на вопросы по материалу и подсказывает по задачам.",
    },
  ] as const;

  // НЕТ "use client" — это Server Component
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Частые вопросы
      </h3>

      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {items.map((it, i) => {
          const inputId = `faq-radio-${i}`;
          return (
            <div key={it.q} className="group">
              {/* Один name на все инпуты => открыт только один пункт */}
              <input
                type="radio"
                name="faq-accordion"
                id={inputId}
                className="peer sr-only"
                defaultChecked={i === 0}
              />

              <label
                htmlFor={inputId}
                className="flex w-full cursor-pointer items-center justify-between p-4 md:p-5 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{it.q}</span>
                <span className="text-gray-400 text-sm">
                  {/* Плюс/минус через peer */}
                  <span className="peer-checked:hidden">+</span>
                  <span className="hidden peer-checked:inline">−</span>
                </span>
              </label>

              <div className="hidden peer-checked:block px-4 pb-4 md:px-5 md:pb-5">
                <p className="mt-2 text-sm text-gray-600">{it.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
