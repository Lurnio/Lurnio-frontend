import type {
  Mentor,
  Course,
  Product,
  ScheduleItem,
  Review,
} from "../mentor-ivan-petrov/_components/types";

export function getMockMentor(_slug: string): {
  mentor: Mentor;
  courses: Course[];
  products: Product[];
  schedule: ScheduleItem[];
  reviews: Review[];
} {
  const mentor: Mentor = {
    name: "Иван Петров",
    title: "Senior Python Engineer · Data/AI ментор",
    avatar: "/mentors/ivan.jpg",
    rating: 4.8,
    students: 3120,
    coursesCount: 7,
    location: "Берлин, Германия",
    languages: ["Русский", "English", "Deutsch"],
    responseTime: "обычно за 2 часа",
    bio: "Помогаю junior и middle разработчикам прокачать Python, алгоритмы, пайплайны данных и MLOps. Упор на практику и портфолио.",
  };

  const courses: Course[] = [
    {
      id: "c1",
      title: "Python с нуля до джуна",
      cover: "/placeholders/course-1.jpg",
      rating: 4.8,
      students: 1850,
      duration: "24 ч",
      price: "€39",
      level: "Beginner",
    },
    {
      id: "c2",
      title: "Алгоритмы и структуры данных на Python",
      cover: "/placeholders/course-2.jpg",
      rating: 4.7,
      students: 920,
      duration: "18 ч",
      price: "€29",
      level: "Intermediate",
    },
    {
      id: "c3",
      title: "Введение в Data Engineering",
      cover: "/placeholders/course-3.jpg",
      rating: 4.6,
      students: 450,
      duration: "12 ч",
      price: "€35",
      level: "Intermediate",
    },
  ];

  const products: Product[] = [
    {
      id: "p1",
      title: "Гайд: 100 задач для портфолио Python",
      cover: "/placeholders/product-1.jpg",
      price: "€9",
      type: "Гайд",
      short: "Подборка задач от простого к сложному с разбором подходов.",
    },
    {
      id: "p2",
      title: "Чек-лист собеседования Python",
      cover: "/placeholders/product-2.jpg",
      price: "€5",
      type: "Чек-лист",
      short: "Темы, вопросы и практические советы, чтобы пройти интервью.",
    },
    {
      id: "p3",
      title: "Шаблон pet-проекта FastAPI + PostgreSQL",
      cover: "/placeholders/product-3.jpg",
      price: "€12",
      type: "Шаблон",
      short: "Готовый каркас сервиса: auth, примеры эндпоинтов и тесты.",
    },
  ];

  const schedule: ScheduleItem[] = [
    {
      id: "s1",
      dateISO: "2025-09-06T18:00:00+02:00",
      title: "Групповая сессия: Python Best Practices",
      kind: "Групповая сессия",
      durationMin: 90,
      slotsLeft: 4,
    },
    {
      id: "s2",
      dateISO: "2025-09-07T19:00:00+02:00",
      title: "1:1 консультация (резюме + план развития)",
      kind: "1:1 консультация",
      durationMin: 60,
      slotsLeft: 1,
    },
    {
      id: "s3",
      dateISO: "2025-09-10T18:30:00+02:00",
      title: "Вебинар: FastAPI в проде без боли",
      kind: "Вебинар",
      durationMin: 75,
    },
    {
      id: "s4",
      dateISO: "2025-09-12T17:00:00+02:00",
      title: "AMA: всё о собеседованиях в data-команды",
      kind: "AMA",
      durationMin: 60,
    },
  ];

  const reviews: Review[] = [
    {
      id: "r1",
      user: "Анна К.",
      avatar: "/avatars/a1.png",
      rating: 5,
      text: "Очень чёткие объяснения и сильная практика. Благодаря разбору проектов получила оффер на стажировку.",
      date: "05.08.2025",
      course: "Python с нуля до джуна",
    },
    {
      id: "r2",
      user: "Дмитрий Л.",
      avatar: "/avatars/a2.png",
      rating: 4,
      text: "Много конкретики, особенно по пайплайнам. Хотелось бы больше заданий по системному дизайну.",
      date: "21.07.2025",
    },
    {
      id: "r3",
      user: "Julia S.",
      avatar: "/avatars/a3.png",
      rating: 5,
      text: "Топ ментор! Помог с подготовкой к собесу, прошла на мидла.",
      date: "11.06.2025",
      course: "Алгоритмы и структуры данных на Python",
    },
  ];

  return { mentor, courses, products, schedule, reviews };
}
