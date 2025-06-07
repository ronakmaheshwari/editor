import axios from "axios";
import { key, URL } from "../../utils";
import { useState } from "react";

interface OutputBoxProps {
  editorRef: React.RefObject<{ getValue: () => string } | null>;
  language?: string;
  id: number | undefined;
}

interface OutputResponse {
  stdout?: string;
  stderr?: string;
  compile_output?: string;
  message?: string;
}

export default function OutputBox({ editorRef, id }: OutputBoxProps) {
  const [output, setOutput] = useState<OutputResponse | null>(null);

  const handleCode = async () => {
    const sourceCode = editorRef.current?.getValue() || "";

    if (!id || !sourceCode) {
      alert("Language ID or source code missing!");
      return;
    }

    const encodedCode = btoa(sourceCode);
    const encodedStdin = btoa("Judge0");

    try {
      if (!URL) {
        alert("API URL is missing!");
        return;
      }

      const response = await axios.post(
        URL,
        {
          language_id: id,
          source_code: encodedCode,
          stdin: encodedStdin,
        },
        {
          params: {
            base64_encoded: "true",
            wait: "true",
            fields: "*",
          },
          headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data)
        const data = response.data;
            setOutput({
                stdout: data.stdout ? atob(data.stdout) : undefined,
                stderr: data.stderr ? atob(data.stderr) : undefined,
                compile_output: data.compile_output ? atob(data.compile_output) : undefined,
                message: data.message ? atob(data.message) : undefined,
            });
    } catch (error) {
      console.error("Execution error:", error);
    }
  };

  return (
    <div className="relative z-10 p-4 space-y-4 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-gray-800">Output</h3>

      <button
        onClick={handleCode}
        type="button"
        className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md text-sm px-4 py-2 transition duration-200"
      >
        Run Code
      </button>

      <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md p-3 text-sm text-gray-800 whitespace-pre-wrap overflow-y-auto">
        {output ? (
          <pre>
            {output.stdout ||
              output.stderr ||
              output.compile_output ||
              output.message ||
              "No output"}
          </pre>
        ) : (
          <span className="text-gray-500">Run your code to see the output.</span>
        )}
      </div>
    </div>
  );
}
