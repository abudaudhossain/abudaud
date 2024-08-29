"use client";
import { motion } from "framer-motion";
import React from "react";
import Projects from "./Projects";

const CaseStudies = () => {
    return (
        <section className="container md:p-8 p-3 mx-auto ">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.3,
                }}
                className="text-2xl font-semibold text-[#05C89A] pb-2"
            >
                CASE STUDIES
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.6,
                }}
                className="text-4xl sm:text-6xl font-bold text-white pb-2"
            >
                Projects.
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.9
            }}
            
            className="max-w-[1000px] text-base sm:text-xl">
                These projects demonstrate my expertise with practical examples
                of some of my work, including brief descriptions and links to
                code repositories and live demos. They showcase my ability to
                tackle intricate challenges, adapt to various technologies and
                efficiently oversee projects
            </motion.p>
            <Projects />
        </section>
    );
};

export default CaseStudies;
