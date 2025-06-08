import { useState } from "react";
import { FaStop } from "react-icons/fa6";

interface ArrowButtonProps {
  onClick: (event: React.SyntheticEvent) => void;
}

export default function StopButton({ onClick }: ArrowButtonProps) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = (e: React.SyntheticEvent) => {
    setIsSpinning(true);
    onClick(e);
    setTimeout(() => setIsSpinning(false), 3000); 
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-900 transition"
      title="Reset the Snippet"
    >
      <FaStop className={`text-lg ${isSpinning ? "animate-spin" : ""}`} />
    </button>
  );
}
