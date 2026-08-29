function EventQueueCard({ id, title, description, src, image, isActive, onClick }) {
  const bgImage = src || image
  const shortDescription = description
    ? description.length > 80
      ? `${description.substring(0, 80)}...`
      : description
    : ''

  return (
    <div
      onClick={onClick}
      className={`group relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] aspect-[2/3] rounded-[24px] md:rounded-[28px] overflow-hidden transition-all duration-500 cursor-pointer scroll-mt-24 ${isActive
        ? 'ring-2 ring-[#00b4d8]/80 shadow-[0_0_35px_rgba(0,180,216,0.3)] scale-[1.02] opacity-100'
        : 'shadow-xl shadow-black/30 opacity-75 hover:opacity-100 hover:shadow-black/50 hover:-translate-y-1 hover:scale-[1.01]'
        }`}
    >
      {/* Background Image */}
      {bgImage && (
        <img
          src={bgImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      )}

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end">

        {/* Glassmorphic Fade - Bottom 35% */}
        <div className="absolute bottom-0 left-0 right-0 h-[38%] bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-md" />

        {/* Text Content */}
        <div className="relative z-10 p-6">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-[25px] font-light font-league-spartan text-white tracking-tight leading-tight">
              {title}
            </h2>
          </div>

          <div className="text-[15px] font-light font-poppins text-white/80 leading-relaxed max-w-[95%]">
            {shortDescription}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventQueueCard
