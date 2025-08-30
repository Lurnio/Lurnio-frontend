"use client";
//#region imports
import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Star,
  Users,
  TrendingUp,
  Clock,
  Globe,
  ShoppingCart,
  Bot,
  UserCheck,
  Play,
  BookOpen,
  Award,
  Filter,
  Grid,
  List,
  Heart,
  Share2,
  Bookmark,
  Eye,
  Zap,
  Trophy,
  Target,
  Layers,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Calendar,
  Video,
  Download,
} from "lucide-react";
//#endregion
//#region interfaces
interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  experience: string;
  rating: number;
  reviews: number;
  description: string;
  avatar: string;
  students: number;
  successRate: number;
  achievements: string[];
  services: { name: string; price: string; duration?: string }[];
  skills: string[];
  isAI?: boolean;
  isOnline?: boolean;
  badge?: string;
  nextAvailable?: string;
  responseTime?: string;
  completedSessions?: number;
}

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

interface AITeacher {
  id: number;
  name: string;
  subject: string;
  level: string;
  rating: number;
  reviews: number;
  description: string;
  avatar: string;
  features: string[];
  price: string;
  languages: string[];
  availability: string;
  responseTime: string;
  totalChats: number;
  specializations: string[];
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Александр Петров",
    title: "Senior Frontend Developer",
    company: "Яндекс",
    experience: "8 лет опыта",
    rating: 4.9,
    reviews: 124,
    description:
      "Ведущий эксперт по React, TypeScript и современной frontend архитектуре. Автор 15+ production проектов.",
    avatar: "АП",
    students: 347,
    successRate: 96,
    achievements: ["Топ 1% менторов", "React мастер", "Яндекс эксперт"],
    services: [
      { name: "Карьерная консультация", price: "6,000 ₽", duration: "60 мин" },
      { name: "Code Review", price: "4,500 ₽", duration: "45 мин" },
      { name: "Интенсив по React", price: "25,000 ₽", duration: "4 недели" },
    ],
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Node.js"],
    isOnline: true,
    badge: "Pro",
    nextAvailable: "Сегодня в 14:00",
    responseTime: "< 2 часов",
    completedSessions: 890,
  },
  {
    id: 2,
    name: "Мария Сидорова",
    title: "Lead Product Manager",
    company: "Сбер",
    experience: "7 лет опыта",
    rating: 5.0,
    reviews: 89,
    description:
      "Product Lead с опытом запуска 12+ продуктов. Эксперт по метрикам, аналитике и продуктовой стратегии.",
    avatar: "МС",
    students: 256,
    successRate: 100,
    achievements: ["Эксперт года", "Product Pro", "Сбер лидер"],
    services: [
      {
        name: "Product Strategy Session",
        price: "8,500 ₽",
        duration: "90 мин",
      },
      { name: "Метрики и аналитика", price: "6,000 ₽", duration: "60 мин" },
    ],
    skills: ["Product Strategy", "Analytics", "A/B Testing", "User Research"],
    isOnline: true,
    badge: "Expert",
    nextAvailable: "Завтра в 10:00",
    responseTime: "< 1 часа",
    completedSessions: 567,
  },
  {
    id: 3,
    name: "Елена Волкова",
    title: "Senior UX Designer",
    company: "Тинькофф",
    experience: "6 лет опыта",
    rating: 4.8,
    reviews: 156,
    description:
      "UX/UI дизайнер с опытом в финтех и e-commerce. Ментор по дизайн-системам и пользовательскому опыту.",
    avatar: "ЕВ",
    students: 198,
    successRate: 94,
    achievements: ["Design System Expert", "UX Champion", "Финтех дизайнер"],
    services: [
      { name: "UX аудит", price: "7,000 ₽", duration: "75 мин" },
      { name: "Портфолио ревью", price: "5,500 ₽", duration: "60 мин" },
    ],
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    isOnline: false,
    badge: "Rising",
    nextAvailable: "Понедельник в 15:00",
    responseTime: "< 3 часов",
    completedSessions: 423,
  },
];

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

