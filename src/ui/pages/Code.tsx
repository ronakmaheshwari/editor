import { useRef, useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import Dropdown from "../components/Dropdown";
import Code_Snippet from "../../utils/utils";
import OutputBox from "../components/Output";
import Navbar from "../components/Navbar";
import ArrowButton from "../components/ExecuteButton";
import StopButton from "../components/StopButton";
import runcode from "../../utils/piston";
import Themebutton from "../components/Thememod";

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
  const [language, setLanguage] = useState("javascript");
  const [langId, setlangId] = useState<number | undefined>();
  const [output, setOutput] = useState<OutputResponse | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [themeColor, setThemeColor] = useState<"shades-of-purple" | "night-owl">("shades-of-purple");

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
    if (!language || !sourceCode) {
      alert("Missing language or code.");
      return;
    }

    setIsRunning(true);
    try {
      const response = await runcode({ language, code: sourceCode });
      console.log("Raw output from Piston:", response?.output);
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
    if (stored === "shades-of-purple" || stored === "night-owl") {
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
            <div className="flex justify-center gap-2 items-center">
              <Themebutton
                isDark={themeColor === "night-owl"}
                toggleTheme={() =>
                  setThemeColor(prev => (prev === "night-owl" ? "shades-of-purple" : "night-owl"))
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

        <div className="w-[30%] h-[calc(100vh-80px)] overflow-y-auto rounded-md bg-white p-4 border border-dashed border-neutral-400 shadow-sm">
          <OutputBox title="Output:" output={output} />
        </div>
      </div>
    </div>
  );
}
