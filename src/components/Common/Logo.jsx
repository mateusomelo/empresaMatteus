import clsx from 'clsx'
import { company } from '../../data/company.js'
import markImage from '../../assets/logos/matteus-mark.webp'

function Monogram({ size = 'md' }) {
  const dimensions = size === 'sm' ? 'size-9' : 'size-11'

  return (
    <span className={clsx('relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-ink-950 shadow-glow', dimensions)}>
      <span className="absolute -inset-[3px] rounded-[1.1rem] border border-neon-400/30" aria-hidden="true" />
      <img
        src={markImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-125 object-cover"
      />
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
              OLIVEIRA DE MELO
            </span>
          )}
        </span>
      )}
    </span>
  )
}
