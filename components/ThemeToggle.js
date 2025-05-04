"use client";
import { useTheme } from "../theme/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        background: isDark ? "#333" : "#eee",
        color: isDark ? "#fff" : "#000",
        borderRadius: "8px",
      }}
    >
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
