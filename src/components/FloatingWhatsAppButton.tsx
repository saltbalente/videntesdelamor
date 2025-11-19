import { WhatsappLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '14133912149'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=ayuda%20con%20el%20maestro%20en%20consulta%20gratis`

export function FloatingWhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button text-white rounded-full w-16 h-16 p-0 inline-flex items-center justify-center transition-all duration-300"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </motion.div>
  )
}
