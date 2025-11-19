import { Card, CardContent } from '@/components/ui/card'
import { Star, Quotes } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'María González',
    location: 'Miami, FL',
    text: 'Gracias a la limpia espiritual mi vida cambió completamente. Ahora tengo paz y prosperidad.',
    rating: 5
  },
  {
    name: 'Carlos Ramírez',
    location: 'Los Angeles, CA',
    text: 'El amarre de amor funcionó. Recuperé a la persona que amo y ahora somos más felices que nunca.',
    rating: 5
  },
  {
    name: 'Ana Patricia',
    location: 'New York, NY',
    text: 'Profesional, discreto y efectivo. La protección espiritual me salvó de enemigos ocultos.',
    rating: 5
  },
  {
    name: 'Roberto Silva',
    location: 'Houston, TX',
    text: 'Excelente atención por WhatsApp. Los trabajos espirituales dieron resultados en poco tiempo.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/sCjG-ek-xWI?autoplay=1&mute=1&loop=1&playlist=sCjG-ek-xWI&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-150 opacity-10 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Lo Que Dicen <span className="text-accent">Nuestros Clientes</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios reales de personas que confiaron en nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 hover:border-accent/50 transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quotes size={32} weight="fill" className="text-accent flex-shrink-0" />
                    <div>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} size={16} weight="fill" className="text-accent" />
                        ))}
                      </div>
                      <p className="font-body text-foreground leading-relaxed mb-4">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-heading font-semibold">{testimonial.name}</p>
                        <p className="font-body text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
