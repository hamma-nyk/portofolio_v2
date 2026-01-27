import { Fragment, useState } from "react";
import ProjectCard from "../elements/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

// 🔹 Sub-Component: ProjectSlider
// Menangani logika Next/Prev untuk setiap kategori
const ProjectSlider = ({ title, projects, gradientColor }) => {
  const ITEMS_PER_PAGE = 2; // Tampilkan 4 item per halaman
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = Next, -1 = Prev

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const hasMultiplePages = totalPages > 1;
  const gradientMap = {
    purple: "from-purple-500/30",
    blue: "from-blue-500/30",
    pink: "from-pink-500/30",
    cyan: "from-cyan-500/30",
  };
  const activeGradient = gradientMap[gradientColor] || "from-purple-500/30";

  // Logika Pagination
  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages); // Loop kembali ke awal
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages); // Loop ke akhir
  };

  // Data yang ditampilkan saat ini (hanya 4 item)
  const currentProjects = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  // Animasi Slide
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full mb-24">
      {/* --- Header Kategori & Kontrol Navigasi --- */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 flex-grow">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            {title}
          </h2>
          <div
            className={`h-[1px] flex-grow bg-gradient-to-r ${activeGradient} to-transparent`}
          ></div>
        </div>

        {/* Tombol Navigasi (Hanya muncul jika lebih dari 1 halaman) */}
        {hasMultiplePages && (
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-500 mr-2">
              Page {currentPage + 1}/{totalPages}
            </span>
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-neutral-800/80 border border-neutral-700 hover:border-blue-500/50 hover:text-blue-400 transition-all active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-neutral-800/80 border border-neutral-700 hover:border-blue-500/50 hover:text-blue-400 transition-all active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* --- Grid Projects (Slider Area) --- */}
      {/* min-h menjaga tinggi agar tidak layout shift saat ganti halaman */}
      <div className="relative min-h-[100px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage} // Key berubah = trigger animasi ulang
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {currentProjects.map((project, i) => (
              <ProjectCard key={`${title}-${i}`} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Projects = ({ goto }) => {
  // --- DATA PROJECTS ---
  const infra = [
    {
      title: "Topology Design and Implementation of Network Infrastructure",
      img: "./assets/image/networking.png",
      desc: "PT Nusantara Building Industries",
      descModal: `- Design network topology\n- Fiber Optic installation\n- Network infrastructure management & installation`,
      tech: ["draw.io", "Mikrotik", "Ruijie", "Ubiquiti", "Fiber Optic"],
    },
    {
      title: "Topology Design and Implementation of CCTV Infrastructure",
      img: "./assets/image/cctv.png",
      desc: "PT Nusantara Building Industries",
      tech: ["draw.io", "HIKVISION"],
    },
    {
      title: "TrueNAS and ESXi Infrastructure Management",
      img: "./assets/image/truenas.png",
      desc: "PT Nusantara Building Industries",
      descModal: `- TrueNAS & ESXi installation\n- User storage pool & group management\n- VM & Server management`,
      tech: ["TrueNAS", "ESXi", "Linux"],
    },
    {
      title: "Network and VM Monitoring Dashboard",
      img: "./assets/image/dashboard.png",
      desc: "PT Nusantara Building Industries",
      tech: ["SocketIO", "NodeJS", "SSH"],
    },
  ];

  const webProjects = [
    {
      title: "English Word Suggestion",
      img: "./assets/image/lletter.png",
      desc: "English word suggestion app using ReactJS",
      link: "https://lletter.vercel.app/",
      tech: ["ReactJS", "TailwindCSS"],
    },
    {
      title: "Youtube Downloader",
      img: "./assets/image/ytdlp.png",
      desc: "YtDlp Web UI using ReactJS",
      link: "https://my-ytdlp.vercel.app/",
      tech: ["ReactJS", "TailwindCSS", "shadCN", "FastAPI"],
    },
    {
      title: "MonoBlog",
      img: "./assets/image/monoblog.png",
      desc: "Simple blog using NextJS",
      link: "https://cakhem-blog.vercel.app/",
      tech: ["NextJS", "TailwindCSS", "shadCN", "Supabase"],
    },
    {
      title: "MyCtn",
      img: "./assets/image/myctn.png",
      desc: "Simple note app using NextJS",
      link: "https://myctn.vercel.app/",
      tech: ["NextJS", "TailwindCSS", "shadCN", "Supabase"],
    },
    {
      title: "QRNBI",
      img: "./assets/image/qrnbi.png",
      desc: "QR code generator for PT Nusantara Building Industries operational use.",
      link: "https://qrnbi.web.id/",
      tech: ["ReactJS", "TailwindCSS"],
    },
    {
      title: "KonekoBot",
      img: "./assets/image/konekobot.png",
      desc: "WhatsApp bot for automating tasks.",
      link: "https://konekobot.web.id/",
      tech: ["NodeJS", "ReactJS", "Flask"],
    },
    {
      title: "KonekoCert",
      img: "./assets/image/konekocert.png",
      desc: "Fake course certificate generator.",
      link: "https://konekocert.web.id/",
      tech: ["ReactJS", "TailwindCSS"],
    },
  ];

  const desktopProjects = [
    {
      title: "Nanostation AP Restart Scheduler",
      img: "./assets/image/aprestart.png",
      desc: "Shcedule Nanostation AP restart.",
      descModal: "This tools is for local use. Contact me if you want a demo.",
      tech: ["Python", "Paramiko"],
    },
    {
      title: "MDB Access to SQL Server",
      img: "./assets/image/mdbconvert.png",
      desc: "Shcedule and convert data from Local machine MDB to SQL Server",
      descModal: "This tools is for local use. Contact me if you want a demo.",
      tech: ["Python", "Pyodbc"],
    },
    {
      title: "Local Desktop Ping Monitor Tools",
      img: "./assets/image/dping.png",
      desc: "Desktop ping monitor tools with WhatsApp notification.",
      descModal: "This tools is for local use. Contact me if you want a demo.",
      tech: ["Python", "NodeJS"],
      preview:
        "https://www.linkedin.com/posts/myikos_project-desktop-network-ping-monitoring-activity-7384213008908177408-nxC2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6skr4BMfn0B9yURR30RUCZ-jPlmoMbSlQ",
    },
    {
      title: "Auto-Restart Scheduler for Attendance Machine",
      img: "./assets/image/rfrestart.png",
      desc: "Restarter for Attendance Machine. [ZKTeco]",
      descModal: "This tools is for local use. Contact me if you want a demo.",
      preview:
        "https://www.linkedin.com/posts/myikos_update-project-auto-restart-scheduler-for-activity-7381927489880846336-2-k4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6skr4BMfn0B9yURR30RUCZ-jPlmoMbSlQ",
      tech: ["Python"],
    },
    {
      title: "Desktop Telegram Broadcast Tools",
      img: "./assets/image/tgbroadcast.png",
      desc: "This tool is used to broadcast messages to multiple Telegram groups.",
      tech: ["Python"],
      descModal: "This tools is for sale. Contact me if you are interested.",
    },
  ];

  return (
    <Fragment>
      <section
        id="projects"
        ref={goto}
        className="relative w-full pt-24 px-4 overflow-hidden min-h-screen"
      >
        {/* --- Background Glow Effects --- */}
        <div className="absolute top-50 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-50 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* --- Header Utama --- */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </h1>
            <p className="w-full sm:w-2/3 mx-auto text-gray-400 leading-relaxed text-sm sm:text-base">
              A showcase of my technical explorations, reflecting my passion for
              <span className="text-blue-400 font-semibold">
                {" "}
                innovation
              </span>{" "}
              and
              <span className="text-purple-400 font-semibold">
                {" "}
                problem-solving
              </span>
              .
            </p>
          </div>

          {/* --- Category Sliders --- */}

          {/* 1. Infrastructure (Jumlah < 4, Tombol Next tidak akan muncul) */}
          <ProjectSlider
            title="Network & IT Infrastructure"
            projects={infra}
            gradientColor="purple"
          />

          {/* 2. Web Apps (Jumlah > 4, Tombol Next muncul) */}
          <ProjectSlider
            title="Web Apps"
            projects={webProjects}
            gradientColor="blue"
          />

          {/* 3. Desktop Apps (Jumlah > 4, Tombol Next muncul) */}
          <ProjectSlider
            title="Desktop Apps"
            projects={desktopProjects}
            gradientColor="pink"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
