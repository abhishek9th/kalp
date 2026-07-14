import type { IconType } from 'react-icons'
import {
  FiMapPin,
  FiFileText,
  FiCreditCard,
  FiShield,
  FiLayers,
  FiHome,
  FiNavigation,
} from 'react-icons/fi'
import {
  TbRoad,
  TbBulb,
  TbDroplet,
  TbTrees,
  TbBuildingCottage,
  TbBuildingChurch,
  TbFence,
  TbBuildingStore,
  TbHeartHandshake,
  TbShieldCheck,
} from 'react-icons/tb'

/* ---------------- Brand / Contact ---------------- */
export const BRAND = {
  project: 'Kalp Residency',
  developer: 'Landway Innovation India Private Limited',
  developerShort: 'Landway Innovation',
  tagline: 'Premium Independent Villas in Lucknow',
  location: 'Near Shaheed Path, Lucknow',
}

export const CONTACT = {
  phone: '7497950070',
  phoneDisplay: '+91 74979 50070',
  tel: '+917497950070',
  email: 'info@landwayinnovation.com',
  whatsapp: 'https://wa.me/917497950070?text=Hi%2C%20I%27m%20interested%20in%20Kalp%20Residency',
  address:
    'Plot No-151, Sarvan Nagar, Near Shaheed Path, Lucknow, Uttar Pradesh 226008',
  mapEmbed:
    'https://www.google.com/maps?q=Landway+Innovation+Office&ll=26.7456617,80.9046548&z=16&output=embed',
  mapLink:
    'https://www.google.com/maps/dir/?api=1&destination=26.7456617,80.9046548',
}

