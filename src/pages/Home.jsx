import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import TeamSection from '../components/Home/TeamSection'
import EventHome from "../components/Home/EventHome"

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 sm:p-8 gap-8 sm:gap-16 w-full">
      
      {/* 1. Headline Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* 2. Meet Our Team Section */}
      <div className="w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <TeamSection />
      </div>

      {/* 3. Never Ending Events Section */}
      <div>
        <EventHome />
      </div>

    </div>
  )
}

export default Home
