import { motion } from 'framer-motion'

interface Props {
  eyebrow: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: Props) {
  const alignCls =
    align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex max-w-3xl flex-col gap-4 md:mb-16 ${alignCls}`}
    >
      <span
        className={`eyebrow ${align === 'center' ? 'justify-center' : ''} ${
          light ? 'text-white' : ''
        }`}
      >
        {eyebrow}
      </span>
      {title && (
        <h2
          className={`h-display text-[clamp(2rem,4.5vw,3.75rem)] text-balance ${
            light ? 'text-white' : ''
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`lead max-w-xl ${light ? 'text-white/70' : ''}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
