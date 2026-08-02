function Button({
  children,
  href,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'wide',
  className = '',
}) {
  const sizeStyles =
    variant === 'wide'
      ? 'w-full sm:w-[320px] h-[50px] px-8 py-3'
      : 'w-auto h-[42px] px-7 py-2'

  const styles = `
    btn-primary inline-flex items-center justify-center
    ${sizeStyles}
    rounded-full
    font-league-spartan font-medium text-base text-center text-white
    transition-all duration-200
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B5DE8]
    disabled:opacity-50 disabled:pointer-events-none
    ${className}
  `.trim().replace(/\s+/g, ' ')

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  )
}

export default Button