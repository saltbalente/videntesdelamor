import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { WhatsappLogo, Heart, HandHeart, HeartBreak, HeartStraight, Flame, Drop, MagicWand, Sparkle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '14133912149'

const services = [
  {
    title: 'Amarres de Amor',
    description: 'Nuestros videntes de amor utilizan rituales ancestrales para recuperar el amor perdido, fortalecer relaciones o atraer a la persona deseada. Los videntes de amor expertos en magia blanca efectiva te ayudarán a resolver tus problemas sentimentales.',
    image: 'https://i.pinimg.com/736x/6e/73/d0/6e73d05fcababf3638dbdf812280da14.jpg',
    icon: Heart,
    badge: 'Videntes de Amor',
    message: 'Hola, necesito consultar con videntes de amor sobre Amarres de Amor'
  },
  {
    title: 'Recuperar el Amor Perdido',
    description: 'Los videntes de amor especialistas te ayudan a reconquistar a tu pareja. Si has perdido el amor de tu vida, nuestros videntes de amor pueden guiarte en el camino de regreso a su corazón.',
    image: 'https://i.pinimg.com/736x/fd/a2/03/fda20354467bd45b459abc94277871a3.jpg',
    icon: HeartBreak,
    badge: 'Especialistas',
    message: 'Hola, necesito ayuda de videntes de amor para recuperar a mi pareja'
  },
  {
    title: 'Unión de Parejas',
    description: 'Videntes de amor expertos en unir parejas separadas. Si tu relación está en crisis, los videntes de amor te ayudarán a fortalecer el vínculo y recuperar la armonía en tu relación amorosa.',
    image: 'https://i.pinimg.com/736x/05/83/57/058357339f72995b76929d16fee71f8b.jpg',
    icon: HeartStraight,
    badge: 'Unión Total',
    message: 'Hola, quiero consultar con videntes de amor sobre unión de parejas'
  },
  {
    title: 'Retorno de Pareja',
    description: 'Los mejores videntes de amor para el retorno de tu pareja. Rituales especializados realizados por videntes de amor con años de experiencia ayudando a personas a recuperar sus relaciones.',
    image: 'https://i.pinimg.com/1200x/1c/f6/99/1cf6995c3e831c280f22d2ce2fef0587.jpg',
    icon: HandHeart,
    badge: 'Efectivo',
    message: 'Hola, necesito videntes de amor para el retorno de mi pareja'
  },
  {
    title: 'Endulzamientos de Amor',
    description: 'Videntes de amor especialistas en endulzamientos para mejorar tu relación. Los videntes de amor utilizan rituales con miel y hierbas para atraer amor, dulzura y felicidad a tu vida sentimental.',
    image: 'https://i.pinimg.com/1200x/7c/09/ee/7c09ee73a735094cf62fa185a247492e.jpg',
    icon: Drop,
    badge: 'Dulzura',
    message: 'Hola, quiero consultar con videntes de amor sobre endulzamientos'
  },
  {
    title: 'Rituales de Amor',
    description: 'Videntes de amor que realizan rituales personalizados según tu situación. Nuestros videntes de amor diseñan ceremonias específicas para atraer el amor verdadero a tu vida.',
    image: 'https://i.pinimg.com/1200x/95/cf/2f/95cf2f16413d21394c5682a5873a7205.jpg',
    icon: Flame,
    badge: 'Personalizado',
    message: 'Hola, me interesan los rituales de amor con videntes de amor'
  },
  {
    title: 'Hechizos de Amor',
    description: 'Videntes de amor expertos en hechizos para atraer el amor. Los videntes de amor realizan trabajos esotéricos efectivos para que conquistes el corazón de quien deseas.',
    image: 'https://i.pinimg.com/736x/b6/6f/c1/b66fc1f77cff92fe08b9ebe04e232375.jpg',
    icon: MagicWand,
    badge: 'Poderoso',
    message: 'Hola, necesito videntes de amor para hechizos de amor'
  },
  {
    title: 'Lectura del Tarot del Amor',
    description: 'Videntes de amor con don natural para leer las cartas del tarot. Descubre qué te depara el futuro en el amor con la ayuda de nuestros videntes de amor profesionales.',
    image: 'https://i.pinimg.com/1200x/7c/09/ee/7c09ee73a735094cf62fa185a247492e.jpg',
    icon: Sparkle,
    badge: 'Lectura',
    message: 'Hola, quiero una lectura de tarot del amor con videntes de amor'
  }
]

export function Services() {
  return (
    <section className="py-20 px-4" id="servicios">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Servicios de <span className="text-accent">Videntes de Amor</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros videntes de amor especializados están listos para ayudarte con tus problemas sentimentales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-body">
                      {service.badge}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={32} weight="fill" className="text-accent" />
                      <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="font-body text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full whatsapp-button text-white font-body font-semibold inline-flex items-center justify-center rounded-lg px-4 py-2 transition-all duration-300"
                    >
                      <WhatsappLogo size={20} weight="fill" className="mr-2" />
                      Consultar con Videntes
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
