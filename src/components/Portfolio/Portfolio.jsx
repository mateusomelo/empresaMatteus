import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../Common/Container.jsx'
import SectionHeading from '../Common/SectionHeading.jsx'
import PortfolioFilters from './PortfolioFilters.jsx'
import PortfolioCard from './PortfolioCard.jsx'
import { portfolioCategories, portfolioItems } from '../../data/portfolio.js'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredItems = useMemo(
    () => (activeCategory === 'todos' ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)),
    [activeCategory],
  )

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

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  )
}
