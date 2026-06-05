import { MessageCircle, Gift } from 'lucide-react'

const Promotions = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left scroll-reveal">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Gift className="w-10 h-10 text-white" />
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Oferta Especial
              </span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Primera Asesoría Gratuita
            </h2>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              Analizamos tu situación y te orientamos sobre las mejores soluciones contables y tributarias para tu caso. Sin compromiso.
            </p>

            <a
              href="https://wa.me/56933185800?text=Hola%20Felipe,%20me%20gustaría%20aprovechar%20la%20primera%20asesoría%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Asesoría Gratuita
            </a>
          </div>

          <div className="flex-1 scroll-reveal">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                {[
                  'Análisis completo de tu situación',
                  'Recomendaciones personalizadas',
                  'Claridad sobre obligaciones tributarias',
                  'Plan de acción a seguir'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotions
