"use client";
import { useTheme } from "@/theme/ThemeContext";
import { motion } from "framer-motion";

export default function WatchLiveButton() {
  const { theme } = useTheme();
  return (
    <motion.div
      className="fixed top-6 right-6"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <button
        className="border-2 hover:text-white transition-colors font-semibold cursor-pointer shadow-lg"
        style={{
          border: `2px solid ${theme.primary}`,
          borderRadius: "10px",
          padding: "10px 20px",
          color: theme.text,
        }}
        onClick={() => {
          window.open("https://yourlivestreamlink.com", "_blank");
        }}
      >
        🎥 Watch Live
      </button>
    </motion.div>
  );
}
