import clsx from 'clsx'

const variants = {
  primary:
    'bg-gradient-to-r from-neon-500 to-cyan-glow text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 focus-visible:outline-neon-300',
  secondary:
    'glass text-ink-900 dark:text-white border-graphite-200 dark:border-white/15 hover:-translate-y-0.5 hover:border-neon-400/50',
  ghost:
    'text-ink-900 dark:text-white hover:bg-graphite-100/70 dark:hover:bg-white/5',
  whatsapp:
    // Verde mais escuro que o brand "#25D366" oficial: o oficial não passa em contraste
    // AA (1.98:1) com texto branco; este atinge ~4.8:1, mantendo a identidade "WhatsApp".
    'bg-[#0E8345] text-white shadow-lg shadow-[#0E8345]/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0E8345]/40 focus-visible:outline-[#0E8345]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className,
  children,
  href,
  external,
  ...props
}) {
  const classes = clsx(
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out whitespace-nowrap',
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="size-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="size-4 shrink-0" aria-hidden="true" />}
    </>
  )

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    )
  }

  if (typeof as !== 'string') {
    const Component = as
    return (
      <Component className={classes} {...props}>
        {content}
      </Component>
    )
  }

  return (
    <button type={props.type ?? 'button'} className={classes} {...props}>
      {content}
    </button>
  )
}
