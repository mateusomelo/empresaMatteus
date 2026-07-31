import clsx from 'clsx'
import { company } from '../../data/company.js'

function Monogram({ size = 'md' }) {
  const dimensions = size === 'sm' ? 'size-9' : 'size-11'

  return (
    <span className={clsx('relative inline-flex shrink-0 items-center justify-center', dimensions)}>
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ink-900 via-ink-800 to-neon-600 shadow-glow" />
      <span className="absolute -inset-[3px] rounded-[1.1rem] border border-neon-400/30" aria-hidden="true" />
      <svg viewBox="0 0 24 24" className="relative size-[55%] text-white" fill="none" aria-hidden="true">
        <path
          d="M3 19V5.6c0-.9 1.1-1.35 1.74-.71L12 12.15l7.26-7.26c.64-.64 1.74-.19 1.74.71V19"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.15V19"
          stroke="url(#logo-gradient)"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="logo-gradient" x1="12" y1="12" x2="12" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F8BFF" />
            <stop offset="1" stopColor="#38E8FF" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  )
}

export default function Logo({ variant = 'full', light = false, className }) {
  return (
    <span className={clsx('inline-flex items-center gap-2.5', className)}>
      <Monogram size={variant === 'compact' ? 'sm' : 'md'} />
      {variant !== 'mark' && (
        <span className="flex flex-col leading-none">
          <span
            className={clsx(
              'font-display text-base font-bold tracking-tight sm:text-lg',
              light ? 'text-white' : 'text-ink-950 dark:text-white',
            )}
          >
            {company.shortName.toUpperCase()}
          </span>
          {variant === 'full' && (
            <span className="text-gradient mt-0.5 hidden font-display text-[10px] font-semibold tracking-[0.22em] sm:inline">
              {company.brandSubtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
