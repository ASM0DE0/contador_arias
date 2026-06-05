import { categories } from '../data/categories'

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Soluciones para Cada Tipo de Cliente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Servicios personalizados según tus necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl p-8 bg-light hover:bg-white transition-all duration-300 hover:shadow-xl scroll-reveal"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${category.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>
                
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-dark mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <ul className="space-y-2">
                  {category.services.map((service, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 ${category.color.replace('bg-', 'bg-')} rounded-full mr-2`}></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories
