import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonHome = ({ link, icon, text, additionalClass, margin }) => {
  return (
    <Fragment>
      <a
        href={link}
        className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-semibold rounded-md group"
      >
        <span className="absolute inset-0 rounded-sm bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-100"></span>
        <span className="absolute inset-0 m-[2px] rounded-sm bg-neutral-800"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-56 -translate-y-24 -rotate-45 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-400 opacity-100 group-hover:-translate-x-6"></span>
        <span className="flex items-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          <FontAwesomeIcon
            className={`text-[1rem] ${margin} sm:mr-2 text-white`}
            icon={icon}
          />
          <span className={additionalClass}>{text}</span>
        </span>
      </a>
    </Fragment>
  );
};

export default ButtonHome;
