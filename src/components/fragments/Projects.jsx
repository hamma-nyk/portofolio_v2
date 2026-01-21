import { Fragment } from "react";
import ProjectCard from "../elements/ProjectCard";

const Projects = ({ goto }) => {
  const infra = [
    {
      title: "Topology Design and Implementation of Network Infrastructure",
      img: "./assets/image/networking.png",
      desc: "PT Nusantara Building Industries",
      tech: ["draw.io", "Mikrotik", "Ruijie", "Ubiquiti", "Fiber Optic"],
    },
    {
      title: "Topology Design and Implementation of CCTV Infrastructure",
      img: "./assets/image/ytdlp.png",
      desc: "PT Nusantara Building Industries",
      tech: ["draw.io", "HIKVISION"],
    },
    {
      title: "TrueNAS and ESXi Infrastructure Management",
      img: "./assets/image/truenas.png",
      desc: "PT Nusantara Building Industries",
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
        className="relative w-full py-24 px-4 overflow-hidden min-h-screen"
      >
        {/* --- Background Glow Effects (Agar seragam dengan Contact) --- */}
        <div className="absolute top-50 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-50 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* --- Header Utama --- */}
          <div className="text-center mb-16">
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

          {/* --- Bagian 1: Web App Projects --- */}
          <div className="w-full mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-white to-blue-300"></span>
                Network & IT Insfrastuctur
              </h2>
              {/* Garis Divider dengan Gradient Fade */}
              <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/30 to-transparent"></div>
            </div>

            {/* Grid diset max 2 kolom untuk layout Horizontal Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {infra.map((inf, i) => (
                <ProjectCard key={i} {...inf} />
              ))}
            </div>
          </div>

          <div className="w-full mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-blue-400 to-cyan-300"></span>
                Web Apps
              </h2>
              {/* Garis Divider dengan Gradient Fade */}
              <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/30 to-transparent"></div>
            </div>

            {/* Grid diset max 2 kolom untuk layout Horizontal Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {webProjects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </div>

          {/* --- Bagian 2: Desktop App Projects --- */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-purple-400 to-pink-300"></span>
                Desktop Apps
              </h2>
              {/* Garis Divider dengan Gradient Fade */}
              <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/30 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {desktopProjects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
