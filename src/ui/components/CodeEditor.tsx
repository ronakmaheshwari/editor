import { Editor } from "@monaco-editor/react";

export default function CodeEditor({
  code,
  onChange,
  language,
}: {
  code: string;
  onChange: (value: string | undefined) => void;
  language: string;
}) {
  return (
    <div className="w-full h-screen rounded-xl overflow-hidden">
      <Editor
        width="70%"
        height="100vh"
        language={language}
        value={code}
        defaultValue="// some comment"
        theme="shades-of-purple"
        onChange={onChange}
        onMount={(_, monaco) => {
          monaco.editor.defineTheme("shades-of-purple", {
            base: "vs-dark",
            inherit: true,
            rules: [
              { token: "", foreground: "ffffff" },
              { token: "comment", foreground: "b362ff", fontStyle: "italic" },
              { token: "keyword", foreground: "ff9d00" },
              { token: "number", foreground: "f78c6c" },
              { token: "string", foreground: "ecc48d" },
              { token: "variable", foreground: "c792ea" },
              { token: "type.identifier", foreground: "addb67" },
              { token: "function", foreground: "82aaff" },
              { token: "class", foreground: "ffcb6b" },
            ],
            colors: {
              "editor.background": "#2d2b55",
              "editor.foreground": "#ffffff",
              "editorCursor.foreground": "#ffcc00",
              "editor.lineHighlightBackground": "#393869",
              "editorLineNumber.foreground": "#858585",
              "editor.selectionBackground": "#6c5980",
              "editor.inactiveSelectionBackground": "#6c598033",
            },
          });

          monaco.editor.setTheme("shades-of-purple");
        }}
        options={{
          fontSize: 18,
          minimap: { enabled: false },
          wordWrap: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
            handleMouseWheel: true,
          },
        }}
      />
    </div>
  );
}
