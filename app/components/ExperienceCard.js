"use client";
import { motion } from "framer-motion";
import React from "react";

function ExperienceCard({ experience }) {
    const { title, institute, duration, description } = experience;
    return (
        <div className="bg-[#1D283A] p-6 rounded mb-5">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.3,
                }}
                className="text-2xl font-semibold"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.6,
                }}
                className="font-semibold text-base text-slate-300"
            >
                {institute}{" "}
                <span className="font-base text-base text-[#05C89A]">
                    ({duration})
                </span>
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.9,
                }}
                className="mt-3"
            >
                {description.map((item, i) => (
                    <p
                        key={i}
                        className="pb-2 text-sm text-justify  text-slate-300"
                    >
                        {description.length > 1 && (
                            <span className="pr-2">✔</span>
                        )}
                        {item}
                    </p>
                ))}
            </motion.div>
        </div>
    );
}

export default ExperienceCard;
