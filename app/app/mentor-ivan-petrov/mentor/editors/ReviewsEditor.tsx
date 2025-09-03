"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import EditorCard from "../ui/EditorCard";
import FieldText from "../ui/FieldText";
import FieldNumber from "../ui/FieldNumber";
import { Review } from "../../_components/types";
import ReviewCard from "../../_components/ReviewCard";

export default function ReviewsEditor({
  value,
  onChange,
}: {
  value: Review[];
  onChange: (next: Review[]) => void;
}) {
  const [draft, setDraft] = useState<Review | null>(null);

  function startNew() {
    setDraft({
      id: `r_${Date.now()}`,
      user: "",
      avatar: "",
      rating: 5,
      text: "",
      date: new Date().toLocaleDateString("ru-RU"),
      course: "",
    });
  }
  function save() {
    if (!draft) return;
    const exists = value.some((r) => r.id === draft.id);
    const next = exists
      ? value.map((r) => (r.id === draft.id ? draft : r))
      : [draft, ...value];
    onChange(next);
    setDraft(null);
  }
  function edit(r: Review) {
    setDraft({ ...r });
  }
  function remove(id: string) {
    onChange(value.filter((r) => r.id !== id));
    if (draft?.id === id) setDraft(null);
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Отзывы</h3>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 transition text-sm"
        >
          <Plus className="w-4 h-4" />
          Добавить отзыв
        </button>
      </div>

      {draft && (
        <EditorCard
          title={draft.user || "Новый отзыв"}
          onClose={() => setDraft(null)}
          onSave={save}
        >
          <div className="grid grid-cols-2 gap-3">
            <FieldText
              label="Имя пользователя"
              value={draft.user}
              onChange={(v) => setDraft({ ...draft, user: v })}
            />
            <FieldText
              label="Аватар (URL)"
              value={draft.avatar ?? ""}
              onChange={(v) => setDraft({ ...draft, avatar: v })}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FieldNumber
              label="Рейтинг (1–5)"
              value={draft.rating}
              min={1}
              max={5}
              step={1}
              onChange={(v) => setDraft({ ...draft, rating: v })}
            />
            <FieldText
              label="Курс (необязательно)"
              value={draft.course ?? ""}
              onChange={(v) => setDraft({ ...draft, course: v })}
            />
          </div>
          <FieldText
            label="Текст отзыва"
            value={draft.text}
            onChange={(v) => setDraft({ ...draft, text: v })}
          />
          <FieldText
            label="Дата"
            value={draft.date}
            onChange={(v) => setDraft({ ...draft, date: v })}
          />
        </EditorCard>
      )}

      <div className="grid gap-4">
        {value.map((r) => (
          <div key={r.id} className="relative">
            <button
              onClick={() => remove(r.id)}
              className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-white/90 border border-gray-200 hover:bg-white shadow"
              title="Удалить"
            >
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
            <div onClick={() => edit(r)} className="cursor-pointer">
              <ReviewCard review={r} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
