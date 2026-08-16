import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import groupSvg from '../../assets/Group.svg';

export default function PreFooter() {
  return (
    <section className="w-full relative overflow-hidden bg-transparent pt-20 sm:pt-28 pb-16 sm:pb-24 text-white">
      {/* Top Fading Gradient Blur (Submerges smoothly into the above page section) */}
      <div
        className="absolute top-0 inset-x-0 h-36 sm:h-48 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(1, 6, 38, 0.95) 0%, rgba(1, 6, 38, 0.5) 45%, transparent 100%)',
        }}
      />

      {/* Bottom Fading Gradient Blur (Submerges smoothly into the footer) */}
      <div
        className="absolute bottom-0 inset-x-0 h-36 sm:h-48 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, #0B080A 0%, rgba(11, 8, 10, 0.6) 45%, transparent 100%)',
        }}
      />

      {/* Frosted Glass Backdrop Layer with Smooth Vertical Gradient Fade Mask */}
      <div
        className="absolute inset-0 pointer-events-none z-0 backdrop-blur-xl bg-white/[0.015]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        }}
      />

      {/* Subtle Ambient Backlight Glow behind the Illustration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0052FF]/12 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full relative z-10 flex flex-col justify-between">

        {/* Top Indicators Bar (confidence - communication - leadership) */}
        <div className="w-full flex items-center justify-between text-xs sm:text-sm font-sans tracking-[0.25em] lowercase text-white/50 pb-4 mb-8 sm:mb-12">
          <span className="hover:text-white transition-colors cursor-default">confidence</span>
          <span className="hover:text-white transition-colors cursor-default font-medium text-white/80">communication</span>
          <span className="hover:text-white transition-colors cursor-default">leadership</span>
        </div>

        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center my-auto py-4">

          {/* Left Column: Unlock Your Potential */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col items-start text-left z-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Unlock your <br />
              <span className="text-white/95">potential.</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-sm mt-4 font-normal">
              Join SOIT RGPV's leading personality grooming club where confidence meets communication, and learning transforms into leadership.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="https://chat.whatsapp.com/GPB1v8QqoS78xD8h98ZhlB?s=sw&p=a&ilr=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="wide"
                  className="h-11 px-7 text-sm font-semibold rounded-full bg-white text-[#0038FF] hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.65)] transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Join Our Community
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Center Column: SVG Graphic with Sharp Focus Inside Reticle & Frosted Blur Outside */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex justify-center items-center relative py-4 lg:py-0"
          >
            <div className="relative z-10 flex justify-center items-center w-[300px] sm:w-[380px] lg:w-[420px] h-[360px] sm:h-[440px] lg:h-[480px]">

              {/* 1. Frosted / Blurred Else Area (The entire illustration outside the focus box) */}
              <img
                src={groupSvg}
                alt="Persona Blurred Silhouette"
                className="absolute inset-0 w-full h-full object-contain filter blur-[8px] opacity-70 saturate-125 select-none pointer-events-none transition-all"
              />

              {/* 2. Razor-Sharp Focus Window (Only visible inside the reticle boundary via clip-path) */}
              <img
                src={groupSvg}
                alt="Persona Sharp Focus"
                className="absolute inset-0 w-full h-full object-contain filter-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] select-none pointer-events-none z-10"
                style={{
                  clipPath: 'inset(4% 25% 54% 25%)',
                  WebkitClipPath: 'inset(4% 25% 54% 25%)',
                }}
              />

              {/* 3. Camera Focus Viewfinder Reticle Frame */}
              <motion.div
                animate={{
                  scale: [1, 1.015, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-[4%] left-[25%] w-[50%] h-[42%] border border-white/80 pointer-events-none z-20 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                {/* 4 Corner Grips (Matching reference design) */}
                <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-2 border-white bg-white/30 backdrop-blur-none" />
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-2 border-white bg-white/30 backdrop-blur-none" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-2 border-white bg-white/30 backdrop-blur-none" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-2 border-white bg-white/30 backdrop-blur-none" />

                {/* Focus Crosshair Reticle Inside Sharp Area */}
                <div className="absolute top-[32%] right-[22%] text-white text-lg font-light select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]">
                  +
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Our Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col items-start text-left lg:pl-6 z-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Our <br />
              <span className="text-white/95">vision.</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-sm mt-4 font-normal">
              At Persona, we envision a generation of students who are not only academically sound but also confident, articulate, and self-aware individuals ready to thrive in any professional or social environment.
            </p>
          </motion.div>

        </div>


      </div>
    </section>
  );
}