const aiTeachers: AITeacher[] = [
  {
    id: 1,
    name: "LinguaBot AI",
    subject: "Изучение языков",
    level: "A1-C2",
    rating: 4.9,
    reviews: 2156,
    description:
      "Персональный ИИ-наставник с адаптивными уроками, проверкой произношения и разговорной практикой 24/7.",
    avatar: "LB",
    features: ["Произношение", "Грамматика", "Разговоры", "Тесты"],
    price: "2,990 ₽/мес",
    languages: ["English", "Deutsch", "Español", "Français", "中文", "日本語"],
    availability: "24/7",
    responseTime: "Мгновенно",
    totalChats: 45000,
    specializations: [
      "Business English",
      "IELTS/TOEFL",
      "Разговорный",
      "Техническая лексика",
    ],
  },
  {
    id: 2,
    name: "CodeMentor AI",
    subject: "Программирование",
    level: "Junior-Senior",
    rating: 4.8,
    reviews: 1789,
    description:
      "ИИ-наставник по программированию с code review, отладкой кода и архитектурными решениями.",
    avatar: "CM",
    features: ["Code Review", "Debugging", "Архитектура", "Best Practices"],
    price: "3,990 ₽/мес",
    languages: ["Python", "JavaScript", "Java", "C++", "Go", "Rust"],
    availability: "24/7",
    responseTime: "< 1 сек",
    totalChats: 38000,
    specializations: ["Web Dev", "Data Science", "Mobile", "Backend", "DevOps"],
  },
  {
    id: 3,
    name: "DataGuru AI",
    subject: "Data Science & ML",
    level: "Beginner-Expert",
    rating: 4.7,
    reviews: 1234,
    description:
      "Специализированный ИИ для изучения анализа данных, машинного обучения и статистики.",
    avatar: "DG",
    features: ["ML алгоритмы", "Визуализация", "Статистика", "Deep Learning"],
    price: "4,490 ₽/мес",
    languages: ["Python", "R", "SQL", "Scala"],
    availability: "24/7",
    responseTime: "< 2 сек",
    totalChats: 29000,
    specializations: ["Computer Vision", "NLP", "Time Series", "MLOps"],
  },
];
//#endregion
//#region types
type TabType = "store" | "ai-teachers" | "mentors";
type ViewType = "grid" | "list";
//#endregion
//#region consts
const filterOptions = {
  categories: [
    "Все категории",
    "Frontend Development",
    "Backend Development",
    "Data Science",
    "Product Management",
    "Design",
    "DevOps",
    "Mobile Development",
  ],
  levels: ["Все уровни", "Beginner", "Intermediate", "Advanced", "Expert"],
  prices: [
    "Любая цена",
    "Бесплатно",
    "До 10,000 ₽",
    "10,000-25,000 ₽",
    "25,000-50,000 ₽",
    "50,000+ ₽",
  ],
  ratings: [
    "Все рейтинги",
    "4.0+ звезд",
    "4.5+ звезд",
    "4.7+ звезд",
    "4.9+ звезд",
  ],
  duration: [
    "Любая длительность",
    "До 4 недель",
    "4-8 недель",
    "8-16 недель",
    "16+ недель",
  ],
};

