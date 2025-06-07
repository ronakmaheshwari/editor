import { FaGithub, FaTwitter } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 bg-blue-800 p-4 px-8 flex items-center gap-6">
      <div className="flex items-center gap-3">
        <img
          src="/ronak.ico"
          alt="Ronak Logo"
          className="w-12 h-12 rounded-xl shadow-md"
        />
        <span className="text-white text-3xl font-bold tracking-wide">
          Code Editor
        </span>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {/* <button onClick={()=>{navigate("/leetcode")}} className="flex items-center gap-2 bg-blue-50 text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 border border-zinc-400 transition">
          <SiLeetcode className="text-lg" />
          Leetcode
        </button> */}
        <button onClick={()=>{navigate("/")}} className="flex items-center gap-2  bg-blue-50 text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition">
          <VscCode className="text-lg" />
          Editor
        </button>
        <a
          href="https://github.com/ronakmaheshwari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-50 text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>
        <a
          href="https://x.com/0xronakm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-50 text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition"
        >
          <FaTwitter className="text-lg" />
          Twitter
        </a>
      </div>
    </div>
  );
}