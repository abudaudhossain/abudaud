import React from 'react'

function ExperienceCard() {
    return (
        <div className='bg-[#1D283A] p-4 rounded'>

            <h1 className='text-2xl font-semibold'>Junior Backend Developer</h1>
            <p className='font-semibold text-lg'>Singularity Limited <span className='font-base text-base text-[#05C89A]'>(Dec 2022 - Current)</span></p>
            <div className='mt-3'>
                <p className='pb-1'><span className='pr-2'>✔</span>Implemented scalable REST APIs to support a high volume of concurrent users, resulting in a 50% increase in system performance and improved user experience.</p>
                <p className='pb-1'><span className='pr-2'>✔</span>Developed and implemented a highly efficient database architecture that streamlined data retrieval and storage processes, resulting in a 40% reduction in query response time and enhanced system performance.</p>
                <p className='pb-1'><span className='pr-2'>✔</span>Added enhancements/features, fixed bugs and optimized existing applications</p>
                <p className='pb-1'><span className='pr-2'>✔</span>Enabling seamless integration with third-party platforms.</p>
            </div>
        </div>
    )
}

export default ExperienceCard