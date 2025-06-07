import { useRef, useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import Dropdown from "../components/Dropdown";
import Code_Snippet from "../../utils/utils";
import OutputBox from "../components/Output";
import Navbar from "../components/Navbar";

export default function Code() {
  const editorRef = useRef<{ getValue: () => string }>(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [langId, setlangId] = useState<number | undefined>();

  function handleLanguageSelect(lang: { name: string; id: number; version: string }) {
    const langKey = lang.name.toLowerCase();
    setlangId(lang.id);
    setLanguage(langKey);
    setValue(Code_Snippet[langKey] ?? "");
  }

  useEffect(() => {
    console.log("Selected language:", language, " | ID:", langId);
  }, [language]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <Navbar />

      <div className="flex flex-1 p-4 gap-4">
        <div className="flex flex-col w-[70%] h-[calc(100vh-80px)]">
          <div className="mb-2">
            <Dropdown onClick={handleLanguageSelect} />
          </div>

          <div className="flex-1 border rounded-md shadow-sm bg-white">
            <CodeEditor
              ref={editorRef}
              code={value}
              language={language}
              onChange={(val) => setValue(val ?? "")}
            />
          </div>
        </div>

        <div className="w-[30%] h-[calc(100vh-80px)] overflow-y-auto rounded-md shadow-md bg-white p-4">
          <OutputBox editorRef={editorRef} language={language} id={langId} />
        </div>
      </div>
    </div>
  );
}
