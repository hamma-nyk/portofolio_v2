import { Fragment, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ title, img, link, desc, tech, descModal, preview }) => {
  const [showModal, setShowModal] = useState(false);

  const CardContent = () => (
    <>
      {/* Gambar */}
      <div className="h-48 overflow-hidden">
        <img
          src={img || "./assets/image/img_not_found.png"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 bg-white"
        />
      </div>

      {/* Konten */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-white flex items-center justify-between">
          {title}
          {link && <ExternalLink size={18} className="text-blue-400" />}
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
    </>
  );

  return (
    <Fragment>
      {link ? (
        // 🔹 Kalau punya link → klik buka di tab baru
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-neutral-700/60 backdrop-blur border border-neutral-700 rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <CardContent />
        </a>
      ) : (
        // 🔹 Kalau tidak punya link → klik buka modal
        <div
          onClick={() => setShowModal(true)}
          className="group relative cursor-pointer bg-neutral-700/60 backdrop-blur border border-neutral-700 rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <CardContent />
        </div>
      )}

      {/* 🔹 Modal tampil kalau showModal true */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 max-w-md w-11/12 relative"
              onClick={(e) => e.stopPropagation()} // biar modal gak close pas klik isi
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="rounded-md mb-4 w-full object-cover"
                />
              )}
              <p className="text-gray-300 text-sm leading-relaxed">
                {descModal || "No additional information available."}
              </p>
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm leading-relaxed"
                onClick={(e) => e.stopPropagation()}
              >
                {preview ? "Click for preview" : "No preview available."}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default ProjectCard;
