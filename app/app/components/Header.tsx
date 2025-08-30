"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <Link href="/">
                  <span className="text-xl font-bold text-gray-900">
                    MentorConnect
                  </span>
                  <span className="text-xs text-gray-500 ml-2 hidden sm:inline">
                    Pro
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск курсов, менторов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <kbd className="bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded text-xs font-medium">
                    ⌘K
                  </kbd>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors"
                >
                  Войти
                </Link>
                <Link
                  href="/registration"
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg"
                >
                  Начать обучение
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
