import React from "react";
import { mono } from "../theme";

export function ThemeToggle({ theme, setTheme, t }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="text-xs px-3 py-2 rounded-md transition-colors"
      style={{ fontFamily: mono, color: t.inkSoft, border: `1px solid ${t.line}`, backgroundColor: "transparent" }}
    >
      {isDark ? "☀ light" : "☾ dark"}
    </button>
  );
}
