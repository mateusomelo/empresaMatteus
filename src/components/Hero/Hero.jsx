import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, ChevronDown, Sparkles } from 'lucide-react'
import Container from '../Common/Container.jsx'
import Button from '../Common/Button.jsx'
import HeroBackground from './HeroBackground.jsx'
import { whatsappLink, defaultWhatsappMessage } from '../../data/company.js'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <HeroBackground />

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
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
            Tecnologia que <span className="text-gradient">impulsiona</span> empresas.
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-base leading-relaxed text-graphite-200 sm:text-lg lg:text-xl">
            Somos especialistas em Infraestrutura de TI, Redes Corporativas, Datacenter, Telefonia, CFTV, Controle de
            Acesso, Automação Residencial e Comercial, Desenvolvimento de Sistemas e Sites Profissionais.
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-2xl text-sm leading-relaxed text-graphite-400 sm:text-base">
            Projetamos, implantamos e mantemos soluções tecnológicas completas para empresas e residências, oferecendo
            qualidade, segurança, inovação e suporte especializado.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            <Button as="a" href="#servicos" variant="secondary" size="lg" className="!border-white/15 !bg-white/5 !text-white hover:!border-neon-400/50">
              Conhecer serviços
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex size-10 animate-bounce items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white"
      >
        <ChevronDown className="size-5" />
      </motion.a>
    </section>
  )
}
