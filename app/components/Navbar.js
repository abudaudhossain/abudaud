"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("#");
      if (isOpen) {
        setTimeout(() => setIsOpen(false), 200);
      }
      return;
    }

    const el = document.getElementById(targetId.replace("#", ""));
    if (el) {
      const nav = document.getElementById("site-nav");
      const navHeight = nav ? nav.offsetHeight : 0;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offset = Math.max(elementPosition - navHeight - 12, 0);

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      setActive(targetId);
      if (isOpen) {
        setTimeout(() => setIsOpen(false), 200);
      }
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#", "#tech", "#projects", "#contact"];
      let current = "#";

      sections.forEach((id) => {
        const el =
          id === "#"
            ? document.documentElement // top of page
            : document.getElementById(id.replace("#", ""));
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 150; // Offset for better detection
          
          if (id === "#") {
            // For home section, check if we're at the top
            if (window.scrollY < 200) {
              current = "#";
            }
          } else if (id === "#contact") {
            // For contact section, check if it's visible or near bottom
            if (rect.top <= offset || window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
              current = id;
            }
          } else {
            // For other sections
            if (rect.top <= offset && rect.bottom >= offset) {
              current = id;
            }
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    const closeOnResize = () => setIsOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  const links = [
    { label: "Home", id: "#" },
    { label: "About", id: "#tech" },
    { label: "Projects", id: "#projects" },
    { label: "Contact", id: "#contact" },
  ];

  return (
    <nav
      id="site-nav"
      role="navigation"
      aria-label="Main Navigation"
      className="sticky top-0 z-[110] bg-[#000222]/95 backdrop-blur border-b border-white/5 text-white"
      style={{ boxShadow: "0px 11px 21px -19px #054365" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
          className="text-2xl font-semibold"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center  gap-2 text-[#05C89A]"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center  rounded-full border border-[#05C89A]/40 bg-[#05C89A]/10 text-sm font-bold uppercase tracking-[0.3em]">
              AD
            </span>
            <span className="hidden text-sm uppercase tracking-[0.35em] text-white/70 sm:inline">
              Abu Daud
            </span>
          </a>
        </motion.div>

        {/* Desktop links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.35em] md:flex"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className={`transition-colors duration-300 ${
                active === link.id
                  ? "text-[#05C89A]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition hover:border-[#05C89A]/60 hover:bg-[#05C89A]/10 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.2, ease: "easeIn" },
          },
        }}
        className="overflow-hidden md:hidden"
      >
        <div className="space-y-3 border-t border-white/5 bg-[#000222]/98 px-4 pb-6 pt-4 text-sm font-semibold uppercase tracking-[0.35em]">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className={`block rounded-full px-4 py-3 text-center transition ${
                active === link.id
                  ? "bg-[#05C89A]/15 text-[#05C89A]"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
