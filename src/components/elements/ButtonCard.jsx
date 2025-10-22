import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// "https://www.ui.com/introduction"
const ButtonCard = ({ link, icon, text }) => {
  return (
    <Fragment>
      <a
        href={link}
        target="_blank"
        className="relative font-mono inline-flex items-center justify-start inline-block px-3 py-2 text-sm overflow-hidden  rounded-md group mr-2 mb-2"
      >
        <span className="absolute inset-0 rounded-sm bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-100"></span>
        <span className="absolute inset-0 m-[2px] rounded-sm bg-neutral-800"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-56 -translate-y-24 -rotate-45 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-400 opacity-100 group-hover:-translate-x-6"></span>
        <span className="flex items-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          <FontAwesomeIcon className={`text-[1rem] mr-2`} icon={icon} />
          {text}
        </span>
      </a>
    </Fragment>
  );
};

export default ButtonCard;
