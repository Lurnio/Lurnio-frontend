import Image from "next/image";

export function Testimonials() {
  const items = [
    {
      name: "Анна",
      text: "Нашла идеальный курс по React — сразу применила на работе.",
      rating: 5,
    },
    {
      name: "Игорь",
      text: "Формат понятный, много практики. Отличные наставники.",
      rating: 5,
    },
    {
      name: "Марина",
      text: "AI-наставник помогает в любое время — очень удобно.",
      rating: 5,
    },
  ];
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Что говорят ученики
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((r) => (
          <div
            key={r.name}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={"https://randomuser.me/api/portraits/women/44.jpg"}
                alt="photo-profile"
                width={30}
                height={30}
                className="!w-8 !h-8 rounded-full"
              />
              <div className="text-sm font-semibold text-gray-900">
                {r.name}
              </div>
            </div>
            <div className="text-sm text-gray-600">“{r.text}”</div>
          </div>
        ))}
      </div>
    </section>
  );
}
