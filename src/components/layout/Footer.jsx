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
    <footer className="mx-4 md:mx-10 mb-10 mt-16 rounded-[28px] px-8 py-10 md:px-14 md:py-12 bg-gradient-to-b from-[#A28AE5] to-[#B6A6EB] text-white font-league-spartan shadow-lg">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-16">
        {/* Left Column: Logo & Contact */}
        <div className="flex flex-col gap-3 min-w-[220px]">
          <Logo />
          <a
            href={`tel:${phone}`}
            className="font-medium text-lg text-white hover:opacity-90 transition-opacity mt-2"
          >
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-base text-white/90 hover:underline transition-all"
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
                className="text-base text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/25 my-8" />

      {/* Bottom Bar: Socials & Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/80">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/40 hover:bg-white/15 transition-colors"
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
