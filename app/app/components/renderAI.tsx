"use client";

import { AIBanner } from "./Banners/BannerAI";
import { AICard } from "./Cards/CardAI";
import { TopicChips } from "./AiExpertsStoreContent/TopicChips";
import { CTABand } from "./AiExpertsStoreContent/CTABand";
import { FAQ } from "./AiExpertsStoreContent/FAQ";
import { Testimonials } from "./AiExpertsStoreContent/Testimonials";

export const RenderAITeachersContent = () => (
  <div className="space-y-8 md:space-y-10 lg:space-y-12">
    <AIBanner />
    <TopicChips />
    <AICard />
    <Testimonials />
    <FAQ />
    <CTABand />
  </div>
);
