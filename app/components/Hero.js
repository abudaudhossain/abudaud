"use client";
import Link from "next/link";
import React from "react";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";
import { event } from "../lib/gtag";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(5,200,154,0.18),_transparent_55%)]" />
      <div className="absolute inset-y-0 right-[-20%] -z-10 h-[540px] w-[540px] rounded-full bg-[#05C89A]/10 blur-3xl" />

      <div className="container mx-auto flex flex-col items-center justify-center gap-16 px-4 text-center lg:flex-row lg:items-stretch lg:justify-between lg:px-12 lg:text-left xl:px-20">
        {/* Text */}
        <div className="w-full max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#05C89A]/90"
          >
            Abu Daud Hossain
          </motion.span>

          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
          >
            Designing{" "}
            <span className="bg-gradient-to-r from-[#05C89A] via-[#4be5c7] to-[#05C89A] bg-clip-text text-transparent">
              high-impact
            </span>{" "}
            digital experiences.
          </motion.h1> */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-6 text-lg leading-8 text-white/70 sm:text-xl"
          >
            I’m a <span className="text-[#05C89A]">{<TextAnimation />}</span> <br />with 3+ years crafting scalable web apps.
            From React-driven interfaces to resilient Node.js backends, I partner with founders and product teams to
            launch polished experiences that perform under pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link
              href="mailto:abudaud.dev@gmail.com"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#05C89A]/40 bg-[#05C89A]/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#05C89A] transition hover:border-[#05C89A] hover:bg-[#05C89A]/25"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-[#05C89A] transition group-hover:scale-125" />
              Hire Me
              <span className="ml-2 hidden text-xs tracking-[0.4em] text-[#05C89A]/60 transition group-hover:text-[#05C89A]/90 sm:inline">
                AVAILABLE
              </span>
            </Link>
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
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/40 hover:bg-white/10"
            >
              <span className="h-2 w-2 rounded-full bg-white/70" />
              Download CV
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="mt-12 grid w-full gap-6 text-white/70 sm:grid-cols-3"
          >
            {[
              { label: "Production launches", value: "20+" },
              { label: "Startup partners", value: "12" },
              { label: "Experience", value: "3+ yrs" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-md transition hover:border-[#05C89A]/40 hover:bg-[#05C89A]/10"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative w-full max-w-xl mx-auto sm:mx-0"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/05 to-transparent blur-xl pointer-events-none" />
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.04] p-4 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,200,154,0.25),_transparent_65%)] pointer-events-none" />
            <div className="relative mx-auto flex items-center justify-center rounded-full bg-white/[0.04] shadow-inner shadow-black/40"
              style={{
                width: "min(75vw, 360px)",
                height: "min(75vw, 360px)",
                minWidth: "180px",
                minHeight: "180px"
              }}
            >
              <div className="absolute inset-2 sm:inset-4 rounded-full border border-[#05C89A]/30 blur-sm" />
              <img
                className="relative object-cover rounded-full shadow-[0px_20px_60px_rgba(5,200,154,0.25)]"
                style={{
                  width: "min(65vw, 240px, 16rem)",
                  height: "min(65vw, 240px, 16rem)",
                  minWidth: "120px",
                  minHeight: "120px"
                }}
                src="https://avatars.githubusercontent.com/u/73416372?v=4"
                alt="Abu Daud Hossain"
              />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-xs sm:text-xs md:text-sm uppercase tracking-[0.3em] text-white/40">
              <span className="w-full text-center sm:w-auto">Fullstack Developer</span>
              <span className="w-full text-center sm:w-auto">Remote Ready</span>
              <span className="w-full text-center sm:w-auto">Open to Contract</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
