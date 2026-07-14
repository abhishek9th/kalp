import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from './smooth'

/**
 * Returns a ref and whether the element is currently within the viewport band,
 * driven by GSAP ScrollTrigger (reliable with Lenis smooth scroll). Used to
 * switch a fixed background layer on only while its section is on screen, so
 * multiple full-viewport fixed images never reveal through one another.
 */
export function useInView<T extends HTMLElement>(_rootMargin = '0px') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let st: ScrollTrigger
    const ctx = gsap.context(() => {
      st = ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => setInView(self.isActive),
      })
    })
    return () => {
      st?.kill()
      ctx.revert()
    }
  }, [])

  return { ref, inView }
}
