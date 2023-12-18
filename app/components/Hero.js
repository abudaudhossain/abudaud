import React from 'react'

const Hero = () => {
    return (
        <section className="flex items-center justify-center p-8 my-20">
            {/* <!-- Left side (circle box) --> */}
            <div className="w-1/2 flex items-center justify-center">
                <div
                    className="w-[450px] h-[450px] rounded-full flex items-center justify-center p-4 overflow-hidden before:block before:absolute before:-inset-1 before:bg-gradient-to-r before:from-[#0b575d] before:via-[#0f2a46] before:to-[#0b575d] relative inline-block before:animate-spin-slow" style={{ boxShadow: " 0px 3px 100px 4px #054365" }}>
                    <img className="overflow-hidden rounded-full z-10"
                        src="https://avatars.githubusercontent.com/u/73416372?v=4" alt="Abu Daud Hossain" width="100%"
                        height="100%" />
                </div>

            </div>
            {/* <!-- Right side (text) --> */}
            <div className="w-1/2 pr-8">
                <h1 className="text-4xl text-white pb-2">Hi. I'm</h1>
                <h1 className="text-6xl font-bold text-white pb-2">Abu Daud Hossain</h1>
                <p className="pb-2 text-2xl mb-2 max-w-[600px]">A freelance <span className="text-[#05C89A]">Full Stack Developer</span> with 3
                    years
                    commercial experience create successful website ...</p>

                {/* <!-- button --> */}
                <div className="gradient-border ">awesome</div>
            </div>
        </section>
    )
}

export default Hero