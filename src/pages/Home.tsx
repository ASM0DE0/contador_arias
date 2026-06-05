import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Categories from '../components/Categories'
import Promotions from '../components/Promotions'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Contact from '../components/Contact'
import WhatsAppButton from '../components/WhatsAppButton'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.scroll-reveal')
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScrollReveal)
    handleScrollReveal() // Initial check

    return () => window.removeEventListener('scroll', handleScrollReveal)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <Promotions />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default Home
