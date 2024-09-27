import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";

const ProjectDetails = ({ show = false, onClose, project }) => {
  return ReactDOM.createPortal(
    <div className={`modal absolute ${show ? "" : "scale-0"}`}>
      {/* Modal Overlay */}
      <div
        className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-[#00022250]"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className={`fixed flex w-full h-full items-center justify-center duration-300 ${
            show ? "top-0" : "-top-50"
          }`}
        >
          <div
            className="relative bg-[#1D283A] rounded-lg p-5 max-w-[90vw] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <span
                onClick={onClose}
                className="cursor-pointer font-bold mb-3 text-white"
              >
                Close
              </span>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              {/* Image Section */}
              <div className="w-full h-[500px] relative">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover rounded"
                />
              </div>

              {/* Title and Description */}
              <div className="pt-2 text-white">
                <h1 className="text-2xl font-semibold">{project.title}</h1>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal") // Portal to render modal into
  );
};

export default ProjectDetails;
