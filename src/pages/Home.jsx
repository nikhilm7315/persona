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

      {/* 2. Full-Width Orbital Meet Our Team Section */}
      <TeamSection />

      {/* 3. Main Home Content: Never Ending Events Section */}
      <div className="flex flex-col items-center justify-center px-4 py-8 sm:py-16 w-full max-w-7xl mx-auto">
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
