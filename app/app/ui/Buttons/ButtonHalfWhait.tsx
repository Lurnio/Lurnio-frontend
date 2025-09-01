import { ButtonProps } from "@/app/types/Buttons/ButtonProps";


export const ButtonHalfWhait: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="flex-1 border border-gray-300 text-gray-700 py-1.5 px-2 rounded text-xs font-medium hover:bg-gray-50 transition-colors cursor-pointer"
  >
    {text}
  </button>
);
