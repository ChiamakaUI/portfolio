import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between text-[#020A13] dark:text-white text-2xl fixed bottom-0 left-0 right-0 p-5 bg-[#f6f4f06b] dark:bg-[#07121dd4] lg:bg-transparent lg:dark:bg-transparent lg:relative lg:w-[25%] lg:ml-28">
      <a
        href="https://www.linkedin.com/in/chiamaka-ezemba/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ChiamakaUI" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://twitter.com/Ada_ezemba" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default Footer;
