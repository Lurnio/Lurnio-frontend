// app/components/Chat/ChatWidget.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import Image from "next/image";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([{ role: "bot", text: "Привет! Чем могу помочь?" }]);
  const [input, setInput] = useState("");
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Закрытие по Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Клик снаружи — закрыть
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        // не закрываем при клике по кнопке
        const btn = document.getElementById("chat-fab");
        if (btn && btn.contains(e.target as Node)) return;
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    // демо-ответ бота
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text:
            "Я вас услышал: “" +
            text +
            "”. Здесь будет ответ от вашего бэкенда/ИИ.",
        },
      ]);
    }, 250);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage();
  }

  return (
    // Фиксированный контейнер на весь экран,
    // внутри которого всё позиционируется АБСОЛЮТНО
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Кнопка (FAB) */}
      <button
        id="chat-fab"
        type="button"
        aria-label="Открыть чат"
        aria-expanded={open}
        aria-controls="chat-panel"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto absolute bottom-6 right-6 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 flex items-center justify-center transition-all cursor-pointer"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Оверлей (полупрозрачный фон) */}
      {open && (
        <div
          className="pointer-events-auto absolute inset-0 bg-black/20"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}

      {/* Панель чата */}
      <div
        id="chat-panel"
        role="dialog"
        aria-label="Чат поддержки"
        aria-modal="true"
        ref={panelRef}
        className={`pointer-events-auto absolute bottom-24 right-6 w-[min(92vw,380px)] h-[520px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Хедер */}
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-white/90 backdrop-blur">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/lurnio-logo.jpg"
              alt="Lurnio Logo"
              width={32}
              height={32}
              priority
              className="rounded-md"
            />
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Чат поддержки
              </div>
              <div className="text-[11px] text-gray-500">
                Обычно отвечает быстро
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            aria-label="Закрыть чат"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Лента сообщений */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-gray-50">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                m.role === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "mr-auto bg-white border border-gray-200 text-gray-800"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        {/* Ввод */}
        <form
          onSubmit={onSubmit}
          className="p-3 border-t border-gray-200 bg-white"
        >
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишите сообщение…"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 flex items-center gap-1 text-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
