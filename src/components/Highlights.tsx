import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { HIGHLIGHTS } from '../data/kalp'

export default function Highlights() {
  return (
    <section id="highlights" className="relative bg-bg py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Project Highlights"
          title="Everything a modern family needs"
          subtitle="Thoughtfully engineered from the ground up — location, infrastructure and ownership, all sorted."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: (i % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-xl2 border border-line bg-card p-7 shadow-soft transition-all duration-500 ease-luxe hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-bg text-ink transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.desc}</p>
                <span className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-[3]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
