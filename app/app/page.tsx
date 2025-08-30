// app/page.tsx
import Link from "next/link";
import {
  Brain,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  MessageSquare,
  Award,
  Clock,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// если ты держишь Header/Footer в app/components:


export default function HomePage() {
  const colors = {
    primary: "#2563EB",
    primaryHover: "#1D4ED8",
    accent: "#8B5CF6",
    background: "#F8FAFC",
    white: "#FFFFFF",
    text: "#1E293B",
    textSecondary: "#64748B",
    border: "#E2E8F0",
    success: "#059669",
  };

  const features = [
    {
      icon: <Brain size={24} />,
      title: "ІІ-Ментори",
      description:
        "Персоналізовані ІІ-асистенти для навчання та розвитку в будь-якій галузі",
    },
    {
      icon: <Users size={24} />,
      title: "Експерти-Ментори",
      description:
        "Досвідчені професіонали готові поділитися знаннями та досвідом",
    },
    {
      icon: <Globe size={24} />,
      title: "Глобальна спільнота",
      description:
        "Підключайтеся до менторів з усього світу в різних часових поясах",
    },
    {
      icon: <Shield size={24} />,
      title: "Безпека даних",
      description: "Ваша конфіденційність та безпека — наш головний пріоритет",
    },
  ];

  const benefits = [
    "Персоналізований підхід до навчання",
    "Доступ 24/7 до ІІ-менторів",
    "Підтвердженні експерти з досвідом",
    "Гнучке ціноутворення",
    "Прогрес трекінг",
    "Безкоштовна пробна версія",
  ];

  const testimonials = [
    {
      name: "Олена Коваленко",
      role: "Розробник",
      text: "За 3 місяці з ментором вийшла на новий рівень у програмуванні. Дуже вдячна!",
      rating: 5,
    },
    {
      name: "Михайло Петренко",
      role: "Маркетолог",
      text: "ІІ-ментор допоміг структурувати знання та покращити навички аналітики.",
      rating: 5,
    },
    {
      name: "Анна Сидоренко",
      role: "Дизайнер",
      text: "Знайшла чудового ментора з UX/UI. Тепер працюю в топ-компанії!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header variant="full"/>

      {/* Hero */}
      <section className="flex-1 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span
                    className="bg-gradient-to-r bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                    }}
                  >
                    Знайдіть
                  </span>
                  <br />
                  <span style={{ color: colors.text }}>свого ментора</span>
                </h1>
                <p
                  className="text-xl leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  Розвивайтеся професійно з персональними менторами та ІІ-асистентами.
                  Отримуйте індивідуальні поради, навчальні програми та підтримку 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/registration"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                  }}
                >
                  Почати безкоштовно
                  <ArrowRight size={20} className="ml-2" />
                </Link>

                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-200 hover:shadow-md hover:scale-105 focus:ring-4 focus:ring-opacity-20"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  Увійти
                </Link>
              </div>

              <div
                className="flex items-center space-x-6 text-sm"
                style={{ color: colors.textSecondary }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} style={{ color: colors.success }} />
                  <span>Безкоштовний пробний період</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} style={{ color: colors.success }} />
                  <span>Без зобов&apos;язань</span>
                </div>
              </div>
            </div>

            {/* Иллюстрация */}
            <div className="relative">
              <div className="relative z-10">
                <svg
                  className="w-full h-96 max-w-lg mx-auto"
                  viewBox="0 0 400 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="hero-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor={colors.primary} />
                      <stop offset="100%" stopColor={colors.accent} />
                    </linearGradient>
                    <linearGradient
                      id="secondary-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="200"
                    cy="175"
                    r="150"
                    fill="url(#hero-gradient)"
                    opacity="0.1"
                  />
                  <circle
                    cx="200"
                    cy="175"
                    r="120"
                    fill="url(#hero-gradient)"
                    opacity="0.15"
                  />

                  <circle cx="200" cy="120" r="40" fill="url(#hero-gradient)" />
                  <rect
                    x="175"
                    y="155"
                    width="50"
                    height="80"
                    rx="25"
                    fill="url(#hero-gradient)"
                  />

                  <circle cx="185" cy="110" r="3" fill="white" />
                  <circle cx="215" cy="110" r="3" fill="white" />
                  <path
                    d="M185 125 Q200 135 215 125"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />

                  <g transform="translate(180, 70)">
                    <Brain size={40} color="white" />
                  </g>

                  <circle
                    cx="120"
                    cy="100"
                    r="15"
                    fill="url(#secondary-gradient)"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="cy"
                      values="100;90;100"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="300" cy="130" r="20" fill={colors.success} opacity="0.7">
                    <animate
                      attributeName="cy"
                      values="130;120;130"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="100" cy="220" r="12" fill={colors.accent} opacity="0.6">
                    <animate
                      attributeName="cy"
                      values="220;210;220"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="320" cy="240" r="18" fill={colors.primary} opacity="0.8">
                    <animate
                      attributeName="cy"
                      values="240;230;240"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <line
                    x1="135"
                    y1="115"
                    x2="175"
                    y2="130"
                    stroke={colors.primary}
                    strokeWidth="2"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.5;0.8;0.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line
                    x1="280"
                    y1="145"
                    x2="240"
                    y2="140"
                    stroke={colors.accent}
                    strokeWidth="2"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.5;0.8;0.5"
                      dur="2.3s"
                      repeatCount="indefinite"
                    />
                  </line>

                  <g transform="translate(80, 180)">
                    <circle cx="15" cy="15" r="12" fill={colors.textSecondary} />
                    <rect
                      x="8"
                      y="25"
                      width="14"
                      height="20"
                      rx="7"
                      fill={colors.textSecondary}
                    />
                  </g>

                  <g transform="translate(300, 190)">
                    <circle cx="15" cy="15" r="12" fill={colors.textSecondary} />
                    <rect
                      x="8"
                      y="25"
                      width="14"
                      height="20"
                      rx="7"
                      fill={colors.textSecondary}
                    />
                  </g>

                  <g transform="translate(150, 260)">
                    <circle cx="15" cy="15" r="12" fill={colors.textSecondary} />
                    <rect
                      x="8"
                      y="25"
                      width="14"
                      height="20"
                      rx="7"
                      fill={colors.textSecondary}
                    />
                  </g>

                  <g transform="translate(250, 270)">
                    <circle cx="15" cy="15" r="12" fill={colors.textSecondary} />
                    <rect
                      x="8"
                      y="25"
                      width="14"
                      height="20"
                      rx="7"
                      fill={colors.textSecondary}
                    />
                  </g>
                </svg>
              </div>

              <div
                className="absolute top-10 right-10 w-20 h-20 rounded-full opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                }}
              />
              <div
                className="absolute bottom-20 left-10 w-16 h-16 rounded-full opacity-15"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.primary} 100%)`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>
              Чому обирають MentorConnect?
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: colors.textSecondary }}
            >
              Поєднуємо найкращі технології ІІ з досвідом реальних експертів для
              вашого професійного зростання
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-lg border transition-transform hover:-translate-y-1"
                style={{ borderColor: colors.border }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>
                  {f.title}
                </h3>
                <p className="text-sm" style={{ color: colors.textSecondary }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6" style={{ color: colors.text }}>
              Переваги платформи
            </h3>
            <ul className="space-y-4">
              {benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: colors.success }} />
                  <span className="text-base" style={{ color: colors.textSecondary }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-xl shadow border" style={{ borderColor: colors.border }}>
              <div className="flex items-center gap-3 mb-2">
                <Zap size={18} style={{ color: colors.accent }} />
                <span className="font-semibold" style={{ color: colors.text }}>Швидкий старт</span>
              </div>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Реєстрація за 1 хвилину і підбір ментора одразу.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow border" style={{ borderColor: colors.border }}>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={18} style={{ color: colors.primary }} />
                <span className="font-semibold" style={{ color: colors.text }}>Вимірюваний прогрес</span>
              </div>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Трекінг цілей, задач і результатів у вашому кабінеті.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow border" style={{ borderColor: colors.border }}>
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare size={18} style={{ color: colors.primary }} />
                <span className="font-semibold" style={{ color: colors.text }}>Звʼязок 24/7</span>
              </div>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Пишіть ІІ-ментору будь-коли, отримуйте миттєві поради.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow border" style={{ borderColor: colors.border }}>
              <div className="flex items-center gap-3 mb-2">
                <Clock size={18} style={{ color: colors.accent }} />
                <span className="font-semibold" style={{ color: colors.text }}>Гнучкий графік</span>
              </div>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Сесії з експертами в зручний для вас час.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.text }}>
            Відгуки користувачів
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl shadow-lg border bg-white"
                style={{ borderColor: colors.border }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award size={18} style={{ color: colors.primary }} />
                  <div>
                    <p className="font-semibold" style={{ color: colors.text }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: colors.textSecondary }}>
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: colors.textSecondary }}>
                  “{t.text}”
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Готові почати? Спробуйте безкоштовно вже сьогодні
          </h3>
          <p className="text-white/80 mb-8">
            Оберіть ментора або ІІ-асистента, що відповідає вашим цілям
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registration"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-blue-600 bg-white hover:bg-slate-100 transition"
            >
              Зареєструватися <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border border-white/40 text-white hover:bg-white/10 transition"
            >
              Увійти
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
