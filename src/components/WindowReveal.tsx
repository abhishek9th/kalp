import { useInView } from '../lib/useInView'

interface Props {
  image: string
  title: string
  subtitle?: string
  /** Height of the transparent window as a CSS value (defaults to 80vh). */
  height?: string
  /** Dark tint opacity over the image (0–1). */
  tint?: number
}

/**
 * "Window reveal" effect — NO image animation of any kind.
 *
 * The image is a `position: fixed` layer pinned to the viewport and pushed BEHIND
 * the page (negative z-index). Opaque white sections paint over it so it stays
 * hidden; a transparent, background-less "window" section lets it show through.
 * As the page scrolls, the white sections above/below slide over the stationary
 * image, opening and closing the window — like looking through a glass cut-out.
 *
 * The fixed layer is switched on only while this section is on screen (via
 * IntersectionObserver) so several window reveals can each show their own image
 * without bleeding through one another. The image never scales, moves or rotates.
 */
export default function WindowReveal({
  image,
  title,
  subtitle,
  height = '80vh',
  tint = 0.4,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>('0px')

  return (
    <>
      {/* Stationary image fixed to the viewport, behind all content (-z-10). */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500 ease-out"
        style={{ opacity: inView ? 1 : 0 }}
        aria-hidden
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black" style={{ opacity: tint }} />
      </div>

      {/* Transparent window cut into the page — no background. */}
      <section
        ref={ref}
        aria-label={title}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height, minHeight: 480 }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />

        <div className="px-6 text-center">
          <span className="eyebrow justify-center text-white/80">Kalp Residency</span>
          <h2 className="h-display mt-4 text-white text-[clamp(2rem,5vw,4.5rem)]">{title}</h2>
          {subtitle && (
            <p className="mt-4 font-alt text-lg font-medium text-white/85">{subtitle}</p>
          )}
        </div>
      </section>
    </>
  )
}
