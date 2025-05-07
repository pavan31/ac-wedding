"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function InvitationSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-05-17T18:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 py-24 text-center flex flex-col items-center justify-center min-h-[95vh]">
      {/* Invitation Message */}
      <p className="text-6xl md:text-8xl font-vibes" style={{ marginBottom: "50px" }}>You're Invited!</p>
      <p className="text-3xl max-w-2xl mx-auto text-muted-foreground" style={{ marginBottom: "50px" }}>
        Join us to celebrate Our wedding  on May 17, 2025.
      </p>

      {/* Countdown Timer */}
      <div className="rounded-xl px-8 py-10 max-w-3xl w-full mt-14">
        <p className="text-4xl font-bold" style={{ marginBottom: "20px" }}>Countdown to Our Big Day</p>
        <div className="flex justify-center flex-wrap gap-10 sm:gap-6 text-3xl font-semibold">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center bg-black/30 rounded-xl min-w-[100px]"
              style={{ padding: "20px" }}
            >
              <span>{value}</span>
              <span className="text-sm uppercase mt-1 tracking-widest" style={{ marginTop: "5px" }}>{unit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Icon */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
