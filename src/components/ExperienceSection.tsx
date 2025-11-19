import { Sparkle, Heart } from '@phosphor-icons/react'

export function ExperienceSection() {
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
            Como videntes de amor altamente experimentados, tenemos una gran reputación ayudando a personas con problemas del corazón. Nuestros videntes de amor se han dedicado a estudiar y practicar la videncia durante más de 20 años, y hemos ayudado a cientos de personas a conseguir lo que desean en el ámbito amoroso, personal y sentimental.
          </p>

          <div className="w-full max-w-md aspect-[9/16] mx-auto my-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/4JYvpeRV1Fo?autoplay=1&mute=1&controls=0&loop=1&playlist=4JYvpeRV1Fo"
              title="Video Experiencia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p>
            Nuestros videntes de amor son especialistas en el uso de rituales ancestrales, tarot del amor y lecturas espirituales para ayudarte a atraer el amor, recuperar a tu pareja y fortalecer tus relaciones. Los videntes de amor también ofrecemos servicios de limpieza energética y desbloqueo sentimental para ayudarte a liberarte de cualquier negatividad que impida tu felicidad amorosa.
          </p>

          <p>
            Los videntes de amor hemos recibido numerosos testimonios de personas que han experimentado una mejora significativa en sus vidas amorosas después de utilizar nuestros servicios. Si estás buscando videntes de amor profesionales y efectivos, no dudes en contactarnos. ¡Nuestros videntes de amor están deseando ayudarte a alcanzar la felicidad y el amor verdadero que mereces!
          </p>
        </div>
      </div>
    </section>
  )
}
