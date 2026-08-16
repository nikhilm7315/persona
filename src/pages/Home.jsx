import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import TeamSection from '../components/Home/TeamSection'
import EventHome from "../components/Home/EventHome"
import PreFooter from '../components/Home/PreFooter'

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center w-full">
      
      {/* 1. Full-Width Headline Hero Section with edge-to-edge ambient grid */}
      <HeroSection />

      {/* Main Home Sections Container */}
      <div className="flex flex-col items-center justify-center px-4 py-2 sm:p-8 gap-8 sm:gap-16 w-full max-w-7xl mx-auto">
        {/* 2. Meet Our Team Section */}
        <div className="w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <TeamSection />
        </div>

        {/* 3. Never Ending Events Section */}
        <div className="w-full">
          <EventHome />
        </div>
      </div>

      {/* 4. Full-Width PreFooter Section seamlessly attached to Footer */}
      <PreFooter />

    </div>
  )
}

export default Home
