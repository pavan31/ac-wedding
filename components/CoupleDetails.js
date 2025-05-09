"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero from "../public/hero.jpeg";

export default function CoupleDetails() {
  return (
    <section
      className="box-border"
      style={{ padding: "20px", marginBottom: "100px" }}
    >
      <p
        className="text-7xl sm:text-8xl font-vibes text-center"
        style={{ marginBottom: "100px", marginTop: "50px" }}
      >
        Meet the Couple
      </p>

      <div className="flex flex-col sm:flex-row justify-around items-center gap-16 relative">
        {/* Groom */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <Image
            src={hero}
            alt="Groom"
            className="object-cover rounded-full"
            style={{ marginBottom: 20, width: "250px", height: "250px" }}
          />
          <p
            className="text-6xl sm:text-8xl font-vibes"
            style={{ marginBottom: "20px", marginTop: "20px" }}
          >
            Akhil
          </p>
          <p className="text-2xl" style={{ marginBottom: "10px" }}>
            S/o
          </p>
          <p className="text-2xl" style={{ marginBottom: "10px" }}>
            Mr. Kothamasu Srinivasarao & Mrs. Usharani
          </p>
        </motion.div>
        <div className="sm:block text-4xl font-bold font-vibes">&</div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <Image
            src={hero}
            alt="Bride"
            className="object-cover rounded-full"
            style={{ marginBottom: 20, width: "250px", height: "250px" }}
          />
          <p
            className="text-6xl sm:text-8xl font-vibes"
            style={{ marginBottom: "20px", marginTop: "20px" }}
          >
            Chandana
          </p>
          <p className="text-2xl" style={{ marginBottom: "10px" }}>
            D/o
          </p>
          <p className="text-2xl" style={{ marginBottom: "10px" }}>
            Mr. Kotha Nageswararao & Mrs. Padmavathi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
