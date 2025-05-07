"use client";
import { useTheme } from "../theme/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px",
          background: theme.secondary,
          color: theme.color,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
        }}
        className="cursor-pointer rounded-full"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
