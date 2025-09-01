import { ButtonBigWhaite } from "@/app/ui/Buttons/ButtonBigWhait";
import { ButtonTransparent } from "@/app/ui/Buttons/ButtonTransparent";
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
        <ButtonBigWhaite text="Поробовать бесплатно"/>
        <ButtonTransparent text="Узнать больше"/>
      </div>
    </div>
  </div>
);
