"use client";
import { useState } from "react";
import { useTheme } from "@/theme/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function WatchLiveButton() {
  const { theme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  const events = [
    {
      name: "Haldi Ceremony",
      url: "https://youtube.com/live/los1XdVKvnA?feature=share",
      icon: "💛",
    },
    {
      name: "Bride/Groom Entry",
      url: "https://youtube.com/live/wjKVDZDjFjk?feature=share",
      icon: "👰🤵",
    },
    {
      name: "Wedding Reception",
      url: "https://youtube.com/live/wjKVDZDjFjk?feature=share",
      icon: "🎉",
    },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Container that animates between top-right and center */}
      <motion.div
        style={{ position: "fixed", zIndex: 50 }}
        initial={false}
        animate={
          openMenu
            ? {
              top: "50%",
              left: "50%",
              right: "auto",
              x: "-50%",
              y: "-50%",
            }
            : {
              top: "1rem",
              right: "1rem",
              left: "auto",
              x: 0,
              y: 0,
            }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative">
          {/* WATCH LIVE BUTTON */}
          <motion.button
            className="relative inline-flex items-center justify-center rounded-full px-7 py-4 text-lg font-semibold whitespace-nowrap
                        shadow-[0_0_0_4px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out transform
                        hover:scale-[1.05] hover:shadow-2xl active:scale-[0.95] focus:outline-none"
            style={{
              background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
              color: theme.text,
            }}
            onClick={() => setOpenMenu((prev) => !prev)}
            initial={{ scale: 1 }}
            animate={{ scale: openMenu ? 1 : [1, 1.1, 1] }}
            transition={{ repeat: openMenu ? 0 : Infinity, duration: 2, ease: "easeInOut" }}
          >
            {/* Pulsating ring behind the icon (only when closed) */}
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
              style={{ zIndex: -1 }}
              animate={
                openMenu
                  ? {}
                  : { scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }
              }
              transition={{ repeat: openMenu ? 0 : Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <div
                className="w-[2rem] h-[2rem] rounded-full bg-white/40"
                style={{ filter: "blur(10px)" }}
              />
            </motion.span>

            <span className="relative z-10 text-2xl mr-2">🎥</span>
            <span className="relative z-10">Watch Live</span>
          </motion.button>

          {/* DROPDOWN PANEL */}
          <AnimatePresence>
            {openMenu && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -mt-1 w-[360px] rounded-[20px] shadow-2xl overflow-hidden
                            ring-1 ring-white/25 backdrop-blur-lg bg-transparent border border-white/30
                            py-20" // Increased vertical padding for more height
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* CLOSE ICON */}
                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
                  onClick={() => setOpenMenu(false)}
                >
                  <FiX size={24} />
                </button>

                {/* HEADER */}
                <div
                  className="px-6 pb-8 text-center border-b border-white/30 font-extrabold text-1.5xl tracking-wide text-white/90" // Increased bottom padding
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  UPCOMING EVENTS
                </div>

                {/* EVENT LIST */}
                <div className="flex flex-col divide-y divide-white/20">
                  {events.map((evt, idx) => (
                    <motion.button
                      key={evt.name}
                      onClick={() => {
                        window.open(evt.url, "_blank");
                        setOpenMenu(false);
                      }}
                      className="flex flex-col items-center text-center px-5 py-8 transition-all duration-200 ease-out
                                        focus:outline-none" // Increased vertical padding for items
                      style={{ color: theme.text }}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.25 }}
                    >
                      <span className="text-4xl mb-5">{evt.icon}</span> {/* Increased bottom margin for icon */}
                      <span className="underline font-semibold text-lg">{evt.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}