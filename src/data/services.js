import {
  Server,
  Network,
  Cable,
  Phone,
  Camera,
  Fingerprint,
  Wifi,
  Rows3,
  SlidersHorizontal,
  Globe,
  AppWindow,
  CloudUpload,
  Headset,
  Droplet,
  PaintRoller,
  Lightbulb,
  HardHat,
} from 'lucide-react'
import svcRedes from '../assets/iso/svc-redes.jpg'
import svcCftv from '../assets/iso/svc-cftv.jpg'
import svcAcesso from '../assets/iso/svc-acesso.jpg'
import svcAutomacao from '../assets/iso/svc-automacao.jpg'
import svcEletrica from '../assets/iso/svc-eletrica.jpg'
import svcDev from '../assets/iso/svc-dev.jpg'

/**
 * Serviços sem "contactChannel" usam o WhatsApp/e-mail de tecnologia
 * (company.whatsappNumber/email) por padrão. Os marcados com
 * contactChannel: 'general' usam o contato de Soluções Completas
 * (company.whatsappGeneralNumber/generalEmail) — ver src/data/company.js.
 */
export const services = [
  {
    id: 'infraestrutura-ti',
    image: svcRedes,
    title: 'Infraestrutura de TI',
    icon: Server,
    description:
      'Projetos completos de redes corporativas, cabeamento estruturado, servidores, switches, roteadores e Wi-Fi empresarial.',
    highlights: ['Servidores', 'Switches', 'Roteadores', 'Wi-Fi empresarial'],
  },
  {
    id: 'redes-corporativas',
    title: 'Redes Corporativas',
    icon: Network,
    description: 'Projeto, implantação e manutenção de redes de alta disponibilidade.',
    highlights: ['Alta disponibilidade', 'Projeto e implantação', 'Manutenção contínua'],
  },
  {
    id: 'cabeamento-estruturado',
    title: 'Cabeamento Estruturado',
    icon: Cable,
    description: 'Infraestrutura de cabeamento organizada, testada e certificada, do ponto de rede ao patch panel.',
    highlights: ['Cat5e / Cat6 / Cat6A', 'Organização', 'Patch Panel', 'Certificação'],
  },
  {
    id: 'telefonia',
    title: 'Telefonia',
    icon: Phone,
    description: 'Visita técnica, reparo e manutenção de sistemas de telefonia e interfone.',
    highlights: ['Reparo de cabos', 'Troca de trechos', 'Diagnóstico de falhas', 'Manutenção preventiva'],
  },
  {
    id: 'cftv',
    image: svcCftv,
    title: 'CFTV',
    icon: Camera,
    description: 'Instalação e configuração de câmeras, DVR e NVR com monitoramento remoto.',
    highlights: ['Instalação de câmeras', 'DVR / NVR', 'Monitoramento remoto', 'Expansão de sistemas'],
  },
  {
    id: 'controle-de-acesso',
    image: svcAcesso,
    title: 'Controle de Acesso',
    icon: Fingerprint,
    description: 'Soluções de biometria, RFID, fechaduras e reconhecimento facial para segurança de ambientes.',
    highlights: ['Biometria', 'Cartão RFID', 'Reconhecimento facial', 'Catracas e cancelas'],
  },
  {
    id: 'redes-wifi',
    title: 'Redes Wi-Fi',
    icon: Wifi,
    description: 'Instalação de Access Points e redes mesh com cobertura otimizada para ambientes corporativos.',
    highlights: ['Access Points', 'TP-Link Omada', 'Redes Mesh', 'Otimização de cobertura'],
  },
  {
    id: 'organizacao-de-rack',
    title: 'Organização de Rack',
    icon: Rows3,
    description: 'Padronização, identificação e etiquetagem de racks para operação limpa e sem falhas.',
    highlights: ['Padronização', 'Identificação', 'Etiquetagem', 'Limpeza'],
  },
  {
    id: 'configuracao-de-equipamentos',
    image: svcAutomacao,
    title: 'Configuração de Equipamentos',
    icon: SlidersHorizontal,
    description: 'Configuração avançada de switches, roteadores, firewall, VLAN e VPN.',
    highlights: ['Switches e roteadores', 'Firewall', 'VLAN', 'VPN'],
  },
  {
    id: 'desenvolvimento-de-sites',
    image: svcDev,
    title: 'Desenvolvimento de Sites',
    icon: Globe,
    description: 'Sites institucionais, landing pages, catálogos e portais modernos e responsivos.',
    highlights: ['Landing Pages', 'Sites institucionais', 'Catálogos', 'Portais'],
  },
  {
    id: 'desenvolvimento-de-sistemas',
    title: 'Desenvolvimento de Sistemas',
    icon: AppWindow,
    description: 'Sistemas personalizados, painéis administrativos e dashboards sob medida.',
    highlights: ['Sistemas personalizados', 'Painéis administrativos', 'Dashboards', 'Automação de processos'],
  },
  {
    id: 'hospedagem-e-deploy',
    title: 'Hospedagem e Deploy',
    icon: CloudUpload,
    description: 'Hospedagem em VPS, configuração de domínio, SSL e deploy contínuo com monitoramento.',
    highlights: ['VPS e domínio', 'SSL', 'Nginx / PM2', 'Railway / Netlify'],
  },
  {
    id: 'suporte-tecnico',
    title: 'Suporte Técnico',
    icon: Headset,
    description: 'Atendimento remoto e presencial, com manutenção preventiva, corretiva e contratos mensais.',
    highlights: ['Atendimento remoto e presencial', 'Manutenção preventiva/corretiva', 'Contratos mensais'],
  },
  {
    id: 'encanador',
    title: 'Encanador',
    icon: Droplet,
    description: 'Reparos, instalações hidráulicas e caça-vazamento com tecnologia para residências e empresas.',
    highlights: ['Instalações hidráulicas', 'Reparos em tubos e registros', 'Caça-vazamento com tecnologia'],
    contactChannel: 'general',
  },
  {
    id: 'pintor-profissional',
    title: 'Pintor Profissional',
    icon: PaintRoller,
    description: 'Pintura lisa, grafiato e acabamento fino para deixar qualquer ambiente com cara de novo.',
    highlights: ['Pintura lisa', 'Grafiato', 'Tira grafiato', 'Acabamento fino e profissional'],
    contactChannel: 'general',
  },
  {
    id: 'eletricista',
    image: svcEletrica,
    title: 'Eletricista',
    icon: Lightbulb,
    description: 'Instalação de quadros, infraestrutura elétrica nova e tomadas inteligentes com segurança.',
    highlights: ['Instalação de quadros', 'Infraestrutura elétrica nova', 'Tomadas inteligentes'],
    contactChannel: 'general',
  },
  {
    id: 'reformas-em-geral',
    title: 'Reformas em Geral',
    icon: HardHat,
    description: 'Soluções completas de reforma para residências, escritórios, salas comerciais e apartamentos.',
    highlights: ['Residências', 'Escritórios', 'Salas comerciais', 'Apartamentos'],
    contactChannel: 'general',
  },
]
