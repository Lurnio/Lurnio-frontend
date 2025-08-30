// Tabs.tsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export type TabType = "store" | "ai-teachers" | "mentors";
export type Tab = {
  id: TabType;
  label: string;
  icon: React.ElementType;
  count: string;
};

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const sp = useSearchParams();
  const router = useRouter();
  const activeTab = useMemo(() => (sp.get("tab") as TabType) ?? "store", [sp]);

  const handleChange = (next: TabType) => {
    const p = new URLSearchParams(sp.toString());
    p.set("tab", next);
    router.replace(`?${p.toString()}`);
  };

  return (
    <section className="mb-8">
      <div className="flex justify-center mb-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-2 flex gap-2 shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleChange(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all relative ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
