import React from 'react'
import Projects from './Projects'

const CaseStudies = () => {
    return (
        <section className="container md:p-8 ">
            <h1 className="text-2xl font-semibold text-[#05C89A] pb-2">CASE STUDIES</h1>
            <h1 className="text-6xl font-bold text-white pb-2">Projects.</h1>
            <p className="max-w-[1000px] text-xl">These projects demonstrate my expertise with practical examples of some of my work, including brief
                descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate
                challenges, adapt to various technologies and efficiently oversee projects</p>
        <Projects />
        </section>
    )
}

export default CaseStudies