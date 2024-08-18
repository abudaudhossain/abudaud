"use client";
import Link from 'next/link';
import React, { useState } from 'react'

let projects = [
    {
        id: 1,
        image: "https://i.ibb.co/W39h6sF/dettol.jpg",
        title: "Dettol be 100% Fan",
        shortDescription: "Dettol Be 100% Fan is a campaign web application of Dettol BD during the Cricket World Cup 2023. This is a quiz game application.",
        description: "Dettol Be 100% Fan is a campaign web application of Dettol BD during the Cricket World Cup 2023. This is a quiz game application. Here user login with a phone number and answers ten questions daily and 15 seconds are given to answer each question. 6 points are awarded for each correct answer. The web application has daily and weekly leaderboards",
        role: "Backend Developer",
        tools: ["Node JS", "Express JS", "MongoDB", "Mongoose", "JWT"],
        live: "https://be100percentfan.com/"
    },
    {
        id: 2,
        image: "https://i.ibb.co/89cNSpY/screencapture-dbl-kiosk-platform-frontend-vercel-app-2024-03-02-16-12-41.png",
        title: "DBL Kiosk Platform",
        shortDescription: "In the DBL Ceramics Kiosk Solution project, I played a crucial role in developing a state-of-the-art system to enhance the on-site consumer experience at nationwide display centers.",
        description: "In the DBL Ceramics Kiosk Solution project, I played a crucial role in developing a state-of-the-art system to enhance the on-site consumer experience at nationwide display centers. Responsibilities included creating a web application and administrative panel for kiosk setups, integrating user authentication, dashboard functionalities, and interactive features.",
        role: "Backend Developer",
        tools: ["Node JS", "Express JS", "MongoDB", "Mongoose", "multer", "JWT"],
        live: "https://dbl-kiosk-platform-frontend.vercel.app/seller-login"
    },
    {
        id: 3,
        image: "https://i.ibb.co/xf4BQWt/OWINJ61.png",
        title: "Big Blue - Truck management",
        shortDescription: "Big Blue is a trucking services mobile application and web platform",
        role: "Backend Developer",
        description: "Big Blue is a trucking services mobile application and web platform",
        role: "Backend Developer",
        tools: ["Node JS", "Express JS", "MongoDB", "Mongoose", "multer", "firebase", "JWT", "twilio"],
        live: "#"
    },
    {
        id: 4,
        image: "https://i.ibb.co/9gQxPFK/grevent.png",
        title: "GRevent - Event management",
        shortDescription: "GRevent is an event management platform for users who can create, exhibit or attend a variety of events",
        description: "GRevent is an event management platform for users who can create, exhibit or attend a variety of events",
        role: "Backend Developer",
        tools: ["Node JS", "Express JS", "MongoDB", "Mongoose", "multer", "firebase", "JWT", "twilio"],
        live: "#"
    },
    {
        id: 5,
        image: null,
        title: "Lead Management",
        shortDescription: null,
        description: "These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos.",
        role: "Backend Developer",
        tools: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "multer", "JWT"],
        live: "#"
    },

]
const Projects = () => {
    const [isSpan, setIsSpan] = useState(1)
    const spanHandler = (id) => {
        setIsSpan(id)
    }

    return (
        <section className="pt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6" id='projects'>
            {
                projects.map((project, i) => <div key={i + project.title} className={`bg-cover bg-center bg-red-400 z-10 h-[450px] relative  rounded-2xl ${isSpan == i && 'md:col-span-2'}`} onClick={() => spanHandler(i)} style={{ backgroundImage: `${project.image && `url(${project.image})`}` }}>
                    <div className="absolute inset-0 bg-opacity-50 bg-[#202124]"></div>
                    <h1 className={`text-2xl sm:text-4xl font-semibold rotate-[-90deg] absolute bottom-[100px] hidden sm:block sm:right-[-40px]  ${isSpan == i && 'sm:hidden'} `}>{project.title}</h1>
                    <div className={`${isSpan != i && 'sm:hidden'} bg-[#00022270] p-8 bottom-0 absolute`}>
                        <h1 className={`text-xl sm:text-3xl font-semibold pb-2`}>{project.title}</h1>
                        <p className='pb-2'>
                            {
                                project.shortDescription ? project.shortDescription : project.description
                            }
                        </p>
                        <div className='text-base mb-3 flex flex-wrap items-center'>
                            <p className='font-semibold pe-3'>Tools:</p>
                            {
                                project.tools.map(tool => <p key={tool} className="bg-[#1D283A] text-sm font-medium px-2.5 py-0.5 m-1 rounded dark:bg-blue-900 dark:text-blue-300">{tool}</p>
                                )
                            }
                        </div>
                        <h1 className='text-lg font-semibold mb-2'>Role: <span className="bg-[#1D283A] px-2.5 py-1 m-1 rounded dark:bg-blue-900 dark:text-blue-300">{project.role}</span></h1>
                        <div className='flex justify-between'>
                            <Link href={project.live}>
                                <div className="gradient-border font-semibold">LIVE DEMO</div>
                            </Link>
                            <div className="gradient-border font-semibold ">DETAILS</div>
                        </div>
                    </div>
                </div>)
            }


        </section>
    )
}

export default Projects