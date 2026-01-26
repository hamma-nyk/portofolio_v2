import { Fragment } from "react";

// const ButtonNav = ({ onClick, text }) => {
//   return (
//     <Fragment>
//       <button onClick={onClick} className="relative inline-flex items-center justify-center inline-block px-5 py-3 overflow-hidden rounded-bl-[2px] group cursor-pointer">
//         <span className="absolute inset-x-0 bottom-0 -translate-x-50 rounded-sm h-[2px] transition-all duration-500 ease-in-out bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-100 group-hover:-translate-x-0"></span>
//         <span className="relative text-white">{text}</span>
//       </button>
//     </Fragment>
//   );
// };

// export default ButtonNav;

const ButtonNav = ({ onClick, text, isActive }) => {
  return (
    <Fragment>
      <button
        onClick={onClick}
        className="group relative px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
      >
        {/* 🔹 Background Glow (Hanya muncul saat Active, tapi sangat halus) */}
        <span
          className={`absolute inset-0 bg-white/5 rounded-full transition-all duration-300 ${
            isActive
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 group-hover:opacity-20 group-hover:scale-100"
          }`}
        ></span>

        {/* 🔹 Text Content dengan Gradient Effect */}
        <span
          className={`relative z-10 text-sm tracking-wide bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300
            ${
              isActive
                ? "text-transparent font-bold" // Active: Gradient terlihat + Bold
                : "text-gray-400 font-medium group-hover:text-transparent group-hover:font-bold" // Inactive: Abu-abu -> Hover jadi Gradient
            }
          `}
        >
          {text}
        </span>

        {/* 🔹 Blur Glow Effect di belakang teks (Active Only - Opsional biar makin 'pop') */}
        {/* <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-purple-500/20 blur-lg transition-opacity duration-300 pointer-events-none ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
          }`}
        ></span> */}
      </button>
    </Fragment>
  );
};

export default ButtonNav;
