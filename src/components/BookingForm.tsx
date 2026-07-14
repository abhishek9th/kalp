import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiPhone, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../data/kalp'

export default function BookingForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', message: '' })

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // Compose a WhatsApp lead so the enquiry reaches the sales team instantly.
    const text = encodeURIComponent(
      `New Site Visit Request — Kalp Residency%0A` +
        `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A` +
        `Preferred Date: ${form.date}%0AMessage: ${form.message}`,
    )
    window.open(`https://wa.me/91${CONTACT.phone}?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <section id="book" className="relative bg-white py-24 sm:py-32">
      <div className="shell">
        <div className="overflow-hidden rounded-xl3 border border-line bg-card shadow-lift lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — invite panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-ink p-10 text-white sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_100%,rgba(230,57,70,0.18),transparent_70%)]" />
            <div className="relative">
              <span className="eyebrow text-white/70">Book Site Visit</span>
              <h2 className="h-display mt-4 text-white text-[clamp(1.9rem,3.5vw,3rem)]">
                Experience Kalp Residency in person
              </h2>
              <p className="mt-4 max-w-sm text-white/65">
                Schedule a guided visit and walk the roads, parks and villas yourself. Our
                team will assist you with everything — from layouts to loan options.
              </p>
            </div>
            <div className="relative mt-10 flex flex-col gap-3">
              <a
                href={`tel:${CONTACT.tel}`}
                className="flex items-center gap-3 text-white/85 transition hover:text-white"
              >
                <FiPhone className="h-5 w-5 text-accent" /> {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/85 transition hover:text-white"
              >
                <FaWhatsapp className="h-5 w-5 text-[#25D366]" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 sm:p-12">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-12 text-center"
              >
                <FiCheckCircle className="h-16 w-16 text-accent" />
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">Thank you!</h3>
                <p className="mt-2 max-w-sm text-muted">
                  Your request is on its way. Our team will reach out shortly to confirm
                  your site visit to Kalp Residency.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost mt-6">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="name">Full Name</label>
                    <input id="name" required className="input" placeholder="Your name"
                      value={form.name} onChange={(e) => update('name', e.target.value)} />
                  </div>
                  <div>
                    <label className="label" htmlFor="phone">Phone</label>
                    <input id="phone" required type="tel" className="input" placeholder="+91"
                      value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="email">Email</label>
                    <input id="email" type="email" className="input" placeholder="you@email.com"
                      value={form.email} onChange={(e) => update('email', e.target.value)} />
                  </div>
                  <div>
                    <label className="label" htmlFor="date">Preferred Date</label>
                    <input id="date" type="date" className="input"
                      value={form.date} onChange={(e) => update('date', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="label" htmlFor="message">Message</label>
                  <textarea id="message" rows={3} className="input resize-none"
                    placeholder="Tell us what you're looking for…"
                    value={form.message} onChange={(e) => update('message', e.target.value)} />
                </div>

                <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                  <button type="submit" className="btn-primary flex-1">
                    <FiCalendar className="h-4 w-4" /> Book Visit
                  </button>
                  <a href={`tel:${CONTACT.tel}`} className="btn-dark flex-1">
                    <FiPhone className="h-4 w-4" /> Call Now
                  </a>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex-1 bg-[#25D366] text-white hover:brightness-95"
                  >
                    <FaWhatsapp className="h-5 w-5" /> WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
