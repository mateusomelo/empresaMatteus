import Container from '../Common/Container.jsx'
import Reveal from '../Common/Reveal.jsx'
import { technologies } from '../../data/technologies.js'

export default function Technologies() {
  const track = [...technologies, ...technologies]

  return (
    <section className="border-y border-graphite-100 bg-white py-12 dark:border-white/10 dark:bg-ink-950">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-graphite-400 dark:text-graphite-400">
            Stack e ferramentas que utilizamos no desenvolvimento
          </p>
        </Reveal>
      </Container>

      <div className="mask-fade-x relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {track.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="inline-flex shrink-0 items-center rounded-full border border-graphite-200 bg-graphite-100/50 px-5 py-2 text-sm font-medium text-graphite-500 dark:border-white/10 dark:bg-white/5 dark:text-graphite-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
