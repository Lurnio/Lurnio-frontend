"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Upload,
  X,
  Plus,
  Play,
  Image as ImageIcon,
} from "lucide-react";

interface Lesson {
  id: string;
  name: string;
  materials: Material[];
}

interface Material {
  id: string;
  type: "text" | "video" | "test";
  name: string;
  content?: string;
  videoUrl?: string;
}

interface Course {
  title: string;
  description: string;
  category: string;
  language: string;
  tags: string[];
  price: string;
  duration: string;
  difficulty: string;
  previewImage: File | null;
  lessons: Lesson[];
}

const STEPS = [
  "Основная информация",
  "Программа курса",
  "Медиа",
  "Цены и публикация",
] as const;

function calcProgress(c: Course): number {
  // Чекпоинты прогресса (можешь менять состав)
  const checks = [
    Boolean(c.title.trim()),
    Boolean(c.description.trim()),
    Boolean(c.category),
    Boolean(c.language),
    Boolean(c.duration.trim()),
    Boolean(c.difficulty),
    c.tags.length > 0,
    Boolean(c.previewImage),
    c.lessons.length > 0,
    c.lessons.some((l) => l.name.trim().length > 0),
    c.lessons.some((l) => l.materials.length > 0),
    Boolean(c.price.trim()),
  ];
  const done = checks.filter(Boolean).length;
  return done / checks.length; // 0..1
}

