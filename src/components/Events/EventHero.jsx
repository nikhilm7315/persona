import { motion } from 'framer-motion'
import { Sparkles, Calendar, Users, Trophy, ArrowDown, Mic } from 'lucide-react'

export default function EventHero({ onScrollToEvents }) {

  const handleScrollClick = () => {
    if (onScrollToEvents) {
      onScrollToEvents()
    } else {
      const el = document.getElementById('events-queue')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Background ambient lighting orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-[#0052ff]/15 rounded-t-xl rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-12 left-10 w-72 h-72 bg-[#00b4d8]/10 rounded-full blur-[100px] -z-10" />
      <div className="pointer-events-none absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      {/* Grid Pattern with Radial Mask */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full -z-10 bg-grid-pattern opacity-30"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 20%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 20%, transparent 80%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2 mb-6"
        >
          <h1 className="font-league-spartan font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] drop-shadow-[0_0_35px_rgba(255,255,255,0.1)]">
            Never Ending{' '}
            <span className="gradient-text drop-shadow-[0_0_45px_rgba(0,180,216,0.45)]">
              Events
            </span>
          </h1>
          <p className="text-white/40 text-xs sm:text-sm font-poppins uppercase tracking-[0.25em] font-light">
            Where Voices Collide &amp; Confidence Ignites
          </p>
        </motion.div>

        {/* Subtitle Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-[#B4BEDB] text-sm sm:text-base md:text-lg font-light font-poppins leading-relaxed mb-8 sm:mb-10 text-center"
        >
          From high-voltage extempore battles and parliamentary discussions to transformative
          placement workshops and alumni connects. Explore every milestone that defines our community.
        </motion.p>

        {/* CTA Button & Quick Action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <button
            onClick={handleScrollClick}
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#0052ff] hover:bg-[#0042d0] text-white text-sm font-medium font-poppins transition-all duration-300 shadow-[0_0_25px_rgba(0,82,255,0.45)] hover:shadow-[0_0_35px_rgba(0,82,255,0.7)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore Event Queue</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>

          <a
            href="https://chat.whatsapp.com/GPB1v8QqoS78xD8h98ZhlB?s=sw&p=a&ilr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/85 hover:text-white border border-white/10 text-sm font-light font-poppins transition-all duration-300 backdrop-blur-sm hover:border-white/20"
          >
            <span>Join Upcoming Session</span>
          </a>
        </motion.div>


      </div>
    </section>
  )
}
