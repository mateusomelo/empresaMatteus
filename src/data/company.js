/**
 * Dados centrais da empresa/marca.
 *
 * IMPORTANTE — ANTES DE PUBLICAR:
 * Os campos marcados com "// SUBSTITUIR" abaixo ainda contêm valores de
 * exemplo (e-mail, domínio e redes sociais) porque não foram fornecidos os
 * dados reais. Troque-os aqui — é o único lugar do projeto onde eles são
 * definidos, todo o site consome a partir daqui.
 */

const WHATSAPP_NUMBER = '5511985996532'
const IS_PLACEHOLDER_WHATSAPP = WHATSAPP_NUMBER === '5565912345678'

export const company = {
  legalName: 'Matteus Oliveira de Melo',
  brandName: 'Matteus Oliveira de Melo',
  shortName: 'Matteus',
  tagline: 'Conectando soluções, garantindo confiança.',
  documentId: '65.123.179', // Identificador informado (raiz de CNPJ) — confirmar/completar os 14 dígitos antes de publicar
  foundingYear: 2018,

  email: 'contato@matteustecnologia.com.br', // SUBSTITUIR: e-mail real de contato
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: '(11) 98599-6532',

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

export function whatsappLink(message) {
  const base = `https://wa.me/${company.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const defaultWhatsappMessage =
  'Olá! Vim pelo site e gostaria de solicitar um orçamento sem compromisso.'

if (import.meta.env.DEV && IS_PLACEHOLDER_WHATSAPP) {
  // eslint-disable-next-line no-console
  console.warn(
    '[matteus-tecnologia] O número de WhatsApp em src/data/company.js ainda é um valor de exemplo. Atualize antes de publicar o site.',
  )
}
