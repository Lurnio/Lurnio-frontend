import { Bot, Star } from "lucide-react";

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
export const RenderAITeachersContent = () => (
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
