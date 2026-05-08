import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export const metadata = {
  title: 'AutoForge Workshop | Professional Auto Repair Karachi',
  description: 'Expert car repair and maintenance in Karachi. Engine repair, diagnostics, tire change, oil service and more by certified technicians.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
