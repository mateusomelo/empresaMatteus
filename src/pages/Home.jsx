import { lazy, Suspense } from 'react'
import SEO from '../components/Common/SEO.jsx'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'
import Experience from '../components/Experience/Experience.jsx'
import Technologies from '../components/Technologies/Technologies.jsx'
import Differentials from '../components/Differentials/Differentials.jsx'
import Timeline from '../components/Timeline/Timeline.jsx'
import ServiceAreas from '../components/ServiceAreas/ServiceAreas.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'
import Contact from '../components/Contact/Contact.jsx'
import FinalCTA from '../components/Contact/FinalCTA.jsx'
import { getLocalBusinessSchema } from '../utils/schema.js'

// Carregados sob demanda: dependem do Swiper (chunk pesado), todos abaixo da dobra —
// mantê-los fora do caminho crítico do primeiro render reduz o atraso do LCP do Hero.
const Services = lazy(() => import('../components/Services/Services.jsx'))
const SpecializedServices = lazy(() => import('../components/Services/SpecializedServices.jsx'))
const Portfolio = lazy(() => import('../components/Portfolio/Portfolio.jsx'))
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials.jsx'))

export default function Home() {
  return (
    <>
      <SEO
        title="Tecnologia e serviços que impulsionam empresas e residências"
        description="Infraestrutura de TI, Redes Corporativas, CFTV, Automação e Desenvolvimento de Sistemas — além de Encanador, Pintor, Eletricista e Reformas em Geral. Soluções completas em um único contato."
        path="/"
        schema={getLocalBusinessSchema()}
      />
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Suspense fallback={null}>
        <Services />
        <SpecializedServices />
      </Suspense>
      <Differentials />
      <Timeline />
      <ServiceAreas />
      <Suspense fallback={null}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  )
}
