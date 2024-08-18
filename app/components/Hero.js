import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import TextAnimation from "./TextAnimation";
import ParagraphAnimation from "./ParagraphAnimation";

const Hero = () => {
    return (
        <section className="flex items-center justify-center sm:p-8 p-3 my-20 flex-col md:flex-row ">
            {/* <!-- Left side (circle box) --> */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div
                    className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full flex items-center justify-center p-4 overflow-hidden before:block before:absolute before:-inset-1 before:bg-gradient-to-r before:from-[#0b575d] before:via-[#0f2a46] before:to-[#0b575d] relative inline-block before:animate-spin-slow"
                    style={{ boxShadow: " 0px 3px 100px 4px #054365" }}
                >
                    <img
                        className="overflow-hidden rounded-full z-10"
                        src="https://avatars.githubusercontent.com/u/73416372?v=4"
                        alt="Abu Daud Hossain"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            {/* <!-- Right side (text) --> */}
            <div className="w-full md:w-1/2 pr-8">
                <h1 className="text-3xl sm:text-4xl text-white pb-2">
                    Hi. <span className="text-[#05C89A]">I'm👋🏼</span>
                </h1>
                <h1 className="text-5xl sm:text-6xl font-bold text-white pb-2">
                    Abu Daud Hossain
                </h1>
                <p className="pb-2 text-2xl mb-2 text-white  max-w-[600px]">
                    I'm a{" "}
                    <span className="text-[#05C89A]">
                        {<TextAnimation />}
                    </span>
                </p>
                <p className="pb-2 text-xl mb-2 text-white  max-w-[600px]">
                    With 2 years of experience in Node JS backend development, I
                    have developed secure, reliable REST APIs for mobile and web
                    applications using the Express JS framework.
                </p>
                <div></div>

                {/* <!-- button --> */}
                <Link href="https://drive.google.com/file/d/1hSNZO53JjUDwN_O-44sLmNFnPS2sEopr/view?usp=sharing">
                    <div className="gradient-border">Resume</div>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
