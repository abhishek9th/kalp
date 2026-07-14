import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiPhone, FiUser, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { CTA_EVENT } from '../lib/cta'
import { BRAND } from '../data/kalp'

const WEBHOOK_URL = 'https://abhishekie.app.n8n.cloud/webhook/landway'

type Toast = { type: 'success' | 'error'; msg: string } | null

export default function CTAModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<Toast>(null)
  const [form, setForm] = useState({ name: '', phone: '' })

  // Open on demand (buttons) and automatically ~2.5s after every page load.
  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener(CTA_EVENT, show)
    const t = setTimeout(show, 2500)
    return () => {
      window.removeEventListener(CTA_EVENT, show)
      clearTimeout(t)
    }
  }, [])

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Auto-dismiss the toast.
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4500)
    return () => clearTimeout(t)
  }, [toast])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate that name and phone are not empty.
    if (!form.name.trim() || !form.phone.trim()) {
      setToast({ type: 'error', msg: 'Please enter your name and phone number.' })
      return
    }

    setLoading(true)
    setToast(null)
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), phone: form.phone.trim() }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)

      setForm({ name: '', phone: '' })
      setToast({ type: 'success', msg: 'Thank you! Our team will contact you shortly.' })
    } catch {
      setToast({ type: 'error', msg: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-ink text-white"
        >
          {/* accent glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(230,57,70,0.18),transparent_70%)]" />

          {/* top bar: logo (left) + close (right) */}
          <div className="relative flex items-center justify-between px-6 py-5 sm:px-10">
            <img
              src="/logo.png"
              alt={BRAND.developer}
              className="h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:h-12"
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* centered form */}
          <div className="relative flex flex-1 items-center justify-center px-6 py-10">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-full max-w-md text-center"
            >
              <span className="eyebrow justify-center text-white/70">{BRAND.project}</span>
              <h2 className="h-display mt-4 text-white text-[clamp(2.25rem,6vw,4rem)]">
                Connect With Us
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-white/65">
                Leave your details and our team will call you back with everything you need
                to know about Kalp Residency.
              </p>

              <form onSubmit={submit} className="mt-9 space-y-4 text-left">
                <div className="relative">
                  <FiUser className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                  <input
                    required
                    aria-label="Name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-white/40 focus:border-accent/70 focus:ring-4 focus:ring-accent/10"
                  />
                </div>
                <div className="relative">
                  <FiPhone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                  <input
                    required
                    type="tel"
                    aria-label="Phone number"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-white/40 focus:border-accent/70 focus:ring-4 focus:ring-accent/10"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? 'Sending…' : 'Request a Callback'}
                </button>
              </form>

              <button
                onClick={() => setOpen(false)}
                className="mt-5 text-sm text-white/45 transition hover:text-white/80"
              >
                Maybe later
              </button>
            </motion.div>
          </div>

          {/* Toast */}
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                role="status"
                className={`fixed bottom-6 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-3.5 text-sm font-medium shadow-lift ${
                  toast.type === 'success'
                    ? 'bg-white text-ink'
                    : 'bg-accent text-white'
                }`}
              >
                {toast.type === 'success' ? (
                  <FiCheckCircle className="h-5 w-5 text-accent" />
                ) : (
                  <FiAlertCircle className="h-5 w-5" />
                )}
                {toast.msg}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
