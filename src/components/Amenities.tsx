import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { AMENITIES } from '../data/kalp'
import { useInView } from '../lib/useInView'

export default function Amenities() {
  const { ref, inView } = useInView<HTMLElement>('0px')

  return (
    <>
      {/* Fixed hero image behind the section (revealed while the section is on
          screen), with a dark tint so the white content stays readable. */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500 ease-out"
        style={{ opacity: inView ? 1 : 0 }}
        aria-hidden
      >
        <img src="/magic.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <section
        id="amenities"
        ref={ref}
        className="relative overflow-hidden py-20 text-white sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(230,57,70,0.14),transparent_70%)]" />
        <div className="shell relative">
          <SectionHeading
            light
            eyebrow="Amenities"
            title="Comfort, security and greenery — by design"
            subtitle="Every essential planned in from day one, so life here simply works."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {AMENITIES.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 5) * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col items-center gap-4 rounded-xl2 border border-white/15 bg-white/[0.06] p-4 text-center backdrop-blur-md transition-colors duration-500 hover:border-accent/40 hover:bg-white/[0.12] sm:p-6"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-white/20 text-white/90 transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-medium text-white/90">{a.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
