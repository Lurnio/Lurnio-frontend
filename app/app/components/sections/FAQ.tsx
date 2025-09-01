"use client";
import { useState } from "react";

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
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Частые вопросы
      </h3>
      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {items.map((it, i) => (
          <button
            key={it.q}
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left p-4 md:p-5 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">{it.q}</span>
              <span className="text-gray-400 text-sm">
                {open === i ? "−" : "+"}
              </span>
            </div>
            {open === i && <p className="mt-2 text-sm text-gray-600">{it.a}</p>}
          </button>
        ))}
      </div>
    </section>
  );
}