const stats = [
  { label: "Активных студентов", value: "125K+", icon: Users },
  { label: "Завершённых курсов", value: "45K+", icon: BookOpen },
  { label: "Экспертов-менторов", value: "2,500+", icon: Award },
  { label: "Средний рейтинг", value: "4.8★", icon: Star },
];
//#endregion
export default function App() {
  //#region states
  const [activeTab, setActiveTab] = useState<TabType>("store");
  const [viewType, setViewType] = useState<ViewType>("grid");

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: "Все категории",
    level: "Все уровни",
    price: "Любая цена",
    rating: "Все рейтинги",
    duration: "Любая длительность",
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setOpenDropdown(null);
  };
  //#endregion
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

  const tabs = [
    {
      id: "store",
      label: "Магазин курсов",
      icon: ShoppingCart,
      count: "1,200+",
    },
    { id: "ai-teachers", label: "ИИ-наставники", icon: Bot, count: "24/7" },
    { id: "mentors", label: "Эксперты", icon: UserCheck, count: "2,500+" },
  ];

  const renderStoreContent = () => (
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

  const renderAITeachersContent = () => (
    <div className="space-y-6">
      {/* AI Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Bot className="w-5 h-5" />
            <span className="text-sm font-medium opacity-90">
              Искусственный интеллект
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            ИИ-наставники нового поколения
          </h2>
          <p className="text-lg opacity-90 mb-4">
            Персонализированное обучение 24/7 с мгновенной обратной связью
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Попробовать бесплатно
            </button>
            <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {aiTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-200 h-64"
          >
            {/* AI Badge */}
            <div className="flex items-center justify-between mb-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Bot className="w-3 h-3" />
                ИИ
              </div>
              <div className="text-green-600 text-xs font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                24/7
              </div>
            </div>

            {/* Header */}
            <div className="flex gap-2 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {teacher.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 text-xs truncate">
                  {teacher.subject}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-900">
                    {teacher.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({teacher.reviews})
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-xs mb-2 line-clamp-2">
              {teacher.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 mb-2 py-1 border-t border-gray-100">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {(teacher.totalChats / 1000).toFixed(0)}k
                </div>
                <div className="text-xs text-gray-500">Чатов</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {teacher.responseTime}
                </div>
                <div className="text-xs text-gray-500">Ответ</div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-2">
              <div className="flex flex-wrap gap-1">
                {teacher.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {teacher.languages.slice(0, 4).map((lang, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Actions */}
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900 text-sm">
                  {teacher.price}
                </span>
                <span className="text-xs text-green-600">7 дней бесплатно</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-1.5 rounded text-xs font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                Попробовать
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMentorsContent = () => (
    <div className="space-y-6">
      {/* Mentors Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="w-5 h-5" />
            <span className="text-sm font-medium opacity-90">
              Персональное наставничество
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            Эксперты из ведущих компаний
          </h2>
          <p className="text-lg opacity-90 mb-4">
            Индивидуальные консультации от практикующих специалистов
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Найти ментора
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-200 h-80"
          >
            {/* Badge */}
            {mentor.badge && (
              <div
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                  mentor.badge === "Pro"
                    ? "bg-blue-500 text-white"
                    : mentor.badge === "Expert"
                    ? "bg-purple-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {mentor.badge}
              </div>
            )}

            {/* Header */}
            <div className="flex gap-2 mb-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-medium text-sm">
                  {mentor.avatar}
                </div>
                {mentor.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                  {mentor.name}
                </h3>
                <p className="text-gray-600 text-xs mb-1 truncate">
                  {mentor.title}
                </p>
                <p className="text-gray-500 text-xs truncate">
                  {mentor.company}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-900">
                    {mentor.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({mentor.reviews})
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-xs mb-2 line-clamp-2">
              {mentor.description}
            </p>

            {/* Availability */}
            <div className="bg-gray-50 rounded p-2 mb-2 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Доступен
                </span>
                <span className="font-medium text-gray-900">
                  {mentor.nextAvailable}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Ответ</span>
                <span className="font-medium text-green-600">
                  {mentor.responseTime}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-2 py-1 border-t border-gray-100">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {mentor.students}
                </div>
                <div className="text-xs text-gray-500">Менти</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {mentor.completedSessions}
                </div>
                <div className="text-xs text-gray-500">Сессий</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {mentor.successRate}%
                </div>
                <div className="text-xs text-gray-500">Успех</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-2">
              <div className="flex flex-wrap gap-1">
                {mentor.achievements.slice(0, 2).map((achievement, index) => (
                  <span
                    key={index}
                    className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-2">
              <div className="flex flex-wrap gap-1">
                {mentor.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="border border-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Service & Price */}
            <div className="bg-gray-50 rounded p-2 mb-3">
              <div className="text-xs font-medium text-gray-900 mb-1">
                {mentor.services[0].name}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">
                  {mentor.services[0].price}
                </span>
                <span className="text-xs text-gray-500">
                  {mentor.services[0].duration}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-1">
              <button className="flex-1 bg-blue-600 text-white py-1.5 px-2 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                Забронировать
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-1.5 px-2 rounded text-xs font-medium hover:bg-gray-50 transition-colors">
                Профиль
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Образовательная платформа
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              нового поколения
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Курсы от экспертов, ИИ-наставники 24/7 и персональное менторство для
            максимально быстрого развития ваших навыков
          </p>
        </section>

        {/* Navigation Tabs */}
        <section className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-2 flex gap-2 shadow-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all relative ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        activeTab === tab.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Фильтры
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                  3
                </span>
              </button>

              {/* Quick Filters */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-gray-500">Быстрые фильтры:</span>
                {["Популярное", "Новое", "Скидки"].map((filter) => (
                  <button
                    key={filter}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">
                Вид:
              </span>
              <div className="flex bg-white border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-1.5 rounded transition-colors ${
                    viewType === "grid"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-1.5 rounded transition-colors ${
                    viewType === "list"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {Object.entries(filterOptions).map(([key, options]) => {
                  const filterKey = key as keyof typeof filters;
                  const labels: Record<string, string> = {
                    categories: "Категория",
                    levels: "Уровень",
                    prices: "Цена",
                    ratings: "Рейтинг",
                    duration: "Длительность",
                  };

                  return (
                    <div key={key} className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {labels[key]}
                      </label>
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === key ? null : key)
                          }
                          className="w-full p-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        >
                          <span className="text-gray-900 truncate">
                            {filters[filterKey] || options[0]}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform ${
                              openDropdown === key ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openDropdown === key && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-30 max-h-64 overflow-y-auto">
                            {options.map((option) => (
                              <button
                                key={option}
                                onClick={() => handleFilterChange(key, option)}
                                className="w-full p-3 text-left hover:bg-gray-50 text-sm text-gray-900 transition-colors first:rounded-t-lg last:rounded-b-lg"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Content */}
        {activeTab === "store" && renderStoreContent()}
        {activeTab === "ai-teachers" && renderAITeachersContent()}
        {activeTab === "mentors" && renderMentorsContent()}
      </main>



    </div>
  );
}
