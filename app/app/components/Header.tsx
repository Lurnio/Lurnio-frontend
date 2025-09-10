"use client";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState<number>(0);

  // Слушаем локальное хранилище, чтобы бейдж обновлялся после изменений на /cart
  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem("cart_count");
        setCartCount(raw ? parseInt(raw, 10) || 0 : 0);
      } catch {
        setCartCount(0);
      }
    };
    read();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "cart_count") read();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Лого */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/lurnio-logo.jpg"
                alt="Lurnio Logo"
                width={40}
                height={40}
                priority
                className="rounded-md"
              />
              <span className="text-xl font-bold text-gray-900">Lurnio</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Поиск */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск курсов, менторов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <kbd className="bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded text-xs font-medium">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Корзина */}
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
              aria-label="Перейти в корзину"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] font-semibold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-900">
                Корзина
              </span>
            </Link>

            {/* Кнопка выбора роли */}
            <div className="flex items-center gap-2">
              <Link
                href="/choose-role"
                className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Выбрать роль
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
