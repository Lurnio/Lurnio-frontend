import { ButtonProps } from "@/app/types/Buttons/ButtonProps";
import React from "react";




export const ButtonBigWhaite: React.FC <ButtonProps> = ( {text, onClick} ) => (
  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
  onClick={onClick}>
    {text}
  </button>
);
