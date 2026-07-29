import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, MessageSquareHeart } from 'lucide-react'
import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import GlassCard from '../Common/GlassCard.jsx'
import { testimonials } from '../../data/testimonials.js'

import 'swiper/css'
import 'swiper/css/pagination'

function EmptyState() {
  return (
    <Reveal>
      <GlassCard className="mx-auto max-w-xl p-10 text-center">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-500/15 to-cyan-glow/10 text-neon-500 dark:text-neon-300">
          <MessageSquareHeart className="size-7" />
        </span>
        <p className="mt-5 text-base font-medium text-ink-950 dark:text-white">
          Em breve, os relatos de quem já confiou em nossos projetos aparecerão aqui.
        </p>
        <p className="mt-2 text-sm text-graphite-500 dark:text-graphite-300">
          Estamos reunindo as primeiras avaliações reais de clientes atendidos.
        </p>
      </GlassCard>
    </Reveal>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding relative bg-graphite-100/40 dark:bg-ink-900/40">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem nossos clientes"
          description="Avaliações reais de empresas e clientes residenciais atendidos."
        />

        <div className="mt-14">
          {testimonials.length === 0 ? (
            <EmptyState />
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="!pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto pb-2">
                  <GlassCard className="flex h-full flex-col p-7">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: testimonial.rating ?? 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-5 border-t border-graphite-100 pt-4 dark:border-white/10">
                      <p className="text-sm font-semibold text-ink-950 dark:text-white">{testimonial.name}</p>
                      <p className="text-xs text-graphite-400">{testimonial.role}</p>
                    </div>
                  </GlassCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </Container>
    </section>
  )
}
