import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

export default function HeroSection() {
  return (
    <section className="relative min-h-0 md:min-h-[85vh] flex flex-col items-center justify-center pt-6 pb-12 sm:py-16 px-4 md:px-8 overflow-hidden bg-transparent w-full">

      {/* Background Grid Line Layer with Smooth Multi-Stop Radial Fading (Submerged into Corners) */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-80 bg-grid-pattern"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 38%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.15) 85%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 38%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.15) 85%, transparent 100%)'
        }}
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6">

        {/* Persona Logo at the Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="logo-glow animate-float flex justify-center mb-1 sm:mb-2"
        >
          <Logo size="hero" className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain" />
        </motion.div>

        {/* 3-Line Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white text-center leading-[1.05] drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            Confidence isn't <br />
            inherited. <br />
            <span className="gradient-text drop-shadow-[0_0_45px_rgba(0,180,216,0.4)]">
              It's practiced.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl sm:max-w-3xl text-neutral-300 text-center text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-2"
        >
          Most freshers join feeling hesitant, anxious on stage, or afraid of speaking English.
          We turn that quiet voice into magnetic leadership, one zero-judgment session at a time.
        </motion.p>

      </div>
    </section>
  );
}
