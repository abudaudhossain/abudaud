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
                className="text-4xl sm:text-6xl font-bold text-white pb-2"
            >
                Technology.
            </motion.h1>
            <div className="md:px-20 md:py-12 grid xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 pt-10 justify-center ">
                {techs.map((tech, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.3 
                        }}
                        key={i}
                        className="tech-box text-center"
                    >
                        <Image
                            src={tech.image}
                            width={60}
                            height={60}
                            className="mx-auto mt-4"
                        />
                        <p className="font-bold text-sm py-2">{tech.title}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Tech;
