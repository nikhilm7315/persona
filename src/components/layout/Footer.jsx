import Logo from "../ui/Logo"

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
]

function Footer({
  phone = '+xxxxxxxxxxx',
  email = 'thepersonasoit@gmail.com',
}) {
  return (
    <footer className="relative overflow-hidden mx-4 md:mx-10 mb-10 mt-16 rounded-[28px] px-8 py-10 md:px-14 md:py-12 bg-persona-footer border border-white/10 text-white font-league-spartan shadow-lg">
      {/* Background Glow */}
      <div className="footer-glow" />

      {/* Absolute Sparkle Decoration */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 pointer-events-none select-none opacity-85 z-10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="#FF5A36" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-16 relative z-10">
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
      <hr className="border-white/25 my-8 relative z-10" />

      {/* Bottom Bar: Socials & Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/80 relative z-10">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
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
