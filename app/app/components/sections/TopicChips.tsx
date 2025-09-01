export function TopicChips() {
  const topics = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Docker",
    "Kubernetes",
    "UI/UX",
    "ML",
  ];
  return (
    <section className="py-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Популярные темы
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <button
            key={t}
            className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors cursor-pointer"
          >
            {t}
          </button>
        ))}
      </div>
    </section>
  );
}
