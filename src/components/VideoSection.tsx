import { motion } from 'framer-motion'

export function VideoSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Conoce Más Sobre <span className="text-accent">Nuestro Trabajo</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios y experiencias reales de nuestros clientes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-2xl mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 border border-border bg-card/50 backdrop-blur-sm"
        >
          <iframe
            src="https://www.youtube.com/embed/sCjG-ek-xWI?autoplay=1&mute=1&loop=1&playlist=sCjG-ek-xWI&controls=0"
            title="Testimonio Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
