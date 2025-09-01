import { RenderAITeachersContent } from "../components/renderAI";
import { TabsNav } from "../components/TabsNav";

export const dynamic = "force-static"; // опционально

export default function MainAIPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Образовательная платформа
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            нового поколения
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
          Курсы от экспертов, ИИ-наставники 24/7 и персональное менторство...
        </p>
      </section>

      <section className="mb-8">
        <TabsNav />
      </section>

      <RenderAITeachersContent />
    </main>
  );
}
