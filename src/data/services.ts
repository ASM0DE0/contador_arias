import { Calculator, FileText, Briefcase, BarChart3, HelpCircle, Receipt, BookOpen, Building2, Search, TrendingUp } from 'lucide-react'

export interface Service {
  id: number
  title: string
  description: string
  benefits: string[]
  icon: any
  image: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Declaración de Renta',
    description: 'Preparación y presentación de declaraciones de renta para personas naturales y empresas, optimizando tu carga tributaria.',
    benefits: ['Maximización de retornos', 'Cumplimiento legal', 'Asesoría personalizada'],
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Contabilidad para Empresas',
    description: 'Gestión contable completa para empresas de todos los tamaños, asegurando registros precisos y oportunos.',
    benefits: ['Registro automatizado', 'Reportes mensuales', 'Control financiero'],
    icon: Calculator,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Inicio de Actividades',
    description: 'Asesoría completa para el inicio de actividades de nuevos negocios, incluyendo todos los trámites necesarios.',
    benefits: ['Trámites simplificados', 'Orientación completa', 'Inicio rápido'],
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Balances Financieros',
    description: 'Elaboración de balances financieros profesionales para análisis y toma de decisiones estratégicas.',
    benefits: ['Análisis detallado', 'Información clara', 'Decisiones informadas'],
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Asesoría Tributaria',
    description: 'Consultoría experta en normativa tributaria chilena para optimizar tu situación fiscal.',
    benefits: ['Planificación tributaria', 'Cumplimiento normativo', 'Ahorro fiscal'],
    icon: HelpCircle,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'IVA Mensual (F29)',
    description: 'Preparación y presentación de declaraciones de IVA mensuales, evitando multas y recargos.',
    benefits: ['Presentación puntual', 'Cálculo preciso', 'Sin errores'],
    icon: Receipt,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Gestión Contable Integral',
    description: 'Servicio completo de gestión contable que incluye libro diario, mayor y balances.',
    benefits: ['Gestión completa', 'Transparencia total', 'Acceso en línea'],
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Formalización de Negocios',
    description: 'Asesoría en la formalización legal y contable de tu negocio o emprendimiento.',
    benefits: ['Estructura legal', 'Documentación completa', 'Cumplimiento normativo'],
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Auditoría Contable',
    description: 'Servicios de auditoría para verificar la exactitud y fiabilidad de tus registros contables.',
    benefits: ['Verificación profesional', 'Detección de errores', 'Mejora de procesos'],
    icon: Search,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    title: 'Consultoría Financiera',
    description: 'Asesoría estratégica en finanzas para el crecimiento y optimización de tu negocio.',
    benefits: ['Estrategia personalizada', 'Análisis de riesgos', 'Crecimiento sostenible'],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]
