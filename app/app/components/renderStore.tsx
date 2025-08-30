"use client";

import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import {
  ChevronDown,
  Star,
  Users,
  ShoppingCart,
  Bot,
  UserCheck,
  BookOpen,
  Award,
  Filter,
  Grid,
  List,
} from "lucide-react";
import { useState } from "react";
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
    isBestseller: false,
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

const stats = [
  { label: "Активных студентов", value: "125K+", icon: Users },
  { label: "Завершённых курсов", value: "45K+", icon: BookOpen },
  { label: "Экспертов-менторов", value: "2,500+", icon: Award },
  { label: "Средний рейтинг", value: "4.8★", icon: Star },
];

export const RenderStoreContent = () => {
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };
  return (
    <div className="space-y-6">
      {/* Featured Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium opacity-90">
              Ограниченное предложение
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            Чёрная Пятница: -50% на все курсы
          </h2>
          <p className="text-lg opacity-90 mb-4">
            Только до 30 ноября! Не упустите шанс прокачать навыки
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Выбрать курс <ArrowUpRight className="w-4 h-4 inline ml-1" />
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Products Grid */}
      <div
        className={`grid gap-3 ${
          viewType === "grid"
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "grid-cols-1"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 ${
              viewType === "list" ? "flex h-32" : "h-72"
            }`}
          >
            {/* Course Image/Icon */}
            <div
              className={`relative ${
                viewType === "list" ? "w-32 flex-shrink-0" : "h-28"
              } bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center`}
            >
              <div className="text-white text-lg font-bold">
                {product.image}
              </div>

              {/* Badges */}
              <div className="absolute top-1 left-1 flex gap-1">
                {product.discount && (
                  <span className="bg-red-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    favorites.has(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Heart className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div
              className={`p-2 flex-1 ${
                viewType === "list" ? "flex flex-col justify-between" : ""
              }`}
            >
              {/* Header */}
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 text-xs leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                  <span className="truncate">{product.level}</span>
                  <span>•</span>
                  <span>{product.duration}</span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1 mb-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-3 h-3" />
                    <span>{(product.students! / 1000).toFixed(1)}k</span>
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

                {/* Tags */}
                {product.badges && (
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
                )}
              </div>

              {/* Price & Actions */}
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
                <button className="w-full bg-blue-600 text-white py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                  Купить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
