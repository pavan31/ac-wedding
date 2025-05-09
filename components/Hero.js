"use client";
import { useTheme } from "@/theme/ThemeContext";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Mail } from "lucide-react";
import Countdown from "react-countdown";
import Image from "next/image";
import hero from "../public/hero.jpeg";
import Link from "next/link";

const Hero = () => {
  const { theme } = useTheme();
  const weddingDate = new Date("2025-05-17T00:00:00");
  return (
    <div
      className="text-center flex items-center justify-center w-full h-[100%] flex-col box-border"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <p
        className="uppercase text-2xl sm:text-4xl font-lora text-center"
        style={{ marginBottom: 30 }}
      >
        Welcome to our Wedding
      </p>
      <Image
        src={hero}
        alt="couple"
        className="object-cover rounded-full"
        style={{ marginBottom: 20, width: "250px", height: "250px" }}
      />
      <div
        className="flex flex-col sm:flex-row"
        style={{ marginBottom: 15, marginTop: 15 }}
      >
        <p className="text-6xl sm:text-8xl font-vibes text-center">Akhil</p>
        <p
          className="text-6xl sm:text-8xl font-vibes text-center"
          style={{ margin: "0px 30px" }}
        >
          &
        </p>
        <p className="text-6xl sm:text-8xl font-vibes text-center">Chandana</p>
      </div>

      <Link
        className="text-3xl rounded-xl flex items-center font-lora gap-2 backdrop-blur-sm cursor-pointer"
        style={{
          backgroundColor: theme.secondary,
          color: theme.color,
          padding: "16px 32px",
        }}
        href={"/wedding-invitation"}
      >
        <Mail
          className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          style={{ color: theme.color }}
        />
        View Invitation
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default Hero;
