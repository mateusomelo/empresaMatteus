import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
import Container from '../Common/Container.jsx'
import Button from '../Common/Button.jsx'
import HeroBackground from './HeroBackground.jsx'
import { whatsappLink, defaultWhatsappMessage } from '../../data/company.js'
import heroRack from '../../assets/iso/hero-rack.jpg'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '150+', label: 'Projetos entregues' },
  { value: '2.4k', label: 'Pontos de rede e CFTV' },
  { value: '24/7', label: 'Suporte emergencial' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-neon-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon-300 backdrop-blur-sm"
            >
              <Sparkles className="size-3.5" />
              Tecnologia &bull; Elétrica &bull; Hidráulica &bull; Reformas
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-7 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
            >
              Infraestrutura <span className="text-gradient">impecável</span> para sua empresa.
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-base leading-relaxed text-graphite-200 sm:text-lg">
              Do cabeamento estruturado, redes e CFTV à automação, elétrica, hidráulica e reformas. Projetamos,
              implantamos e mantemos tudo com uma única equipe de confiança.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button as="a" href="#contato" variant="primary" size="lg" icon={ArrowUpRight} iconPosition="right">
                Solicitar orçamento
              </Button>
              <Button
                as="a"
                href={whatsappLink(defaultWhatsappMessage)}
                external
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
              >
                Falar no WhatsApp
              </Button>
            </motion.div>

            <motion.dl variants={item} className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-white">{stat.value}</dd>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-graphite-400">{stat.label}</p>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div aria-hidden className="absolute -inset-10 rounded-full bg-neon-500/15 blur-3xl" />
            <motion.img
              src={heroRack}
              width={1024}
              height={1024}
              loading="eager"
              alt="Render isométrico de rack de servidores com cabeamento organizado"
              className="relative aspect-square w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute bottom-5 left-5 hidden rounded-xl border border-neon-400/30 bg-ink-950/80 p-4 backdrop-blur-xl md:block">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neon-300">Carga da rede</p>
              <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-neon-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
