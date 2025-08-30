import { Calendar, Star, UserCheck } from "lucide-react";

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

export const RenderMentorsContent = () => (
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
              <p className="text-gray-500 text-xs truncate">{mentor.company}</p>
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
