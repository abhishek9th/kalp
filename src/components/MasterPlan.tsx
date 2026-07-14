import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMaximize2, FiX } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import Img from './Img'
import { IMG, HOTSPOTS } from '../data/kalp'

export default function MasterPlan() {
  const [full, setFull] = useState(false)

  const Plan = ({ fullscreen = false }: { fullscreen?: boolean }) => (
    <div
      className={`relative overflow-hidden rounded-xl2 border border-line bg-white ${
        fullscreen ? 'h-full' : 'shadow-soft'
      }`}
    >
      <Img
        src={IMG.masterPlan}
        alt="Kalp Residency master plan layout"
        sizes="(max-width: 1024px) 100vw, 80vw"
        className={`w-full object-cover ${fullscreen ? 'h-full' : 'aspect-[16/10]'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {HOTSPOTS.map((h, i) => (
        <motion.div
          key={h.label}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 260 }}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
        >
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-accent shadow-md" />
          </span>
          <span className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lift transition-all duration-300 group-hover:top-7 group-hover:opacity-100">
            {h.label}
          </span>
        </motion.div>
      ))}

      {!fullscreen && (
        <button
          onClick={() => setFull(true)}
          className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-ink shadow-soft backdrop-blur transition hover:bg-white"
        >
          <FiMaximize2 className="h-4 w-4" /> Fullscreen
        </button>
      )}
    </div>
  )

  return (
    <section id="master-plan" className="relative bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Master Plan"
          title="A layout designed for light, space & flow"
          subtitle="Hover the markers to explore roads, entry points, commercial zones and green areas."
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plan />
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {HOTSPOTS.map((h) => (
            <span key={h.label} className="flex items-center gap-2 text-sm text-muted">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" /> {h.label}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {full && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          >
            <button
              onClick={() => setFull(false)}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <FiX className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="h-full max-h-[85vh] w-full max-w-6xl"
            >
              <Plan fullscreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
