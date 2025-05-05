// components/BackgroundMusic.js
"use client";

import { useTheme } from "@/theme/ThemeContext";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function BackgroundMusic() {
  const { isDark, toggleTheme, theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-15 right-5 z-50">
      <button
        onClick={toggleMusic}
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
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <audio ref={audioRef} loop>
        <source src={"../public/music.mp3"} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
