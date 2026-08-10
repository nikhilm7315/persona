import Card from "./NewParagraph"
function EventQueueCard({ id, title, description, src, image }) {
  const bgImage = src || image
  const shortDescription = description
    ? description.length > 80
      ? `${description.substring(0, 80)}...`
      : description
    : ''

  return (
    <div className="group relative w-full max-w-[320px] aspect-[2/3] rounded-[28px] overflow-hidden shadow-xl shadow-black/30 transition-all duration-700 hover:shadow-black/50 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer scroll-mt-24">
      
      {/* Background Image */}
      {bgImage && (
        <img 
          src={bgImage} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end">
        
        {/* Glassmorphic Fade - Bottom 35% */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/95 via-black/70 to-transparent backdrop-blur-md" />
        
        {/* Text Content */}
        <div className="relative z-10 p-6">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-light font-league-spartan text-white tracking-tight leading-tight">
              {title}
            </h2>
          </div>
          
          <div className="text-xs font-light font-poppins text-white/80 leading-relaxed max-w-[90%]">
            {shortDescription}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventQueueCard
