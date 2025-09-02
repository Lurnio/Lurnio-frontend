"use client";

function toInputValue(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => `${n}`.padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const min = pad(d.getMinutes());
  return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}

export default function FieldDatetime({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string; // ISO
  onChange: (v: string) => void; // ISO
}) {
  return (
    <label className="grid gap-1">
      <span className="text-sm text-gray-700">{label}</span>
      <input
        type="datetime-local"
        className="px-3 py-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        value={toInputValue(value)}
        onChange={(e) => {
          const v = e.target.value; // "YYYY-MM-DDTHH:mm"
          const iso = new Date(v).toISOString();
          onChange(iso);
        }}
      />
    </label>
  );
}
