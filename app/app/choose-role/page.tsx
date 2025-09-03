// app/choose-role/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, User, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ChooseRolePage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Шапка секции */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-4">
            <Image
              src="/logo/lurnio-logo.jpg"
              alt="Lurnio Logo"
              width={48}
              height={48}
              className="rounded-md"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Выберите роль в <span className="text-blue-600">Lurnio</span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Настроим опыт под ваши цели: учиться быстрее с ИИ-наставником или
            менторить и помогать другим расти.
          </p>
        </motion.div>

        {/* Карточки ролей */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Пользователь/Ученик */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            {/* свеча/акцент */}
            <div
              className="pointer-events-none absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "radial-gradient(600px 200px at 100% 0%, rgba(59,130,246,.10), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700">
                <User className="w-6 h-6" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900">
                Я — пользователь
              </h2>
              <p className="mt-2 text-gray-600">
                Проходите курсы, получайте персональные подсказки от
                ИИ-наставника и поддержку сообщества.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                >
                  Войти <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/registration"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Зарегистрироваться <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Ментор */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div
              className="pointer-events-none absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "radial-gradient(600px 200px at 0% 0%, rgba(139,92,246,.10), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600/10 text-purple-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900">
                Я — ментор
              </h2>
              <p className="mt-2 text-gray-600">
                Делитесь экспертизой, ведите учеников и масштабируйте менторство
                с помощью инструментов Lurnio.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                <Link
                  href="/login?role=mentor"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                >
                  Войти как ментор <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/registration?role=mentor"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                >
                  Стать ментором <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* подвал блока */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Роль можно поменять в любой момент в настройках профиля.
        </motion.p>
      </section>
    </main>
  );
}
