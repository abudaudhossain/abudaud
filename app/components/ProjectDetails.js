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
        className={`relative z-10 bg-[#1D283A] text-white rounded-xl shadow-xl p-6 max-w-3xl w-[90vw] max-h-[90vh] overflow-y-auto ${animateOut ? "animate-fadeOut" : "animate-fadeIn"
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
        <div className="space-y-6 mt-6">
          {/* Image */}
          {project?.image && (
            <div className="w-full h-[300px] sm:h-[400px] relative rounded-lg overflow-hidden">
              <Image
                src={project?.image || "/fallback.jpg"}
                alt={project?.title || "Project Image"}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Title & Description */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{project?.title}</h2>
              <p className="text-gray-300">{project?.description}</p>
            </div>

            {project?.role && (
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-100">Role</h3>
                <span className="inline-block bg-[#24344f] px-3 py-1 rounded-full text-sm">
                  {project.role}
                </span>
              </div>
            )}

            {Array.isArray(project?.tools) && project.tools.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-100">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-[#162033] px-3 py-1 rounded-full text-sm text-gray-200"
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
                  className="inline-flex items-center justify-center rounded-full bg-[#05C89A] px-4 py-2 text-sm font-semibold text-[#0A1120] hover:bg-[#04a481] transition-colors"
                >
                  Visit Live Project
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ProjectDetails;
