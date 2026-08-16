import React from 'react';

const Title = ({
  title = "Unlock Your Potential",
  subtitle = null,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto ${className}`}>
      <h2 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mb-4 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans font-normal text-neutral-300 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Title
