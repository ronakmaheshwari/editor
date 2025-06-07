import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";
import CodeEditor from "../components/CodeEditor";
import Dropdown from "../components/Dropdown";
import Code_Snippet from "../../utils/utils";
import LeetcodeBox from "../components/Leetcodebox";

export default function Leetcode() {
  const editorRef = useRef<{ getValue: () => string }>(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [langId, setlangId] = useState<number | undefined>();
  const [question, setQuestion] = useState(
    `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).`
  );

  function handleLanguageSelect(lang: { name: string; id: number; version: string }) {
    const langKey = lang.name.toLowerCase();
    setlangId(lang.id);
    setLanguage(langKey);
    setValue(Code_Snippet[langKey] ?? "");
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-200">
      <Navbar />

      <main className="flex-1 overflow-y-scroll  px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-2 h-[calc(100vh-80px)] w-full">
          <div className="flex flex-col gap-3 w-full lg:w-[70%] bg-white rounded-md shadow-lg p-4 overflow-auto">
            <Dropdown onClick={handleLanguageSelect} />
            <Textarea
              onChange={(e) => setQuestion(e.target.value)}
              onClick={()=>{console.log(question)}}
              value={question}
            />

            <div className="flex-1 min-h-[300px] overflow-auto rounded-md border border-gray-300">
              <CodeEditor
                ref={editorRef}
                code={value}
                language={language}
                onChange={(val) => setValue(val ?? "")}
              />
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-md p-6 overflow-auto">
            <div className="text-gray-500"><LeetcodeBox code={value} langId={langId ?? 0} language={language} question={question} /></div>
          </div>
        </div>
      </main>
    </div>
  );
}
