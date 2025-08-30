"use client";

import { Globe, MessageCircle, TrendingUp, Users } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-bold text-gray-900 text-lg">
                MentorConnect
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Платформа нового поколения для ускоренного обучения и
              профессионального развития.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, label: "Website" },
                { icon: Users, label: "Community" },
                { icon: TrendingUp, label: "Analytics" },
                { icon: MessageCircle, label: "Support" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    title={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {[
            {
              title: "Обучение",
              links: [
                "Курсы и программы",
                "ИИ-наставники",
                "Персональные менторы",
                "Корпоративное обучение",
              ],
            },
            {
              title: "Ресурсы",
              links: [
                "База знаний",
                "Блог и статьи",
                "Карьерные гиды",
                "Истории успеха",
              ],
            },
            {
              title: "Поддержка",
              links: [
                "Центр помощи",
                "Связаться с нами",
                "Статус сервиса",
                "Обратная связь",
              ],
            },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {link}
                    </a>
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
              {[
                "Пресса",
                "Инвесторы",
                "Условия",
                "Конфиденциальность",
                "Справка",
                "Доступность",
                "Контакты",
                "Статьи",
                "Справочник",
                "Филиалы",
                "Управлять параметрами файлов cookie",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 MentorConnect. Все права защищены.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