/* ---------------- Image helper (Unsplash responsive) ---------------- */
export const img = (id: string, w = 1200, q = 78) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`

// Real Kalp Residency hero photo — place the file at public/hero-kalp.jpg
export const HERO_LOCAL = '/hero-kalp.jpeg'
export const HERO_FALLBACK = img('photo-1600585154340-be6161a56a0c', 1920, 75)

export const IMG = {
  heroPoster: img('photo-1600585154340-be6161a56a0c', 1920, 75),
  aerial: img('photo-1580587771525-78b9dba3b914', 1920, 78),
  night: img('photo-1600566753190-17f0baa2a6c3', 1920, 78),
  about: '/section3.jpg',
  masterPlan: '/masterplan.png',
  developer: img('photo-1486406146926-c627a92ad1ab', 1200),
  quality: img('photo-1541888946425-d81bb19240f5', 1200),
}

export const NAV_LINKS = [
  { label: 'Overview', href: '#highlights' },
  { label: 'About', href: '#about' },
  { label: 'Master Plan', href: '#master-plan' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#interior-gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#book' },
]

/* ---------------- Section 2 — Highlights ---------------- */
export interface Highlight {
  title: string
  desc: string
  icon: IconType
}
export const HIGHLIGHTS: Highlight[] = [
  { title: 'Premium Location', desc: 'Minutes from Shaheed Path, at the heart of growing Lucknow.', icon: FiMapPin },
  { title: 'Registry Available', desc: 'Clear titles with registry-ready ownership and full paperwork.', icon: FiFileText },
  { title: '40 ft Roads', desc: 'Wide, well-lit internal roads engineered for easy movement.', icon: TbRoad },
  { title: 'Loan Assistance', desc: 'Tie-ups with leading banks for smooth home-loan approvals.', icon: FiCreditCard },
  { title: 'Gated Community', desc: 'Secure, controlled-access living with round-the-clock security.', icon: FiShield },
  { title: 'Ready Infrastructure', desc: 'Water, drainage, electricity and roads already in place.', icon: FiLayers },
  { title: 'Independent Villas', desc: 'Spacious standalone homes with private space and privacy.', icon: FiHome },
  { title: 'Near Shaheed Path', desc: 'Effortless connectivity to the airport, city and expressway.', icon: FiNavigation },
]

/* ---------------- Section 4 — About statistics ---------------- */
export const ABOUT_STATS = [
  { label: 'Project Area', value: '25+ Acres' },
  { label: 'Location', value: 'Shaheed Path' },
  { label: 'Property Type', value: 'Independent Villas' },
  { label: 'Construction', value: 'Ongoing' },
  { label: 'Available Units', value: '120 Villas' },
  { label: 'Possession', value: 'On Schedule' },
  { label: 'Registry', value: 'Available' },
  { label: 'Home Loan', value: 'Assisted' },
]

/* ---------------- Section 5 — Master plan hotspots (% coords) ---------------- */
export const HOTSPOTS = [
  { label: 'Main Entry', x: 12, y: 78 },
  { label: '40 ft Road', x: 44, y: 52 },
  { label: 'Commercial', x: 72, y: 30 },
  { label: 'Green Area', x: 32, y: 24 },
  { label: 'Future Expansion', x: 84, y: 68 },
]

/* ---------------- Section 6 — Floor plans ---------------- */
export const FLOOR_PLANS = [
  {
    title: 'Ground Floor',
    area: '1,250 sq.ft',
    detail: 'Living, dining, modular kitchen, one bedroom, and a landscaped front court.',
    image: '/ground.jpg',
  },
  {
    title: 'First Floor',
    area: '1,180 sq.ft',
    detail: 'Master suite, two bedrooms, family lounge and a private balcony deck.',
    image: '/first.jpg',
  },
]

/* ---------------- Section 8 — Amenities ---------------- */
export const AMENITIES: { name: string; icon: IconType }[] = [
  { name: 'Security', icon: TbShieldCheck },
  { name: 'Wide Roads', icon: TbRoad },
  { name: 'Street Lights', icon: TbBulb },
  { name: 'Temple', icon: TbBuildingChurch },
  { name: 'Parks', icon: TbTrees },
  { name: 'Water Supply', icon: TbDroplet },
  { name: 'Drainage', icon: TbBuildingCottage },
  { name: 'Loan Assistance', icon: TbHeartHandshake },
  { name: 'Individual Registry', icon: FiFileText },
  { name: 'Municipal Approval', icon: TbBuildingStore },
  { name: 'Children Area', icon: TbFence },
]

/* ---------------- Section 9 — Interior gallery (masonry) ---------------- */
// Real interior photos from public/ (3 & 9 not provided), shuffled out of numeric order.
export const INTERIOR_GALLERY = [
  '/5.jpg',
  '/10.jpg',
  '/2.jpeg',
  '/7.jpg',
  '/1.jpg',
  '/8.jpg',
  '/4.jpg',
  '/6.jpg',
]

/* ---------------- Section 10 — Exterior gallery (slider) ---------------- */
export const EXTERIOR_GALLERY = [
  { label: 'Drone View', image: img('photo-1580587771525-78b9dba3b914', 1400) },
  { label: 'Elevation', image: '/section1.png' },
  { label: 'Entrance', image: img('photo-1600596542815-ffad4c1539a9', 1400) },
  { label: 'Roads', image: '/roads.png' },
  { label: 'Night View', image: img('photo-1600566753190-17f0baa2a6c3', 1400) },
  { label: 'Landscape', image: img('photo-1416331108676-a22ccb276e35', 1400) },
]

/* ---------------- Section 11 — Why choose ---------------- */
export const WHY_CHOOSE = [
  { title: 'Premium Construction', desc: 'Engineered with certified materials and rigorous quality checks at every stage.' },
  { title: 'Excellent Connectivity', desc: 'On the Shaheed Path corridor with quick access to airport, metro and highways.' },
  { title: 'High Appreciation', desc: 'A fast-growing pocket of Lucknow with strong long-term value potential.' },
  { title: 'Peaceful Living', desc: 'Low-density, green, gated surroundings designed for calm family life.' },
  { title: 'Modern Design', desc: 'Contemporary villa architecture with clean lines and functional layouts.' },
  { title: 'Trusted Developer', desc: 'Backed by Landway Innovation’s decade-long delivery track record.' },
  { title: 'Loan Assistance', desc: 'End-to-end support with leading banks for hassle-free financing.' },
  { title: 'Future Growth', desc: 'Planned commercial zones and expansion built into the master plan.' },
]

/* ---------------- Section 12 — Location advantages ---------------- */
export const LOCATION_POINTS = [
  { place: 'Amausi Airport', distance: '20 min' },
  { place: 'Reputed Schools', distance: '10 min' },
  { place: 'Hospitals', distance: '12 min' },
  { place: 'Metro Station', distance: '15 min' },
  { place: 'Shopping Mall', distance: '14 min' },
  { place: 'Shaheed Path', distance: '5 min' },
]

/* ---------------- Section 13 — Construction quality ---------------- */
export const CONSTRUCTION = [
  { title: 'AAC Blocks', desc: 'Lightweight, thermal-efficient blocks for cooler, stronger walls.' },
  { title: 'TMT Steel', desc: 'High-grade earthquake-resistant reinforcement steel.' },
  { title: 'Premium Tiles', desc: 'Branded vitrified flooring with anti-skid finishes.' },
  { title: 'Branded Electrical', desc: 'ISI-marked wiring, modular switches and safety systems.' },
  { title: 'Waterproofing', desc: 'Multi-layer treatment on terraces, bathrooms and basements.' },
  { title: 'Premium Paint', desc: 'Weatherproof exterior and washable interior emulsions.' },
  { title: 'Quality Plumbing', desc: 'CPVC piping with branded fittings for lasting performance.' },
]

/* ---------------- Section 14 — Testimonials ---------------- */
export const TESTIMONIALS = [
  {
    name: 'Rajesh Verma',
    role: 'Villa Owner',
    text: 'From the first site visit to registry, everything was transparent. The gated layout and 40 ft roads are exactly as promised. My family finally has the home we dreamed of.',
    avatar: img('photo-1633332755192-727a05c4013d', 200),
  },
  {
    name: 'Priya Srivastava',
    role: 'Home Buyer',
    text: 'I was nervous about buying, but Landway handled the loan and documentation flawlessly. Clear title, quick registry, and the Shaheed Path location is appreciating fast.',
    avatar: img('photo-1494790108377-be9c29b29330', 200),
  },
  {
    name: 'Amit Kushwaha',
    role: 'Investor',
    text: 'A genuinely well-planned township. Ready infrastructure, wide roads and a trusted developer — one of my best real-estate decisions in Lucknow.',
    avatar: img('photo-1507003211169-0a1dd7228f2d', 200),
  },
  {
    name: 'Sunita Devi',
    role: 'Villa Owner',
    text: 'The temple, the parks, the street lights — my parents feel at peace here. Landway built a community, not just houses.',
    avatar: img('photo-1544005313-94ddf0286df2', 200),
  },
]

/* ---------------- Section 15 — Developer ---------------- */
export const DEVELOPER = {
  vision: 'To build landmark communities where quality construction and thoughtful planning create lasting value for every family.',
  mission: 'Delivering registry-ready, premium homes on time — with transparency, trust and complete after-sales support.',
  stats: [
    { value: '10+', label: 'Years of Trust' },
    { value: '9+', label: 'Landmark Projects' },
    { value: '1200+', label: 'Happy Families' },
    { value: '500+', label: 'Acres Developed' },
  ],
}

/* ---------------- Section 17 — FAQ ---------------- */
export const FAQS = [
  {
    q: 'Are the villas at Kalp Residency registry-ready with clear titles?',
    a: 'Yes. Every independent villa comes with a clear legal title and individual registry. Our team assists you through the entire registration process.',
  },
  {
    q: 'How far is Kalp Residency from Shaheed Path?',
    a: 'The project is just about 5 minutes from Shaheed Path, giving you quick access to the airport, city centre and the expressway network.',
  },
  {
    q: 'Do you provide home-loan assistance?',
    a: 'Absolutely. We have tie-ups with leading banks and provide end-to-end support for documentation and quick loan approvals.',
  },
  {
    q: 'What is the possession status?',
    a: 'Construction is ongoing and progressing on schedule. Ready infrastructure — roads, water, drainage and electricity — is already in place.',
  },
  {
    q: 'Can I book a free site visit?',
    a: 'Yes. Use the site-visit form on this page or call us at +91 74979 50070 and we will arrange a guided visit at your convenience.',
  },
]
