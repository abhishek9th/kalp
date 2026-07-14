import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiMaximize2, FiX, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import Img from './Img'
import { FLOOR_PLANS } from '../data/kalp'

export default function FloorPlans() {
  const [preview, setPreview] = useState<string | null>(null)

  return (
    <section id="floor-plans" className="relative bg-bg py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Floor Plans"
          title="Homes that live as good as they look"
          subtitle="Spacious, efficient layouts across two levels — designed around natural light and privacy."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {FLOOR_PLANS.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-xl2 border border-line bg-card shadow-soft transition-all duration-500 ease-luxe hover:shadow-lift"
            >
              <div className="relative overflow-hidden bg-white">
                <Img
                  src={f.image}
                  alt={`${f.title} plan — Kalp Residency`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-contain p-3 transition-transform duration-700 ease-luxe group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
                <button
                  onClick={() => setPreview(f.image)}
                  className="absolute inset-0 m-auto grid h-14 w-14 translate-y-3 place-items-center rounded-full bg-white/95 text-ink opacity-0 shadow-lift transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-label={`Preview ${f.title}`}
                >
                  <FiMaximize2 className="h-6 w-6" />
                </button>
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {f.area}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{f.title}</h3>
                  <p className="mt-1 max-w-sm text-sm text-muted">{f.detail}</p>
                </div>
                <a
                  href="#book"
                  className="group/btn flex shrink-0 items-center gap-2 rounded-full bg-bg px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  <FiDownload className="h-4 w-4" />
                  <span className="hidden sm:inline">PDF</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#book" className="btn-dark group">
            Request Full Brochure
            <FiArrowUpRight className="h-4 w-4 arrow-slide" />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <FiX className="h-6 w-6" />
            </button>
            <motion.img
              src={preview}
              alt="Floor plan preview"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[85vh] max-w-full rounded-xl2 object-contain shadow-lift"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
