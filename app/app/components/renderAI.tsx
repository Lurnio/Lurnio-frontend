import { AIBanner } from "./Banners/BannerAI";
import { AICard } from "./Cards/CardAI";

export const RenderAITeachersContent = () => (
  <div className="space-y-6">
    <AIBanner />
    <AICard />
  </div>
);
