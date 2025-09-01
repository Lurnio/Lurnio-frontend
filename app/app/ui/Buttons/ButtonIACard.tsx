type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const AIButton: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-1.5 rounded text-xs font-medium hover:from-purple-700 hover:to-pink-700 transition-all cursor-pointer"
  >
    {text}
  </button>
);
