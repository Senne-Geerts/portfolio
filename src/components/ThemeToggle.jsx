import React from "react";
import { mono } from "../theme";

export function ThemeToggle({ theme, setTheme, t, labels }) {
  const isDark = theme === "dark";
  const lightLabel = labels?.lightTheme || "light";
  const darkLabel = labels?.darkTheme || "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? lightLabel : darkLabel} theme`}
      title={`Switch to ${isDark ? lightLabel : darkLabel} theme`}
      className="text-xs px-3 py-2 rounded-md transition-colors"
      style={{ fontFamily: mono, color: t.inkSoft, border: `1px solid ${t.line}`, backgroundColor: "transparent" }}
    >
      {isDark ? `☀ ${lightLabel}` : `☾ ${darkLabel}`}
    </button>
  );
}
