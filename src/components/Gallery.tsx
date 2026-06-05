const Gallery = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Reunión empresarial profesional',
      title: 'Reuniones Estratégicas'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Análisis financiero con datos',
      title: 'Análisis Financiero'
    },
    {
      url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Contabilidad y documentos',
      title: 'Gestión Contable'
    },
    {
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Oficina moderna',
      title: 'Oficina Profesional'
    },
    {
      url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Atención a clientes',
      title: 'Atención Personalizada'
    },
    {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Trabajo en equipo',
      title: 'Trabajo en Equipo'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Nuestra Galería
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un vistazo a nuestro trabajo profesional y el entorno donde atendemos a nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 scroll-reveal"
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-heading font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
