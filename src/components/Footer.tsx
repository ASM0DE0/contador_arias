import { Facebook, Instagram, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ]

  const services = [
    'Declaración de Renta',
    'Contabilidad para Empresas',
    'Inicio de Actividades',
    'Balances Financieros',
    'Asesoría Tributaria',
    'IVA Mensual (F29)'
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold">Contabilidad & Soluciones ARIAS</h3>
            <p className="text-gray-400">
              Felipe Arias – Contador Auditor
            </p>
            <p className="text-gray-400 text-sm">
              Asesoría contable y tributaria profesional para personas, emprendedores y empresas en San Carlos, Chile.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+56 9 3318 5800</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-400">El Durazno 1120, San Carlos</span>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-sm">Síguenos</h5>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/SolucionesArias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/soluciones_arias1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Contabilidad & Soluciones ARIAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
