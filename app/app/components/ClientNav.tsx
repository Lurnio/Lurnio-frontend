
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ui = {
  primary: "#2563EB",
  accent: "#8B5CF6",
  text: "#1E293B",
  white: "#FFFFFF",
};

export default function ClientNav() {
  const pathname = usePathname();
  const isActive = (p: string) => pathname === p;

  return (
    <nav className="flex space-x-4">
      <Link
        href="/login"
        className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
          isActive("/login") ? "text-white shadow-lg" : "hover:bg-gray-50 hover:shadow-md"
        }`}
        style={{
          background: isActive("/login")
            ? `linear-gradient(135deg, ${ui.primary} 0%, ${ui.accent} 100%)`
            : "transparent",
          color: isActive("/login") ? ui.white : ui.text,
        }}
      >
        Вхід
      </Link>

      <Link
        href="/registration"
        className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
          isActive("/registration") ? "text-white shadow-lg" : "hover:bg-gray-50 hover:shadow-md"
        }`}
        style={{
          background: isActive("/registration")
            ? `linear-gradient(135deg, ${ui.primary} 0%, ${ui.accent} 100%)`
            : "transparent",
          color: isActive("/registration") ? ui.white : ui.text,
        }}
      >
        Реєстрація
      </Link>
    </nav>
  );
}