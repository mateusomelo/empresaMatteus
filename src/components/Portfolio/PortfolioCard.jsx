import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Badge from '../Common/Badge.jsx'
import GlassCard from '../Common/GlassCard.jsx'
import GithubIcon from '../Common/icons/GithubIcon.jsx'

export default function PortfolioCard({ item }) {
  const { title, description, technologies, icon: Icon, image, projectUrl, githubUrl } = item

  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
      <GlassCard className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-neon-600/40">
          {image ? (
            <img src={image} alt={title} loading="lazy" className="size-full object-cover" />
          ) : (
            <>
              <div className="bg-grid absolute inset-0 opacity-20" />
              <Icon className="relative size-12 text-neon-300/80" strokeWidth={1.5} />
            </>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {(projectUrl || githubUrl) && (
            <div className="mt-5 flex items-center gap-4 border-t border-graphite-100 pt-4 dark:border-white/10">
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-neon-500 hover:text-neon-600 dark:text-neon-300"
                >
                  Ver Projeto <ArrowUpRight className="size-4" />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-graphite-500 hover:text-ink-950 dark:text-graphite-300 dark:hover:text-white"
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  )
}
