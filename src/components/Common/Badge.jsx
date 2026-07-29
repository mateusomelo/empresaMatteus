import clsx from 'clsx'

export default function Badge({ children, className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border border-graphite-200 bg-graphite-100/60 px-3 py-1 text-xs font-medium text-graphite-500 dark:border-white/10 dark:bg-white/5 dark:text-graphite-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
