import React from 'react'

const Title = ({
  title = "Unlock Your Potential",
  subtitle = "Join SOIT RGPV's leading personality grooming club where confidence meets communication, and learning transforms into leadership."
}) => {
  return (
  
    <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
      <h1 className="font-league-spartan font-bold text-5xl md:text-6xl lg:text-[74px] text-[#9B5DE8] leading-tight tracking-tight mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="font-league-spartan font-normal text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
export default Title
