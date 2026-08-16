import personaLogo from '../../assets/persona-logo.png'
import { cn } from '../../lib/utils'

function Logo({ size = 'nav', className = '' }) {
  const sizeStyles =
    size === 'hero'
      ? 'w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56'
      : 'w-[82px] h-[73px]'

  return (
    <img
      src={personaLogo}
      alt="Persona - The Personality Grooming Club"
      className={cn(sizeStyles, 'object-contain', className)}
    />
  )
}

export default Logo