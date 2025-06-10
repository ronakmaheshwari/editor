import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { useEffect, useState, useRef, type JSX } from "react";

interface OutputResponse {
  stdout?: string;
  stderr?: string;
  output?: string;
  message?: string;
  compile_output?: string;
}

export default function Outputs({
  title,
  output,
  themeColor,
}: {
  title: string;
  output: OutputResponse | null;
  themeColor?: "shades-of-purple" | "noctis-light";
}) {
  const [terminalLines, setTerminalLines] = useState<JSX.Element[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!output) return;

    const timestamp = Date.now();
    const newLines: JSX.Element[] = [];

    if (output.stdout) {
      newLines.push(
        <TerminalOutput key={`stdout-${timestamp}`}>
          ✅ Output:
          {"\n"}
          {output.stdout.trim()}
        </TerminalOutput>
      );
    }
    if (output.stderr) {
      newLines.push(
        <TerminalOutput key={`stderr-${timestamp}`}>
          ❌ Error:
          {"\n"}
          {output.stderr.trim()}
        </TerminalOutput>
      );
    }
    if (output.compile_output) {
      newLines.push(
        <TerminalOutput key={`compile-${timestamp}`}>
          🛠 Compile Output:
          {"\n"}
          {output.compile_output.trim()}
        </TerminalOutput>
      );
    }
    if (output.message) {
      newLines.push(
        <TerminalOutput key={`message-${timestamp}`}>
          ℹ️ Message:
          {"\n"}
          {output.message.trim()}
        </TerminalOutput>
      );
    }

    if (newLines.length === 0) {
      newLines.push(
        <TerminalOutput key={`no-output-${timestamp}`}>
          🤷 No output received.
        </TerminalOutput>
      );
    }

    setTerminalLines((prev) => [...prev, ...newLines]);
  }, [output]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleClear = () => {
    setTerminalLines([
      <TerminalOutput key="cleared">🧹 Terminal cleared.</TerminalOutput>,
    ]);

    setTimeout(() => {
      setTerminalLines([]);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full max-h-screen">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <button
          onClick={handleClear}
          className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear
        </button>
      </div>

      <div
        ref={scrollRef}
        className="h-full overflow-y-auto border rounded shadow-inner"
        style={{
          backgroundColor: themeColor === "noctis-light" ? "#1f2937" : "#1f2937",
          borderColor: themeColor === "noctis-light" ? "#555" : undefined,
        }}
      >
        <Terminal
          // height="100"
          name="Output Terminal"
          colorMode={ColorMode.Dark}
          onInput={() => {}}
        >
          {terminalLines}
        </Terminal>
      </div>
    </div>
  );
}
