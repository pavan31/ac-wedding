"use client";
import Hero from "@/components/Hero";
import { useTheme } from "../theme/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Hero />
    </main>
  );
}
