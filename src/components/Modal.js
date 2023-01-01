import { createPortal } from "react-dom";

const Modal = (props) => {
  return createPortal(
    <div className="fixed z-[1000] top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden	bg-black-overlay">
      <div
        className={
          "w-full lg:w-[40%] bg-white dark:bg-[#020A13] shadow-xl h-full ml-auto flex flex-col overflow-auto text-[#020A13] dark:text-white"
        }
      >
        {props.children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
