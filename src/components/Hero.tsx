import { useEffect, useRef } from 'react'
import { FiCalendar, FiDownload, FiChevronDown } from 'react-icons/fi'
import { gsap } from '../lib/smooth'
import { HERO_LOCAL, HERO_FALLBACK, BRAND } from '../data/kalp'
import MagneticButton from './MagneticButton'
import { openCTA } from '../lib/cta'

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  const bg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.7 })

      // slow cinematic zoom on the background
      gsap.fromTo(
        bg.current,
        { scale: 1.18 },
        { scale: 1, duration: 8, ease: 'power1.out' },
      )

      // headline word reveal (mask up)
      tl.from('.hero-word', {
        yPercent: 120,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.12,
      })
        .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.7 }, '-=0.7')
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, y: 24, duration: 0.7, stagger: 0.12 }, '-=0.4')
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.2')

      // parallax on scroll
      gsap.to(bg.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={root}
      className="relative flex h-svh min-h-[640px] items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background media — drop a client drone video into <video> when available */}
      <div ref={bg} className="absolute inset-0 will-change-transform">
        <img
          src={HERO_LOCAL}
          onError={(e) => {
            // Fall back to a stock image until the real photo is added.
            const el = e.currentTarget
            if (el.src !== HERO_FALLBACK) el.src = HERO_FALLBACK
          }}
          alt="Kalp Residency independent villas near Shaheed Path, Lucknow"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* dark cinematic gradient — lightened for a brighter hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,transparent,rgba(0,0,0,0.3))]" />

      <div className="relative z-10 shell flex flex-col items-center text-center">
        <span className="hero-eyebrow mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[11px] font-semibold uppercase tracking-luxe text-white/85 backdrop-blur-sm">
          {BRAND.location}
        </span>

        <h1 className="h-display text-white text-[clamp(2.75rem,8vw,7rem)]">
          {['Kalp', 'Residency'].map((w) => (
            <span key={w} className="mx-2 inline-block overflow-hidden align-bottom">
              <span className="hero-word inline-block">{w}</span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-6 max-w-2xl text-balance font-alt text-lg font-medium text-white/90 sm:text-xl">
          {BRAND.tagline}
          <span className="mt-1 block text-base font-normal text-white/65">
            Luxury living with excellent connectivity.
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="hero-cta">
            <MagneticButton onClick={openCTA} className="btn-primary group">
              <FiCalendar className="h-4 w-4" /> Book Site Visit
            </MagneticButton>
          </div>
          <div className="hero-cta">
            <MagneticButton
              href="#floor-plans"
              className="btn group border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            >
              <FiDownload className="h-4 w-4" /> Download Brochure
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#highlights"
        className="hero-scroll absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </span>
        <FiChevronDown className="h-4 w-4 animate-pulse" />
      </a>
    </section>
  )
}
