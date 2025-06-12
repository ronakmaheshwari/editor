import { useEffect, useRef } from "react";
import { CircleX } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode; 
}
export default function Modal({ open, onClose, children }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md z-50">
            <div
                ref={modalRef}
                className="relative bg-white rounded-lg shadow-xl w-[500px] h-[250px] p-6 flex flex-col justify-center items-center gap-4"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                    <CircleX />
                </button>
                {children}
            </div>
        </div>
    );
}
