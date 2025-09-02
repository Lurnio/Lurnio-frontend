"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "./types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col"
    >
      <div className="relative h-32 bg-gray-100">
        <Image
          src={product.cover}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100 w-fit text-gray-700">
          {product.type}
        </div>
        <h3 className="mt-2 font-semibold text-gray-900">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{product.short}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="text-lg font-bold text-gray-900">{product.price}</div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 transition"
          >
            В корзину
          </a>
        </div>
      </div>
    </motion.div>
  );
}
