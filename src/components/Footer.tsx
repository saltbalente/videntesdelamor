import { Separator } from '@/components/ui/separator'
import { WhatsappLogo, Heart } from '@phosphor-icons/react'

const WHATSAPP_NUMBER = '14133912149'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=ayuda%20con%20el%20maestro%20en%20consulta%20gratis`

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-primary/10 to-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart size={24} weight="fill" className="text-accent" />
              <h3 className="font-heading text-xl font-bold">Videntes de Amor</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Los mejores videntes de amor con métodos ancestrales efectivos para resolver tus problemas sentimentales y de pareja.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Servicios de Videntes</h4>
            <ul className="font-body space-y-2 text-muted-foreground">
              <li>• Videntes de Amor</li>
              <li>• Amarres de Amor</li>
              <li>• Retorno de Pareja</li>
              <li>• Unión de Parejas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contacto</h4>
            <p className="font-body text-muted-foreground mb-4">
              Consulta con videntes de amor por WhatsApp
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold inline-flex items-center justify-center rounded-lg px-4 py-2 transition-all duration-300"
            >
              <WhatsappLogo size={20} weight="fill" className="mr-2" />
              Contactar Videntes
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="text-center font-body text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Videntes de Amor. Todos los derechos reservados.
          </p>
          <p className="text-xs">
            Los servicios de videntes de amor son para fines de orientación y bienestar personal. Los resultados pueden variar según cada persona.
          </p>
        </div>
      </div>
    </footer>
  )
}
