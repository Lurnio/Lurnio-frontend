// components/Header.tsx (SERVER COMPONENT)
// Один компонент для всего проекта. Принимает variant: "full" | "minimal".
// На серверных статичних сторінках рендерим <Header variant="minimal" /> —
// остаётся только логотип/линк на главную. В остальных — <Header variant="full" />.

import Link from "next/link";
import ClientNav from "./ClientNav";

type HeaderProps = {
  variant?: "full" | "minimal";
};

const colors = {
  primary: "#2563EB",
  accent: "#8B5CF6",
  background: "#F8FAFC",
  white: "#FFFFFF",
  text: "#1E293B",
  textSecondary: "#64748B",
  border: "#E2E8F0",
} as const;

export default function Header({ variant = "full" }: HeaderProps) {
  return (
    <header className="bg-white shadow-lg border-b-2" style={{ borderColor: colors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md transform transition-transform hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)` }}
            >
              M
            </div>
            <span
              className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)` }}
            >
              MentorConnect
            </span>
          </Link>

          {/* Только в полноформатном варианте подключаем клиентский сабкомпонент */}
          {variant === "full" ? <ClientNav /> : null}
        </div>
      </div>
    </header>
  );
}

// -----------------------------------------------------------------------------
// components/ClientNav.tsx (CLIENT COMPONENT)
// Вынесена клиентская логика (usePathname, активные стили). Этот файл содержит
// только навигацию. Он будет подгружаться и гидратироваться лишь когда variant="full".


// -----------------------------------------------------------------------------
// Пример использования в макетах (App Router)
// app/layout.tsx — общий лэйаут (FULL навигация)
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="uk">
//       <body>
//         <Header variant="full" />
//         {children}
//       </body>
//     </html>
//   );
// }

// app/ua/layout.tsx — лэйаут для статичних інформаційних сторінок (MINIMAL)
// export default function UaLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Header variant="minimal" />
//       {children}
//     </>
//   );
// }

// Если нужны ещё более гибкие правила, можно в конкретной странице сделать:
// export const dynamic = "force-static"; // или revalidate = 86400 для ISR, и передать <Header variant="minimal" />
