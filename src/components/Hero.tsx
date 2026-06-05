import { ArrowRight, MessageCircle } from 'lucide-react'

const Hero = () => {
  const stats = [
    { value: '500+', label: 'Clientes Satisfechos' },
    { value: '10+', label: 'Años de Experiencia' },
    { value: '98%', label: 'Retención de Clientes' },
    { value: '24/7', label: 'Soporte Disponible' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Contabilidad y Soluciones Tributarias para{' '}
            <span className="text-primary">Personas y Empresas</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Felipe Arias, Contador Auditor. Te ayudamos a mantener tus obligaciones contables y tributarias al día con asesoría profesional y personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/56933185800?text=Hola%20Felipe,%20me%20gustaría%20recibir%20asesoría%20contable."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-dark px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Solicitar Asesoría
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
