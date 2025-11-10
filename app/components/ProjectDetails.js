'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";

const ProjectDetails = ({ show = false, onClose, project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const modalRoot =
    typeof window !== "undefined" ? document.getElementById("modal") : null;

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setAnimateOut(false);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden";
      }
    } else if (isVisible) {
      setAnimateOut(true);
      setTimeout(() => {
        setIsVisible(false);
        if (typeof document !== "undefined") {
          document.body.style.overflow = "auto";
        }
      }, 300); // match animation duration
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [show, isVisible]);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      onClose();
    }, 300); // match animation duration
  };

  if (typeof window === "undefined" || !isVisible || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-300 `}
      role="dialog"
      aria-hidden={!show}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 bg-[#1D283A] text-white rounded-xl shadow-xl p-6 max-w-3xl w-[90vw] max-h-[90vh] overflow-y-auto scrollbar-hide ${animateOut ? "animate-fadeOut" : "animate-fadeIn"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-sm font-semibold text-gray-200 hover:text-white"
        >
          ✕
        </button>

        {/* Content */}
        <div className="mt-6 space-y-8">
          <div className="space-y-6">
            {/* Image */}
            {project?.image && (
              <div className="relative w-full h-[280px] sm:h-[340px] md:h-[360px] rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/20">
                <Image
                  src={project?.image || "/fallback.jpg"}
                  alt={project?.title || "Project Image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={show}
                />
              </div>
            )}

            {/* Project Overview */}
            <div className="space-y-5">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {project?.title}
                </h2>
                {project?.shortDescription && (
                  <p className="text-sm uppercase tracking-[3px] text-[#05C89A] font-semibold">
                    {project.shortDescription}
                  </p>
                )}
              </div>

              {project?.role && (
                <div className="rounded-lg bg-[#162033] border border-white/5 px-4 py-3 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[2px] text-gray-300">
                    Role
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-[#24344f] px-3 py-1 text-sm font-medium text-gray-100">
                    {project.role}
                  </span>
                </div>
              )}

              {Array.isArray(project?.tools) && project.tools.length > 0 && (
                <div className="rounded-lg bg-[#162033] border border-white/5 px-4 py-3 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[2px] text-gray-300">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[#24344f] bg-[#1D283A] px-3 py-1 text-xs font-medium text-gray-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project?.live && project.live !== "#" && (
                <div>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-[#05C89A] px-5 py-2 text-sm font-semibold text-[#0A1120] hover:bg-[#04a481] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#05C89A]/60"
                  >
                    Visit Live Project
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          {project?.description && (
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Project Summary</h3>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ProjectDetails;
