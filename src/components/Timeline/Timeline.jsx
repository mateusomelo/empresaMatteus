import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import { workflowSteps } from '../../data/timeline.js'

export default function Timeline() {
  return (
    <section id="como-trabalhamos" className="section-padding relative bg-graphite-100/40 dark:bg-ink-900/40">
      <Container>
        <SectionHeading
          eyebrow="Nosso processo"
          title="Como trabalhamos"
          description="Um processo claro e estruturado, do primeiro contato ao suporte contínuo após a entrega."
        />

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-neon-500/60 via-graphite-200 to-transparent dark:via-white/10 lg:block" />

          <ol className="grid gap-6 lg:grid-cols-3">
            {workflowSteps.map(({ id, title, description, icon: Icon }, index) => (
              <Reveal key={id} delay={(index % 3) * 0.08}>
                <li className="relative flex gap-4 rounded-2xl border border-graphite-100 bg-white p-6 dark:border-white/10 dark:bg-ink-800/60 lg:flex-col lg:gap-5">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                    <span className="relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-500 to-cyan-glow text-sm font-bold text-white shadow-glow">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon className="size-5 text-neon-500 dark:text-neon-300 lg:hidden" />
                  </div>
                  <div>
                    <div className="hidden items-center gap-2 lg:flex">
                      <Icon className="size-5 text-neon-500 dark:text-neon-300" />
                    </div>
                    <h3 className="mt-0 text-base font-semibold text-ink-950 dark:text-white lg:mt-3">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">
                      {description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
