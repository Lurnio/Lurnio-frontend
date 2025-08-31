import { Bot } from "lucide-react";

export const AIBanner = () => (
  <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden">
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <Bot className="w-5 h-5" />
        <span className="text-sm font-medium opacity-90">
          Искусственный интеллект
        </span>
      </div>
      <h2 className="text-3xl font-bold mb-2">
        ИИ-наставники нового поколения
      </h2>
      <p className="text-lg opacity-90 mb-4">
        Персонализированное обучение 24/7 с мгновенной обратной связью
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
          Попробовать бесплатно
        </button>
        <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer">
          Узнать больше
        </button>
      </div>
    </div>
  </div>
);
