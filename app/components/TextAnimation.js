"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                `Full Stack Developer💻`,
                1000,
                `Backend Stack Developer💻`,
                1000,
                `Frontend Developer💻`,
                1000,
                `Web Developer(MERN)💻`,
                1000,
            ]}
            speed={50}
            repeat={Infinity}
        />
    );
};

export default TextAnimation;
