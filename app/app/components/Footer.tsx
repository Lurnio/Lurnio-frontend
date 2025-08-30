"use client";

import React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  HelpCircle,
  Shield,
  FileText,
} from "lucide-react";

const Footer = () => {
  const colors = {
    primary: "#2563EB",
    accent: "#8B5CF6",
    background: "#F8FAFC",
    white: "#FFFFFF",
    text: "#1E293B",
    textSecondary: "#64748B",
    border: "#E2E8F0",
  } as const;

  const uaResources: { label: string; href: string }[] = [
    { label: "Преса", href: "/press" },
    { label: "Інвестори", href: "/investors" },
    { label: "Умови", href: "/conditions" },
    { label: "Конфіденційність", href: "/privacy" },
    { label: "Довідка", href: "/help" },
    { label: "Доступність", href: "/accessibility" },
    { label: "Контакти", href: "/contacts" },
    { label: "Статті", href: "/articles" },
    { label: "Довідник", href: "/guide" },
    { label: "Філії", href: "/branches" },
    { label: "Заява про сучасне рабство", href: "/modern-slavery" },
    { label: "Керувати параметрами файлів cookie", href: "/cookie-preferences" },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-slate-50 to-blue-50 border-t-2 mt-auto"
      style={{ borderColor: colors.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип + описание */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                }}
                aria-label="MentorConnect logo"
              >
                M
              </div>
              <span
                className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                }}
              >
                MentorConnect
              </span>
            </div>
            <p
              className="text-base mb-8 leading-relaxed max-w-md"
              style={{ color: colors.textSecondary }}
            >
              Інноваційна платформа для пошуку досвідчених менторів та ІІ-асистентів.
              Розвивайтесь професійно з персональною підтримкою експертів у
              різних сферах.
            </p>

            {/* Соцмережі */}
            <div className="flex space-x-4" aria-label="Соціальні мережі">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: "#E4405F" }}
                aria-label="Instagram"
              >
                <Instagram size={24} className="text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: "#1877F2" }}
                aria-label="Facebook"
              >
                <Facebook size={24} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </div>
          </div>

          {/* Ресурси */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ color: colors.text }}>
              Ресурси
            </h3>
            <ul className="space-y-3 text-base" style={{ color: colors.textSecondary }}>
              {uaResources.map((item) => (
                <li key={item.href} className="hover:text-blue-600 transition-colors duration-200">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Компанія */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ color: colors.text }}>
              Компанія
            </h3>
            <ul className="space-y-3 text-base" style={{ color: colors.textSecondary }}>
              <li>
                <Link href="/ua/about" className="hover:text-blue-600 transition-colors duration-200">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="/ua/career" className="hover:text-blue-600 transition-colors duration-200">
                  Кар’єра
                </Link>
              </li>
              <li>
                <Link href="/ua/press" className="hover:text-blue-600 transition-colors duration-200">
                  Прес-центр
                </Link>
              </li>
              <li>
                <Link href="/ua/blog" className="hover:text-blue-600 transition-colors duration-200">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Підтримка */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ color: colors.text }}>
              Підтримка
            </h3>
            <ul className="space-y-3 text-base" style={{ color: colors.textSecondary }}>
              <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                <HelpCircle size={18} />
                <Link href="/ua/help">Довідка</Link>
              </li>
              <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                <Shield size={18} />
                <Link href="/ua/privacy">Політика конфіденційності</Link>
              </li>
              <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                <FileText size={18} />
                <Link href="/ua/terms">Умови користування</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                <Link href="/ua/contacts">Контакти</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижній блок */}
        <div className="border-t-2 mt-12 pt-8" style={{ borderColor: colors.border }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium" style={{ color: colors.textSecondary }}>
              © 2025 MentorConnect. Всі права захищені.
            </p>
            <div
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs"
              style={{ color: colors.textSecondary }}
            >
              <Link href="/ua/terms" className="hover:text-blue-600 transition-colors duration-200">
                Умови
              </Link>
              <Link href="/ua/cookies" className="hover:text-blue-600 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/ua/notifications" className="hover:text-blue-600 transition-colors duration-200">
                Сповіщення
              </Link>
              <Link href="/ua/privacy" className="hover:text-blue-600 transition-colors duration-200">
                Конфіденційність
              </Link>
              <Link href="/ua/cookie-preferences" className="hover:text-blue-600 transition-colors duration-200">
                Налаштування cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
