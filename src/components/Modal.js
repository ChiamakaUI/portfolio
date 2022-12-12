import React from "react";
import { BsArrowLeftCircleFill, BsGithub } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { IoArrowRedoSharp } from "react-icons/io5";
import { createPortal } from "react-dom";

const Modal = ({ project, closeFunc }) => {
  return createPortal(
    <div className="fixed z-[1000] top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden	bg-black-overlay">
      <div className="w-[40%] bg-white dark:bg-[#020A13] shadow-xl h-full ml-auto flex flex-col overflow-auto">
        <BsArrowLeftCircleFill
          className="text-3xl text-[#020A13] dark:text-white my-2 ml-3 cursor-pointer"
          onClick={(event) => {
            closeFunc()
            event.stopPropagation();
        }}
        />
        <hr className="w-full border-slate-300 dark:border-[#3f566e]" />
        <div className="w-[90%] mx-auto mt-2">
          <p className="dark:text-white text-xl font-gabriela my-2 font-semibold">
            {project?.name}
          </p>
          <img src={project?.image} alt="project" className="w-full" />
          <div>
            <p className="dark:text-white text-xl font-gabriela my-2">
              Technologies
            </p>
            {project?.technologies.map((tech, index) => (
              <button
                key={index}
                className="font-gabriela font-semibold text-base px-4 py-2 rounded-lg bg-gray-800 text-white shadow-lg mx-0.5"
              >
                {tech}
              </button>
            ))}
          </div>
          <div>
            <div className="flex flex-row items-center">
              <GoGlobe className="text-xl mr-1 dark:text-white" />
              <p className="dark:text-white text-lg font-gabriela my-2">
                Website
              </p>
            </div>
            <p className="dark:text-white text-sm font-gabriela">
              {project?.liveUrl}
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center">
              <BsGithub className="text-xl mr-1.5 dark:text-white" />
              <p className="dark:text-white text-lg font-gabriela my-2">
                Github
              </p>
            </div>
            <p className="dark:text-white text-sm font-gabriela">
              {project?.githubLink}
            </p>
          </div>
        </div>
        <div className="w-full h-[45px] absolute bottom-0 text-center bg-[#3f566e] dark:bg-[#3f566e] ">
          <a
            href={project?.liveUrl}
            className="flex flex-row items-center w-[10%] absolute top-2 left-36"
            target="_blank" rel="noreferrer"
          >
            <p className="text-white text-base font-gabriela font-semibold">
              View Website
            </p>
            <IoArrowRedoSharp className="text-base text-white ml-1" />
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
