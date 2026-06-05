import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const whatsappMessage = `Hola Felipe, me gustaría solicitar asesoría.%0A%0ANombre: ${formData.name}%0ATeléfono: ${formData.phone}%0ACorreo: ${formData.email}%0AServicio: ${formData.service}%0AMensaje: ${formData.message}`
    window.open(`https://wa.me/56933185800?text=${whatsappMessage}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y recibe asesoría personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="scroll-reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+56 9 ..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio Requerido *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Declaración de Renta">Declaración de Renta</option>
                  <option value="Contabilidad para Empresas">Contabilidad para Empresas</option>
                  <option value="Inicio de Actividades">Inicio de Actividades</option>
                  <option value="Balances Financieros">Balances Financieros</option>
                  <option value="Asesoría Tributaria">Asesoría Tributaria</option>
                  <option value="IVA Mensual (F29)">IVA Mensual (F29)</option>
                  <option value="Gestión Contable Integral">Gestión Contable Integral</option>
                  <option value="Formalización de Negocios">Formalización de Negocios</option>
                  <option value="Auditoría Contable">Auditoría Contable</option>
                  <option value="Consultoría Financiera">Consultoría Financiera</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu situación..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          <div className="space-y-8 scroll-reveal">
            <div className="bg-light rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-dark mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Dirección</h4>
                    <p className="text-gray-600">El Durazno 1120<br />San Carlos, Chile</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Teléfono</h4>
                    <p className="text-gray-600">+56 9 3318 5800</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">WhatsApp</h4>
                    <p className="text-gray-600">+56 9 3318 5800</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5!2d-71.0!3d-36.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAwJzAwLjAiUyA3McKwMDAnMDAuMCJF!5e0!3m2!1ses!2scl!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Contabilidad ARIAS"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
