import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import CaseStudies from './components/CaseStudies'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    <Tech />
     <CaseStudies />
    </>
  )
}
