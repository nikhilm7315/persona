import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroVisual from '../../assets/hero_visual.png';

// 4 User-provided illustrated student avatars for 500+ members community badge
import avatar1 from '../../assets/hero_avatar_1.png';
import avatar2 from '../../assets/hero_avatar_2.png';
import avatar3 from '../../assets/hero_avatar_3.png';
import avatar4 from '../../assets/hero_avatar_4.png';

// 4-point star sparkle component matching the mockup
function SparkleStar({ className = "w-4 h-4 text-amber-400", style }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

export default function HeroSection() {
  const memberAvatars = [avatar1, avatar2, avatar3, avatar4];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-end pt-8 sm:pt-12 px-4 sm:px-6 lg:px-12 overflow-hidden bg-transparent w-full">

      {/* Edge-to-Edge Ambient Glows & Background Grid Submerged into Edges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 w-full h-full z-0 bg-grid-pattern"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 45%, transparent 90%)',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 45%, transparent 90%)',
        }}
      />

      {/* Ambient background soft light orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[110px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0052ff]/20 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-[90px]" />

      {/* Main 2-Column Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">

        {/* Left Column: Headline, Kicker, Subtitle, CTA & Social Proof */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left justify-center pb-12 sm:pb-16 lg:pb-20 space-y-6 sm:space-y-8">

          {/* Top Kicker / Tag */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2"
          >
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.22em] text-[#7888ea] uppercase select-none">
              CONFIDENCE. COMMUNICATION. LEADERSHIP.
            </span>
          </motion.div>

          {/* 3-Line Large Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1 sm:space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.06] drop-shadow-[0_0_35px_rgba(255,255,255,0.12)]">
              Confidence <br />
              isn't inherited <br />
              <span className="text-white">its </span>
              <span className="gradient-text drop-shadow-[0_0_45px_rgba(0,180,216,0.45)]">
                practiced.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle Copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-[#B4BEDB] text-base sm:text-lg md:text-xl font-normal leading-relaxed"
          >
            At Persona, we help you step out of your comfort zone, find your voice,
            and become the leader you're meant to be.
          </motion.p>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="pt-1"
          >
            <a
              href="https://chat.whatsapp.com/GPB1v8QqoS78xD8h98ZhlB?s=sw&p=a&ilr=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0042D0] text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(0,82,255,0.55)] hover:shadow-[0_0_35px_rgba(0,82,255,0.8)] transition-all duration-300 active:scale-95 group cursor-pointer"
            >
              <span>Join Our Community</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Social Proof: 500+ members community */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3.5 pt-2"
          >
            {/* Overlapping User-provided Avatars */}
            <div className="flex -space-x-2.5 overflow-hidden p-0.5">
              {memberAvatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt={`Persona Member ${idx + 1}`}
                  className="inline-block w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-[#010626] object-cover bg-[#001280] shadow-sm"
                />
              ))}
            </div>

            {/* Counter Text */}
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-sm sm:text-base leading-tight tracking-tight">
                500+ members community
              </span>
              <span className="text-neutral-400 text-xs sm:text-sm font-normal">
                Growing together
              </span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Scaled Up & Lifted in Y Hero Visual Illustration */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-end justify-center lg:justify-end self-end w-full">

          {/* Static Decorative Sparkle Stars matching the sample illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="absolute -top-4 sm:-top-8 left-2 sm:left-6 z-20 pointer-events-none"
          >
            <SparkleStar className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="absolute top-1/5 -left-4 sm:left-0 z-20 pointer-events-none"
          >
            <SparkleStar className="w-6 h-6 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="absolute top-4 right-4 sm:right-10 z-20 pointer-events-none"
          >
            <SparkleStar className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="absolute bottom-1/3 right-2 sm:right-4 z-20 pointer-events-none"
          >
            <SparkleStar className="w-4 h-4 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
          </motion.div>

          {/* Ambient Glowing Bokeh Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-28 left-6 sm:left-8 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24] pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-12 left-12 sm:left-16 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9] pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute bottom-16 right-8 sm:right-12 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24] pointer-events-none"
          />

          {/* Visual Container */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full flex items-end justify-center lg:justify-end"
          >
            {/* Clean, Crisp Hero Visual Image with No Heavy Glow */}
            <img
              src={heroVisual}
              alt="Persona Student Leadership & Confidence Journey"
              className="relative z-10 w-full max-w-[580px] sm:max-w-[660px] lg:max-w-[780px] xl:max-w-[880px] 2xl:max-w-[940px] h-auto object-contain object-bottom select-none pointer-events-none -translate-y-8 sm:-translate-y-12 lg:-translate-y-20 xl:-translate-y-24"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
