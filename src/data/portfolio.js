import {
  Network,
  Rows3,
  Camera,
  Phone,
  Home,
  Fingerprint,
  Globe,
  AppWindow,
  Server,
  Cable,
  Droplet,
  PaintRoller,
  Lightbulb,
  HardHat,
} from 'lucide-react'
import projDatacenter from '../assets/iso/proj-datacenter.jpg'
import projAutomacao from '../assets/iso/proj-automacao.jpg'
import projAcesso from '../assets/iso/proj-acesso.jpg'
import svcCorporativa from '../assets/iso/svc-corporativa.jpg'
import svcRack from '../assets/iso/svc-rack.jpg'
import svcCftv from '../assets/iso/svc-cftv.jpg'
import svcTelefonia from '../assets/iso/svc-telefonia.jpg'
import svcDev from '../assets/iso/svc-dev.jpg'
import svcSistemas from '../assets/iso/svc-sistemas.jpg'
import svcCabeamento from '../assets/iso/svc-cabeamento.jpg'
import svcHidraulica from '../assets/iso/svc-hidraulica.jpg'
import svcPintura from '../assets/iso/svc-pintura.jpg'
import svcEletrica from '../assets/iso/svc-eletrica.jpg'
import svcReformas from '../assets/iso/svc-reformas.jpg'

export const portfolioCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'redes', label: 'Redes' },
  { id: 'rack', label: 'Rack' },
  { id: 'cftv', label: 'CFTV' },
  { id: 'telefonia', label: 'Telefonia' },
  { id: 'automacao', label: 'Automação' },
  { id: 'controle-acesso', label: 'Controle de acesso' },
  { id: 'sites', label: 'Sites' },
  { id: 'sistemas', label: 'Sistemas' },
  { id: 'datacenter', label: 'Datacenter' },
  { id: 'cabeamento', label: 'Cabeamento' },
  { id: 'hidraulica', label: 'Hidráulica' },
  { id: 'pintura', label: 'Pintura' },
  { id: 'eletrica', label: 'Elétrica' },
  { id: 'reformas', label: 'Reformas' },
]

/**
 * Cada item representa o tipo de projeto executado na categoria.
 * Campos "image", "projectUrl" e "githubUrl" ficam null até que fotos e
 * links reais de projetos entregues sejam adicionados — os botões
 * correspondentes só aparecem no card quando esses valores existem.
 */
export const portfolioItems = [
  {
    id: 'rede-corporativa-alta-disponibilidade',
    category: 'redes',
    icon: Network,
    title: 'Rede corporativa de alta disponibilidade',
    description:
      'Implantação de rede corporativa segmentada por VLAN, com redundância de links e monitoramento ativo.',
    technologies: ['VLAN', 'Switches gerenciáveis', 'Firewall'],
    image: svcCorporativa,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'organizacao-rack-telecom',
    category: 'rack',
    icon: Rows3,
    title: 'Organização de rack de telecomunicações',
    description: 'Padronização, identificação e certificação de um rack completo de telecomunicações.',
    technologies: ['Patch Panel', 'Certificação', 'Etiquetagem'],
    image: svcRack,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'monitoramento-cftv-ip',
    category: 'cftv',
    icon: Camera,
    title: 'Monitoramento CFTV com câmeras IP',
    description: 'Projeto de câmeras IP com gravação em NVR e acesso remoto via aplicativo.',
    technologies: ['Câmeras IP', 'NVR', 'Acesso remoto'],
    image: svcCftv,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'central-telefonica-corporativa',
    category: 'telefonia',
    icon: Phone,
    title: 'Central telefônica corporativa',
    description: 'Instalação e manutenção de sistema de telefonia com passagem de cabos e testes de linha.',
    technologies: ['Telefonia IP', 'Cabeamento', 'Testes de linha'],
    image: svcTelefonia,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'automacao-residencial-inteligente',
    category: 'automacao',
    icon: Home,
    title: 'Automação residencial inteligente',
    description: 'Controle de iluminação, portões e climatização integrados em um único aplicativo.',
    technologies: ['Automação residencial', 'Sensores', 'Integração via app'],
    image: projAutomacao,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'controle-acesso-biometrico',
    category: 'controle-acesso',
    icon: Fingerprint,
    title: 'Controle de acesso biométrico',
    description: 'Implantação de controle de acesso por biometria e cartão RFID em ambiente corporativo.',
    technologies: ['Biometria', 'RFID', 'Controladoras'],
    image: projAcesso,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'site-institucional-performance',
    category: 'sites',
    icon: Globe,
    title: 'Site institucional de alta performance',
    description: 'Desenvolvimento de site institucional responsivo com foco em performance e SEO.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    image: svcDev,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'painel-administrativo-processos',
    category: 'sistemas',
    icon: AppWindow,
    title: 'Painel administrativo de processos',
    description: 'Sistema de gestão interna com dashboards, permissões e controle de usuários.',
    technologies: ['React', 'Node.js', 'API REST'],
    image: svcSistemas,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'estruturacao-sala-servidores',
    category: 'datacenter',
    icon: Server,
    title: 'Estruturação de sala de servidores',
    description: 'Organização de datacenter com energia redundante, climatização e rack padronizado.',
    technologies: ['Servidores', 'Rack', 'Energia redundante'],
    image: projDatacenter,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'cabeamento-estruturado-cat6',
    category: 'cabeamento',
    icon: Cable,
    title: 'Cabeamento estruturado Cat6',
    description: 'Lançamento, organização e certificação de pontos de rede em cabeamento Cat6.',
    technologies: ['Cat6', 'Certificação', 'Patch Panel'],
    image: svcCabeamento,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'reparo-hidraulico-residencial',
    category: 'hidraulica',
    icon: Droplet,
    title: 'Reparo hidráulico residencial',
    description: 'Caça-vazamento com tecnologia e substituição de trechos de tubulação danificados.',
    technologies: ['Caça-vazamento', 'Tubos e registros', 'Instalações hidráulicas'],
    image: svcHidraulica,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'pintura-acabamento-fino',
    category: 'pintura',
    icon: PaintRoller,
    title: 'Pintura com acabamento fino',
    description: 'Pintura lisa e grafiato com acabamento profissional para ambientes residenciais e comerciais.',
    technologies: ['Pintura lisa', 'Grafiato', 'Acabamento fino'],
    image: svcPintura,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'infraestrutura-eletrica-residencial',
    category: 'eletrica',
    icon: Lightbulb,
    title: 'Infraestrutura elétrica residencial',
    description: 'Instalação de quadro de distribuição e infraestrutura elétrica nova com tomadas inteligentes.',
    technologies: ['Quadro de distribuição', 'Infraestrutura nova', 'Tomadas inteligentes'],
    image: svcEletrica,
    projectUrl: null,
    githubUrl: null,
  },
  {
    id: 'reforma-sala-comercial',
    category: 'reformas',
    icon: HardHat,
    title: 'Reforma completa de sala comercial',
    description: 'Reforma completa incluindo hidráulica, elétrica, pintura e acabamento final do ambiente.',
    technologies: ['Hidráulica', 'Elétrica', 'Pintura', 'Acabamento'],
    image: svcReformas,
    projectUrl: null,
    githubUrl: null,
  },
]
