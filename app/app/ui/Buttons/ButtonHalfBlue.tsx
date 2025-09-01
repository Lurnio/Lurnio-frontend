import { ButtonProps } from "@/app/types/Buttons/ButtonProps";




export const ButtonHalfBlue: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="flex-1 bg-blue-600 text-white py-1.5 px-2 rounded text-xs font-medium hover:bg-blue-700 transition-colors cursor-pointer"
  >
    {text}
  </button>
);