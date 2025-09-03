"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import EditorCard from "../ui/EditorCard";
import FieldText from "../ui/FieldText";
import FieldNumber from "../ui/FieldNumber";
import FieldSelect from "../ui/FieldSelect";
import FieldDatetime from "../ui/FieldDatetime";
import { ScheduleItem } from "../../_components/types";
import ScheduleRow from "../../_components/ScheduleRow";

export default function ScheduleEditor({
  value,
  onChange,
}: {
  value: ScheduleItem[];
  onChange: (next: ScheduleItem[]) => void;
}) {
  const [draft, setDraft] = useState<ScheduleItem | null>(null);

  function startNew() {
    setDraft({
      id: `s_${Date.now()}`,
      dateISO: new Date().toISOString(),
      title: "",
      kind: "Вебинар",
      durationMin: 60,
      slotsLeft: 10,
    });
  }
  function save() {
    if (!draft) return;
    const exists = value.some((s) => s.id === draft.id);
    const next = exists
      ? value.map((s) => (s.id === draft.id ? draft : s))
      : [draft, ...value];
    onChange(next);
    setDraft(null);
  }
  function edit(s: ScheduleItem) {
    setDraft({ ...s });
  }
  function remove(id: string) {
    onChange(value.filter((s) => s.id !== id));
    if (draft?.id === id) setDraft(null);
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Расписание</h3>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 transition text-sm"
        >
          <Plus className="w-4 h-4" />
          Добавить событие
        </button>
      </div>

      {draft && (
        <EditorCard
          title={draft.title || "Новое событие"}
          onClose={() => setDraft(null)}
          onSave={save}
        >
          <FieldText
            label="Заголовок"
            value={draft.title}
            onChange={(v) => setDraft({ ...draft, title: v })}
          />
          <div className="grid grid-cols-2 gap-3">
            <FieldDatetime
              label="Дата и время"
              value={draft.dateISO}
              onChange={(v) => setDraft({ ...draft, dateISO: v })}
            />
            <FieldNumber
              label="Длительность (мин)"
              value={draft.durationMin}
              min={15}
              step={15}
              onChange={(v) => setDraft({ ...draft, durationMin: v })}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FieldSelect
              label="Тип"
              value={draft.kind}
              options={[
                { value: "Вебинар", label: "Вебинар" },
                { value: "1:1 консультация", label: "1:1 консультация" },
                { value: "Групповая сессия", label: "Групповая сессия" },
                { value: "AMA", label: "AMA" },
              ]}
              onChange={(v) =>
                setDraft({ ...draft, kind: v as ScheduleItem["kind"] })
              }
            />
            <FieldNumber
              label="Осталось мест"
              value={draft.slotsLeft ?? 0}
              min={0}
              onChange={(v) => setDraft({ ...draft, slotsLeft: v })}
            />
          </div>
        </EditorCard>
      )}

      <div className="grid gap-4">
        {value.map((s) => (
          <div key={s.id} className="relative">
            <button
              onClick={() => remove(s.id)}
              className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-white/90 border border-gray-200 hover:bg-white shadow"
              title="Удалить"
            >
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
            <div onClick={() => edit(s)} className="cursor-pointer">
              <ScheduleRow item={s} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
