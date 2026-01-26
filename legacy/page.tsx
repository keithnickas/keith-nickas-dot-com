export const metadata = {
  title: 'Keith Nickas - Software Engineer',
  description: 'A personal website showcasing professional, and, personal works developed by Keith Nickas.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  )
}
