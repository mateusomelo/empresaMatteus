import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import ExperienceCategoryCard from './ExperienceCategoryCard.jsx'
import { infrastructureExperience, developmentExperience } from '../../data/experience.js'

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding relative bg-graphite-100/40 dark:bg-ink-900/40">
      <Container>
        <SectionHeading
          eyebrow="Nossa experiência"
          title="Experiência prática em tecnologia"
          description="Da infraestrutura física ao desenvolvimento de software: conhecimento aplicado em projetos reais, do campo ao código."
        />

        <div className="mt-16">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neon-500 dark:text-neon-300">
              Infraestrutura & Campo
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructureExperience.map((category, index) => (
              <ExperienceCategoryCard key={category.id} delay={index * 0.06} {...category} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neon-500 dark:text-neon-300">
              Desenvolvimento Web
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developmentExperience.map((category, index) => (
              <ExperienceCategoryCard key={category.id} delay={index * 0.06} {...category} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
