import type { LucideIcon } from "lucide-react";
import { Globe, MessageCircle, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ---------- Types ---------- */
type NavLink = { label: string; href: string };
type NavSection = { title: string; links: NavLink[] };
type SocialLink = { icon: LucideIcon; label: string; href: string };

/* ---------- Data (заполни href своими путями) ---------- */
const SOCIAL_LINKS: SocialLink[] = [
  { icon: Globe, label: "Website", href: "" },
  { icon: Users, label: "Community", href: "" },
  { icon: TrendingUp, label: "Analytics", href: "" },
  { icon: MessageCircle, label: "Support", href: "" },
] as const;

const MAIN_SECTIONS: NavSection[] = [
  {
    title: "Обучение",
    links: [
      { label: "Курсы и программы", href: "/store" },
      { label: "ИИ-наставники", href: "/ai-experts" },
      { label: "Персональные менторы", href: "/experts" },
      { label: "Корпоративное обучение", href: "" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { label: "База знаний", href: "/knowledge-base" },
      { label: "Блог и статьи", href: "/articles" },
      { label: "Карьерные гиды", href: "/career-guides" },
      { label: "Истории успеха", href: "/success-stories" },
    ],
  },
  {
    title: "Поддержка",
    links: [
      { label: "Центр помощи", href: "/help-center" },
      { label: "Связаться с нами", href: "/contacts" },
      { label: "Статус сервиса", href: "/status-server" },
      { label: "Обратная связь", href: "/feedback" },
    ],
  },
] as const;

const MORE_LINKS: NavLink[] = [
  { label: "Пресса", href: "/press" },
  { label: "Инвесторы", href: "/investors" },
  { label: "Условия", href: "/conditions" },
  { label: "Конфиденциальность", href: "/privacy" },
  { label: "Доступность", href: "/accessibility" },
  { label: "Справочник", href: "/guide" },
  { label: "Филиалы", href: "/branches" },
  { label: "Управлять параметрами файлов cookie", href: "/cookie-preferences" },
] as const;

const LEGAL_LINKS: NavLink[] = [
  { label: "Условия использования", href: "" },
  { label: "Конфиденциальность", href: "" },
  { label: "Cookies", href: "" },
] as const;

/* ---------- Component ---------- */
const Footer = () => {
  return (
    <footer className="border-t bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand + social */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo/lurnio-logo.jpg"
                alt="Lurnio Logo"
                width={32}
                height={32}
                priority
              />
              <span className="font-bold text-gray-900 text-lg">Lurnio</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Платформа нового поколения для ускоренного обучения и
              профессионального развития.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* 3 main columns */}
          {MAIN_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Ещё */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Ещё
            </h4>
            <ul className="space-y-3">
              {MORE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 MentorConnect. Все права защищены.
            </p>
            <div className="flex items-center gap-6 text-sm">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
