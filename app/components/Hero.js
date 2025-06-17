"use client";
import Link from "next/link";
import React from "react";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";
import { event } from "../lib/gtag";

const Hero = () => {
  return (
    <section className="flex items-center justify-center sm:p-8 p-3 my-20 flex-col md:flex-row ">
      {/* <!-- Left side (circle box) --> */}

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.1, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
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
        </motion.div>
      </div>
      {/* <!-- Right side (text) --> */}
      <div className="w-full md:w-1/2 pr-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
          }}
          className="text-3xl sm:text-4xl text-white pb-2"
        >
          Hi. <span className="text-[#05C89A]">I'm👋🏼</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.6,
          }}
          className="text-5xl sm:text-6xl font-bold text-white pb-2"
        >
          Abu Daud Hossain
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.9,
          }}
          className="pb-2 text-2xl mb-2 text-white  max-w-[600px]"
        >
          I'm a <span className="text-[#05C89A]">{<TextAnimation />}</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="pb-2 text-xl mb-2 text-white  max-w-[600px]"
        >
          With 2 years of experience in web development, I have designed and
          developed web applications using React JS and Node JS, implemented web
          application architecture, optimized code for performance, scalability
          and reliability
        </motion.p>

        {/* <!-- button --> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 1.5,
          }}
        >
          <Link
            href="https://drive.google.com/file/d/1hSNZO53JjUDwN_O-44sLmNFnPS2sEopr/view?usp=sharing"
            target="_blank"
            onClick={() =>
              event({
                action: "click",
                category: "Button",
                label: "Resume Link Clicked",
                value: "Resume Link",
              })
            }
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px  rgb(255, 255, 255)",
              }}
              transition={{
                duration: 0.1,
              }}
              className="gradient-border"
            >
              Resume
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
