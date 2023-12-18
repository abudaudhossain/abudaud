"use client";
import React, { useState } from 'react'

let projects = [1, 2, 3, 4, 5]
const Projects = () => {
    const [isSpan, setIsSpan] = useState(1)
    const spanHandler = (id) => {
        setIsSpan(id)
    }

    return (
        <section className="pt-8 grid grid-cols-6 gap-6">
            {
                projects.map((project, i) => <div key={i} className={`bg-red-400 z-10 h-[450px] relative  rounded-2xl ${isSpan == i && 'col-span-2'}`} onClick={() => spanHandler(i)}>
                    <h1 className={`text-4xl font-semibold rotate-[-90deg] absolute bottom-[100px] right-[-60px]  ${isSpan == i && 'hidden'} `}>Project Title</h1>
                    <div className={`${isSpan != i && 'hidden'} bg-[#00022270] p-8 bottom-0 absolute`}>
                        <h1 className={`text-3xl font-semibold pb-2`}>Project Title</h1>
                        <p className='textlgl pb-2'>
                            These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos.
                        </p>

                        <div className="gradient-border fond-semibold ">LIVE DEMO</div>

                    </div>
                </div>)
            }


        </section>
    )
}

export default Projects