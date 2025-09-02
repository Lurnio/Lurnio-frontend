"use client";

import { FeaturesStrip } from "./AiExpertsStoreContent/FeaturesStrip";
import { BannerMentor } from "./Banners/BannerMentor";
import { CardMentor } from "./Cards/CardMentor";

export const RenderMentorsContent = () => (
  <div className="space-y-8 md:space-y-10 lg:space-y-12">
    <BannerMentor />
    <FeaturesStrip />

    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Подберите эксперта
    </h3>
    <CardMentor />
    <section>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </section>
  </div>
);
