import { ThumbsUp, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Обратная связь — Lurnio",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3">
            <ThumbsUp className="w-6 h-6 text-purple-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Обратная связь
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Расскажите, что вам понравилось и что можно улучшить. Нам важно ваше
            мнение.
          </p>

          {/* Формы без client-логики */}
          <form action="/feedback" method="POST" className="mt-8 grid gap-4">
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="type"
              >
                Тип обращения
              </label>
              <select
                id="type"
                name="type"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                defaultValue="idea"
              >
                <option value="idea">Идея / предложение</option>
                <option value="bug">Ошибка / проблема</option>
                <option value="ui">Интерфейс / UX</option>
                <option value="other">Другое</option>
              </select>
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
                placeholder="Опишите ваш опыт и пожелания"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="rating"
                >
                  Оценка платформы (1–5)
                </label>
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  min={1}
                  max={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                  placeholder="5"
                />
              </div>
              <div>
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="consent"
                >
                  Согласие на обратную связь
                </label>
                <select
                  id="consent"
                  name="consent"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900"
                >
                  <option value="yes">Да, можно связаться</option>
                  <option value="no">Нет, не нужно</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Отправляя форму, вы принимаете условия и политику
                конфиденциальности.
              </p>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Отправить отзыв
              </button>
            </div>
          </form>

          <div className="mt-8 border border-gray-100 rounded-xl p-4 flex items-start gap-3">
            <MessageCircle className="w-4 h-4 text-purple-600" />
            <p className="text-sm text-gray-700">
              Нужна срочная помощь? Посетите{" "}
              <Link href="/help-center" className="underline">
                Центр помощи
              </Link>{" "}
              или напишите через форму «Связаться с нами».
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
