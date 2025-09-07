import { Mail, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Связаться с нами — Lurnio",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-purple-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Связаться с нами
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Опишите вопрос — мы вернёмся с ответом. Формы работают без
            клиентских скриптов.
          </p>

          {/* Контакты */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-600" />
                <div className="font-semibold text-gray-900">Email</div>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                support@lurnio.example
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-600" />
                <div className="font-semibold text-gray-900">Телефон</div>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                +49 000 0000000 (09:00–18:00)
              </p>
            </div>
          </div>

          {/* Форма (серверная разметка) */}
          <form action="/contact" method="POST" className="mt-8 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="topic"
              >
                Тема
              </label>
              <input
                id="topic"
                name="topic"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                placeholder="Кратко о чём вопрос"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="message"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                placeholder="Опишите проблему или запрос"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Отправляя форму, вы соглашаетесь с условиями и политикой
                конфиденциальности.
              </p>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
