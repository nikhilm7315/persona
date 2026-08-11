import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import NavigationLink from '../ui/NavigationLink'
import { NAV_LINKS } from '../../constants/navLinks'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg border-b border-white/10 transition-all duration-200">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden lg:flex items-center gap-7 xl:gap-10">
          {NAV_LINKS.map((link) => (
            <NavigationLink key={link.path} to={link.path} label={link.label} />
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
          <div className="absolute top-full left-4 right-4 mt-2 flex flex-col gap-4 bg-[#010626]/80 border border-white/15 backdrop-blur-xl rounded-2xl p-6 lg:hidden z-50 shadow-xl">
            {NAV_LINKS.map((link) => (
              <NavigationLink key={link.path} to={link.path} label={link.label} />
            ))}
            <Button variant="compact" className="w-full">Join Now</Button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
