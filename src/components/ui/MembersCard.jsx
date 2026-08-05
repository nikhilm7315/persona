
function MembersCard({ name, role, image, bgImage, isLead = false, rotationClass = '', imgClass = '' }) {
  return (
    <div className={`flex flex-col items-center gap-3 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer ${rotationClass}`}>
      {/* Card Box */}
      <div
        className={`w-[180px] h-[240px] sm:w-[200px] sm:h-[270px] rounded-2xl overflow-hidden flex items-end justify-center shadow-lg hover:shadow-[0_12px_30px_rgba(0,180,216,0.45)] transition-shadow duration-300 relative ${
          isLead ? 'bg-[#B5A575]' : 'bg-persona-purple-dark'
        }`}
        style={
          bgImage
            ? {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover object-bottom relative z-10 ${imgClass}`}
        />
      </div>

      {/* Details below Card */}
      <div className="text-center font-league-spartan">
        <h3 className="font-bold text-lg sm:text-xl text-white leading-tight">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-white/70 font-medium">
          {role}</p>
      </div>
    </div>
  )
}

export default MembersCard
