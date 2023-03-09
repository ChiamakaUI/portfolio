import { Link, useNavigate } from "react-router-dom";
import ToggleIcon from "./ToggleIcon";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Modal from "./Modal";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center justify-between max-w-screen-2xl w-[85%] mx-auto pt-8">
      <Link to="/">
        <h2 className="text-5xl font-abril dark:text-white">CE.</h2>
      </Link>
      <div className="lg:flex flex-row items-center justify-between text-gray-500 dark:text-white text-lg font-gabriela w-[40%] hidden">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/contact">Blog</Link> */}
        <button onClick={() => window.location.href = 'https://chiamakaezemba.hashnode.dev/'}>Blog</button>
        <ToggleIcon />
      </div>
      <div className="lg:hidden">
        <HiMenu
          className="text-4xl dark:text-white"
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <Modal>
          <div className="flex flex-row justify-between w-[80%] mx-auto my-8 h-full">
            <ToggleIcon />
            <div className="flex flex-col items-center justify-between text-xl h-[55%] uppercase font-semibold font-gabriela">
              <button
                onClick={() => {
                  navigate("/");
                  setShowModal(false);
                }}
                className="uppercase"
              >
                Home
              </button>

              <button
                onClick={() => {
                  navigate("/about");
                  setShowModal(false);
                }}
                className="uppercase"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/projects");
                  setShowModal(false);
                }}
                className="uppercase"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setShowModal(false);
                }}
                className="uppercase"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  window.location.href = 'https://chiamakaezemba.hashnode.dev/'
                  setShowModal(false);
                }}
                className="uppercase"
              >
                Blog
              </button>
            </div>
            <RxCross2
              className="text-4xl"
              onClick={() => setShowModal(false)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;

