"use client";
import React, { useState } from 'react'

let projects = [
    {
        id: 1,
        image: "https://i.ibb.co/W39h6sF/dettol.jpg",
        title: "Dettol be 100% Fan",
        description: " These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos.",
        live: "https://be100percentfan.com/"
    },
    {
        id: 1,
        image: "https://i.ibb.co/89cNSpY/screencapture-dbl-kiosk-platform-frontend-vercel-app-2024-03-02-16-12-41.png",
        title: "DBL Kiosk Platform",
        description: "These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos.",
        live: "https://dbl-kiosk-platform-frontend.vercel.app/seller-login"
    },
    {
        id: 1,
        image: "https://i.ibb.co/xf4BQWt/OWINJ61.png",
        title: "Big Blue - Truck management",
        description: "Big Blue is a trucking services mobile application and web platform",
        live: "#"
    },
    {
        id: 1,
        image: null,
        title: "GRevent - Event management",
        description: "GRevent is an event management platform for users who can create, exhibit or attend a variety of events",
        live: "#"
    },
    {
        id: 1,
        image: null,
        title: "Lead Management",
        description: " These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos.",
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
                projects.map((project, i) => <div key={i} className={`bg-cover bg-center bg-red-400 z-10 h-[450px] relative  rounded-2xl ${isSpan == i && 'md:col-span-2'}`} onClick={() => spanHandler(i)} style={{ backgroundImage: `${project.image && `url(${project.image})`}` }}>
                    <div className="absolute inset-0 bg-opacity-50 bg-[#202124]"></div>
                    <h1 className={`text-2xl sm:text-4xl font-semibold rotate-[-90deg] absolute bottom-[100px] hidden sm:block sm:right-[-40px]  ${isSpan == i && 'sm:hidden'} `}>{project.title}</h1>
                    <div className={`${isSpan != i && 'sm:hidden'} bg-[#00022270] p-8 bottom-0 absolute`}>
                        <h1 className={`text-xl sm:text-3xl font-semibold pb-2`}>{project.title}</h1>
                        <p className='pb-2'>
                            {
                                project.description
                            }
                        </p>
                        <div className="gradient-border fond-semibold ">LIVE DEMO</div>
                    </div>
                </div>)
            }


        </section>
    )
}

export default Projects