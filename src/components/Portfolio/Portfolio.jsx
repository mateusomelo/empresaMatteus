import { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import Reveal from '../Common/Reveal.jsx'
import PortfolioFilters from './PortfolioFilters.jsx'
import PortfolioCard from './PortfolioCard.jsx'
import { portfolioCategories, portfolioItems } from '../../data/portfolio.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredItems = useMemo(
    () => (activeCategory === 'todos' ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)),
    [activeCategory],
  )

  // Com poucos itens (ex.: uma categoria filtrada com 1-3 projetos), o modo
  // "loop" do Swiper não tem o que repetir e gera aviso no console — só
  // habilita loop/autoplay quando há slides o bastante para valer a pena.
  const canLoop = filteredItems.length > 3

  return (
    <section id="portfolio" className="section-padding relative">
      <Container>
        <SectionHeading
          eyebrow="Nosso trabalho"
          title="Portfólio"
          description="Uma vitrine dos tipos de projeto que executamos. Novas fotos e estudos de caso reais serão adicionados continuamente."
        />

        <div className="mt-12 flex justify-center">
          <PortfolioFilters categories={portfolioCategories} active={activeCategory} onChange={setActiveCategory} />
        </div>

        <Reveal delay={0.1}>
          <Swiper
            // A troca de categoria muda drasticamente o conjunto de slides;
            // remontar via key evita estados internos "presos" do Swiper
            // (índice, paginação) de uma lista de tamanho diferente.
            key={activeCategory}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1.05}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={canLoop ? { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
            loop={canLoop}
            className="!px-1 !pb-12 !pt-2 mt-10"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id} className="h-auto pb-2">
                <PortfolioCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </Container>
    </section>
  )
}
