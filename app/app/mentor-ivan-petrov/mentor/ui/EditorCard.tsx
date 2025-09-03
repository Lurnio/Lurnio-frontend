"use client";

import { ReactNode } from "react";

export default function EditorCard({
  title,
  onClose,
  onSave,
  children,
}: {
  title: string;
  onClose: () => void;
  onSave: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900">
          {title || "Редактирование"}
        </h4>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Отмена
          </button>
          <button
            onClick={onSave}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm"
          >
            Сохранить
          </button>
        </div>
      </div>
      <div className="grid gap-3">{children}</div>
    </div>
  );
}
