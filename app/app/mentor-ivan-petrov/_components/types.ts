import type React from "react";

export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type Course = {
  id: string;
  title: string;
  cover: string; // /public/...
  rating: number; // 0..5
  students: number;
  duration: string; // "24 ч"
  price: string; // "€39"
  level: "Beginner" | "Intermediate" | "Advanced";
};

export type Product = {
  id: string;
  title: string;
  cover: string;
  price: string;
  type: "Шаблон" | "Чек-лист" | "Гайд" | "Скрипт";
  short: string;
};

export type ScheduleItem = {
  id: string;
  dateISO: string; // ISO-строка
  title: string;
  kind: "Вебинар" | "1:1 консультация" | "Групповая сессия" | "AMA";
  durationMin: number;
  slotsLeft?: number;
};

export type Review = {
  id: string;
  user: string;
  avatar?: string;
  rating: number; // 1..5
  text: string;
  date: string; // "ДД.ММ.ГГГГ" для MVP
  course?: string;
};

export type Mentor = {
  name: string;
  title: string;
  avatar: string;
  rating: number;
  students: number;
  coursesCount: number;
  location: string;
  languages: string[];
  responseTime: string;
  bio: string;
};