const CourseEditor = () => {
  const [course, setCourse] = useState<Course>({
    title: "",
    description: "",
    category: "Веб-разработка",
    language: "RU",
    tags: [],
    price: "",
    duration: "",
    difficulty: "Начинающий",
    previewImage: null,
    lessons: [{ id: "1", name: "", materials: [] }],
  });

  const [draggedOver, setDraggedOver] = useState<string | null>(null);
  const [newTag, setNewTag] = useState("");

  const categories = [
    "Веб-разработка",
    "Мобильная разработка",
    "Дизайн",
    "Маркетинг",
    "Бизнес",
    "Наука о данных",
  ];

  const difficulties = ["Начинающий", "Средний", "Продвинутый", "Эксперт"];
  const languages = ["RU", "UA", "EN"];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCourse((prev) => ({ ...prev, previewImage: file }));
  };

  const handleDrop = (
    e: React.DragEvent,
    type: "image" | "video",
    lessonId?: string
  ) => {
    e.preventDefault();
    setDraggedOver(null);

    const files = Array.from(e.dataTransfer.files);

    if (type === "image" && files[0]) {
      setCourse((prev) => ({ ...prev, previewImage: files[0] }));
    } else if (type === "video" && lessonId) {
      const videoFile = files[0];
      if (videoFile) {
        setCourse((prev) => ({
          ...prev,
          lessons: prev.lessons.map((lesson) =>
            lesson.id === lessonId
              ? {
                  ...lesson,
                  materials: [
                    ...lesson.materials,
                    {
                      id: Date.now().toString(),
                      type: "video",
                      name: videoFile.name,
                      videoUrl: URL.createObjectURL(videoFile),
                    },
                  ],
                }
              : lesson
          ),
        }));
      }
    }
  };

  const addTag = () => {
    const t = newTag.trim();
    if (t && !course.tags.includes(t)) {
      setCourse((prev) => ({ ...prev, tags: [...prev.tags, t] }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setCourse((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const addLesson = () => {
    setCourse((prev) => ({
      ...prev,
      lessons: [
        ...prev.lessons,
        { id: Date.now().toString(), name: "", materials: [] },
      ],
    }));
  };

  const removeLesson = (lessonId: string) => {
    setCourse((prev) => ({
      ...prev,
      lessons: prev.lessons.filter((lesson) => lesson.id !== lessonId),
    }));
  };

  const updateLessonName = (lessonId: string, name: string) => {
    setCourse((prev) => ({
      ...prev,
      lessons: prev.lessons.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, name } : lesson
      ),
    }));
  };

  const addMaterial = (lessonId: string, type: "text" | "video" | "test") => {
    setCourse((prev) => ({
      ...prev,
      lessons: prev.lessons.map((lesson) =>
        lesson.id === lessonId
          ? {
              ...lesson,
              materials: [
                ...lesson.materials,
                {
                  id: Date.now().toString(),
                  type,
                  name:
                    type === "text"
                      ? "Новый текст"
                      : type === "video"
                      ? "Новое видео"
                      : "Новый тест",
                },
              ],
            }
          : lesson
      ),
    }));
  };

  const removeMaterial = (lessonId: string, materialId: string) => {
    setCourse((prev) => ({
      ...prev,
      lessons: prev.lessons.map((lesson) =>
        lesson.id === lessonId
          ? {
              ...lesson,
              materials: lesson.materials.filter((m) => m.id !== materialId),
            }
          : lesson
      ),
    }));
  };

  const handleSubmit = () => {
    // локально без БД
    console.log("Курс сохранен:", course);
  };

  const progressPct = Math.round(calcProgress(course) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Top Stepper */}
          <div className="px-8 pt-6 pb-2">
            <div className="relative">
              <div className="h-2 w-full bg-gray-200 rounded-full" />
              <div
                className="absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                style={{ width: `${progressPct}%` }}
              />
              <div className="absolute inset-0 flex justify-between items-center">
                {STEPS.map((label, idx) => {
                  const passed =
                    idx <
                    Math.max(1, Math.ceil((progressPct / 100) * STEPS.length));
                  return (
                    <div
                      key={label}
                      className="flex flex-col items-start -translate-x-1/2 first:translate-x-0 last:translate-x-0"
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          passed
                            ? "bg-purple-600 border-purple-600"
                            : "bg-white border-gray-300"
                        }`}
                      />
                      <span
                        className={`mt-2 text-xs ${
                          passed ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-100">
            <nav className="flex space-x-8 px-8 py-4">
              <button className="text-purple-600 border-b-2 border-purple-600 pb-2 font-medium">
                Основная информация
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Программа курса
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Медиа
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Цены и публикация
              </button>
            </nav>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Добавление курса
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Course Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название курса *
                  </label>
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) =>
                      setCourse((prev) => ({ ...prev, title: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Введите название курса"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Описание курса *
                  </label>
                  <textarea
                    value={course.description}
                    onChange={(e) =>
                      setCourse((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Опишите, чему научатся студенты"
                  />
                </div>

                {/* Course Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Категория
                    </label>
                    <div className="relative">
                      <select
                        value={course.category}
                        onChange={(e) =>
                          setCourse((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Язык курса
                    </label>
                    <div className="relative">
                      <select
                        value={course.language}
                        onChange={(e) =>
                          setCourse((prev) => ({
                            ...prev,
                            language: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                      >
                        {languages.map((lang) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Продолжительность
                    </label>
                    <input
                      type="text"
                      value={course.duration}
                      onChange={(e) =>
                        setCourse((prev) => ({
                          ...prev,
                          duration: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="например, 8 недель"
                    />
                  </div>

                  {/* Difficulty */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сложность
                    </label>
                    <div className="relative">
                      <select
                        value={course.difficulty}
                        onChange={(e) =>
                          setCourse((prev) => ({
                            ...prev,
                            difficulty: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                      >
                        {difficulties.map((diff) => (
                          <option key={diff} value={diff}>
                            {diff}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Теги
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="hover:text-purple-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addTag()}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Добавить тег"
                    />
                    <button
                      onClick={addTag}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Preview Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Превью изображение курса
                  </label>
                  <div
                    onDrop={(e) => handleDrop(e, "image")}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDraggedOver("image");
                    }}
                    onDragLeave={() => setDraggedOver(null)}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                      draggedOver === "image"
                        ? "border-purple-400 bg-purple-50"
                        : "border-gray-300 hover:border-purple-400 hover:bg-gray-50"
                    }`}
                  >
                    {course.previewImage ? (
                      <div className="flex items-center justify-center space-x-4">
                        <ImageIcon className="w-8 h-8 text-green-500" />
                        <span className="text-green-600 font-medium">
                          {course.previewImage.name}
                        </span>
                        <button
                          onClick={() =>
                            setCourse((prev) => ({
                              ...prev,
                              previewImage: null,
                            }))
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Перетащите изображение или
                        </p>
                        <label className="cursor-pointer">
                          <span className="text-purple-600 hover:text-purple-700 font-medium">
                            выберите файл
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Program */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Программа курса
                    </h2>
                    <button
                      onClick={addLesson}
                      className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Добавить урок
                    </button>
                  </div>

                  <div className="space-y-4">
                    {course.lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="border border-gray-200 rounded-xl p-6"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-medium">
                            {index + 1}
                          </span>
                          <input
                            type="text"
                            value={lesson.name}
                            onChange={(e) =>
                              updateLessonName(lesson.id, e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Название урока"
                          />
                          {course.lessons.length > 1 && (
                            <button
                              onClick={() => removeLesson(lesson.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>

                        {/* Materials */}
                        <div className="space-y-3">
                          {lesson.materials.map((material) => (
                            <div
                              key={material.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                {material.type === "video" && (
                                  <Play className="w-4 h-4 text-blue-500" />
                                )}
                                {material.type === "text" && (
                                  <span className="w-4 h-4 text-xs bg-green-500 text-white rounded flex items-center justify-center">
                                    T
                                  </span>
                                )}
                                {material.type === "test" && (
                                  <span className="w-4 h-4 text-xs bg-orange-500 text-white rounded flex items-center justify-center">
                                    ?
                                  </span>
                                )}
                                <span className="text-sm text-gray-700">
                                  {material.name}
                                </span>
                              </div>
                              <button
                                onClick={() =>
                                  removeMaterial(lesson.id, material.id)
                                }
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Add Material Buttons */}
                        <div className="flex gap-2 mt-4">
                          <button
                            onClick={() => addMaterial(lesson.id, "text")}
                            className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                          >
                            + Текст
                          </button>
                          <button
                            onClick={() => addMaterial(lesson.id, "video")}
                            className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                          >
                            + Видео
                          </button>
                          <button
                            onClick={() => addMaterial(lesson.id, "test")}
                            className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
                          >
                            + Тест
                          </button>
                        </div>

                        {/* Video Upload Zone for this lesson */}
                        <div
                          onDrop={(e) => handleDrop(e, "video", lesson.id)}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setDraggedOver(`video-${lesson.id}`);
                          }}
                          onDragLeave={() => setDraggedOver(null)}
                          className={`mt-4 border border-dashed rounded-lg p-4 text-center transition-all ${
                            draggedOver === `video-${lesson.id}`
                              ? "border-blue-400 bg-blue-50"
                              : "border-gray-300 hover:border-blue-400"
                          }`}
                        >
                          <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs text-gray-500">
                            Перетащите видео файлы для этого урока
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Course Status */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Статус курса
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Название курса</span>
                      <span
                        className={
                          course.title.trim()
                            ? "text-green-600"
                            : "text-gray-400"
                        }
                      >
                        {course.title.trim() ? "✓" : "○"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Длительность</span>
                      <span
                        className={
                          course.duration.trim()
                            ? "text-green-600"
                            : "text-gray-400"
                        }
                      >
                        {course.duration.trim() ? "✓" : "○"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Цена</span>
                      <span
                        className={
                          course.price.trim()
                            ? "text-green-600"
                            : "text-gray-400"
                        }
                      >
                        {course.price.trim() ? "✓" : "○"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      {progressPct}% завершено
                    </p>
                  </div>
                </div>

                {/* Course Price */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Цена курса
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Цена ($)
                      </label>
                      <input
                        type="number"
                        value={course.price}
                        onChange={(e) =>
                          setCourse((prev) => ({
                            ...prev,
                            price: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="99.00"
                      />
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">Заполненность:</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                      <p className="text-xs mt-1">{progressPct}%</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full py-3 px-4 text-purple-600 border border-purple-200 rounded-xl hover:bg-purple-50 transition-colors">
                    Посмотреть предпросмотр
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] shadow-lg"
                  >
                    Опубликовать курс
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEditor;
