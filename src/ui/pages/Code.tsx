import { useRef, useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import Dropdown from "../components/Dropdown";
import Code_Snippet from "../../utils/utils";
import Navbar from "../components/Navbar";
import ArrowButton from "../components/ExecuteButton";
import StopButton from "../components/StopButton";
import runcode from "../../utils/piston";
import Themebutton from "../components/Thememod";
import hljs from 'highlight.js';
import Outputs from "../components/Terminal";

interface OutputResponse {
  stdout?: string;
  stderr?: string;
  output?: string;
  message?: string;
  compile_output?: string;
}

export default function Code() {
  const editorRef = useRef<{ getValue: () => string }>(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");
  const [langId, setlangId] = useState<number | undefined>();
  const [output, setOutput] = useState<OutputResponse | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [themeColor, setThemeColor] = useState<"shades-of-purple" | "noctis-light">("shades-of-purple");

  function handleLanguageSelect(lang: { name: string; id: number; version: string }) {
    const langKey = lang.name.toLowerCase();
    setlangId(lang.id);
    setLanguage(langKey);
    setValue(Code_Snippet[langKey] ?? "");
    console.log(isRunning);
  }

  const resetEditor = async () => {
    setTimeout(() => {
      setValue("");
    }, 2000);
  };

  const handleCode = async () => {
    const sourceCode = editorRef.current?.getValue() || "";
    setOutput(null);
    if (!language || !sourceCode.trim()) {
        const { language: detectedLang} = hljs.highlightAuto(sourceCode);
        if(!detectedLang){
          alert("Please select a language before running the code.");
          return;
        }
        setLanguage(detectedLang)
      }

    setIsRunning(true);
    try {
      const response = await runcode({ language, code: sourceCode });
      // console.log("Raw output from Piston:", response?.output);  
      setOutput(response?.output ?? { message: "No response from server." });
    } catch (error) {
      console.error("Execution error:", error);
      setOutput({ stderr: "Execution failed. See console." });
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "shades-of-purple" || stored === "noctis-light") {
      setThemeColor(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeColor);
  }, [themeColor]);

  useEffect(() => {
    console.log("Selected language:", language, " | ID:", langId);
  }, [language, value, output]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <Navbar />

      <div className="flex flex-1 p-4 gap-4">
        <div className="flex flex-col w-[70%] h-[calc(100vh-80px)]">
          <div className="mb-2 w-full flex items-center justify-between gap-4 p-3 border border-dashed border-neutral-400 shadow-sm bg-white rounded-md">
            <Dropdown onClick={handleLanguageSelect} />
            <div className="flex justify-center gap-3 items-center">
              <Themebutton
                isDark={themeColor === "noctis-light"}
                toggleTheme={() =>
                  setThemeColor(prev => (prev === "noctis-light" ? "shades-of-purple" : "noctis-light"))
                }
              />
              <StopButton onClick={resetEditor} />
              <ArrowButton onClick={handleCode} />
            </div>
          </div>

          <div className="flex flex-col flex-1 h-full border rounded-sm shadow-sm bg-white">
            <CodeEditor
              ref={editorRef}
              code={value}
              language={language}
              onChange={(val) => setValue(val ?? "")}
              theme={themeColor}
            />
          </div>
        </div>

        {/* <div className="w-[30%] h-[calc(100vh-100px)]">         */}
          <div className="w-[30%] h-[calc(100vh-100px)] rounded-md bg-white p-4 border border-dashed border-neutral-400 shadow-sm">
            <Outputs title="Output:" output={output} />
          </div>
         {/* </div>  */}
      </div>
    </div>
  );
}
