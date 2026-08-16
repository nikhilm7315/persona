import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import { NAV_LINKS } from '../../constants/navLinks'

export default function Navbar({ onOpenJoinModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent pt-3 pb-1 px-4 sm:px-10 lg:px-14">
      <div className="w-full flex items-center justify-between relative">

        {/* Left: Persona Logo (Far left edge) */}
        <Link to="/" className="flex items-center shrink-0 hover:opacity-95 transition-opacity z-10">
          <Logo size="nav" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
        </Link>

        {/* Center: Mathematically Centered Floating Navy Navigation Pill (No active color effect) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 px-8 py-3 rounded-full bg-[#081033]/85 border border-[#1b2659] backdrop-blur-xl shadow-lg shadow-black/40 absolute left-1/2 -translate-x-1/2 z-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-xs lg:text-sm font-medium text-[#F4F4F6] hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Vibrant Blue CTA Pill Button (Far right edge) */}
        <div className="hidden lg:flex items-center shrink-0 z-10">
          <a
            href="https://chat.whatsapp.com/GPB1v8QqoS78xD8h98ZhlB?s=sw&p=a&ilr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold text-xs lg:text-sm text-white px-7 py-3 rounded-full bg-[#0052FF] hover:bg-[#0042D0] shadow-[0_0_22px_rgba(0,82,255,0.45)] hover:shadow-[0_0_32px_rgba(0,82,255,0.7)] transition-all duration-300 cursor-pointer active:scale-95"
          >
            Join Persona
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-3 rounded-full bg-[#081033]/90 border border-[#1b2659] text-white backdrop-blur-xl shadow-lg z-10 ml-auto flex items-center justify-center active:scale-95"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>

      {/* Fullscreen Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 min-h-screen w-full bg-[#010626]/98 backdrop-blur-3xl z-50 flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto animate-fade-in">

          {/* Top Header Row in Fullscreen Menu */}
          <div className="flex items-center justify-between w-full pb-6 border-b border-white/10">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <Logo size="nav" className="h-12 w-auto object-contain" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 transition-all active:scale-95"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Display Typography Navigation Links */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 my-auto py-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight transition-all duration-300 ${isActive ? 'text-[#0052FF] translate-x-2' : 'text-white hover:text-[#0052FF] hover:translate-x-2'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="pt-6 border-t border-white/10">
            <a
              href="https://chat.whatsapp.com/GPB1v8QqoS78xD8h98ZhlB?s=sw&p=a&ilr=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(0,82,255,0.6)] transition-all active:scale-95 inline-flex items-center justify-center text-center"
            >
              Join Persona
            </a>
          </div>

        </div>
      )}
    </header>
  )
}
