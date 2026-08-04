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
      ? 'w-full sm:w-[350px] h-[50px] px-8 py-[13px] sm:px-[71px]'
      : 'w-auto h-12 px-8 py-3'

  const styles = `
    btn-primary inline-flex items-center justify-center
    ${sizeStyles}
    rounded-full
    font-league-spartan font-semibold text-base leading-6 tracking-[-0.01em] text-center text-white
    transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_8px_25px_rgba(155,93,232,0.4)]
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