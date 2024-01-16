import Image from 'next/image'
import Hero from '@/app/components/Hero'
import Navbar from '@/app/components/Navbar'
import Tech from '@/app/components/Tech'
import CaseStudies from '@/app/components/CaseStudies'
import ExperienceCard from '@/app/components/ExperienceCard'

let experiences = [1]

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <CaseStudies />
      <div className=" text-white m-10 w-1/2">
        <h1 className="text-center text-4xl py-10">Experience</h1>
        <div>
          {
            experiences.map((experience,i) => (<ExperienceCard  key={i}/>))
          }
        </div>
      </div>
    </>
  )
}
