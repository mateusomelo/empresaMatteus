import { company } from '../data/company.js'
import { services } from '../data/services.js'

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.brandName,
    legalName: company.legalName,
    description:
      'Soluções completas em tecnologia e serviços: infraestrutura de TI, redes corporativas, CFTV, automação e desenvolvimento de sistemas e sites — além de encanador, pintor, eletricista e reformas em geral.',
    url: company.siteUrl,
    image: `${company.siteUrl}${company.ogImage}`,
    telephone: `+${company.whatsappNumber}`,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: 'BR',
    },
    areaServed: `${company.city}, ${company.state}`,
    priceRange: '$$',
    sameAs: Object.values(company.social).filter(Boolean),
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
    })),
  }
}
