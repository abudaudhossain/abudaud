import Image from 'next/image'
import Hero from '@/app/components/Hero'
import Navbar from '@/app/components/Navbar'
import Tech from '@/app/components/Tech'
import CaseStudies from '@/app/components/CaseStudies'
import ExperienceCard from '@/app/components/ExperienceCard'
import ContactUs from '@/app/components/ContactUs'

let workingExperiences = [
  {
    title: "Junior Backend Developer",
    institute: "Singularity Limited",
    duration: "Dec 2022 - Current",
    description: [
      "Implemented scalable REST APIs to support a high volume of concurrent users, resulting in a 50% increase in system performance and improved user experience.",
      "Developed and implemented a highly efficient database architecture that streamlined data retrieval and storage processes, resulting in a 40% reduction in query response time and enhanced system performance.",
      "Added enhancements/features, fixed bugs and optimized existing applications",
      "Enabling seamless integration with third-party platforms."
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
        <div className=" text-white m-10">
          <h1 className="text-4xl py-10">Experience</h1>
          <div>
            {
              workingExperiences.map((experience, i) => (<ExperienceCard key={i} experience={experience} />))
            }
          </div>
        </div>
        <div className=" text-white m-10">
          <h1 className="text-4xl py-10">Education History</h1>
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
