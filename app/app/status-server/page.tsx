import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  Server,
  Activity,
} from "lucide-react";

export const metadata = {
  title: "Статус сервиса — Lurnio",
};

// статический пример (серверный рендер)
const CURRENT_STATUS: {
  label: string;
  state: "ok" | "degraded" | "outage";
  updated: string;
} = {
  label: "Все системы работают штатно",
  state: "ok",
  updated: "Обновлено: 06.09.2025, 12:30",
};

const COMPONENTS = [
  { name: "Веб-приложение", state: "ok" as const },
  { name: "API", state: "ok" as const },
  { name: "Платежи", state: "ok" as const },
  { name: "Медиа/загрузка", state: "ok" as const },
];

const INCIDENTS: Array<{ date: string; title: string; resolution: string }> = [
  // пример, можешь заполнить реальными данными или оставить пустым
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-purple-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Статус сервиса
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Онлайн-обновления о доступности и работоспособности систем.
          </p>

          {/* Текущий статус */}
          <div className="mt-6 border border-gray-100 rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {CURRENT_STATUS.state === "ok" && (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              )}
              {CURRENT_STATUS.state === "degraded" && (
                <AlertTriangle className="w-5 h-5 text-yellow-700" />
              )}
              {CURRENT_STATUS.state === "outage" && (
                <AlertTriangle className="w-5 h-5 text-red-700" />
              )}
              <div className="font-semibold text-gray-900">
                {CURRENT_STATUS.label}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {CURRENT_STATUS.updated}
            </div>
          </div>

          {/* Компоненты */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Компоненты</h2>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              {COMPONENTS.map((c) => (
                <div
                  key={c.name}
                  className="border border-gray-100 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-purple-600" />
                    <div className="text-gray-900">{c.name}</div>
                  </div>
                  <div className="text-sm">
                    {c.state === "ok" && (
                      <span className="text-gray-700">Норма</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Инциденты */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Недавние инциденты
            </h2>
            {INCIDENTS.length === 0 ? (
              <p className="mt-2 text-gray-600">
                Нет зарегистрированных инцидентов.
              </p>
            ) : (
              <ul className="mt-3 space-y-3">
                {INCIDENTS.map((i) => (
                  <li
                    key={i.title}
                    className="border border-gray-100 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <div className="text-sm text-gray-600">{i.date}</div>
                    </div>
                    <div className="mt-1 font-semibold text-gray-900">
                      {i.title}
                    </div>
                    <p className="mt-1 text-gray-700">{i.resolution}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
