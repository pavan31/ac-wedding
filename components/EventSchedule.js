"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/theme/ThemeContext";

const events = [
  {
    icon: "🪔",
    name: "Haldi Ceremony",
    date: "June 8, 2025",
    time: "10:00 AM",
    location: "Bride's Residence",
    dressCode: "Yellow Traditional",
  },
  {
    icon: "💍",
    name: "Wedding",
    date: "June 9, 2025",
    time: "6:00 PM",
    location: "The Grand Palace",
    dressCode: "Traditional",
  },
  {
    icon: "🎉",
    name: "Reception",
    date: "June 10, 2025",
    time: "7:30 PM",
    location: "Hotel Sea View",
    dressCode: "Formal/Western",
  },
];

export default function EventSchedule() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleOpen = (index) => {
    if (!isMobile) return;
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="px-4 py-10 sm:px-8 sm:py-14 min-h-[80vh] flex flex-col items-center justify-center"
      style={{ marginBottom: "100px" }}
    >
      <p className="text-6xl sm:text-8xl font-vibes text-center" style={{ marginBottom: "100px" }}>
        Event Schedule
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {events.map((event, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              onClick={() => toggleOpen(index)}
              className="relative group bg-white/10 rounded-2xl min-h-[340px] min-w-[280px] md:min-w-[320px] max-w-[360px] mx-auto overflow-hidden shadow-xl transition-all duration-300 cursor-pointer"
              style={{ borderColor: theme.secondary }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            >
              {/* Default content - shown when not opened */}
              <div
                className={`flex flex-col justify-center items-center text-center h-full px-6 py-10 transition-opacity duration-300 ${
                  isMobile
                    ? isOpen
                      ? "opacity-0"
                      : "opacity-100"
                    : "group-hover:opacity-0"
                }`}
              >
                <div className="text-6xl mb-4" style={{ marginBottom: "20px" }}>{event.icon}</div>
                <p className="text-4xl sm:text-5xl font-normal font-vibes">{event.name}</p>
              </div>

              {/* Detailed content */}
              <div
                className={`absolute inset-0 p-6 flex flex-col justify-center items-center bg-black/70 backdrop-blur-sm text-white text-center transition-opacity duration-300 ${
                  isMobile
                    ? isOpen
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="text-5xl mb-2" style={{ marginBottom: "20px" }}>{event.icon}</div>
                <p className="text-5xl sm:text-5xl font-vibes" style={{ marginBottom: "20px" }}>{event.name}</p>
                <p className="text-3xl sm:text-3xl" style={{ marginBottom: "20px" }}>
                  {event.date} • {event.time}
                </p>
                <p className="flex items-center justify-center text-2xl sm:text-2xl mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  {event.location}
                </p>
                {/* {event.dressCode && (
                  <p className="text-sm italic mt-2">
                    ✨ Dress Code: {event.dressCode}
                  </p>
                )} */}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
