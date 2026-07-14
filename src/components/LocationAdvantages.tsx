import { motion } from 'framer-motion'
import { FiMapPin, FiNavigation } from 'react-icons/fi'
import Reveal from './Reveal'
import { LOCATION_POINTS, CONTACT } from '../data/kalp'

export default function LocationAdvantages() {
  return (
    <section id="location" className="relative bg-white py-24 sm:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — timeline */}
        <div>
          <Reveal variant="left">
            <span className="eyebrow">Location Advantages</span>
            <h2 className="h-display mt-4 text-[clamp(2rem,4vw,3.25rem)]">
              At the centre of everything that matters
            </h2>
            <p className="lead mt-5">
              Positioned near Shaheed Path, Kalp Residency keeps the airport, schools,
              hospitals and the city just minutes away.
            </p>
          </Reveal>

          <div className="mt-10 space-y-1">
            {LOCATION_POINTS.map((p, i) => (
              <motion.div
                key={p.place}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition-colors hover:border-line hover:bg-bg"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-bg text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <FiMapPin className="h-5 w-5" />
                </span>
                <span className="flex-1 font-medium text-ink">{p.place}</span>
                <span className="font-display font-bold text-accent">{p.distance}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — map */}
        <Reveal variant="right">
          <div className="relative overflow-hidden rounded-xl3 border border-line shadow-lift">
            <iframe
              title="Kalp Residency location map"
              src={CONTACT.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full sm:h-[520px]"
            />
            <a
              href={CONTACT.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-ink hover:text-white"
            >
              <FiNavigation className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
