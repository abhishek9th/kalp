import { useSmoothScroll } from './lib/smooth'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ParallaxDivider from './components/ParallaxDivider'
import WindowReveal from './components/WindowReveal'
import About from './components/About'
import MasterPlan from './components/MasterPlan'
import FloorPlans from './components/FloorPlans'
import Amenities from './components/Amenities'
import InteriorGallery from './components/InteriorGallery'
import ExteriorGallery from './components/ExteriorGallery'
import WhyChooseUs from './components/WhyChooseUs'
import LocationAdvantages from './components/LocationAdvantages'
import ConstructionQuality from './components/ConstructionQuality'
import Testimonials from './components/Testimonials'
import Developer from './components/Developer'
import BookingForm from './components/BookingForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import CTAModal from './components/CTAModal'
import { IMG } from './data/kalp'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        {/* 1 */} <Hero />
        {/* 2 */} <Highlights />
        {/* 3 — Window reveal (fixed image seen through a transparent gap) */}
        <WindowReveal
          image="/section1.png"
          title="Crafted For Modern Living"
          subtitle="Where luxury meets comfort."
        />
        {/* 4 */} <About />
        {/* 5 */} <MasterPlan />
        {/* 6 */} <FloorPlans />
        {/* 8 */} <Amenities />
        {/* 9 */} <InteriorGallery />
        {/* 10 */} <ExteriorGallery />
        {/* Window reveal — fixed image seen through a transparent gap */}
        <WindowReveal
          image="/2.jpeg"
          title="Room To Breathe, Space To Grow"
          subtitle="Low-density, green and gated by design."
        />
        {/* 11 */} <WhyChooseUs />
        {/* 12 */} <LocationAdvantages />
        {/* 13 */} <ConstructionQuality />
        {/* Parallax reveal 4 */}
        <ParallaxDivider
          image={IMG.aerial}
          title="Built On Trust. Delivered On Time."
          subtitle="A decade of landmark communities."
          height="h-[70vh] min-h-[420px]"
        />
        {/* 14 */} <Testimonials />
        {/* 15 */} <Developer />
        {/* 16 */} <BookingForm />
        {/* 17 */} <FAQ />
      </main>
      {/* 18 */}
      <Footer />
      <FloatingButtons />
      <CTAModal />
    </>
  )
}
