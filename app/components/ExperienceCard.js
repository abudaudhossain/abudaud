import React from 'react'

function ExperienceCard({ experience }) {
    const { title, institute, duration, description } = experience
    return (
        <div className='bg-[#1D283A] p-6 rounded mb-5'>

            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='font-semibold text-base text-slate-300'>{institute} <span className='font-base text-base text-[#05C89A]'>({duration})</span></p>
            <div className='mt-3'>
                {
                    description.map((item, i) => <p key={i} className='pb-2 text-sm text-justify  text-slate-300'>{description.length > 1 && <span className='pr-2'>✔</span>}{item}</p>)
                }
            </div>
        </div>
    )
}

export default ExperienceCard