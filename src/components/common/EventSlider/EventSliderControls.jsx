/**
 * Modular EventSliderControls component providing pagination indicator pills
 * and previous/next arrow buttons.
 */
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
          className="w-8 h-8 rounded-full bg-[#261B40] border border-white/10 text-white/70 hover:text-white hover:border-[#9B5DE8] hover:bg-[#5F43B2]/30 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
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
                ? 'w-8 bg-[#9B5DE8] shadow-[0_0_8px_rgba(155,93,232,0.6)]'
                : 'w-2.5 bg-[#5F43B2]/40 hover:bg-[#9B5DE8]/60'
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
          className="w-8 h-8 rounded-full bg-[#261B40] border border-white/10 text-white/70 hover:text-white hover:border-[#9B5DE8] hover:bg-[#5F43B2]/30 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
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

export default EventSliderControls
