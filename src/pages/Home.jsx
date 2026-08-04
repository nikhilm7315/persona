import Button from "../components/common/Button"
import Title from "../components/common/Title"
import Logo from '../components/common/Logo'
import EventSlider from '../components/common/EventSlider'
import TeamSection from '../components/Home/TeamSection'
import EventHome from "../components/Home/EventHome"

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 gap-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-8 animate-fade-in-up">
        <Title
          title="Unlock Your Potential"
          subtitle="Join SOIT RGPV's leading personality grooming club where confidence meets communication, and learning transforms into leadership."
        />
        <Button variant="wide">Join Our Community</Button>
      </div>

      {/* Logo Glow */}
      <div className="logo-glow animate-float flex justify-center my-12">
        <Logo size="hero" />
      </div>

      {/* Our Vision Section */}
      <div className="flex flex-col items-center gap-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <Title
          title="Our Vision"
          subtitle="At Persona, we envision a generation of students who are not only academically sound but also confident, articulate, and self-aware individuals ready to thrive in any professional or social environment."
        />
      </div>

      {/* Upcoming Events Section */}
      <div className="w-full flex flex-col items-center gap-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <Title title="Upcoming Events" />
        <EventSlider />
      </div>

      {/* Meet Our Team Section */}
      <div className="w-full animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <TeamSection />
      </div>

      {/*Never Ending Events Section*/}
      <div>
        <EventHome />
      </div>

    </div>
  )
}

export default Home