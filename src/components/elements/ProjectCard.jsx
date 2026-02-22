import { Fragment, useState } from "react";
import { ExternalLink, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
const ProjectCard = ({ title, img, link, desc, tech, descModal, preview }) => {
  const [showModal, setShowModal] = useState(false);

  const CardContent = () => (
    <div className="flex h-full w-full">
      {/* --- Bagian KIRI: Gambar --- */}
      <div className="w-1/3 min-w-[120px] sm:min-w-[160px] relative overflow-hidden border-r border-neutral-700/50">
        <img
          src={img || "./assets/image/img_not_found.png"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 bg-neutral-800"
        />
        {/* Overlay Icon saat Hover */}
        {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center"> */}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {link ? (
            <ExternalLink className="text-white drop-shadow-md" size={20} />
          ) : (
            <Eye className="text-white drop-shadow-md" size={20} />
          )}
        </div>
      </div>

      {/* --- Bagian KANAN: Konten --- */}
      <div className="w-2/3 p-3 sm:p-4 flex flex-col h-full">
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <h2 className="text-base sm:text-lg font-bold text-gray-100 leading-tight transition-colors line-clamp-1 mb-1.5 sm:mb-2 shrink-0">
            {title}
          </h2>

          {desc && (
            <div
              className={`mb-2 px-2.5 sm:px-3 py-1 rounded-lg border w-fit max-w-full overflow-hidden shrink-0 ${
                desc.length % 2 === 0
                  ? "bg-purple-500/10 border-purple-500/20 text-purple-200"
                  : "bg-blue-500/10 border-blue-500/20 text-blue-200"
              }`}
            >
              {/* Di layar HP (h-32) dibatasi 1 baris, di layar besar (h-40) 2 baris */}
              <p className="text-[10px] sm:text-xs leading-relaxed line-clamp-1 sm:line-clamp-2">
                {desc}
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto shrink-0">
          {tech &&
            tech.slice(0, 3).map((t, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium bg-neutral-800 border border-neutral-700 text-gray-300 px-2 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
          {tech && tech.length > 3 && (
            <span className="text-[10px] text-gray-500 px-1 py-0.5">
              +{tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  // Class dasar wrapper (Hapus flex-col, pastikan overflow hidden)
  const cardBaseClass =
    "group relative bg-neutral-800/50 border border-neutral-700 rounded-xl overflow-hidden hover:border-neutral-600 shadow-lg shadow-black/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-32 sm:h-40 w-full";
  // const cardBaseClass =
  // "group relative bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-xl overflow-hidden hover:border-neutral-600 shadow-lg shadow-black/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-32 sm:h-40 w-full";

  return (
    <Fragment>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cardBaseClass}
        >
          <CardContent />
        </a>
      ) : (
        <div onClick={() => setShowModal(true)} className={cardBaseClass}>
          <CardContent />
        </div>
      )}

      {/* --- MODAL (Tidak Berubah) --- */}
      {createPortal(
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              // className="fixed inset-0 bg-black/90 backdrop-blur-xs transform-gpu flex items-center justify-center z-[9999] p-4"
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transform-gpu will-change-[opacity]"
              // className="fixed inset-0 bg-black/90 transform-gpu flex items-center justify-center z-[9999] p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-neutral-800 border border-neutral-700/60 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-56">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-transparent"></div>
                  <button
                    // className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 p-1.5 rounded-full text-white transition-colors backdrop-blur-sm"
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 p-1.5 rounded-full text-white transition-colors"
                    onClick={() => setShowModal(false)}
                  >
                    <X size={18} />
                  </button>
                  <h2 className="absolute bottom-2 left-6 text-2xl font-bold text-white shadow-black drop-shadow-lg pr-3">
                    {title}
                  </h2>
                </div>
                <div className="p-6 pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech &&
                      tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-line">
                    {descModal ||
                      desc ||
                      "No additional information available."}
                  </p>
                  {preview && (
                    <a
                      href={preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600/50 hover:bg-blue-500/50 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors w-full justify-center sm:w-auto"
                    >
                      <ExternalLink size={16} /> Live Preview{" "}
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body, // Target render portal
      )}
    </Fragment>
  );
};

export default ProjectCard;
