import { Award, ShieldCheck, Users, Clock } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Profesionalismo',
      description: 'Más de 10 años de experiencia en contabilidad y auditoría.'
    },
    {
      icon: ShieldCheck,
      title: 'Confianza',
      description: 'Transparencia total en todos nuestros procesos y resultados.'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Cada cliente recibe la atención que merece y necesita.'
    },
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Cumplimos con todos los plazos y fechas límite.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
              Sobre Felipe Arias
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Contador Auditor especializado en asesoría contable y tributaria para personas, emprendedores y empresas. Nuestro objetivo es entregar soluciones eficientes, transparentes y personalizadas que permitan a nuestros clientes enfocarse en el crecimiento de sus negocios.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Con más de una década de experiencia en el sector, hemos ayudado a cientos de clientes a mantener sus obligaciones contables y tributarias al día, optimizando sus recursos y asegurando el cumplimiento normativo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-dark mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="scroll-reveal">
            <div className="relative">
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-6">Nuestros Números</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <span className="text-lg">Clientes Satisfechos</span>
                    <span className="font-heading text-3xl font-bold">500+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <span className="text-lg">Años de Experiencia</span>
                    <span className="font-heading text-3xl font-bold">10+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <span className="text-lg">Retención de Clientes</span>
                    <span className="font-heading text-3xl font-bold">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg">Declaraciones Anuales</span>
                    <span className="font-heading text-3xl font-bold">1000+</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
