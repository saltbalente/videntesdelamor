import { Sparkle, YoutubeLogo, Heart } from '@phosphor-icons/react'

export function MasterSection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto">
        <div className="mb-6 flex items-center gap-2 animate-float">
          <Heart size={28} weight="fill" className="text-accent" />
          <Sparkle size={20} weight="fill" className="text-accent" />
          <Heart size={28} weight="fill" className="text-accent" />
        </div>

        <div className="space-y-6 font-body text-base sm:text-lg leading-relaxed text-foreground/90">
          <p>
            Videntes de amor con más de 25 años de experiencia ayudando a cientos de personas en problemas del corazón. Los videntes de amor más reconocidos en el área del esoterismo sentimental. Contacta ya con los mejores videntes de amor para ayudarte.
          </p>

          <p>
            Si estás buscando videntes de amor para resolver tus problemas sentimentales, ¡has venido al lugar correcto! Somos videntes de amor expertos en amarres, retornos de pareja, uniones y hechizos de amor, y podemos ayudarte a conseguir el amor que deseas.
          </p>

          <div className="w-full max-w-md mx-auto my-8">
            <div className="aspect-[9/16]">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/B5xqkn8QA8w?autoplay=1&mute=1&controls=0&loop=1&playlist=B5xqkn8QA8w"
                title="Video Maestro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <p className="mt-4 text-center text-muted-foreground/80 text-sm font-body">
              Maestro Santero - Amarres de Amor y Magia Blanca Canal de Ayuda Espiritual
            </p>
            
            <div className="mt-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl animate-pulse-glow" />
              <div className="relative bg-card/40 backdrop-blur-md rounded-2xl p-8 border border-accent/30 shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Heart size={24} weight="fill" className="text-accent animate-pulse" />
                  <h3 className="font-heading font-bold text-2xl text-foreground tracking-wide">
                    Videntes de Amor Profesionales
                  </h3>
                  <Heart size={24} weight="fill" className="text-accent animate-pulse" />
                </div>
                <p className="font-body text-accent text-lg font-medium text-center tracking-widest">
                  Especialistas en Problemas del Corazón
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
