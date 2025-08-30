"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import Project from "./Project";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

let projects = [
  {
    id: 1,
    image: "https://i.ibb.co/W39h6sF/dettol.jpg",
    title: "Dettol be 100% Fan",
    shortDescription:
      "Dettol Be 100% Fan is a campaign web application of Dettol BD during the Cricket World Cup 2023. This is a quiz game application.",
    description:
      "Dettol Be 100% Fan is a campaign web application of Dettol BD during the Cricket World Cup 2023. This is a quiz game application. Here user login with a phone number and answers ten questions daily and 15 seconds are given to answer each question. 6 points are awarded for each correct answer. The web application has daily and weekly leaderboards",
    role: "Backend Developer",
    tools: ["Node JS", "Express JS", "MongoDB", "Mongoose", "JWT"],
    live: "https://be100percentfan.com/",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/89cNSpY/screencapture-dbl-kiosk-platform-frontend-vercel-app-2024-03-02-16-12-41.png",
    title: "DBL Kiosk Platform",
    shortDescription:
      "In the DBL Ceramics Kiosk Solution project, I played a crucial role in developing a state-of-the-art system to enhance the on-site consumer experience at nationwide display centers.",
    description:
      "In the DBL Ceramics Kiosk Solution project, I played a crucial role in developing a state-of-the-art system to enhance the on-site consumer experience at nationwide display centers. Responsibilities included creating a web application and administrative panel for kiosk setups, integrating user authentication, dashboard functionalities, and interactive features.",
    role: "Backend Developer",
    tools: ["Node JS", "Express JS", "MongoDB", "Mongoose", "multer", "JWT"],
    live: "https://dbl-kiosk-platform-frontend.vercel.app/seller-login",
  },
  {
    id: 3,
    image: "https://i.ibb.co/xf4BQWt/OWINJ61.png",
    title: "Big Blue - Truck management",
    shortDescription:
      "Big Blue is a trucking services mobile application and web platform",
    role: "Backend Developer",
    description:
      "Big Blue is a trucking services mobile application and web platform",
    role: "Backend Developer",
    tools: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "Mongoose",
      "multer",
      "firebase",
      "JWT",
      "twilio",
    ],
    live: "#",
  },
  {
    id: 4,
    image: "https://i.ibb.co/9gQxPFK/grevent.png",
    title: "GRevent - Event management",
    shortDescription:
      "GRevent is an event management platform for users who can create, exhibit or attend a variety of events",
    description:
      "GRevent is an event management platform for users who can create, exhibit or attend a variety of events",
    role: "Backend Developer",
    tools: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "Mongoose",
      "multer",
      "firebase",
      "JWT",
      "twilio",
    ],
    live: "#",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dkioxcw3q/image/upload/v1724942800/lead_hkw2ek.jpg",
    title: "Lead Management",
    shortDescription: null,
    description:
      "Developed and implemented backend functionalities for lead creation, tracking, and management, including tools for quotations and invoices with support for partial payments and financial tracking.",
    role: "Backend Developer",
    tools: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "multer", "JWT"],
    live: "https://lead-management-taupe.vercel.app/",
  },
];
const Projects = () => {
  const swiperRef = useRef(null);

  const [swiperIndex, setSwiperIndex] = useState(0);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <motion.div
      // initial={{ opacity: 0, y: 60 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{
      //   type: "tween",
      //   duration: 0.4,
      //   delay: 0.6,
      // }}
      // viewport={{ once: true }}
      className='container pt-10 md:pt-20'>
      <Swiper
        spaceBetween={30}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        ref={swiperRef}
        className="overflow-hidden"
      >
        {projects?.map((project, index) => {
          return (
            <SwiperSlide key={index} className="relative group">
              <Project cat={project} />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="flex justify-center gap-4 z-10 mt-10">
        <div
          className="cursor-pointer bg-transparent hover:bg-[#cf969225] border border-[#D9D4D4] p-2 md:p-4 text-[#05C89A] rounded-full hover:text-[#05C89A] transition"
          onClick={goToPrevSlide}
        >
          <FaArrowLeft className="text-xl " />
        </div>

        <div
          className="cursor-pointer bg-transparent hover:bg-[#cf969225] border border-[#D9D4D4] p-2 md:p-4 text-[#05C89A] rounded-full hover:text-[#05C89A] transition"
          onClick={goToNextSlide}
        >
          <FaArrowRight className="text-xl " />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
