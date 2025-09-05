"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  Star,
  Clock,
  Users,
  Play,
  BookOpen,
  TrendingUp,
  Code,
  Database,
  Smartphone,
  Palette,
  BarChart3,
  Brain,
} from "lucide-react";
import Image from "next/image";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  duration: string;
  lessonsCount: number;
  level: "Начинающий" | "Средний" | "Продвинутый";
  category: string;
  tags: string[];
  image: string;
  isPopular?: boolean;
  isBestseller?: boolean;
  lastUpdated: string;
}

const CourseCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все категории");
  const [selectedLevel, setSelectedLevel] = useState("Все уровни");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { name: "Все категории", icon: BookOpen },
    { name: "Python", icon: Code },
    { name: "Веб-разработка", icon: Code },
    { name: "Data Science", icon: Database },
    { name: "Мобильная разработка", icon: Smartphone },
    { name: "Дизайн", icon: Palette },
    { name: "Маркетинг", icon: BarChart3 },
    { name: "ИИ и ML", icon: Brain },
  ];

  const courses: Course[] = [
    {
      id: "1",
      title: "Python для начинающих: от азов до проектов",
      description:
        "Изучите Python с нуля до создания реальных проектов. Основы программирования, структуры данных, ООП и веб-разработка.",
      instructor: "Александр Петров",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      studentsCount: 12547,
      duration: "8 недель",
      lessonsCount: 42,
      level: "Начинающий",
      category: "Python",
      tags: ["Python", "Программирование", "Веб-разработка"],
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      isPopular: true,
      isBestseller: true,
      lastUpdated: "2024-08-15",
    },
    {
      id: "2",
      title: "Django и FastAPI: создание веб-приложений",
      description:
        "Профессиональная разработка веб-приложений на Python. Django, FastAPI, базы данных, деплой и тестирование.",
      instructor: "Мария Сидорова",
      price: 3999,
      originalPrice: 5999,
      rating: 4.9,
      studentsCount: 8934,
      duration: "10 недель",
      lessonsCount: 56,
      level: "Средний",
      category: "Python",
      tags: ["Django", "FastAPI", "Python", "Backend"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      isPopular: true,
      lastUpdated: "2024-09-01",
    },
    {
      id: "3",
      title: "Data Science с Python: анализ данных и ML",
      description:
        "Полный курс по анализу данных: pandas, numpy, matplotlib, scikit-learn. Машинное обучение и визуализация данных.",
      instructor: "Дмитрий Козлов",
      price: 4499,
      rating: 4.7,
      studentsCount: 6721,
      duration: "12 недель",
      lessonsCount: 68,
      level: "Средний",
      category: "Data Science",
      tags: ["Python", "ML", "Pandas", "Анализ данных"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      isBestseller: true,
      lastUpdated: "2024-08-28",
    },
    {
      id: "4",
      title: "Автоматизация с Python: скрипты и боты",
      description:
        "Создавайте полезные скрипты для автоматизации рутинных задач. Парсинг, работа с API, Telegram боты.",
      instructor: "Анна Волкова",
      price: 2499,
      originalPrice: 3999,
      rating: 4.6,
      studentsCount: 4532,
      duration: "6 недель",
      lessonsCount: 35,
      level: "Начинающий",
      category: "Python",
      tags: ["Автоматизация", "Боты", "Python", "API"],
      image:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop",
      lastUpdated: "2024-07-20",
    },
    {
      id: "5",
      title: "React + TypeScript: современная фронтенд разработка",
      description:
        "Создавайте современные веб-приложения с React, TypeScript, Next.js и современными инструментами разработки.",
      instructor: "Сергей Иванов",
      price: 3499,
      rating: 4.8,
      studentsCount: 9876,
      duration: "9 недель",
      lessonsCount: 52,
      level: "Средний",
      category: "Веб-разработка",
      tags: ["React", "TypeScript", "Frontend", "Next.js"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      isPopular: true,
      lastUpdated: "2024-09-03",
    },
    {
      id: "6",
      title: "UI/UX дизайн: от идеи до прототипа",
      description:
        "Изучите основы пользовательского интерфейса и опыта. Figma, принципы дизайна, создание прототипов.",
      instructor: "Екатерина Белова",
      price: 2799,
      originalPrice: 4499,
      rating: 4.7,
      studentsCount: 5643,
      duration: "7 недель",
      lessonsCount: 38,
      level: "Начинающий",
      category: "Дизайн",
      tags: ["UI/UX", "Figma", "Дизайн", "Прототипирование"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      lastUpdated: "2024-08-10",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все категории" ||
      course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "Все уровни" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <nav className="flex space-x-8">
              <span className="text-purple-600 font-medium cursor-pointer border-b-2 border-purple-600 pb-1">
                Курсы
              </span>
              <span className="text-gray-500 hover:text-gray-700 cursor-pointer">
                ИИ-наставники
              </span>
              <span className="text-gray-500 hover:text-gray-700 cursor-pointer">
                Магазин
              </span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Изучайте{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Python
            </span>{" "}
            и не только
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 50+ курсов от экспертов индустрии. Начните свой путь в
            программировании уже сегодня.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск курсов..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative min-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Level Filter */}
            <div className="relative min-w-[150px]">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="Все уровни">Все уровни</option>
                <option value="Начинающий">Начинающий</option>
                <option value="Средний">Средний</option>
                <option value="Продвинутый">Продвинутый</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative min-w-[150px]">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="popular">Популярные</option>
                <option value="newest">Новые</option>
                <option value="rating">По рейтингу</option>
                <option value="price-low">Цена: низкая</option>
                <option value="price-high">Цена: высокая</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.name
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Найдено{" "}
            <span className="font-semibold text-gray-900">
              {filteredCourses.length}
            </span>{" "}
            курсов
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer group"
            >
              {/* Course Image */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  height={30}
                  width={30}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {course.isBestseller && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Бестселлер
                    </span>
                  )}
                  {course.isPopular && (
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Популярный
                    </span>
                  )}
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      course.level === "Начинающий"
                        ? "bg-green-100 text-green-700"
                        : course.level === "Средний"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="text-sm text-gray-500 mb-3">
                  Преподаватель:{" "}
                  <span className="text-gray-700 font-medium">
                    {course.instructor}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.studentsCount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ₽{course.price.toLocaleString()}
                      </span>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₽{course.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {course.originalPrice && (
                      <div className="text-xs text-green-600 font-medium">
                        Скидка{" "}
                        {Math.round(
                          (1 - course.price / course.originalPrice) * 100
                        )}
                        %
                      </div>
                    )}
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 font-medium">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-purple-200 text-purple-600 rounded-xl hover:bg-purple-50 transition-colors font-medium">
            Показать еще курсы
          </button>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Начните изучать Python уже сегодня!
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Присоединяйтесь к более чем 50,000 студентов и станьте
            профессиональным разработчиком
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Смотреть все курсы
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Получить скидку 50%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
