export function CategoryGrid() {
  const cats = [
    "Frontend Development",
    "Backend Development",
    "Data Science",
    "Design",
    "DevOps",
    "Mobile",
    "Analytics",
    "Product Management",
  ];
  return (
    <section className="py-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Топ категории
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {cats.map((c) => (
          <button
            key={c}
            className="group text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="text-sm font-medium text-gray-900 group-hover:text-gray-900">
              {c}
            </div>
            <div className="text-xs text-gray-500 mt-1">120+ курсов</div>
          </button>
        ))}
      </div>
    </section>
  );
}
