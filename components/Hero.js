"use client";
import { useTheme } from '@/theme/ThemeContext';
import React from 'react'
import ThemeToggle from './ThemeToggle';
import { Mail } from "lucide-react";
import Countdown from 'react-countdown';
import Image from 'next/image';
import hero from '../public/hero.jpeg'

const Hero = () => {
  const { theme } = useTheme();
  const weddingDate = new Date("2025-05-17T00:00:00");
  return (
    <div className='text-center h-screen flex items-center justify-center w-full flex-col'
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}>
      <p className='uppercase text-2xl sm:text-4xl' style={{ marginBottom: 30 }}>Welcome to our Wedding</p>
      <Image src={hero} alt='couple' className='object-cover rounded-full' style={{marginBottom: 20, width: '300px', height: '300px'}} />
      <p className="text-6xl sm:text-8xl font-vibes text-center" style={{ marginBottom: 20 }}>Akhil and Chandana</p>

      <div  style={{marginBottom: 10}}>
        <Countdown
          date={weddingDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex justify-center gap-6 sm:gap-10">
              {[{ label: "Days", value: days },
              { label: "Hrs", value: hours },
              { label: "Min", value: minutes },
              { label: "Sec", value: seconds }].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg"
                    style={{
                      backgroundColor: theme.secondary,
                      color: theme.color,
                    }}
                  >
                    <span className="text-3xl sm:text-3xl font-extrabold" >{item.value}</span>
                  </div>
                  <span className="text-base sm:text-lg font-semibold uppercase" style={{ color: theme.color, marginTop: 10 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
      <div className='text-3xl rounded flex items-center gap-2' style={{ backgroundColor: theme.secondary, color: theme.color, padding: "20px 40px", marginTop: 20 }}>
      <Mail className="w-8 h-8  group-hover:scale-110 transition-transform duration-300" style={{ color: theme.color }} />
        View Invitation
      </div>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Hero