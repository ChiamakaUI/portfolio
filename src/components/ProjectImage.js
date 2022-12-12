import React, { useState } from "react";
import Modal from "./Modal";

const ProjectImage = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div
      className="w-[49%] shadow-md cursor-pointer rounded-lg relative"
      onClick={() => setShowModal(true)}
    >
      <img
        src={project?.image}
        alt={project?.name}
        className="w-full rounded-lg"
        // onClick={() => setShowModal(true)}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <div className="absolute bottom-4 left-2">
          <p className="white-space-normal text-sm md:text-sm font-bold font-gabriela font-semibold ml-1.5 mb-3">
            {project?.name}
          </p>
          <div>
            {project?.technologies.map((tech, index) => (
              <button
                key={index}
                className="font-gabriela font-semibold text-xs px-4 py-2 rounded-lg bg-gray-800 text-white shadow-lg mx-0.5"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
      {showModal && <Modal project={project} closeFunc={closeModal} />}
    </div>
  );
};

export default ProjectImage;

/* <img src="/projects/airbnb.gif" alt="project" className="w-[49%] mt-4 shadow-md" />
        <img src="/projects/netflix.gif" alt="project" className="w-[49%] mt-4 shadow-md" /> */
