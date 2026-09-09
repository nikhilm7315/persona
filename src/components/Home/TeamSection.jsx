import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TEAM_MEMBERS } from '../../data/teamData'

// 4-point star sparkle component
function FourPointStar({ className = "w-4 h-4 text-amber-400", style }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  )
}

export default function TeamSection() {
  // Outer wrapper ref — this tall container drives the scroll progress
  const wrapperRef = useRef(null)
  // Ref for mobile horizontal scroll container
  const mobileScrollRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(true)

  // Auto-scroll to the featured card (Ansh) on mobile
  useEffect(() => {
    if (!isDesktop && mobileScrollRef.current) {
      const container = mobileScrollRef.current
      const featuredCard = container.querySelector('[data-featured="true"]')
      if (featuredCard) {
        // Timeout to ensure layout is settled
        requestAnimationFrame(() => {
          const containerRect = container.getBoundingClientRect()
          const cardRect = featuredCard.getBoundingClientRect()
          const scrollLeft = featuredCard.offsetLeft - container.offsetLeft - (containerRect.width / 2) + (cardRect.width / 2)
          container.scrollTo({ left: scrollLeft, behavior: 'instant' })
        })
      }
    }
  }, [isDesktop])

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Track scroll progress across the TALL WRAPPER so there is enough scroll travel
  // for all cards to animate in while the section stays pinned via position: sticky
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001
  })

  // Scroll Transforms with more delay between each step:
  // 1. Lead card (Ansh, index 2): Visible alone with header initially
  // 2. Lucky (index 1): reveals first with delay
  // 3. Vedanshi (index 3): reveals second with delay
  // 4. Shristi (index 0): reveals third with delay
  // 5. Suyash (index 4): reveals fourth with delay
  // 6. CTA button & subtext: reveals at the end

  // Lucky (Card index 1)
  const luckyOpacity = useTransform(smoothProgress, [0.15, 0.30], [0, 1])
  const luckyY = useTransform(smoothProgress, [0.15, 0.30], [45, 0])
  const luckyScale = useTransform(smoothProgress, [0.15, 0.30], [0.90, 1])

  // Vedanshi (Card index 3)
  const vedanshiOpacity = useTransform(smoothProgress, [0.30, 0.45], [0, 1])
  const vedanshiY = useTransform(smoothProgress, [0.30, 0.45], [45, 0])
  const vedanshiScale = useTransform(smoothProgress, [0.30, 0.45], [0.90, 1])

  // Shristi (Card index 0)
  const shrishtiOpacity = useTransform(smoothProgress, [0.45, 0.60], [0, 1])
  const shrishtiY = useTransform(smoothProgress, [0.45, 0.60], [45, 0])
  const shrishtiScale = useTransform(smoothProgress, [0.45, 0.60], [0.90, 1])

  // Suyash (Card index 4)
  const suyashOpacity = useTransform(smoothProgress, [0.60, 0.75], [0, 1])
  const suyashY = useTransform(smoothProgress, [0.60, 0.75], [45, 0])
  const suyashScale = useTransform(smoothProgress, [0.60, 0.75], [0.90, 1])

  // CTA Button & Subtext
  const ctaOpacity = useTransform(smoothProgress, [0.78, 0.90], [0, 1])
  const ctaY = useTransform(smoothProgress, [0.78, 0.90], [30, 0])

  // On mobile, skip the sticky pinning — just render normally
  if (!isDesktop) {
    return (
      <section
        className="relative w-full pt-20 pb-28 sm:pt-24 sm:pb-36 overflow-hidden bg-transparent text-white"
      >
        {/* Background ambient elements */}
        <div className="pointer-events-none absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0052FF]/20 rounded-full blur-[130px] z-0" />
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-cyan-500/8 rounded-full blur-[160px] z-0" />
        <div className="pointer-events-none absolute top-[330px] sm:top-[360px] inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a388a]/30 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          {/* Header */}
          <div className="relative text-center flex flex-col items-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="absolute top-2 left-2 sm:-left-6 pointer-events-none">
              <FourPointStar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
            </div>
            <div className="absolute top-3 -right-2 sm:-right-6 pointer-events-none">
              <FourPointStar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
            </div>
            <div className="absolute -bottom-4 left-8 sm:left-2 pointer-events-none">
              <FourPointStar className="w-3.5 h-3.5 text-cyan-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            </div>
            <div className="absolute -bottom-3 right-6 sm:right-2 pointer-events-none">
              <FourPointStar className="w-3.5 h-3.5 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]" />
            </div>
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.24em] text-[#6d82df] uppercase select-none mb-3">
              THE PEOPLE BEHIND PERSONA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-[0_0_35px_rgba(255,255,255,0.12)] text-center">
              Meet the people behind Persona.
            </h2>
            <p className="text-[#96a9db] text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-3.5 max-w-2xl">
              Different voices. One shared goal: helping you find yours.
            </p>
          </div>

          {/* Cards (mobile: horizontal scroll, no scroll-driven animation) */}
          <div ref={mobileScrollRef} className="w-full overflow-x-auto scrollbar-none py-6 px-2 sm:px-4">
            <div className="flex items-center justify-start -space-x-3 sm:-space-x-4 min-w-max mx-auto max-w-6xl pb-4 snap-x snap-mandatory">
              {TEAM_MEMBERS.map((member, index) => {
                const isCenter = member.featured
                return (
                  <div
                    key={member.id}
                    data-featured={isCenter ? 'true' : undefined}
                    className={`snap-center shrink-0 flex flex-col items-center ${
                      member.desktopYOffset
                    } ${isCenter ? 'z-30' : index === 1 || index === 3 ? 'z-20' : 'z-10'}`}
                  >
                    <div
                      className={`group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-[24px] sm:rounded-[26px] bg-[#030718] transition-all duration-300 ease-out cursor-pointer ${
                        isCenter
                          ? 'w-[235px] sm:w-[250px] min-h-[395px] sm:min-h-[405px] border-2 border-[#0052FF] shadow-[0_0_35px_rgba(0,82,255,0.6),0_0_12px_rgba(0,82,255,0.4)] hover:shadow-[0_0_48px_rgba(0,82,255,0.85)] hover:-translate-y-2'
                          : `w-[210px] sm:w-[225px] min-h-[350px] sm:min-h-[360px] border border-[#122354] hover:border-[#0052FF]/70 shadow-lg hover:shadow-[0_12px_35px_rgba(0,82,255,0.35)] hover:-translate-y-2.5 ${member.rotationClass}`
                      }`}
                    >
                      <div className="w-full h-[235px] sm:h-[248px] rounded-[18px] sm:rounded-[20px] overflow-hidden relative flex items-end justify-center bg-gradient-to-b from-[#0e35b0] via-[#08227e] to-[#04134e]">
                        <div className={`absolute ${member.starPos} z-20 pointer-events-none`}>
                          <FourPointStar
                            className="w-3.5 h-3.5"
                            style={{
                              color: member.starColor,
                              filter: `drop-shadow(0 0 6px ${member.starColor})`,
                            }}
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
                          <div className="w-36 h-36 rounded-full border border-blue-400/30 scale-110" />
                          <div className="w-22 h-22 rounded-full border border-blue-300/25 absolute" />
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 absolute top-4 left-6 shadow-[0_0_6px_#38bdf8]" />
                          <div className="w-1 h-1 rounded-full bg-white absolute top-10 right-8 opacity-60" />
                          <div className="w-1 h-1 rounded-full bg-blue-300 absolute bottom-8 left-4 opacity-50" />
                        </div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full object-cover object-top relative z-10 pointer-events-none ${member.imgClass || ''}`}
                        />
                      </div>
                      <div className="text-center pt-3.5 pb-2 px-1 w-full select-none">
                        <h3 className="font-bold text-base sm:text-lg text-white tracking-tight leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#7E90B8] font-normal mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center text-center mt-10 sm:mt-14">
            <Link
              to="/team"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0042D0] text-white font-semibold text-sm sm:text-base shadow-[0_0_26px_rgba(0,82,255,0.6)] hover:shadow-[0_0_36px_rgba(0,82,255,0.85)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <span>View whole team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <span className="text-xs sm:text-sm text-[#7184B0] font-normal mt-3.5">
              Confidence grows faster in good company.
            </span>
          </div>
        </div>
      </section>
    )
  }

  // =========================================================================
  // DESKTOP: Sticky-pinned scroll-driven reveal
  // The outer wrapper is tall (300vh) to provide enough scroll distance.
  // The inner section is sticky so it stays pinned while user scrolls through
  // the wrapper, giving all 5 cards time to fully animate in.
  // =========================================================================
  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      <section
        className="sticky top-0 w-full h-screen overflow-hidden bg-transparent text-white flex items-center justify-center"
      >

        {/* =========================================================================
            BACKGROUND AMBIENT LIGHTING & HORIZON DIVISION
            ========================================================================= */}
        
        {/* Central Blue Radial Glow behind Featured Card */}
        <div className="pointer-events-none absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0052FF]/20 rounded-full blur-[130px] z-0" />
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-cyan-500/8 rounded-full blur-[160px] z-0" />

        {/* Subtle Background Horizontal Horizon Line behind card tops */}
        <div className="pointer-events-none absolute top-[330px] sm:top-[360px] lg:top-[390px] inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a388a]/40 to-transparent z-0" />

        {/* Faint Background Orbital Arcs behind Cards */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 600"
            className="w-full max-w-[1450px] h-auto opacity-35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main Curved Orbital Lines */}
            <ellipse
              cx="720"
              cy="410"
              rx="640"
              ry="220"
              stroke="url(#orbitGradient)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            <ellipse
              cx="720"
              cy="435"
              rx="520"
              ry="180"
              stroke="url(#orbitGradient)"
              strokeWidth="1"
            />
            <ellipse
              cx="720"
              cy="380"
              rx="360"
              ry="130"
              stroke="url(#orbitGradient)"
              strokeWidth="0.8"
              strokeDasharray="2 4"
            />

            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0052FF" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0052FF" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          {/* =========================================================================
              1. HEADER AREA
              ========================================================================= */}
          <div className="relative text-center flex flex-col items-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">

            {/* Decorative Sparkle: Warm Yellow Left */}
            <div className="absolute top-2 left-2 sm:-left-6 pointer-events-none">
              <FourPointStar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
            </div>

            {/* Decorative Sparkle: Cyan Top-Right */}
            <div className="absolute top-3 -right-2 sm:-right-6 pointer-events-none">
              <FourPointStar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
            </div>

            {/* Decorative Sparkle: Cyan Lower-Left */}
            <div className="absolute -bottom-4 left-8 sm:left-2 pointer-events-none">
              <FourPointStar className="w-3.5 h-3.5 text-cyan-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            </div>

            {/* Decorative Sparkle: Purple Lower-Right */}
            <div className="absolute -bottom-3 right-6 sm:right-2 pointer-events-none">
              <FourPointStar className="w-3.5 h-3.5 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]" />
            </div>

            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.24em] text-[#6d82df] uppercase select-none mb-3">
              THE PEOPLE BEHIND PERSONA
            </span>

            {/* Main Heading - Single Line on Desktop */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-[0_0_35px_rgba(255,255,255,0.12)] text-center">
              Meet the people behind Persona.
            </h2>

            {/* Supporting Copy */}
            <p className="text-[#96a9db] text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-3.5 max-w-2xl">
              Different voices. One shared goal: helping you find yours.
            </p>

          </div>


          {/* =========================================================================
              2. TEAM CARDS / ORBIT AREA (Scroll-Driven Sequential Reveal)
              ========================================================================= */}
          <div className="w-full overflow-visible py-6 px-2 sm:px-4">
            <div className="flex items-center justify-center -space-x-3 xl:-space-x-2 min-w-0 mx-auto max-w-6xl pb-4">
              
              {TEAM_MEMBERS.map((member, index) => {
                const isCenter = member.featured

                // Assign scroll-driven animation styles per card index
                let motionStyle = {}
                if (index === 2) {
                  // Lead Card (Ansh): Always visible as anchor
                  motionStyle = { opacity: 1, y: 0 }
                } else if (index === 1) {
                  // Lucky (Card 2): Reveals first
                  motionStyle = { opacity: luckyOpacity, y: luckyY, scale: luckyScale }
                } else if (index === 3) {
                  // Vedanshi (Card 4): Reveals second
                  motionStyle = { opacity: vedanshiOpacity, y: vedanshiY, scale: vedanshiScale }
                } else if (index === 0) {
                  // Shristi (Card 1): Reveals third
                  motionStyle = { opacity: shrishtiOpacity, y: shrishtiY, scale: shrishtiScale }
                } else if (index === 4) {
                  // Suyash (Card 5): Reveals fourth
                  motionStyle = { opacity: suyashOpacity, y: suyashY, scale: suyashScale }
                }

                return (
                  <motion.div
                    key={member.id}
                    style={motionStyle}
                    className={`shrink-0 flex flex-col items-center ${
                      member.desktopYOffset
                    } ${isCenter ? 'z-30' : index === 1 || index === 3 ? 'z-20' : 'z-10'}`}
                  >
                    {/* Card Outer Container */}
                    <div
                      className={`group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-[24px] sm:rounded-[26px] bg-[#030718] transition-all duration-300 ease-out cursor-pointer ${
                        isCenter
                          ? 'w-[235px] sm:w-[250px] lg:w-[245px] xl:w-[260px] min-h-[395px] sm:min-h-[405px] lg:min-h-[415px] border-2 border-[#0052FF] shadow-[0_0_35px_rgba(0,82,255,0.6),0_0_12px_rgba(0,82,255,0.4)] hover:shadow-[0_0_48px_rgba(0,82,255,0.85)] hover:-translate-y-2'
                          : `w-[210px] sm:w-[225px] lg:w-[218px] xl:w-[230px] min-h-[350px] sm:min-h-[360px] lg:min-h-[372px] border border-[#122354] hover:border-[#0052FF]/70 shadow-lg hover:shadow-[0_12px_35px_rgba(0,82,255,0.35)] hover:-translate-y-2.5 ${member.rotationClass}`
                      }`}
                    >
                      
                      {/* Top Portrait Zone */}
                      <div className="w-full h-[235px] sm:h-[248px] lg:h-[262px] rounded-[18px] sm:rounded-[20px] overflow-hidden relative flex items-end justify-center bg-gradient-to-b from-[#0e35b0] via-[#08227e] to-[#04134e]">
                        
                        {/* Internal Star Accent Top-Right */}
                        <div className={`absolute ${member.starPos} z-20 pointer-events-none`}>
                          <FourPointStar
                            className="w-3.5 h-3.5"
                            style={{
                              color: member.starColor,
                              filter: `drop-shadow(0 0 6px ${member.starColor})`,
                            }}
                          />
                        </div>

                        {/* Internal Faint Constellation / Orbit Arcs inside Portrait */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
                          <div className="w-36 h-36 rounded-full border border-blue-400/30 scale-110" />
                          <div className="w-22 h-22 rounded-full border border-blue-300/25 absolute" />
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 absolute top-4 left-6 shadow-[0_0_6px_#38bdf8]" />
                          <div className="w-1 h-1 rounded-full bg-white absolute top-10 right-8 opacity-60" />
                          <div className="w-1 h-1 rounded-full bg-blue-300 absolute bottom-8 left-4 opacity-50" />
                        </div>


                        {/* Member Photo (No shrink on hover) */}
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full object-cover object-top relative z-10 pointer-events-none ${member.imgClass || ''}`}
                        />
                      </div>

                      {/* Bottom Details Zone */}
                      <div className="text-center pt-3.5 pb-2 px-1 w-full select-none">
                        <h3 className="font-bold text-base sm:text-lg text-white tracking-tight leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#7E90B8] font-normal mt-0.5">
                          {member.role}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )
              })}

            </div>
          </div>


          {/* =========================================================================
              3. BOTTOM CTA AREA (Reveals at the end of scroll)
              ========================================================================= */}
          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="flex flex-col items-center text-center mt-10 sm:mt-14"
          >
            {/* CTA Button */}
            <Link
              to="/team"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0042D0] text-white font-semibold text-sm sm:text-base shadow-[0_0_26px_rgba(0,82,255,0.6)] hover:shadow-[0_0_36px_rgba(0,82,255,0.85)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <span>View whole team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Subtext */}
            <span className="text-xs sm:text-sm text-[#7184B0] font-normal mt-3.5">
              Confidence grows faster in good company.
            </span>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
