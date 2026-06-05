import { User, Rocket, Building, Factory } from 'lucide-react'

export interface Category {
  id: number
  title: string
  description: string
  services: string[]
  icon: any
  color: string
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Personas Naturales',
    description: 'Soluciones contables y tributarias personalizadas para personas naturales.',
    services: ['Declaración de renta', 'Asesorías tributarias', 'Boletas honorarios', 'Créditos'],
    icon: User,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Emprendedores',
    description: 'Apoyo completo para emprendedores que inician su camino empresarial.',
    services: ['Inicio de actividades', 'Formalización', 'Planificación tributaria', 'Asesoría inicial'],
    icon: Rocket,
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Pymes',
    description: 'Servicios contables integrales para pequeñas y medianas empresas.',
    services: ['Contabilidad mensual', 'IVA (F29)', 'Balances', 'Remuneraciones'],
    icon: Building,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Empresas',
    description: 'Soluciones avanzadas para empresas consolidadas que requieren gestión profesional.',
    services: ['Auditoría', 'Gestión financiera', 'Planificación tributaria', 'Consultoría estratégica'],
    icon: Factory,
    color: 'bg-orange-500'
  }
]
