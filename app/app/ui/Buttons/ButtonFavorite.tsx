import { Heart } from "lucide-react";

interface ButtonFavoriteProps {
  isFavorite: boolean;
  onToggle: () => void;
}

export const ButtonFavorite = ({ isFavorite, onToggle }: ButtonFavoriteProps) => {
  return (
    <div
      className={`absolute top-1 right-1 flex gap-1 transition-opacity
        ${isFavorite ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
    >
      <button
        aria-label="Добавить в избранное"
        onClick={onToggle}
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
          isFavorite
            ? "bg-red-500 text-white"
            : "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
        }`}
      >
        <Heart className="w-3 h-3" />
      </button>
    </div>
  );
};
