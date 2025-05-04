"use client";
import { useTheme } from "../theme/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        marginTop: "1rem",
        padding: "1rem 1rem",
        background: theme.secondary,
        color: theme.color,
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
      className="cursor-pointer"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
