"use client";
import Image from "next/image";
import { ButtonFavorite } from "@/app/ui/Buttons/ButtonFavorite";
import { ButtonBlue } from "@/app/ui/Buttons/ButtonBlue";
import { Star, Users, LayoutGrid, List as ListIcon } from "lucide-react";
import { useEffect, useState } from "react";

/* ---------------- Types & Data ---------------- */

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  discount?: number;
  badges?: string[];
  duration?: string;
  level?: string;
  students?: number;
  lastUpdated?: string;
  instructor?: string;
  modules?: number;
  isBestseller?: boolean;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "React Мастерство: От Junior до Senior",
    category: "Frontend Development",
    price: "24,000 ₽",
    originalPrice: "32,000 ₽",
    rating: 4.9,
    reviews: 1247,
    description:
      "Полный курс по современному React с TypeScript, Next.js и реальными проектами для портфолио.",
    image: "RC",
    discount: 25,
    badges: ["Бестселлер", "Обновлён"],
    duration: "12 недель",
    level: "Intermediate",
    students: 3420,
    lastUpdated: "2 дня назад",
    instructor: "Александр Петров",
    modules: 24,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Python для Data Science Pro",
    category: "Data Science",
    price: "28,500 ₽",
    originalPrice: "35,000 ₽",
    rating: 4.8,
    reviews: 892,
    description:
      "Комплексное изучение анализа данных, машинного обучения и нейронных сетей с практическими проектами.",
    image: "PY",
    discount: 19,
    badges: ["Популярный", "Сертификат"],
    duration: "16 недель",
    level: "Advanced",
    students: 2156,
    instructor: "Дмитрий Козлов",
    modules: 32,
  },
  {
    id: 3,
    name: "UX/UI Design Bootcamp 2025",
    category: "Design",
    price: "32,000 ₽",
    rating: 4.7,
    reviews: 634,
    description:
      "Интенсивное обучение дизайну интерфейсов с фокусом на современные тренды и реальные кейсы.",
    image: "UX",
    badges: ["Интенсив", "Новый"],
    duration: "10 недель",
    level: "Beginner",
    students: 1523,
    instructor: "Елена Волкова",
    modules: 20,
    isNew: true,
  },
  {
    id: 4,
    name: "Product Management: 0 to Hero",
    category: "Product Management",
    price: "26,000 ₽",
    originalPrice: "30,000 ₽",
    rating: 4.9,
    reviews: 756,
    description:
      "Полный путь от идеи до запуска продукта: стратегия, метрики, команда и масштабирование.",
    image: "PM",
    discount: 13,
    badges: ["Рекомендуют", "Pro"],
    duration: "14 недель",
    level: "Intermediate",
    students: 2034,
    instructor: "Мария Сидорова",
    modules: 28,
  },
  {
    id: 5,
    name: "Fullstack JavaScript Мастер",
    category: "Web Development",
    price: "35,000 ₽",
    originalPrice: "42,000 ₽",
    rating: 4.8,
    reviews: 1089,
    description:
      "Комплексное изучение JavaScript: React, Node.js, базы данных и деплой реальных приложений.",
    image: "JS",
    discount: 17,
    badges: ["Комплексный", "Практика"],
    duration: "20 недель",
    level: "Intermediate",
    students: 2845,
    instructor: "Алексей Смирнов",
    modules: 40,
  },
  {
    id: 6,
    name: "DevOps и Cloud: AWS & Docker",
    category: "DevOps",
    price: "29,000 ₽",
    rating: 4.6,
    reviews: 423,
    description:
      "Изучение DevOps практик: Docker, Kubernetes, AWS, CI/CD и автоматизация развертывания.",
    image: "DO",
    badges: ["Востребованный", "Cloud"],
    duration: "12 недель",
    level: "Advanced",
    students: 1287,
    instructor: "Сергей Иванов",
    modules: 26,
    isNew: true,
  },
];

type ViewType = "grid" | "list";
const FAV_LS_KEY = "card_store_favorites_v1";

/* ---------------- Component ---------------- */

export const CardStore = () => {
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAV_LS_KEY);
      if (raw) setFavorites(new Set(JSON.parse(raw) as number[]));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(FAV_LS_KEY, JSON.stringify([...favorites]));
    } catch {}
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const mediaClass =
    viewType === "list"
      ? "w-32 aspect-square flex-shrink-0"
      : "w-full aspect-[16/9]";

  return (
    <div className="w-full">
      {/* Тогглер вида */}
      <div className="flex items-center justify-end mb-3">
        <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            aria-label="Плиткой"
            aria-pressed={viewType === "grid"}
            onClick={() => setViewType("grid")}
            className={`cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition
              ${
                viewType === "grid"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            title="Плиткой"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Списком"
            aria-pressed={viewType === "list"}
            onClick={() => setViewType("list")}
            className={`cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition
              ${
                viewType === "list"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            title="Списком"
          >
            <ListIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Сетка / Список */}
      <div
        className={`grid gap-3 ${
          viewType === "grid"
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "grid-cols-1"
        }`}
      >
        {products.map((product) => {
          const Media = (
            <div className={`relative overflow-hidden ${mediaClass}`}>
              <Image
                src="/logo/lurnio-logo.jpg"
                alt="Course cover"
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/35 to-purple-600/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-lg font-bold drop-shadow">
                  {product.image}
                </div>
              </div>
              <div className="absolute top-1 left-1 flex gap-1">
                {!!product.discount && (
                  <span className="bg-red-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <ButtonFavorite
                isFavorite={favorites.has(product.id)}
                onToggle={() => toggleFavorite(product.id)}
              />
            </div>
          );

          const Content = (
            <div className="p-2 flex-1 flex flex-col">
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 text-xs leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                  {product.level && (
                    <span className="truncate">{product.level}</span>
                  )}
                  {product.level && product.duration && <span>•</span>}
                  {product.duration && <span>{product.duration}</span>}
                </div>
              </div>

              <div className="space-y-1 mb-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-3 h-3" />
                    <span>
                      {product.students
                        ? (product.students / 1000).toFixed(1) + "k"
                        : "—"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {product.instructor && (
                  <div className="text-xs text-blue-600 font-medium truncate">
                    {product.instructor}
                  </div>
                )}

                {product.badges?.length ? (
                  <div className="flex flex-wrap gap-1">
                    {product.badges.slice(0, 2).map((badge, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-1 py-0.5 rounded text-xs"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* grid-вариант: цена + кнопка внизу */}
              {viewType === "grid" && (
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-900 text-sm">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <ButtonBlue text="Купить" />
                </div>
              )}
            </div>
          );

          // правая колонка действий для list-вида: всегда видна
          const ActionsList = (
            <div className="p-2 w-36 flex-shrink-0 flex flex-col items-end justify-between">
              <div className="text-right mb-2">
                <div className="text-sm font-bold text-gray-900">
                  {product.price}
                </div>
                {product.originalPrice && (
                  <div className="text-xs text-gray-500 line-through">
                    {product.originalPrice}
                  </div>
                )}
              </div>
              <div className="w-full">
                <ButtonBlue text="Купить" />
              </div>
            </div>
          );

          return (
            <div
              key={product.id}
              className={`group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200
                ${viewType === "list" ? "flex" : "flex flex-col"} `}
            >
              {viewType === "grid" ? (
                <>
                  {Media}
                  {Content}
                </>
              ) : (
                // LIST layout: [Media] [Content] [Actions]
                <>
                  {Media}
                  {Content}
                  {ActionsList}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
