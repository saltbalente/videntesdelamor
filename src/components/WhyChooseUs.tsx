import { CheckCircle, Clock, Lock, Star } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: Star,
    title: 'Experiencia Comprobada',
    description: 'Más de 15 años ayudando a personas con métodos ancestrales efectivos'
  },
  {
    icon: Clock,
    title: 'Respuesta Inmediata',
    description: 'Atención rápida por WhatsApp para resolver tu situación urgente'
  },
  {
    icon: Lock,
    title: 'Total Confidencialidad',
    description: 'Tu privacidad es sagrada. Consultas 100% discretas y seguras'
  },
  {
    icon: CheckCircle,
    title: 'Resultados Garantizados',
    description: 'Trabajos espirituales con seguimiento hasta lograr el objetivo'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            ¿Por Qué <span className="text-accent">Elegirnos?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromiso, profesionalismo y resultados reales en cada servicio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Icon size={32} weight="fill" className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
