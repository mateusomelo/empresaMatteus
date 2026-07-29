import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputDir = path.resolve(__dirname, '../public')
mkdirSync(outputDir, { recursive: true })

const width = 1200
const height = 630

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#05070d" />
      <stop offset="55%" stop-color="#0b0f1a" />
      <stop offset="100%" stop-color="#132a6b" />
    </linearGradient>
    <linearGradient id="accentText" x1="0" y1="0" x2="${width}" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4F8BFF" />
      <stop offset="100%" stop-color="#38E8FF" />
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2F6BFF" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#2F6BFF" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38E8FF" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#38E8FF" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M 46 0 L 0 0 0 46" fill="none" stroke="rgba(148,163,184,0.12)" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <rect width="${width}" height="${height}" fill="url(#grid)" />
  <circle cx="150" cy="80" r="320" fill="url(#glow1)" />
  <circle cx="1080" cy="560" r="360" fill="url(#glow2)" />

  <!-- Monogram -->
  <g transform="translate(90, 84)">
    <rect width="76" height="76" rx="20" fill="#0f1830" stroke="#4F8BFF" stroke-opacity="0.4" stroke-width="1.5" />
    <path d="M17 58V25.5c0-2 2.42-3 3.85-1.58L38 41l17.15-17.08C56.58 22.5 59 23.5 59 25.5V58"
      fill="none" stroke="#ffffff" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M38 41V58" fill="none" stroke="url(#accentText)" stroke-width="5.6" stroke-linecap="round" />
  </g>

  <text x="184" y="118" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#ffffff">MATTEUS</text>
  <text x="184" y="148" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="4" fill="url(#accentText)">OLIVEIRA DE MELO</text>

  <text x="90" y="290" font-family="Arial, sans-serif" font-size="21" font-weight="600" letter-spacing="3" fill="#7fb0ff">
    INFRAESTRUTURA &#8226; REDES &#8226; AUTOMAÇÃO &#8226; SOFTWARE
  </text>

  <text x="88" y="360" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff">Tecnologia que</text>
  <text x="88" y="432" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="url(#accentText)">impulsiona empresas.</text>

  <text x="90" y="500" font-family="Arial, sans-serif" font-size="24" fill="#97a0b3">
    Infraestrutura de TI, Redes, Datacenter, CFTV, Automação e Desenvolvimento de Sistemas.
  </text>

  <rect x="88" y="546" width="1024" height="1.5" fill="rgba(255,255,255,0.12)" />
  <text x="90" y="590" font-family="Arial, sans-serif" font-size="19" fill="#6b7488">www.matteustecnologia.com.br</text>
</svg>
`

await sharp(Buffer.from(svg)).png().toFile(path.join(outputDir, 'og-cover.png'))

console.log('OG cover image generated at public/og-cover.png')
