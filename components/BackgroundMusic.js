// components/BackgroundMusic.js
"use client";

import { useTheme } from "@/theme/ThemeContext";
import { Pause, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function BackgroundMusic() {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // On mount, try to autoplay
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay failed:", err);
          // you could fallback to showing the play button only
        });
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-20 right-5 z-50">
      <button
        onClick={toggleMusic}
        style={{
          padding: "8px",
          background: theme.primary,
          color: theme.color,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
        }}
        className="cursor-pointer"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <audio ref={audioRef} loop autoPlay>
        <source src="/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
