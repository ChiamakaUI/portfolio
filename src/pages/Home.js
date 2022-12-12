import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-[80%] max-w-screen-2xl mt-36 mx-auto">
      <h2 className="dark:text-white text-6xl font-gabriela">
        Hello I'm Chiamaka Ezemba
      </h2>
      <p className="text-gray-500 dark:text-white text-xl font-gabriela my-6">
        I'm a software developer specializing in building exceptional user
        interfaces and <br />
        digital experiences.
      </p>
      <div className="flex flex-row items-center justify-between w-[10%] text-[#020A13] dark:text-white text-2xl ">
        <a href="https://www.linkedin.com/in/chiamaka-ezemba/" target="_blank" rel="noreferrer">
        <BsLinkedin />
        </a>
        <a href="https://github.com/ChiamakaUI" target="_blank" rel="noreferrer">
        <BsGithub />
        </a>
        <a href="https://twitter.com/Ada_ezemba" target="_blank" rel="noreferrer">
        <BsTwitter />
        </a>

      </div>
    </div>
  );
};

export default Home;

//className='bg-white dark:bg-slate-800 w-screen h-screen relative'
