import { useRef, useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import Dropdown from "../components/Dropdown";
import Code_Snippet from "../../utils";
import OutputBox from "../components/Output";

export default function Code() {
  const editorRef = useRef<{ getValue: () => string }>(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [langId, setlangId] = useState<number | undefined>();

  function handleLanguageSelect(lang: { name: string; id: number; version: string }) {
    const langKey = lang.name.toLowerCase();
    const langId = lang.id;
    setlangId(langId);
    setLanguage(langKey);
    setValue(Code_Snippet[langKey] ?? "");
  }

  useEffect(() => {
    console.log(langId);
    console.log("Selected language:", language);
  }, [language]);

  return (
    <div className="flex min-h-screen bg-zinc-50 p-4 gap-2">

      <div className="flex flex-col w-[70%] h-full overflow-y-auto">
        <div className="relative z-10 mb-4">
          <Dropdown onClick={handleLanguageSelect} />
        </div>

        <CodeEditor
          ref={editorRef}
          code={value}
          language={language}
          onChange={(val) => setValue(val ?? "")}
        />
      </div>

      <div className="w-[30%] rounded-md shadow-sm p-4 overflow-y-auto">
        <OutputBox editorRef={editorRef} language={language} id={langId}/>
      </div>
    </div>
  );
}
