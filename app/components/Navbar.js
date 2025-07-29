"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav
            className="bg-[#000222] text-white font-bold p-4 sticky top-0"
            style={{ boxShadow: "0px 11px 21px -19px #054365", zIndex: 100 }}
        >
            <div className="container mx-auto flex justify-between items-center transition ">
                <motion.div
                    initial={{
                        y: -60,
                    }}
                    animate={{
                        y: 0,
                    }}
                    transition={{
                        // delay: 0,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 120,
                    }}
                    viewport={{ once: true }}
                    className="text-2xl"
                >
                    <a href="#" className="text-[#05C89A]">
                        Ad.
                    </a>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 3,
                    }}
                    viewport={{ once: true }}
                    className="space-x-4 text-lg"
                >
                    <a
                        href="#"
                        className="hover:text-[#05C89A] transition-colors duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#tech"
                        className="hover:text-[#05C89A] transition-colors duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-[#05C89A] transition-colors duration-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-[#05C89A] transition-colors duration-300"
                    >
                        Contact
                    </a>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
