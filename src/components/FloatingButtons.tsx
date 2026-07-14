import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../data/kalp'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lift transition-transform hover:-translate-y-1"
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`tel:${CONTACT.tel}`}
        aria-label="Call us"
        className="group grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-accent transition-transform hover:-translate-y-1"
      >
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-accent/40" />
        <FiPhone className="relative h-6 w-6" />
      </a>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:-translate-y-1"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  )
}
