import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ProjectDetails = ({ show = false, onClose, project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setAnimateOut(false);
      document.body.style.overflow = "hidden";
    } else if (isVisible) {
      setAnimateOut(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
      }, 300); // match animation duration
    }
    return () => (document.body.style.overflow = "auto");
  }, [show]);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      onClose();
    }, 300); // match animation duration
  };

  if (typeof window === "undefined" || !isVisible) return null;

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
          <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
            <Image
              src={project?.image || "/fallback.jpg"}
              alt={project?.title || "Project Image"}
              fill
              className="object-cover"
            />
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{project?.title}</h2>
            <p className="text-gray-300">{project?.description}</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ProjectDetails;
