import { ButtonBigWhaite } from "@/app/ui/Buttons/ButtonBigWhait";
import { Sparkles } from "lucide-react";

export const BannerStore = () => (
  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5" />
        <span className="text-sm font-medium opacity-90">
          Ограниченное предложение
        </span>
      </div>
      <h2 className="text-3xl font-bold mb-2">
        Чёрная Пятница: -50% на все курсы
      </h2>
      <p className="text-lg opacity-90 mb-4">
        Только до 30 ноября! Не упустите шанс прокачать навыки
      </p>
        <ButtonBigWhaite text="Выбрать курс"/>
    </div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
  </div>
);
