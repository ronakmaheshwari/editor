import { FaGithub, FaTwitter } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar({
  themeColor,
}: {
  themeColor: "shades-of-purple" | "noctis-light";
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`w-full h-16 px-6 flex items-center justify-between border-b border-dashed shadow-sm ${
        themeColor === "noctis-light"
          ? "bg-[#f8fafc] text-white border-neutral-700"
          : "bg-zinc-50 text-black border-neutral-400"
      }`}
    >
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
        <Button onClick={() => navigate("/")} title="Editor" icon={<VscCode className="text-lg"/>} />
        
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
