import {
  MessageCircle,
  Search,
  NotebookPen,
  Calculator,
  ThumbsUp,
  Hammer,
  CheckCircle2,
  PackageCheck,
  LifeBuoy,
} from 'lucide-react'

export const workflowSteps = [
  {
    id: 'atendimento',
    title: 'Atendimento',
    description: 'Entendemos sua necessidade e o contexto do projeto.',
    icon: MessageCircle,
  },
  {
    id: 'levantamento-tecnico',
    title: 'Levantamento técnico',
    description: 'Avaliação presencial ou remota do ambiente e dos requisitos.',
    icon: Search,
  },
  {
    id: 'planejamento',
    title: 'Planejamento',
    description: 'Definição de escopo, materiais e cronograma de execução.',
    icon: NotebookPen,
  },
  {
    id: 'orcamento',
    title: 'Orçamento',
    description: 'Proposta clara, detalhada e sem compromisso.',
    icon: Calculator,
  },
  {
    id: 'aprovacao',
    title: 'Aprovação',
    description: 'Validação do escopo e das condições com o cliente.',
    icon: ThumbsUp,
  },
  {
    id: 'execucao',
    title: 'Execução',
    description: 'Implantação seguindo boas práticas e padronização.',
    icon: Hammer,
  },
  {
    id: 'testes',
    title: 'Testes',
    description: 'Validação de funcionamento, performance e segurança.',
    icon: CheckCircle2,
  },
  {
    id: 'entrega',
    title: 'Entrega',
    description: 'Repasse do projeto finalizado e documentado.',
    icon: PackageCheck,
  },
  {
    id: 'suporte-continuo',
    title: 'Suporte contínuo',
    description: 'Acompanhamento e suporte após a entrega do projeto.',
    icon: LifeBuoy,
  },
]
