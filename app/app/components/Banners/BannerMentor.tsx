import { UserCheck } from "lucide-react";

export const BannerMentor = () => (
  <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <UserCheck className="w-5 h-5" />
        <span className="text-sm font-medium opacity-90">
          Персональное наставничество
        </span>
      </div>
      <h2 className="text-3xl font-bold mb-2">Эксперты из ведущих компаний</h2>
      <p className="text-lg opacity-90 mb-4">
        Индивидуальные консультации от практикующих специалистов
      </p>
      <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
        Найти ментора
      </button>
    </div>
  </div>
);
