import { Fragment } from "react";

const ButtonNav = ({ onClick, text }) => {
  return (
    <Fragment>
      <button onClick={onClick} className="relative inline-flex items-center justify-center inline-block px-5 py-3 overflow-hidden rounded-bl-[2px] group cursor-pointer">
        <span className="absolute inset-x-0 bottom-0 -translate-x-50 rounded-sm h-[2px] transition-all duration-500 ease-in-out bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-100 group-hover:-translate-x-0"></span>
        <span className="relative text-white">{text}</span>
      </button>
    </Fragment>
  );
};

export default ButtonNav;