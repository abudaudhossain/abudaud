"use client"
import { TypeAnimation } from "react-type-animation";

const ParagraphAnimation = ({ text }) => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                text,
                1000,
                // `Backend Stack Developer💻`,
                // 1000,
                // `Frontend Developer💻`,
                // 1000,
                // `Web Developer(MERN)💻`,
                // 1000,
            ]}
            speed={50}
            repeat={Infinity}
        />
    );
};

export default ParagraphAnimation;
