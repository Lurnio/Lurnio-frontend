"use client";

import { motion } from "framer-motion";
import type { IconType } from "./types";


type Props<TKey extends string> = {
  tabs: Readonly<Array<{ key: TKey; label: string; icon: IconType }>>;
  value: TKey;
  onChange: (key: TKey) => void;
};

export default function SegmentedTabs<TKey extends string>({
  tabs,
  value,
  onChange,
}: Props<TKey>) {
  return (
    <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-1">
      {tabs.map(({ key, label, icon: Icon }) => {
        const active = value === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`relative px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-sm md:text-base transition-all flex items-center gap-2 ${
              active ? "text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {active && (
              <motion.span
                layoutId="tab-bg"
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow"
                transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Icon className="w-4 h-4" />
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
