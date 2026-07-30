/**
 * Dados centrais da empresa/marca.
 *
 * A empresa atende duas frentes com contatos próprios:
 * - "tech": Infraestrutura de TI, Redes, CFTV, Automação, Telefonia, Fibra
 *   Óptica, Desenvolvimento de Sistemas/Sites (marca "Matteus Oliveira de Melo").
 * - "general": Encanador, Pintor, Eletricista e Reformas em Geral (marca
 *   "Soluções Completas").
 * O formulário de orçamento escolhe automaticamente o WhatsApp certo com
 * base no serviço selecionado (veja src/data/services.js: contactChannel).
 *
 * IMPORTANTE — ANTES DE PUBLICAR:
 * Os campos marcados com "// SUBSTITUIR" abaixo ainda contêm valores de
 * exemplo (domínio e redes sociais) porque não foram fornecidos os dados
 * reais. Troque-os aqui — é o único lugar do projeto onde eles são
 * definidos, todo o site consome a partir daqui.
 */

export const company = {
  legalName: 'Matteus Oliveira de Melo',
  brandName: 'Matteus Oliveira de Melo',
  shortName: 'Matteus',
  tagline: 'Conectando soluções, garantindo confiança.',
  documentId: '65.123.179', // Identificador informado (raiz de CNPJ) — confirmar/completar os 14 dígitos antes de publicar
  foundingYear: 2018,

  // Tecnologia: TI, Redes, CFTV, Automação, Telefonia, Fibra, Sistemas e Sites
  email: 'matteusoliveirati@gmail.com',
  whatsappNumber: '5511985996532',
  whatsappDisplay: '(11) 98599-6532',

  // Serviços residenciais/prediais: Encanador, Pintor, Eletricista, Reformas
  generalServicesBrand: 'Soluções Completas',
  generalEmail: 'solucaaocompleta.servicos@gmail.com',
  whatsappGeneralNumber: '5511983954984',
  whatsappGeneralDisplay: '(11) 98395-4984',

  city: 'São Paulo', // Inferido do DDD 11 do WhatsApp — corrija se não for a cidade correta
  state: 'SP',
  country: 'Brasil',

  siteUrl: 'https://www.matteustecnologia.com.br', // SUBSTITUIR pelo domínio definitivo
  ogImage: '/og-cover.png',

  social: {
    linkedin: null, // SUBSTITUIR por uma URL real para o ícone aparecer no rodapé
    github: null, // SUBSTITUIR por uma URL real para o ícone aparecer no rodapé
    instagram: null,
  },
}

export function whatsappLink(message, number = company.whatsappNumber) {
  const base = `https://wa.me/${number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const defaultWhatsappMessage =
  'Olá! Vim pelo site e gostaria de solicitar um orçamento sem compromisso.'
