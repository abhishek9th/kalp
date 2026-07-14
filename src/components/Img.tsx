import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  sizes?: string
  eager?: boolean
}

/**
 * Lightweight lazy image with a blur-up fade-in. Builds a responsive srcSet
 * from Unsplash width params so the browser downloads the right size.
 */
export default function Img({ src, alt, className = '', sizes, eager }: Props) {
  const [loaded, setLoaded] = useState(false)

  const srcSet = src.includes('images.unsplash.com')
    ? [480, 800, 1200, 1600, 1920]
        .map((w) => `${src.replace(/w=\d+/, `w=${w}`)} ${w}w`)
        .join(', ')
    : undefined

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes ?? '100vw'}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[opacity,filter,transform] duration-[900ms] ease-luxe ${
        loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md scale-[1.02]'
      }`}
    />
  )
}
