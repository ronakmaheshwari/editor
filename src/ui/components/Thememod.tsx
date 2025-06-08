import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Themebutton({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: (checked: boolean) => void;
}) {
  return (
    <div className="relative inline-block" style={{ backgroundColor: isDark ? "#bfdbfe": "transparent", borderRadius: "9999px", padding: "2px" }}>
      <DarkModeSwitch
        checked={isDark}
        onChange={toggleTheme}
        size={20}
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
    </div>
  );
}
