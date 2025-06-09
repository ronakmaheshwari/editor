import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Themebutton({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: (checked: boolean) => void;
}) {
  return (
    <button className="relative w-10 h-10 flex items-center justify-center rounded-md" style={{ backgroundColor: isDark ? "#000000": "#2563eb", padding: "2px" }}>
      <DarkModeSwitch
        checked={isDark}
        onChange={toggleTheme}
        size={20}
        moonColor="white"
        sunColor="yellow"
        style={{ marginBottom: 0 }}
      />
      <style>{`
        .relative.inline-block svg {
          display: block;
        }
        .relative.inline-block svg path {
          fill: ${isDark ? "white" : "yellow"};
        }
      `}</style>
    </button>
  );
}
