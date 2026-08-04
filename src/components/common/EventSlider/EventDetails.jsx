/**
 * Modular EventDetails component for rendering event metadata.
 */
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
        <h2 className="font-league-spartan font-bold text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] text-[#9B5DE8] leading-tight tracking-tight">
          {displayTitle}
        </h2>

        {/* Description */}
        {description && (
          <p className="font-league-spartan text-white/90 text-sm md:text-base leading-relaxed mt-1">
            {description}
          </p>
        )}

        {/* Date Pill */}
        {date && (
          <span className="inline-flex items-center border border-white/20 bg-white/5 rounded-full px-5 py-1.5 text-xs md:text-sm font-league-spartan font-medium text-white/80 tracking-wide mt-2">
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
            background: 'linear-gradient(90deg, #9B5DE8 0%, #5F43B2 100%)',
          }}
        >
          {buttonText}
        </button>
      ) : (
        <a
          href={registerHref}
          className="inline-block rounded-full px-8 py-2.5 font-league-spartan font-medium text-sm md:text-base text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center"
          style={{
            background: 'linear-gradient(90deg, #9B5DE8 0%, #5F43B2 100%)',
          }}
        >
          {buttonText}
        </a>
      )}
    </div>
  )
}

export default EventDetails
