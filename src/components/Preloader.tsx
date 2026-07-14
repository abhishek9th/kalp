import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const start = performance.now()
    const dur = 1600
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 350)
    }
    raf = requestAnimationFrame(tick)
    // Hard fallback: dismiss even if requestAnimationFrame never fires
    // (e.g. background/throttled tab) so the preloader can never trap the user.
    const fallback = setTimeout(() => {
      setCount(100)
      setDone(true)
    }, dur + 700)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(fallback)
    }
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-white"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-lg bg-accent grid place-items-center font-display font-extrabold text-white">
                K
              </span>
              <span className="font-display text-2xl font-extrabold tracking-tight">
                Kalp Residency
              </span>
            </div>
            <span className="mt-3 text-[11px] uppercase tracking-luxe text-white/40">
              by Landway Innovation
            </span>
          </motion.div>

          {/* progress bar */}
          <div className="mt-10 h-px w-56 overflow-hidden bg-white/15">
            <motion.div
              className="h-full bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ transformOrigin: 'left' }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          </div>
          <span className="mt-3 font-body text-xs tabular-nums text-white/40">
            {count}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
