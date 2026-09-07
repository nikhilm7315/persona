import { useState, useEffect, useCallback } from 'react'
function ImageFallbackPlaceholder({ title }) {
  return (
    <div className="w-full h-full min-h-[260px] md:min-h-[360px] bg-gradient-to-br from-[#001280] via-[#010626] to-[#0B080A] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="w-16 h-16 rounded-2xl bg-persona-purple/10 border border-persona-purple/30 flex items-center justify-center mb-3 text-persona-purple shadow-lg shadow-persona-purple/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
      </div>
      <span className="font-league-spartan text-white/70 text-sm font-medium tracking-wide">
        {title || 'Event Image'}
      </span>
    </div>
  )
}

function EventImage({
  src,
  image,
  img,
  alt = 'Event image',
  placeholderImage,
  imagePosition = 'center',
  objectFit = 'cover',
  className = '',
}) {
  const resolvedSrc = placeholderImage || image || src || img
  const [prevSrc, setPrevSrc] = useState(resolvedSrc)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Reset loading & error state during render if src changes
  if (prevSrc !== resolvedSrc) {
    setPrevSrc(resolvedSrc)
    setLoading(true)
    setHasError(false)
  }

  if (!resolvedSrc || hasError) {
    return <ImageFallbackPlaceholder title={alt} />
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Loading Skeleton Indicator */}
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#261B40] via-[#3A2D5C] to-[#261B40] animate-pulse z-10" />
      )}

      {/* Main Image */}
      <img
        key={resolvedSrc}
        src={resolvedSrc}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setHasError(true)
        }}
        className={`w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          objectFit: objectFit,
          objectPosition: imagePosition,
        }}
      />
    </div>
  )
}

function EventDetails({
  title,
  heading,
  description,
  date,
  buttonText = 'Register Now',
  onRegister,
  registerHref = '#',
}) {
  const displayTitle = title || heading || 'Featured Event'

  return (
    <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-between items-start gap-6">
      <div className="flex flex-col items-start gap-4">
        {/* Dynamic Title */}
        <h2 className="font-sans font-extrabold text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] text-white leading-tight tracking-tight">
          {displayTitle}
        </h2>

        {/* Description */}
        {description && (
          <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed mt-1">
            {description}
          </p>
        )}

        {/* Date Pill */}
        {date && (
          <span className="inline-flex items-center border border-white/20 bg-white/5 rounded-full px-5 py-1.5 text-xs md:text-sm font-sans font-medium text-white/80 tracking-wide mt-2">
            {date}
          </span>
        )}
      </div>

      {/* Action / Register Button */}
      {onRegister ? (
        <button
          type="button"
          onClick={onRegister}
          className="rounded-full px-8 py-2.5 font-league-spartan font-medium text-sm md:text-base text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)',
          }}
        >
          {buttonText}
        </button>
      ) : (
        <a
          href={registerHref}
          className="inline-block rounded-full px-8 py-2.5 font-league-spartan font-medium text-sm md:text-base text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center"
          style={{
            background: 'linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)',
          }}
        >
          {buttonText}
        </a>
      )}
    </div>
  )
}

function EventSlideCard({ event, placeholderImage, onRegister }) {
  if (!event) return null

  const {
    title,
    heading,
    description,
    body,
    date,
    buttonText,
    registerHref,
    image,
    src,
    img,
    imagePosition,
    objectFit,
  } = event

  return (
    <div
      className="w-full bg-[#010626]/90 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_0_28px_rgba(0,119,182,0.4)] relative transition-all duration-300"
      style={{
        border: '1px solid transparent',
        backgroundImage:
          'linear-gradient(#010626, #010626), linear-gradient(90deg, #001280 0%, #0077b6 49.32%, #001280 66%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Left Side - Event Image Container */}
      <div className="w-full md:w-1/2 relative min-h-[260px] md:min-h-[360px] flex-shrink-0">
        <EventImage
          src={src}
          image={image}
          img={img}
          alt={title || heading || 'Event'}
          placeholderImage={placeholderImage}
          imagePosition={imagePosition}
          objectFit={objectFit}
          className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
        />
      </div>

      {/* Right Side - Details & Content */}
      <EventDetails
        title={title}
        heading={heading}
        description={description || body}
        date={date}
        buttonText={buttonText}
        registerHref={registerHref}
        onRegister={onRegister}
      />
    </div>
  )
}

function EventSliderControls({
  total = 0,
  currentIndex = 0,
  onSelectSlide,
  onPrev,
  onNext,
  className = '',
}) {
  if (total <= 1) return null

  return (
    <div className={`flex items-center justify-center gap-4 mt-4 ${className}`}>
      {/* Previous Arrow Button */}
      {onPrev && (
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous Slide"
          className="w-8 h-8 rounded-full bg-persona-card border border-white/10 text-white/70 hover:text-white hover:border-persona-purple hover:bg-persona-purple-dark/30 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Slide Indicator Dots */}
      <div className="flex items-center justify-center gap-2" aria-label="Event Slider Navigation">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectSlide && onSelectSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? 'w-8 bg-persona-purple shadow-[0_0_8px_rgba(0,180,216,0.6)]'
                : 'w-2.5 bg-persona-purple-dark/40 hover:bg-persona-purple/60'
            }`}
          />
        ))}
      </div>

      {/* Next Arrow Button */}
      {onNext && (
        <button
          type="button"
          onClick={onNext}
          aria-label="Next Slide"
          className="w-8 h-8 rounded-full bg-persona-card border border-white/10 text-white/70 hover:text-white hover:border-persona-purple hover:bg-persona-purple-dark/30 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  )
}


// Import default local high quality image assets
import vichaarSangam from '../../assets/EventImages/vichaarSangam.jpg'
import linkedInWorkshop from '../../assets/EventImages/linkedInWorkshop.jpg'
import alumniInteraction from '../../assets/EventImages/alumniInteraction.jpg'
import speakoff from '../../assets/EventImages/speakoff.png'

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
      className="w-full max-w-6xl mx-auto flex flex-col items-center gap-2 px-4"
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
