import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Button from "@/components/ui/Button"
import Title from "../components/ui/Title"
import TeamSection from '../components/Home/TeamSection'
import EventHome from "../components/Home/EventHome"

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 gap-16">
      
      {/* 1. Headline Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* 2. Existing Hero Section */}
      <div className="flex flex-col items-center gap-8 animate-fade-in-up">
        <Title
          title="Unlock Your Potential"
          subtitle="Join SOIT RGPV's leading personality grooming club where confidence meets communication, and learning transforms into leadership."
        />
        <Button className='w-60' variant="wide">Join Our Community</Button>
      </div>

      {/* 3. Our Vision Section */}
      <div className="flex flex-col items-center gap-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <Title
          title="Our Vision"
          subtitle="At Persona, we envision a generation of students who are not only academically sound but also confident, articulate, and self-aware individuals ready to thrive in any professional or social environment."
        />
      </div>

      {/* 4. Meet Our Team Section */}
      <div className="w-full animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <TeamSection />
      </div>

      {/* 5. Never Ending Events Section */}
      <div>
        <EventHome />
      </div>

    </div>
  )
}

export default Home
