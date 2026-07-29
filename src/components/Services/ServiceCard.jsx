import { Check } from 'lucide-react'
import GlassCard from '../Common/GlassCard.jsx'
import IconBadge from '../Common/IconBadge.jsx'
import Reveal from '../Common/Reveal.jsx'

export default function ServiceCard({ title, icon, description, highlights, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <GlassCard className="flex h-full flex-col p-7">
        <IconBadge icon={icon} size="lg" />
        <h3 className="mt-5 text-lg font-semibold text-ink-950 dark:text-white">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">{description}</p>
        <ul className="mt-5 space-y-2 border-t border-graphite-100 pt-5 dark:border-white/10">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-graphite-500 dark:text-graphite-300">
              <Check className="mt-0.5 size-4 shrink-0 text-neon-500 dark:text-neon-300" />
              {highlight}
            </li>
          ))}
        </ul>
      </GlassCard>
    </Reveal>
  )
}
