import { useState, useEffect, useCallback } from 'react'
import EventSlideCard from './EventSlider/EventSlideCard'
import EventSliderControls from './EventSlider/EventSliderControls'
import EventImage from './EventSlider/EventImage'
import EventDetails from './EventSlider/EventDetails'

// Import default local high quality image assets
import vichaarSangam from '../../assets/icons/vichaarSangam.jpg'
import linkedInWorkshop from '../../assets/icons/linkedInWorkshop.jpg'
import alumniInteraction from '../../assets/icons/alumniInteraction.jpg'
import speakoff from '../../assets/icons/speakoff.png'

const DEFAULT_EVENTS = [
  {
    id: 'vichaar-sangam',
    title: 'Vichaar Sangam',
    date: '28 May, 2025',
    description:
      'At Persona, we envision a generation of students who are not only academically sound but also confident, articulate, and self-aware individuals ready to thrive in any professional or social environment. Join us for a dynamic confluence of ideas!',
    image: vichaarSangam,
    imagePosition: 'center center',
    objectFit: 'cover',
    buttonText: 'Register Now',
  },
  {
    id: 'linkedin-workshop',
    title: 'LinkedIn Workshop & Soft Skills',
    date: '15 June, 2025',
    description:
      'Master public speaking, body language, and profile branding with top coordinators and industry leaders. Transform your professional presence and build unshakeable confidence.',
    image: linkedInWorkshop,
    imagePosition: 'center top',
    objectFit: 'cover',
    buttonText: 'Register Now',
  },
  {
    id: 'alumni-interaction',
    title: 'Alumni Interaction Evening',
    date: '10 July, 2025',
    description:
      'Gain real-world insights, career guidance, and interview strategies from distinguished alumni leading top tech global companies. Bridge campus learning with industry leadership.',
    image: alumniInteraction,
    imagePosition: 'center 30%',
    objectFit: 'cover',
    buttonText: 'Register Now',
  },
  {
    id: 'speak-off',
    title: 'Speak Off: Voice Your Vision',
    date: '20 August, 2025',
    description:
      'A high-energy celebration of debate, spontaneous expression, and confidence. Voice your vision, sharpen your critical thinking, and shine on stage.',
    image: speakoff,
    imagePosition: 'center center',
    objectFit: 'cover',
    buttonText: 'Register Now',
  },
]

/**
 * Modular EventSlider component.
 * Supports auto-play, custom events list, placeholder overrides,
 * keyboard accessibility, and image loading/error handling.
 */
function EventSlider({
  events = DEFAULT_EVENTS,
  placeholderImage = null,
  autoPlay = false,
  autoPlayInterval = 5000,
  onSlideChange = null,
  onRegisterClick = null,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const safeEvents = Array.isArray(events) && events.length > 0 ? events : DEFAULT_EVENTS
  const totalSlides = safeEvents.length
  const currentEvent = safeEvents[currentIndex] || safeEvents[0]

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev === 0 ? totalSlides - 1 : prev - 1
      if (onSlideChange) onSlideChange(nextIndex, safeEvents[nextIndex])
      return nextIndex
    })
  }, [totalSlides, onSlideChange, safeEvents])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev === totalSlides - 1 ? 0 : prev + 1
      if (onSlideChange) onSlideChange(nextIndex, safeEvents[nextIndex])
      return nextIndex
    })
  }, [totalSlides, onSlideChange, safeEvents])

  const handleSelectSlide = useCallback(
    (index) => {
      setCurrentIndex(index)
      if (onSlideChange) onSlideChange(index, safeEvents[index])
    },
    [onSlideChange, safeEvents]
  )

  // Auto-play timer with pause on hover
  useEffect(() => {
    if (!autoPlay || isHovered || totalSlides <= 1) return

    const timer = setInterval(() => {
      handleNext()
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [autoPlay, autoPlayInterval, isHovered, totalSlides, handleNext])

  return (
    <div
      className="w-full max-w-5xl mx-auto flex flex-col items-center gap-2 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Modular Slide Card */}
      <EventSlideCard
        event={currentEvent}
        placeholderImage={placeholderImage}
        onRegister={
          onRegisterClick ? () => onRegisterClick(currentEvent) : undefined
        }
      />

      {/* Modular Slider Controls & Indicators */}
      <EventSliderControls
        total={totalSlides}
        currentIndex={currentIndex}
        onSelectSlide={handleSelectSlide}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  )
}

// Re-export subcomponents for modular usage
export { EventImage, EventDetails, EventSliderControls, EventSlideCard }
export default EventSlider
