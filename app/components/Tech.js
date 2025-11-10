"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

let techs = [
    {
        image: "https://i.ibb.co/S0SChJz/node-js-48.png",
        title: "Node JS",
    },
    {
        image: "https://i.ibb.co/VTYXDC1/express-js-48.png",
        title: "Express JS",
    },
    {
        image: "https://i.ibb.co/gWGh290/js-48.png",
        title: "Javascript",
    },

    {
        image: "https://i.ibb.co/9sNSR0s/prisma-orm-48.png",
        title: "Prisma",
    },
    {
        image: "https://i.ibb.co/xFZZJbb/postgresql-48.png",
        title: "PostgreSQL",
    },
    {
        image: "https://i.ibb.co/85trFBv/mongo-db-48.png",
        title: "MongoDB",
    },
    {
        image: "https://i.ibb.co/FXL17G7/mongoose-48.png",
        title: "Mongoose",
    },
    {
        image: "https://i.ibb.co/W21ph01/nextjs-48.png",
        title: "Next Js",
    },
    {
        image: "https://i.ibb.co/Dz8yDYV/tailwind-css-48.png",
        title: "Tailwind Css",
    },
    {
        image: "https://i.ibb.co/hCbqtP1/react-48.png",
        title: "React JS",
    },
    {
        image: "https://i.ibb.co/rkX7FTd/redux-48.png",
        title: "Redux",
    },
    {
        image: "https://i.ibb.co/2gqMXqK/typescript-48.png",
        title: "Typescript",
    },
    {
        image: "https://i.ibb.co/d6zXF2b/bootstrap-48.png",
        title: "Bootstrap",
    },
    {
        image: "https://i.ibb.co/br5c21s/css3-48.png",
        title: "CSS3",
    },
    {
        image: "https://i.ibb.co/b6DhPFP/html-48.png",
        title: "HTML",
    },
    {
        image: "https://i.ibb.co/vcsc4tJ/vs-code-48.png",
        title: "VS-Code",
    },
    {
        image: "https://i.ibb.co/YLqm9sq/stripe-48.png",
        title: "Stripe",
    },
    {
        image: "https://i.ibb.co/mbKsYLg/firebase-48.png",
        title: "Firebase",
    },
    {
        image: "https://i.ibb.co/61yvm8D/git-48.png",
        title: "Git",
    },
    {
        image: "https://i.ibb.co/jWstwQS/github-48.png",
        title: "Github",
    },
    {
        image: "https://i.ibb.co/sCrG50V/docker-48.png",
        title: "Docker",
    },
    {
        image: "https://i.ibb.co/VwL6JNy/socketsvg.png",
        title: "Socket.io",
    },

    {
        image: "https://i.ibb.co/6BnQHsz/jwt-48.png",
        title: "JWT",
    },

    {
        image: "https://i.ibb.co/KWdcKfT/postman-48.png",
        title: "Postman",
    },
    {
        image: "https://i.ibb.co/WvqwYVZ/npm-48.png",
        title: "NPM",
    },
];

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const Tech = () => {
    return (
        <section className="container md:p-8 p-3 mx-auto" id="tech">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 2,
                }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-[#05C89A] pb-2"
            >
                MY SKILLS
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 2.3,
                }}
                viewport={{ once: true }}
                className="text-4xl sm:text-6xl font-bold text-white pb-2"
            >
                Technology.
            </motion.h1>
            <div className="md:px-20 md:py-12 grid xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 pt-10 justify-center gap-3">
                {techs.map((tech, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 80, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.45, delay: 0.05 * i, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-7 text-center shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:border-[#05C89A] hover:bg-[#05C89A]/20"
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#05C89A]/25 via-transparent to-transparent blur-xl" />
                        </div>
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-white/[0.12] shadow-inner shadow-black/30">
                            <Image
                                src={tech.image}
                                width={54}
                                height={54}
                                alt={tech.title}
                                className="h-14 w-14 object-contain drop-shadow-[0_8px_20px_rgba(5,200,154,0.45)]"
                            />
                        </div>
                        <p className="relative mt-4 text-base font-semibold text-white tracking-wide">
                            {tech.title}
                        </p>
                        <span className="relative mt-2 text-xs uppercase tracking-[0.4em] text-white/50">
                            Expertise
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Tech;
