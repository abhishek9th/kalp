import { useRef, type ReactNode, type MouseEvent } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number
  download?: boolean
  target?: string
  ariaLabel?: string
}

/**
 * Magnetic hover wrapper — the element eases toward the cursor while hovered
 * and springs back on leave. Works for both links and buttons.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = 'btn-primary',
  strength = 0.35,
  download,
  target,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  const move = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  const common = {
    ref,
    onMouseMove: move,
    onMouseLeave: reset,
    className,
    'aria-label': ariaLabel,
    style: { transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)' },
  }

  if (href) {
    return (
      <a
        {...common}
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }
  return (
    <button {...common} type="button" onClick={onClick}>
      {children}
    </button>
  )
}
