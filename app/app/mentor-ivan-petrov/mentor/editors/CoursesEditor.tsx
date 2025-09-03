"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import EditorCard from "../ui/EditorCard";
import FieldText from "../ui/FieldText";
import FieldNumber from "../ui/FieldNumber";
import FieldSelect from "../ui/FieldSelect";
import { Course } from "../../_components/types";
import CourseCard from "../../_components/CourseCard";

export default function CoursesEditor({
  value,
  onChange,
}: {
  value: Course[];
  onChange: (next: Course[]) => void;
}) {
  const [draft, setDraft] = useState<Course | null>(null);

  function startNew() {
    setDraft({
      id: `c_${Date.now()}`,
      title: "",
      cover: "",
      rating: 0,
      students: 0,
      duration: "",
      price: "",
      level: "Beginner",
    });
  }
  function save() {
    if (!draft) return;
    const exists = value.some((c) => c.id === draft.id);
    const next = exists
      ? value.map((c) => (c.id === draft.id ? draft : c))
      : [draft, ...value];
    onChange(next);
    setDraft(null);
  }
  function edit(c: Course) {
    setDraft({ ...c });
  }
  function remove(id: string) {
    onChange(value.filter((c) => c.id !== id));
    if (draft?.id === id) setDraft(null);
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Курсы</h3>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 transition text-sm"
        >
          <Plus className="w-4 h-4" />
          Добавить курс
        </button>
      </div>

      {draft && (
        <EditorCard
          title={draft.title || "Новый курс"}
          onClose={() => setDraft(null)}
          onSave={save}
        >
          <FieldText
            label="Название"
            value={draft.title}
            onChange={(v) => setDraft({ ...draft, title: v })}
          />
          <FieldText
            label="Обложка (URL)"
            value={draft.cover}
            onChange={(v) => setDraft({ ...draft, cover: v })}
          />
          <div className="grid grid-cols-2 gap-3">
            <FieldNumber
              label="Рейтинг (0–5)"
              value={draft.rating}
              min={0}
              max={5}
              step={0.1}
              onChange={(v) => setDraft({ ...draft, rating: v })}
            />
            <FieldNumber
              label="Ученики"
              value={draft.students}
              min={0}
              onChange={(v) => setDraft({ ...draft, students: v })}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FieldText
              label="Длительность"
              placeholder="напр. 24 ч"
              value={draft.duration}
              onChange={(v) => setDraft({ ...draft, duration: v })}
            />
            <FieldText
              label="Цена"
              placeholder="€39"
              value={draft.price}
              onChange={(v) => setDraft({ ...draft, price: v })}
            />
          </div>
          <FieldSelect
            label="Уровень"
            value={draft.level}
            options={[
              { value: "Beginner", label: "Beginner" },
              { value: "Intermediate", label: "Intermediate" },
              { value: "Advanced", label: "Advanced" },
            ]}
            onChange={(v) =>
              setDraft({ ...draft, level: v as Course["level"] })
            }
          />
        </EditorCard>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {value.map((c) => (
          <div key={c.id} className="relative">
            <button
              onClick={() => remove(c.id)}
              className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-white/90 border border-gray-200 hover:bg-white shadow"
              title="Удалить"
            >
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
            <div onClick={() => edit(c)} className="cursor-pointer">
              <CourseCard course={c} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
