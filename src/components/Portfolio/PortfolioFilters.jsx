import clsx from 'clsx'

export default function PortfolioFilters({ categories, active, onChange }) {
  return (
    <div className="mask-fade-x flex snap-x gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filtrar portfólio por categoria">
      {categories.map((category) => {
        const isActive = active === category.id
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.id)}
            className={clsx(
              'shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
              isActive
                ? 'border-transparent bg-gradient-to-r from-neon-500 to-cyan-glow text-white shadow-glow'
                : 'border-graphite-200 text-graphite-500 hover:border-neon-400/40 hover:text-ink-950 dark:border-white/10 dark:text-graphite-300 dark:hover:text-white',
            )}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
