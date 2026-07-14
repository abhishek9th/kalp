import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { NAV_LINKS, CONTACT, BRAND } from '../data/kalp'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
          solid
            ? 'bg-white/80 backdrop-blur-xl border-b border-line shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="shell flex items-center justify-between">
          <a
            href="#home"
            aria-label={`${BRAND.developer} — home`}
            className={`flex items-center transition-all duration-500 ${
              solid ? 'py-2.5' : 'py-3.5'
            }`}
          >
            <img
              src="/logo.png"
              alt={BRAND.developer}
              className={`w-auto object-contain transition-all duration-500 ${
                solid ? 'h-11' : 'h-14 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]'
              }`}
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-sm font-medium transition-colors ${
                  solid ? 'text-text hover:text-accent' : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT.tel}`}
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-500 sm:inline-flex ${
                solid
                  ? 'bg-accent text-white hover:shadow-accent'
                  : 'bg-white/15 text-white backdrop-blur-md border border-white/25 hover:bg-white/25'
              }`}
            >
              <FiPhone className="h-4 w-4" /> Call Now
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${
                solid ? 'text-ink' : 'text-white'
              }`}
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-white p-8"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="ml-auto grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-bg"
              >
                <FiX className="h-6 w-6" />
              </button>
              <div className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="border-b border-line py-4 font-display text-lg font-semibold text-ink"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <a href={`tel:${CONTACT.tel}`} className="btn-primary mt-8 w-full">
                <FiPhone className="h-4 w-4" /> {CONTACT.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
