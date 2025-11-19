import { WhatsappLogo, Sparkle, Heart } from '@phosphor-icons/react'

const WHATSAPP_NUMBER = '14133912149'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=ayuda%20con%20el%20maestro%20en%20consulta%20gratis`

export function Hero() {
  return (
    <section className="relative min-h-[150vh] w-full overflow-hidden">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 flex items-center gap-2 animate-float">
          <Heart size={32} weight="fill" className="text-accent" />
          <Sparkle size={24} weight="fill" className="text-accent" />
          <Heart size={32} weight="fill" className="text-accent" />
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Videntes de Amor
          <br />
          <span className="text-accent">Expertos en Problemas del Corazón</span>
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Los mejores videntes de amor están aquí para ayudarte a recuperar tu relación, encontrar el amor verdadero y resolver tus problemas sentimentales
        </p>

        <div className="w-full max-w-[280px] mb-8">
          <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/mCXwZ7EfMcU?autoplay=1&mute=1&controls=0&loop=1&playlist=mCXwZ7EfMcU&playsinline=1&modestbranding=1&rel=0&showinfo=0"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button text-white font-body font-semibold text-lg px-8 py-6 mt-4 inline-flex items-center justify-center rounded-lg transition-all duration-300"
        >
          <WhatsappLogo size={24} weight="fill" className="mr-2" />
          Consulta con Videntes de Amor
        </a>

        <p className="font-body text-sm text-muted-foreground mt-4">
          Videntes de amor especializados • Confidencial • Resultados reales
        </p>
      </div>
    </section>
  )
}
