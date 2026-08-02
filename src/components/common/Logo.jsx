import { Link } from 'react-router-dom'
import personaLogo from '../../assets/icons/persona-logo.png'

function Logo() {
  return (
    <Link to="/" className="flex-shrink-0">
      <img
        src={personaLogo}
        alt="Persona - The Personality Grooming Club"
        className="w-[82px] h-[73px] object-contain"
      />
    </Link>
  )
}

export default Logo