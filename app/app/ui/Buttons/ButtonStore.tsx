type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const ButtonStore: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-blue-600 text-white py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors cursor-pointer"
  >
    {text}
  </button>
);
