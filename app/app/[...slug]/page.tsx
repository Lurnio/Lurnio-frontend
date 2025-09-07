"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";

const colors = {
  primary: "#2563EB",
  primaryHover: "#1D4ED8",
  accent: "#8B5CF6",
  background: "#F8FAFC",
  white: "#FFFFFF",
  text: "#1E293B",
  textSecondary: "#64748B",
  border: "#E2E8F0",
  error: "#DC2626",
};

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(10);
  const [autoRedirect, setAutoRedirect] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!autoRedirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router, autoRedirect]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 via-white to-purple-50">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          <h1
            className="text-6xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.error} 0%, ${colors.accent} 100%)`,
            }}
          >
            404
          </h1>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            Страница не найдена
          </h2>
          <p className="text-lg mb-2" style={{ color: colors.textSecondary }}>
            Упс! Похоже, что страница, которую вы ищете, не существует.
          </p>

          {autoRedirect && (
            <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <div className="flex items-center justify-center mb-3">
                <RefreshCw
                  size={20}
                  className="mr-2 animate-spin"
                  style={{ color: colors.primary }}
                />
                <span className="font-semibold" style={{ color: colors.text }}>
                  Автоматическое перенаправление
                </span>
              </div>
              <p
                className="text-sm mb-3"
                style={{ color: colors.textSecondary }}
              >
                Вы будете перенаправлены на главную страницу через:
              </p>
              <div
                className="text-2xl font-bold mb-3"
                style={{ color: colors.primary }}
              >
                {countdown} сек
              </div>
              <button
                onClick={() => setAutoRedirect(false)}
                className="text-sm px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ color: colors.textSecondary }}
              >
                Отменить
              </button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-opacity-30"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
              }}
            >
              <Home size={20} className="mr-2" />
              На главную
            </Link>

            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-200 hover:shadow-md hover:scale-105 focus:ring-4 focus:ring-opacity-20"
              style={{ borderColor: colors.border, color: colors.text }}
            >
              <ArrowLeft size={20} className="mr-2" />
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
