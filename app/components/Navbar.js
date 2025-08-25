"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("#");

  // Smooth scroll handler
  const handleSmoothScroll = (
    e,
    targetId
  ) => {
    e.preventDefault();

    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("#");
      return;
    }

    const el = document.getElementById(targetId.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(targetId);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", id: "#" },
    { label: "About", id: "#tech" },
    { label: "Projects", id: "#projects" },
    { label: "Contact", id: "#contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="bg-[#000222] text-white font-bold p-4 sticky top-0"
      style={{ boxShadow: "0px 11px 21px -19px #054365", zIndex: 100 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
          className="text-2xl"
        >
          <a
            href="#"
            className="text-[#05C89A]"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            Ad.
          </a>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 3 }}
          viewport={{ once: true }}
          className="space-x-6 text-lg"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className={`transition-colors duration-300 ${
                active === link.id ? "text-[#05C89A]" : "hover:text-[#05C89A]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
