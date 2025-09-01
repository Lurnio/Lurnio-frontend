import { ButtonProps } from "@/app/types/Buttons/ButtonProps";
import React from "react";

export const ButtonTransparent: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer"
    onClick={onClick}
  >
    {text}
  </button>
);
