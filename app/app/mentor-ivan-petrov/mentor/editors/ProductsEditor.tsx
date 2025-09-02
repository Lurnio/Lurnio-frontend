"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import EditorCard from "../ui/EditorCard";
import FieldText from "../ui/FieldText";
import FieldSelect from "../ui/FieldSelect";
import { Product } from "../../_components/types";
import ProductCard from "../../_components/ProductCard";

export default function ProductsEditor({
  value,
  onChange,
}: {
  value: Product[];
  onChange: (next: Product[]) => void;
}) {
  const [draft, setDraft] = useState<Product | null>(null);

  function startNew() {
    setDraft({
      id: `p_${Date.now()}`,
      title: "",
      cover: "",
      price: "",
      type: "Гайд",
      short: "",
    });
  }
  function save() {
    if (!draft) return;
    const exists = value.some((p) => p.id === draft.id);
    const next = exists
      ? value.map((p) => (p.id === draft.id ? draft : p))
      : [draft, ...value];
    onChange(next);
    setDraft(null);
  }
  function edit(p: Product) {
    setDraft({ ...p });
  }
  function remove(id: string) {
    onChange(value.filter((p) => p.id !== id));
    if (draft?.id === id) setDraft(null);
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Товары</h3>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 transition text-sm"
        >
          <Plus className="w-4 h-4" />
          Добавить товар
        </button>
      </div>

      {draft && (
        <EditorCard
          title={draft.title || "Новый товар"}
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
            <FieldText
              label="Цена"
              placeholder="€9"
              value={draft.price}
              onChange={(v) => setDraft({ ...draft, price: v })}
            />
            <FieldSelect
              label="Тип"
              value={draft.type}
              options={[
                { value: "Гайд", label: "Гайд" },
                { value: "Чек-лист", label: "Чек-лист" },
                { value: "Шаблон", label: "Шаблон" },
                { value: "Скрипт", label: "Скрипт" },
              ]}
              onChange={(v) =>
                setDraft({ ...draft, type: v as Product["type"] })
              }
            />
          </div>
          <FieldText
            label="Короткое описание"
            value={draft.short}
            onChange={(v) => setDraft({ ...draft, short: v })}
          />
        </EditorCard>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {value.map((p) => (
          <div key={p.id} className="relative">
            <button
              onClick={() => remove(p.id)}
              className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-white/90 border border-gray-200 hover:bg-white shadow"
              title="Удалить"
            >
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
            <div onClick={() => edit(p)} className="cursor-pointer">
              <ProductCard product={p} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
