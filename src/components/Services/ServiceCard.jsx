import { Check } from 'lucide-react'
import GlassCard from '../Common/GlassCard.jsx'
import IconBadge from '../Common/IconBadge.jsx'

export default function ServiceCard({ title, icon: Icon, image, description, highlights }) {
  return (
    <GlassCard className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-neon-600/40">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <div className="bg-grid absolute inset-0 opacity-20" />
            <Icon className="relative size-12 text-neon-300/80" strokeWidth={1.5} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <IconBadge icon={Icon} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">{description}</p>
        <ul className="mt-5 space-y-2 border-t border-graphite-100 pt-5 dark:border-white/10">
          {highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-graphite-500 dark:text-graphite-300">
              <Check className="mt-0.5 size-4 shrink-0 text-neon-500 dark:text-neon-300" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  )
}
