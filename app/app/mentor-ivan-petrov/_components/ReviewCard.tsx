"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Review } from "./types";

export default function ReviewCard({ review }: { review: Review }) {
  const filled = Math.max(0, Math.min(5, Math.round(review.rating)));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={review.user}
              fill
              sizes="40px"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              🙂
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-gray-900">{review.user}</div>
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < filled ? "fill-amber-400" : ""}`}
                />
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-0.5">{review.date}</div>
          {review.course && (
            <div className="text-xs text-gray-500 mt-1">
              Курс:{" "}
              <span className="font-medium text-gray-700">{review.course}</span>
            </div>
          )}
          <p className="mt-2 text-gray-700">{review.text}</p>
        </div>
      </div>
    </div>
  );
}
