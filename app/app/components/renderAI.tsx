"use client";

import { FeaturesStrip } from "./Sections/FeaturesStrip";
import { TopicChips } from "./Sections/TopicChips";
import { Testimonials } from "./Sections/Testimonials";
import { FAQ } from "./Sections/FAQ";
import { CTABand } from "./Sections/CTABand";
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
