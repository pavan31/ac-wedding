"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/theme/ThemeContext";

const events = [
  // {
  //   icon: "🪔",
  //   name: "Haldi Ceremony",
  //   date: "15 May 2025",
  //   time: "1:00 PM",
  //   location: "Vasavi Kalyana mandapam, Narasaraopet",
  //   dressCode: "Yellow & White",
  // },
  {
    icon: "🪔",
    name: "Haldi Ceremony",
    subEvents: [
      {
        for: "Bride",
        date: "15 May 2025",
        time: "1:00 PM",
        location: "Bride's Residence, Ipuru",
        dressCode: "Yellow & White",
      },
      {
        for: "Groom",
        date: "15 May 2025",
        time: "1:00 PM",
        location: "Vasavi Kalyana mandapam, Narasaraopet",
        dressCode: "Yellow & White",
      },
    ],
  },
  {
    icon: "🎶",
    name: "Sangeet",
    date: "15 May 2025",
    time: "7:00 PM",
    location: "Vasavi Kalyana mandapam, Narasaraopet",
    dressCode: "Ethnic with a Sparkle",
  },
  {
    icon: "🧎‍♂️",
    name: "Upanayanam",
    date: "17th May 2025",
    time: "9:00 AM",
    location: "Groom's Home",
    dressCode: "Traditional",
  },
  {
    icon: "💍 + 🎉",
    name: "Wedding & Reception",
    date: "17th May 2025",
    time: "6:30 PM onwards",
    muhurtham: "1:40 AM (Early mornings of 18th May)",
    location: "Komala Conventions A/C, Narasaraopet",
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
      className="w-full min-h-[80vh] flex flex-col items-center justify-center"
      style={{ marginBottom: "100px" }}
    >
      <p
        className="text-6xl sm:text-8xl font-vibes text-center "
        style={{ marginBottom: "50px" }}
      >
        Event Schedule
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 w-full max-w-7xl mx-auto">
        {events.map((event, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              onClick={() => toggleOpen(index)}
              className="relative group rounded-2xl min-h-[340px] w-full overflow-hidden shadow-xl transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: theme.primary }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            >
              {/* Default content */}
              <div
                className={`flex flex-col justify-center items-center text-center h-full px-6 py-10 transition-opacity duration-300 ${isMobile
                  ? isOpen
                    ? "opacity-0"
                    : "opacity-100"
                  : "group-hover:opacity-0"
                  }`}
              >
                <div className="text-6xl" style={{ marginBottom: "20px" }}>
                  {event.icon}
                </div>
                <p className="text-4xl sm:text-4xl font-normal font-vibes">
                  {event.name}
                </p>
              </div>

              {/* Detailed content */}
              <div
                className={`absolute inset-0 box-border flex flex-col justify-center items-center bg-black/70 backdrop-blur-sm text-white text-center transition-opacity duration-300 ${isMobile
                  ? isOpen
                    ? "opacity-100"
                    : "opacity-0"
                  : "opacity-0 group-hover:opacity-100"
                  }`}
                style={{
                  padding: "20px",
                }}

              >
                <p
                  className="text-4xl font-vibes"
                  style={{ marginBottom: "20px" }}
                >
                  {event.name}
                </p>

                {event.subEvents ? (
                  event.subEvents.map((subEvent, subIdx) => (
                    <div key={subIdx} className="w-full border-t border-white/30 py-2">
                      <p className="text-2xl font-lora font-semibold mb-1">{subEvent.for}</p>
                      <p className="text-xl font-lora sm:text-2xl">{subEvent.date} • {subEvent.time}</p>
                      <p className="text-xl font-lora sm:text-2xl">{subEvent.location}</p>
                      <p className="text-xl font-lora sm:text-2xl " style={{ marginBottom: "10px" }}>
                        Dress Code: {subEvent.dressCode}
                      </p>
                      {
                        subIdx == 0 && (
                          <div className="w-full border-amber-300" style={{
                            borderTopWidth: "1px",
                            height: "2px"
                          }}></div>
                        )
                      }
                    </div>
                  ))
                ) : (
                  <>
                    <p
                      className="text-2xl sm:text-2xl font-lora"
                      style={{ marginBottom: "10px" }}
                    >
                      {event.date} • {event.time}
                    </p>
                    <p className="flex items-center font-lora justify-center text-2xl sm:text-2xl mb-2">
                      {event.location}
                    </p>
                    {event.muhurtham && (
                      <p className="text-2xl sm:text-2xl font-lora" style={{ marginTop: "10px" }}>
                        Muhurtham: {event.muhurtham}
                      </p>
                    )}
                    {event.dressCode && (
                      <p className="text-2xl sm:text-2xl font-lora" style={{ marginTop: "10px" }}>
                        Dress Code: {event.dressCode}
                      </p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
