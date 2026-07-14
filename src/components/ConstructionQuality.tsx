import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import Reveal from './Reveal'
import Img from './Img'
import { CONSTRUCTION, IMG } from '../data/kalp'

export default function ConstructionQuality() {
  return (
    <section id="quality" className="relative bg-bg py-24 sm:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left — sticky image */}
        <Reveal variant="left" className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-xl3 shadow-lift">
            <Img
              src={IMG.quality}
              alt="Premium construction quality at Kalp Residency"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-8">
              <span className="eyebrow text-white/70">Built to Last</span>
              <p className="mt-2 font-display text-xl font-bold text-white">
                Certified materials, rigorous checks
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right — quality cards */}
        <div>
          <Reveal>
            <span className="eyebrow">Construction Quality</span>
            <h2 className="h-display mt-4 text-[clamp(2rem,4vw,3.25rem)]">
              Premium down to the last detail
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CONSTRUCTION.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="group rounded-xl2 border border-line bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-bold text-ink">{c.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
