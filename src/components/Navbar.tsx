import { useState, useEffect } from 'react'
import { Menu, X, Calculator } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Calculator className={`w-8 h-8 ${scrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`font-heading font-bold text-xl ${scrolled ? 'text-dark' : 'text-white'}`}>
              Contabilidad ARIAS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/56933185800?text=Hola%20Felipe,%20me%20gustaría%20recibir%20asesoría%20contable."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Solicitar Asesoría
            </a>
          </div>

          <button
            className={`md:hidden ${scrolled ? 'text-dark' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-dark font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/56933185800?text=Hola%20Felipe,%20me%20gustaría%20recibir%20asesoría%20contable."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-success hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors text-center"
            >
              Solicitar Asesoría
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
