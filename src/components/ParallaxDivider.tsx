import { useEffect, useRef } from 'react'
import { gsap } from '../lib/smooth'
import Img from './Img'

interface Props {
  image: string
  title: string
  subtitle?: string
  height?: string
}

/**
 * Cinematic parallax divider — the background image scales 1.1 → 1.0 and the dark
 * overlay fades as the section scrolls through the viewport (GSAP scrub, so it
 * behaves the same on all devices). Respects prefers-reduced-motion.
 */
export default function ParallaxDivider({
  image,
  title,
  subtitle,
  height = 'h-[80vh] min-h-[460px]',
}: Props) {
  const root = useRef<HTMLElement>(null)
  const imgWrap = useRef<HTMLDivElement>(null)
  const overlay = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduce) return
      gsap.fromTo(
        imgWrap.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
      gsap.fromTo(
        overlay.current,
        { opacity: 0.75 },
        {
          opacity: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
        },
      )
      gsap.from('.parallax-text > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 65%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      className={`relative flex ${height} items-center justify-center overflow-hidden bg-ink`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div ref={imgWrap} className="absolute inset-0 will-change-transform">
          <Img src={image} alt={title} className="h-full w-full object-cover" sizes="100vw" />
        </div>
        <div ref={overlay} className="absolute inset-0 bg-black" />
      </div>

      <div className="parallax-text relative z-10 px-6 text-center">
        <span className="eyebrow justify-center text-white/80">Kalp Residency</span>
        <h2 className="h-display mt-4 text-white text-[clamp(2rem,5vw,4.5rem)]">{title}</h2>
        {subtitle && (
          <p className="mt-4 font-alt text-lg font-medium text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
