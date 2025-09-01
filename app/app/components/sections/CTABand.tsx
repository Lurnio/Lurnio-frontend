export function CTABand() {
  return (
    <section className="py-10">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Готовы прокачаться?
          </h3>
          <p className="text-white/80 text-sm mt-1">
            Выбирайте курс, подключайте ИИ-наставника и учитесь в удобном темпе.
          </p>
        </div>
        <button className="px-5 py-2 bg-white text-gray-900 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors cursor-pointer">
          Начать обучение
        </button>
      </div>
    </section>
  );
}
