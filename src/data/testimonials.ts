export interface Testimonial {
  id: number
  name: string
  role: string
  comment: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    role: 'Empresaria - Restaurante El Sabor',
    comment: 'Felipe ha sido fundamental para el crecimiento de mi negocio. Su asesoría tributaria me ha permitido optimizar mis recursos y cumplir con todas las obligaciones legales.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    role: 'Gerente - TechSolutions SpA',
    comment: 'La contabilidad de nuestra empresa está en excelentes manos. El equipo es profesional, puntual y siempre disponible para resolver nuestras dudas.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    role: 'Arquitecta Independiente',
    comment: 'Como profesional independiente, necesitaba alguien confiable para mis declaraciones de renta. Encontré en Felipe un contador experto y comprometido.',
    rating: 5
  },
  {
    id: 4,
    name: 'Pedro Sánchez',
    role: 'Dueño - Constructora Sánchez',
    comment: 'Llevamos 5 años trabajando con Contabilidad ARIAS. Su gestión contable es impecable y nos han ayudado a planificar estratégicamente nuestro crecimiento.',
    rating: 5
  },
  {
    id: 5,
    name: 'Laura Fernández',
    role: 'Nutricionista',
    comment: 'La primera asesoría gratuita me convenció de su profesionalismo. Ahora confío todas mis obligaciones tributarias a ellos. ¡Excelente servicio!',
    rating: 5
  },
  {
    id: 6,
    name: 'Roberto Morales',
    role: 'Comerciante - Tienda Don Roberto',
    comment: 'Desde que inicié mi negocio, Felipe me ha guiado en cada paso. Su conocimiento y paciencia hacen que la contabilidad sea fácil de entender.',
    rating: 5
  }
]
