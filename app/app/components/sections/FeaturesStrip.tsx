export function FeaturesStrip() {
  const items = [
    {
      title: "Учись в своём ритме",
      desc: "Доступ к контенту 24/7",
      icon: "⏱️",
    },
    { title: "Проверенные эксперты", desc: "Опыт из индустрии", icon: "🏆" },
    { title: "Практика и проекты", desc: "Кейсы близкие к работе", icon: "🧩" },
    { title: "Сертификаты", desc: "Подтверждение навыков", icon: "🎓" },
  ];
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white border border-gray-200 rounded-2xl p-4">
        {items.map((it) => (
          <div key={it.title} className="flex items-start gap-3">
            <div className="text-blue-600 text-xl leading-none">{it.icon}</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                {it.title}
              </div>
              <div className="text-xs text-gray-500">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
