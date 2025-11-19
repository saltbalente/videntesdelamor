import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { ExperienceSection } from '@/components/ExperienceSection'
import { MasterSection } from '@/components/MasterSection'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { VideoSection } from '@/components/VideoSection'
import { Testimonials } from '@/components/Testimonials'
import { Footer } from '@/components/Footer'
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <ExperienceSection />
      <MasterSection />
      <WhyChooseUs />
      <VideoSection />
      <Testimonials />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default App