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
    const weddingDate = new Date("2025-05-17T18:30:00");

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
    <section
      className="relative text-center  flex flex-col items-center justify-center min-h-[95vh] box-border"
      style={{ padding: "20px" }}
    >
      {/* Invitation Message */}
      {/* <p
        className="text-6xl md:text-8xl font-vibes"
        style={{ marginBottom: "50px" }}
      >
        You&apos;re Invited!
      </p> */}
      <p
        className="text-3xl w-9/10 sm:max-w-2xl mx-auto font-lora text-muted-foreground"
        style={{ marginBottom: "25px" }}
      >
        Your Blessings Means a Lot
      </p>
      <p
        className="text-xl w-9/10 sm:max-w-2xl mx-auto font-lora text-muted-foreground"
        style={{ marginBottom: "25px" }}
      >
        We would be delighted to have you join us in celebrating this happy
        event as we announce our wedding.
      </p>
      <p
        className="text-xl w-9/10 sm:max-w-2xl mx-auto font-lora text-muted-foreground"
        style={{ marginBottom: "25px" }}
      >
        We invite you to join us as we exchange vows and  happy to take
        blessings from you in our new Journey.
      </p>
      {/* <p
        className="text-xl w-9/10 sm:max-w-2xl mx-auto text-muted-foreground"
        style={{ marginBottom: "25px" }}
      >
        Our day will be genuinely remarkable with your attendance.
      </p> */}

      <p
        className="text-4xl md:text-4xl font-vibes"
        style={{ marginBottom: "50px" }}
      >
        - Akhil and Chandana
      </p>

      {/* Countdown Timer */}
      <div className="box-border flex flex-col items-center justify-center">
        <p className="text-2xl font-lora" style={{ marginBottom: "20px" }}>
          Time to the Big Day!
        </p>
        <div
          className="flex box-border w-11/12 sm:w-full h-[100px] font-lora items-center justify-center text-2xl rounded-2xl"
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
