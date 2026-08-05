import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import NavigationLink from '../ui/NavigationLink'
import { NAV_LINKS } from '../../constants/navLinks'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-transparent relative z-50">
      <nav className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-14 py-6">
        <Logo />

        <div className="hidden lg:flex items-center gap-7 xl:gap-10">
          {NAV_LINKS.map((link) => (
            <NavigationLink key={link.path} to={link.path} icon={link.icon} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="compact">Join Now</Button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 flex flex-col gap-4 bg-[#161028]/95 border border-[#3A3153] backdrop-blur-lg rounded-2xl p-6 lg:hidden z-50">
            {NAV_LINKS.map((link) => (
              <NavigationLink key={link.path} to={link.path} icon={link.icon} label={link.label} />
            ))}
            <Button variant="compact" className="w-full">Join Now</Button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
