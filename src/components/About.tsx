import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Img from './Img'
import { IMG, ABOUT_STATS } from '../data/kalp'

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-20 sm:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — copy */}
        <div>
          <Reveal variant="left">
            <span className="eyebrow">About The Project</span>
            <h2 className="h-display mt-4 text-[clamp(2rem,4vw,3.5rem)]">
              A township thoughtfully planned for modern families
            </h2>
          </Reveal>
          <Reveal variant="left" delay={0.1}>
            <p className="lead mt-6">
              Kalp Residency is a thoughtfully planned residential township offering
              premium independent homes designed for modern families. Located near
              Shaheed Path, Lucknow, the project combines peaceful surroundings with
              excellent connectivity, high-quality infrastructure, and contemporary
              architecture.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {ABOUT_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="border-l-2 border-accent/30 pl-4"
              >
                <div className="font-display text-lg font-bold text-ink">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <Reveal variant="right" className="relative">
          <div className="relative overflow-hidden rounded-xl3 shadow-lift">
            <Img
              src={IMG.about}
              alt="Contemporary independent villa architecture at Kalp Residency"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-2 bottom-4 rounded-2xl bg-ink px-4 py-4 text-white shadow-lift sm:-left-8 sm:bottom-8 sm:px-6 sm:py-5"
          >
            <div className="font-display text-3xl font-extrabold">120</div>
            <div className="text-xs uppercase tracking-wide text-white/60">
              Independent Villas
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
