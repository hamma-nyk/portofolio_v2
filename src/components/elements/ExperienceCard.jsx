import { Fragment, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ExperienceCard = ({ title, img, position, date, side, jobdesk = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div
        className={`relative flex flex-col sm:flex-row items-center sm:items-start h-full ${
          side === "right" ? "sm:justify-end" : "sm:justify-start"
        }`}
      >
        {/* Dot */}
        <div className="absolute top-1/2 left-[-6px] sm:left-1/2 transform sm:-translate-x-1/2 bg-blue-400 w-4 h-4 rounded-full border-3 border-neutral-800 z-10"></div>

        {/* Card */}
        <div
          // className={`bg-neutral-800/50 backdrop-blur-md border border-neutral-700 p-5 rounded-xl shadow-lg w-[90%] sm:w-[45%] ${
          className={`bg-neutral-800/50 border border-neutral-700 p-5 rounded-xl shadow-lg w-[90%] sm:w-[45%] ${
            side === "right"
              ? "sm:ml-auto sm:text-left"
              : "sm:mr-auto sm:text-right"
          }`}
        >
          {/* Header (click to expand) */}
          <div
            className="flex items-center justify-between cursor-pointer select-none"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-4">
              <div className="min-w-14 min-h-14 h-14 w-14 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-600">
                <img
                  src={img}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-blue-300 text-sm">{position}</p>
              </div>
            </div>

            <div
              className={`ml-3 text-blue-400 duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          <p className="text-gray-300 text-sm mt-2">{date}</p>

          {/* Expandable content */}
          <div
            className={`duration-300 overflow-hidden ${
              open ? "max-h-100 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <ul
              className={`text-gray-300 text-sm list-disc list-outside leading-relaxed space-y-1 ${
                side === "right" ? "pl-5 text-left" : "pl-5 text-left"
              }`}
            >
              {jobdesk.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExperienceCard;
