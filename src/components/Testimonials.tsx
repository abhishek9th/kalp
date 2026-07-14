import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaQuoteRight } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '../data/kalp'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by the families who live here"
          subtitle="Real stories from Kalp Residency homeowners and investors."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={700}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={28}
          breakpoints={{ 0: { slidesPerView: 1 }, 900: { slidesPerView: 2 } }}
          className="!pb-16"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name} className="!h-auto">
              <figure className="relative flex h-full flex-col rounded-xl3 border border-line bg-bg p-8 sm:p-10">
                <FaQuoteRight className="absolute right-8 top-8 h-10 w-10 text-accent/10" />
                <blockquote className="relative font-alt text-lg font-medium leading-relaxed text-ink">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-accent/20"
                  />
                  <div>
                    <div className="font-display font-bold text-ink">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-accent">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
