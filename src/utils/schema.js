import { company } from '../data/company.js'
import { services } from '../data/services.js'

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName,
    description:
      'Soluções completas em tecnologia: infraestrutura de TI, redes corporativas, datacenter, telefonia, CFTV, controle de acesso, automação e desenvolvimento de sistemas e sites.',
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
