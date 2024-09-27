import Image from 'next/image'
import Hero from '@/app/components/Hero'
import Navbar from '@/app/components/Navbar'
import Tech from '@/app/components/Tech'
import CaseStudies from '@/app/components/CaseStudies'
import ExperienceCard from '@/app/components/ExperienceCard'
import ContactUs from '@/app/components/ContactUs'

let workingExperiences = [
  {
    title: "Software Engineer",
    institute: "Singularity Limited",
    duration: "Dec 2022 - Current",
    description: [
      "Designed and developed REST API and Implementing different third-party packages",
      "Application maintenance, bug fixes, and adding new features like SMS integration auto mailing, payment methods",
      "Design database and write optimized DB query"
    ]
  }
]
let educationExperience = [
  {
    title: "B.Sc in Computer Science & Engineering",
    institute: "Dhaka International University: DIU",
    duration: "Aug 2022 - Current",
    description: [
      "Studies B.Sc in (CSE) Computer Science & Engineering at Dhaka International University - DIU",
    ]
  },
  {
    title: "Diploma in Computer Engineering",
    institute: "Kurigram Polytechnic Institute",
    duration: "Aug 2017 - Aug 2021",
    description: [
      "I have completed my \"Diploma in computer engineering\" course from Kurigram Polytechnic Institute.",
    ]
  }
]

export default function Home() {
  return (
    <main className='mx-auto'>
      <Navbar />
      <Hero />
      <Tech />
      <CaseStudies />
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 container mx-auto'>
        <div className="md:p-8 p-3 text-white">
          <h1 className="text-3xl sm:text-4xl pt-8 pb-4">Experience</h1>
          <div>
            {
              workingExperiences.map((experience, i) => (<ExperienceCard key={i} experience={experience} />))
            }
          </div>
        </div>
        <div className=" text-white md:p-8 p-3">
          <h1 className="text-3xl sm:text-4xl pt-8 pb-4">Education History</h1>
          <div>
            {
              educationExperience.map((experience, i) => (<ExperienceCard key={i} experience={experience} />))
            }
          </div>
        </div>
      </div>
      <ContactUs />
    </main>
  )
}
