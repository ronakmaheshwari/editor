import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

interface ArrowButtonProps {
  onClick: (event: React.SyntheticEvent) => void;
}

export default function ArrowButton({ onClick }: ArrowButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.SyntheticEvent) => {
    setIsAnimating(true);
    onClick(e);
    setTimeout(() => setIsAnimating(false), 600); 
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-900 transition"
      title="Run the Snippet"
    >
      <FaPlay className={`text-lg ${isAnimating ? "animate-pulse-once" : ""}`} />
    </button>
  );
}
