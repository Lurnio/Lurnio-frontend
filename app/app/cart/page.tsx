"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, Tag, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

type CartItem = {
  id: number;
  title: string;
  teacher: string;
  type: "course" | "mentor";
  image: string;
  price: number;
  originalPrice?: number;
  duration?: string;
  session?: string;
  qty: number;
};

const mockCart: CartItem[] = [
  {
    id: 101,
    title: "React Мастерство: От Junior до Senior",
    teacher: "Александр Петров",
    type: "course",
    image: "/logo/lurnio-logo.jpg",
    price: 24000,
    originalPrice: 32000,
    duration: "12 недель",
    qty: 1,
  },
  {
    id: 202,
    title: "Карьерная консультация (ментор)",
    teacher: "Мария Сидорова",
    type: "mentor",
    image: "/logo/lurnio-logo.jpg",
    price: 6000,
    session: "60 минут",
    qty: 2,
  },
];

const LS_KEY = "cart_items_v1";
const COUNT_KEY = "cart_count";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([] as CartItem[]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setItems(JSON.parse(raw));
      else setItems(mockCart);
    } catch {
      setItems(mockCart);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(items));
      const count = items.reduce((acc, it) => acc + it.qty, 0);
      localStorage.setItem(COUNT_KEY, String(count));
      window.dispatchEvent(
        new StorageEvent("storage", { key: COUNT_KEY, newValue: String(count) })
      );
    } catch {}
  }, [items]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const total = subtotal;
    return { subtotal, total };
  }, [items]);

  const inc = (id: number) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );
  const dec = (id: number) =>
    setItems(
      (prev) =>
        prev
          .map((it) =>
            it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
          )
          .filter(Boolean) as CartItem[]
    );
  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
          {items.length > 0 && (
            <button
              onClick={() => setItems([])}
              className="text-sm text-gray-500 hover:text-red-600 cursor-pointer"
            >
              Очистить корзину
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => (
              <div
                key={it.id}
                className="bg-white rounded-2xl shadow border border-gray-100 p-4 flex gap-4 cursor-pointer"
              >
                <div className="relative w-28 aspect-[16/10] rounded-lg overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="112px"
                    className="object-cover cursor-pointer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-900 line-clamp-2 cursor-pointer">
                        {it.title}
                      </div>
                      <div className="text-xs text-blue-600 mt-0.5 cursor-pointer">
                        {it.teacher}
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(it.id)}
                      className="text-gray-400 hover:text-red-600 cursor-pointer"
                    >
                      <Trash2 className="w-5 h-5 cursor-pointer" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="text-base font-bold text-gray-900 cursor-pointer">
                      {it.price.toLocaleString("ru-RU")} ₽
                    </div>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer">
                    <button
                      onClick={() => dec(it.id)}
                      className="p-1 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <Minus className="w-4 h-4 cursor-pointer" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium text-gray-900 cursor-pointer">
                      {it.qty}
                    </span>
                    <button
                      onClick={() => inc(it.id)}
                      className="p-1 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <Plus className="w-4 h-4 cursor-pointer" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-5">
              <h2 className="text-lg font-semibold text-gray-900 cursor-pointer">
                Итого
              </h2>
              <div className="mt-4 space-y-2 text-sm cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Подытог</span>
                  <span className="font-medium text-gray-900">
                    {totals.subtotal.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <div className="h-px bg-gray-100 my-2" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">К оплате</span>
                  <span className="text-gray-900 font-extrabold">
                    {totals.total.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              </div>
              <button className="mt-5 w-full px-6 py-3 rounded-xl text-white font-semibold transition bg-blue-600 hover:bg-blue-700 cursor-pointer">
                Перейти к оплате
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
