import clsx from 'clsx'

export default function GlassCard({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag
      className={clsx(
        'group relative overflow-hidden rounded-2xl border border-graphite-100 bg-white shadow-sm shadow-ink-950/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neon-400/40 hover:shadow-xl hover:shadow-neon-500/10 dark:border-white/10 dark:bg-ink-800/60 dark:shadow-black/20 dark:hover:shadow-neon-400/10',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
