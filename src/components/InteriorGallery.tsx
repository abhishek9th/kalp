import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { INTERIOR_GALLERY } from '../data/kalp'

// Mixed grid spans → an irregular mosaic of large, tall, wide and small tiles.
const MOSAIC = [
  'col-span-2 row-span-2', // large square
  'col-span-1 row-span-1', // small
  'col-span-1 row-span-2', // tall
  'col-span-2 row-span-1', // wide
  'col-span-1 row-span-1', // small
  'col-span-1 row-span-2', // tall
  'col-span-2 row-span-2', // large square
  'col-span-1 row-span-1', // small
]

export default function InteriorGallery() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % INTERIOR_GALLERY.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + INTERIOR_GALLERY.length) % INTERIOR_GALLERY.length,
      ),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, close, next, prev])

  return (
    <section id="interior-gallery" className="relative bg-bg py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Interior Gallery"
          subtitle="A closer look at the finishes, light and living spaces that define a Kalp home."
        />

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-4 [grid-auto-flow:dense]">
          {INTERIOR_GALLERY.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIndex(i)}
              className={`group relative block overflow-hidden rounded-xl2 shadow-soft ${MOSAIC[i % MOSAIC.length]}`}
            >
              <img
                src={src}
                alt={`Kalp Residency interior ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
              <span className="absolute bottom-4 left-4 translate-y-3 text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4"
            onClick={close}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <FiX className="h-6 w-6" />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
            >
              <FiChevronLeft className="h-7 w-7" />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
            >
              <FiChevronRight className="h-7 w-7" />
            </button>
            <motion.img
              key={index}
              src={INTERIOR_GALLERY[index].replace(/w=\d+/, 'w=1400')}
              alt={`Kalp Residency interior ${index + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-xl2 object-contain shadow-lift"
            />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {index + 1} / {INTERIOR_GALLERY.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
