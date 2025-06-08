import { FaGithub, FaTwitter } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-16 bg-zinc-50 text-black px-6 flex items-center justify-between border-b border-dashed border-neutral-400 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src="/ronak.ico"
          alt="Ronak Logo"
          className="w-10 h-10 rounded-xl shadow"
        />
        <span className="font-mono text-xl font-extrabold text-blue-600 tracking-wide">
          CodeX
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-blue-50 text-blue-800 font-medium px-4 py-1.5 rounded-md hover:bg-blue-100 transition"
        >
          <VscCode className="text-lg" />
          Editor
        </button>

        <a
          href="https://github.com/ronakmaheshwari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-black transition"
        >
          <FaGithub className="text-xl" />
        </a>

        <a
          href="https://x.com/0xronakm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-black transition"
        >
          <FaTwitter className="text-xl" />
        </a>
      </div>
    </div>
  );
}
