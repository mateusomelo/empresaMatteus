import clsx from 'clsx'

const sizes = {
  sm: 'size-9',
  md: 'size-12',
  lg: 'size-14',
}

const iconSizes = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
}

export default function IconBadge({ icon: Icon, size = 'md', className }) {
  return (
    <span
      className={clsx(
        'inline-flex shrink-0 items-center justify-center rounded-xl border border-neon-500/20 bg-gradient-to-br from-neon-500/15 to-cyan-glow/10 text-neon-500 dark:text-neon-300',
        sizes[size],
        className,
      )}
    >
      <Icon className={iconSizes[size]} aria-hidden="true" />
    </span>
  )
}
