import { testimonials } from '../data/testimonials'
import { Star } from 'lucide-react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de clientes satisfechos con nuestros servicios contables y tributarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-reveal"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
