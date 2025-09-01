"use client";

import { CategoryGrid } from "./Sections/CategoryGrid";
import { Testimonials } from "./Sections/Testimonials";
import { FAQ } from "./Sections/FAQ";
import { CTABand } from "./Sections/CTABand";
import { BannerStore } from "./Banners/BannerStore";
import { QuickStats } from "../ui/QuickStats";
import { CardStore } from "./Cards/CardStore";

export const RenderStoreContent = () => (
  <div className="space-y-8 md:space-y-10 lg:space-y-12">
    <BannerStore />
    <QuickStats />
    <CategoryGrid />
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Топ-курсы для вас
    </h3>
    <CardStore />

    <section>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </section>
    <Testimonials />
    <FAQ />
    <CTABand />
  </div>
);
