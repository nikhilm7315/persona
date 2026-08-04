import { useState } from 'react'

/**
 * Fallback SVG component displayed when an image fails to load or is missing.
 */
function ImageFallbackPlaceholder({ title }) {
  return (
    <div className="w-full h-full min-h-[260px] md:min-h-[360px] bg-gradient-to-br from-[#1E1535] via-[#2A1D4A] to-[#161028] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="w-16 h-16 rounded-2xl bg-[#9B5DE8]/10 border border-[#9B5DE8]/30 flex items-center justify-center mb-3 text-[#9B5DE8] shadow-lg shadow-[#9B5DE8]/10">
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

/**
 * Modular EventImage component with loading skeleton, error fallback handling,
 * and custom per-image fit positioning.
 */
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
          // overflow: hidden,
          objectPosition: imagePosition,
        }}
      />
    </div>
  )
}

export default EventImage
