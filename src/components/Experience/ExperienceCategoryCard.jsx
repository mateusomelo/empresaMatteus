import GlassCard from '../Common/GlassCard.jsx'
import IconBadge from '../Common/IconBadge.jsx'
import Badge from '../Common/Badge.jsx'
import Reveal from '../Common/Reveal.jsx'

export default function ExperienceCategoryCard({ title, icon, skills, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <GlassCard className="h-full p-6 sm:p-7">
        <IconBadge icon={icon} />
        <h3 className="mt-4 text-lg font-semibold text-ink-950 dark:text-white">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </GlassCard>
    </Reveal>
  )
}
