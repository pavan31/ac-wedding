"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/theme/ThemeContext";

export default function InvitationSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { theme } = useTheme();

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
        hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center flex flex-col items-center justify-center h-[95vh]">
      <p
        className="text-6xl md:text-8xl font-vibes"
        style={{ marginBottom: "50px" }}
      >
        You&apos;re Invited!
      </p>
      <p
        className="text-3xl max-w-2xl mx-auto text-muted-foreground"
        style={{ marginBottom: "50px" }}
      >
        Join us to celebrate Our wedding on May 17, 2025.
      </p>

      {/* Countdown Timer */}
      <div className="box-border flex flex-col items-center justify-center">
        <p className="text-2xl " style={{ marginBottom: "20px" }}>
          Time to the Big Day!
        </p>
        {timeLeft.days > 0 && timeLeft.hrs > 0 && timeLeft.mins > 0 && (
          <div
            className="flex box-border w-11/12 sm:w-full h-[100px] items-center justify-center text-2xl rounded-2xl"
            style={{
              // border: "5px solid",
              margin: "10px",
              backgroundColor: theme.primary,
              // color: theme.primary,
              color: theme.text,
            }}
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col items-center min-w-[100px]"
              >
                <span>{value}</span>
                <span
                  className="text-sm uppercase mt-1 tracking-widest"
                  style={{ marginTop: "5px" }}
                >
                  {unit}
                </span>
              </div>
            ))}
          </div>
        )}
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
