import Logo from "../ui/Logo"

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const QUICK_LINKS = [
  { label: 'Product', href: '#' },
  { label: 'Information', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Lift Media', href: '#' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/thepersonasoit/posts/?feedView=all', Icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/personasoit/?hl=en', Icon: InstagramIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
]

function Footer({
  phone = '+xxxxxxxxxxx',
  email = 'thepersonasoit@gmail.com',
}) {
  return (
    <footer className="relative overflow-hidden w-full mt-0 rounded-none px-6 sm:px-10 md:px-16 py-10 md:py-14 bg-persona-footer text-white font-league-spartan shadow-lg">
      {/* Background Glow */}
      <div className="footer-glow" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-16 relative z-10">
        {/* Left Column: Logo & Contact */}
        <div className="flex flex-col gap-3 min-w-[220px]">
          <Logo />
          <a
            href={`tel:${phone}`}
            className="font-medium text-lg text-white hover:text-persona-orange transition-colors mt-2"
          >
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-base text-white/90 hover:text-persona-orange transition-all"
          >
            {email}
          </a>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="min-w-[240px]">
          <h3 className="font-bold text-lg mb-5 text-white">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-white/80 hover:text-persona-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="max-w-7xl mx-auto border-white/25 my-8 relative z-10" />

      {/* Bottom Bar: Socials & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/80 relative z-10">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/40 hover:border-persona-orange hover:text-persona-orange hover:bg-white/5 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/80 text-center">
          &copy; {new Date().getFullYear()} The Persona SoIT. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
