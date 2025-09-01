"use client";

import { FeaturesStrip } from "./sections/FeaturesStrip";
import { TopicChips } from "./sections/TopicChips";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { CTABand } from "./sections/CTABand";
import { AIBanner } from "./Banners/BannerAI";
import { AICard } from "./Cards/CardAI";

export const RenderAITeachersContent = () => (
  <div className="space-y-8 md:space-y-10 lg:space-y-12">
    <AIBanner />
    <FeaturesStrip />
    <TopicChips />
    <AICard />
    <Testimonials />
    <FAQ />
    <CTABand />
  </div>
);
