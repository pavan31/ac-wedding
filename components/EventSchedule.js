"use client";

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

  return (
    <section
      className="px-4 py-10 sm:px-8 sm:py-14 bg-transparent min-h-[80vh] flex flex-col items-center justify-center"
      style={{ marginBottom: "100px" }}
    >
      <p className="text-8xl sm:text-8xl font-vibes text-center " style={{ marginBottom: "100px" }}>
        Event Schedule
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative group bg-white/10  rounded-2xl min-h-[340px] min-w-[280px] md:min-w-[320px] max-w-[360px] mx-auto overflow-hidden shadow-xl transition-all duration-300"
            style={{ borderColor: theme.secondary }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Default content (icon + title), hidden on hover */}
            <div className="flex flex-col justify-center items-center text-center h-full px-6 py-10 group-hover:opacity-0 transition-opacity duration-300">
              <div className="text-6xl" style={{marginBottom: "20px"}}>{event.icon}</div>
              <p className="text-4xl sm:text-4xl font-semibold" style={{marginBottom: "10px"}} >{event.name}</p>
            </div>

            {/* Hovered content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-6 flex flex-col justify-center items-center bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 text-white text-center"
            >
              <div className="text-6xl" style={{marginBottom: "10px"}}>{event.icon}</div>
              <p className="text-4xl sm:text-4xl font-bold" style={{marginBottom: "15px"}}>{event.name}</p>
              <p className="text-base sm:text-xl" style={{marginBottom: "10px"}}>
                📅 {event.date} • 🕒 {event.time}
              </p>
              <p className="flex items-center justify-center text-base sm:text-xl" style={{marginBottom: "10px"}}>
                <MapPin className="w-5 h-5 mr-2" />
                {event.location}
              </p>
              {/* {event.dressCode && (
                <p className="text-base italic mt-2">
                  ✨ Dress Code: {event.dressCode}
                </p>
              )} */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
