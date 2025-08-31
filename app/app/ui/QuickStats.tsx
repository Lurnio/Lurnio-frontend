import { Star, Users, BookOpen, Award } from "lucide-react";

const stats = [
  { label: "Активных студентов", value: "125K+", icon: Users },
  { label: "Завершённых курсов", value: "45K+", icon: BookOpen },
  { label: "Экспертов-менторов", value: "2,500+", icon: Award },
  { label: "Средний рейтинг", value: "4.8★", icon: Star },
];

export const QuickStats = () => (
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
);
