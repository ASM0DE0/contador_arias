import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const message = 'Hola Felipe, me gustaría recibir asesoría contable.'
    const whatsappUrl = `https://wa.me/56933185800?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 bg-success hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  )
}

export default WhatsAppButton
