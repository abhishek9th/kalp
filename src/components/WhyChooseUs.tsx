import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { WHY_CHOOSE } from '../data/kalp'

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-bg py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Why Choose Kalp Residency"
          title="Reasons families choose to call it home"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl2 border border-line bg-card p-7 shadow-soft transition-all duration-500 ease-luxe hover:-translate-y-1.5 hover:border-ink hover:bg-ink hover:text-white hover:shadow-lift"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-line transition-colors duration-500 group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink transition-colors group-hover:text-white">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/70">
                  {w.desc}
                </p>
              </div>
              <FiArrowUpRight className="mt-6 h-5 w-5 text-muted transition-all duration-500 group-hover:text-accent arrow-slide" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
