"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Bot, UserCheck } from "lucide-react";

const tabs = [
  {
    id: "ai-teachers",
    label: "ИИ-наставники",
    icon: Bot,
    count: "24/7",
    href: "/ai-experts",
  },
  {
    id: "store",
    label: "Магазин курсов",
    icon: ShoppingCart,
    count: "1,200+",
    href: "/store",
  },
  {
    id: "mentors",
    label: "Эксперты",
    icon: UserCheck,
    count: "2,500+",
    href: "/experts",
  },
] as const;

export function TabsNav() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-2 flex gap-2 shadow-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
