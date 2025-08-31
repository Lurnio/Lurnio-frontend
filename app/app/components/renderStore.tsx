"use client";

import { BannerStore } from "./Banners/BannerStore";
import { QuickStats } from "../ui/QuickStats";
import { CardStore } from "./Cards/CardStore";

export const RenderStoreContent = () => {
  return (
    <div className="space-y-6">
      <BannerStore />
      <QuickStats />
      <CardStore />
    </div>
  );
};
