import personaLogo from '../../assets/persona-logo.png'

function Logo({ size = 'nav', className = '' }) {
  const sizeStyles =
    size === 'hero'
      ? 'w-64 h-64 md:w-80 md:h-80'
      : 'w-[82px] h-[73px]'

  return (
    <img
      src={personaLogo}
      alt="Persona - The Personality Grooming Club"
      className={`${sizeStyles} object-contain ${className}`}
    />
  )
}

export default Logo