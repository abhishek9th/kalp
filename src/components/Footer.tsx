import { FiMapPin, FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { NAV_LINKS, CONTACT, BRAND } from '../data/kalp'
import { openCTA } from '../lib/cta'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(230,57,70,0.10),transparent_70%)]" />

      {/* CTA band */}
      <div className="shell relative border-b border-white/10 py-12 text-center sm:py-16">
        <h2 className="h-display mx-auto max-w-3xl text-white text-[clamp(2rem,4.5vw,3.5rem)]">
          Your new address is waiting at Kalp Residency
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={openCTA} className="btn-primary group">
            Book Site Visit <FiArrowUpRight className="h-4 w-4 arrow-slide" />
          </button>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-white/25 text-white hover:bg-white/10"
          >
            <FaWhatsapp className="h-5 w-5" /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="shell relative grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-lg font-extrabold text-white">
              K
            </span>
            <span className="font-display text-xl font-extrabold">{BRAND.project}</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Premium independent villas near Shaheed Path, Lucknow — a project by{' '}
            {BRAND.developer}.
          </p>
          <div className="mt-6 flex gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-luxe text-white/40">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/70 transition hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-luxe text-white/40">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {CONTACT.address}
            </li>
            <li>
              <a href={`tel:${CONTACT.tel}`} className="flex gap-3 transition hover:text-accent">
                <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex gap-3 transition hover:text-accent">
                <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-luxe text-white/40">
            Newsletter
          </h4>
          <p className="mt-5 text-sm text-white/60">
            Get project updates, offers and possession news.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex flex-col gap-2 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 sm:flex-row sm:rounded-full"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid h-11 w-full shrink-0 place-items-center rounded-full bg-accent text-white transition hover:bg-accent-dark sm:w-12 sm:rounded-none"
            >
              <FiArrowUpRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Map"
              src={CONTACT.mapEmbed}
              loading="lazy"
              className="h-28 w-full grayscale"
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="shell flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {BRAND.developer}. All rights reserved.
          </span>
          <span>Kalp Residency · Near Shaheed Path, Lucknow</span>
        </div>
      </div>
    </footer>
  )
}
