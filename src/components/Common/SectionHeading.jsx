import clsx from 'clsx'
import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={clsx(
        'max-w-3xl',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={clsx(
              'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest',
              light
                ? 'border-neon-400/30 bg-white/5 text-neon-300'
                : 'border-neon-500/30 bg-neon-500/5 text-neon-600 dark:text-neon-300',
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={clsx(
            'mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl',
            light && 'text-white',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={clsx(
              'mt-5 text-base leading-relaxed sm:text-lg',
              light ? 'text-graphite-300' : 'text-graphite-500 dark:text-graphite-300',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
