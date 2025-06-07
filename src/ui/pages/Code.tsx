import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import Dropdown from "../components/Dropdown";

export default function Code() {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-start min-h-screen bg-zinc-50 p-4">
      <div
        className="w-full flex flex-col items-start min-h-screen px-4 gap-3 overflow-y-scroll"
        style={{ scrollbarGutter: "stable" }}
      >
        <div className="relative z-10">
          <Dropdown />
        </div>

        <CodeEditor
          code={value}
          language="javascript"
          onChange={(val) => setValue(val ?? "")}
        />
      </div>
    </div>
  );
}
