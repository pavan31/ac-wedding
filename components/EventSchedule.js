"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MapPin } from "lucide-react";
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
    icon: "🌿",
    name: "Mehendi",
    date: "June 8, 2025",
    time: "5:00 PM",
    location: "Bride's Residence",
    dressCode: "Green & Glamorous",
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
      className="px-4 py-10 sm:px-8 sm:py-14 bg-transparent"
      style={{ marginBottom: "100px" }}
    >
      <p className="text-3xl sm:text-4xl font-vibes text-center mb-6">
        Event Schedule
      </p>

      <div className="max-w-4xl mx-auto px-2">
        <VerticalTimeline lineColor={theme.secondary} layout="1-column-left">
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "8px",
                padding: "16px 24px",
                textAlign: "left",
                boxShadow: "none",
                maxWidth: "100%",
              }}
              contentArrowStyle={{ borderRight: "7px solid #ec4899" }}
              date={`${event.date} • ${event.time}`}
              dateClassName="text-sm font-semibold"
              iconStyle={{
                background: "#fce7f3",
                color: "#ec4899",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                width: "44px",
                height: "44px",
              }}
              icon={<span className="text-xl">{event.icon}</span>}
            >
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="flex items-center text-sm text-gray-700 mb-1">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </p>
              {event.dressCode && (
                <p className="text-sm italic mt-1">
                  ✨ Dress Code: {event.dressCode}
                </p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
