import { Fragment } from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, img, link, desc, tech }) => {
  return (
    <Fragment>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-neutral-700/60 border border-neutral-700 rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
      >
        {/* Gambar */}
        <div className="h-48 overflow-hidden">
          <img
            src={img ? img : "./assets/image/img_not_found.png"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 bg-white"
          />
        </div>

        {/* Konten */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-white flex items-center justify-between">
            {title}
            <ExternalLink size={18} className="text-blue-400" />
          </h2>
          {desc && (
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">{desc}</p>
          )}
          {tech && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-neutral-700 text-gray-200 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Glow hover */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
      </a>
    </Fragment>
  );
};

// const ProjectCard = ({title, img, link}) => {
//     return (
//         <Fragment>
//             <div class="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
//                 <div class="flex flex-col sm:flex-row px-6 py-6">
//                     <div className="sm:w-1/2 mx-auto rounded-md overflow-hidden">
//                         <img className={`w-full h-full object-cover bg-white`} src={img ? img : `./assets/image/img_not_found.png`} alt="" />
//                     </div>
//                     <div class="font-bold text-xl mb-2 sm:w-1/2 mx-4 my-6 sm:my-0">
//                         <a href={link} target="_blank">{title}</a>
//                     </div>
//                 </div>

//             </div>
//         </Fragment>
//     );
// }

export default ProjectCard;
