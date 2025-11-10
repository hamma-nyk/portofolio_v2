import { Fragment } from "react";
import ProjectCard from "../elements/ProjectCard";

const Projects = ({ goto }) => {
  const projects = [
    {
      title: "MDB Access to SQL Server",
      img: "./assets/image/mdbconvert.png",
      desc: "Shcedule and convert data from Local machine MDB to SQL Server",
      descModal: "This tools is for local use. Contact me if you want a demo.",
      tech: ["Python", "Pyodbc"],
    },
    {
      title: "my-ytdlp",
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
      title: "Local Web Ping Monitor Tools",
      img: "./assets/image/lping.png",
      desc: "Website ping monitor tools with WhatsApp notification.",
      descModal: "This tools is for local use. Contact me if you want a demo.",
      tech: ["Python", "Flask", "Selenium"],
      preview:
        "https://www.linkedin.com/posts/myikos_project-web-based-network-ping-monitoring-activity-7297908779373735936-WEZM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6skr4BMfn0B9yURR30RUCZ-jPlmoMbSlQ",
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

  return (
    <Fragment>
      <section
        id="projects"
        ref={goto}
        className="flex flex-col mx-auto justify-center py-20 px-5 -mb-10 sm:mb-0"
      >
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mt-10">
          PROJECTS
        </h1>
        <p className="w-11/12 sm:w-2/3 sm:pr-0 pr-5 mx-auto mt-4 text-center leading-relaxed text-gray-200 mb-10">
          A showcase of my{" "}
          <span className="text-blue-400 font-semibold">projects</span> that
          reflect my{" "}
          <span className="text-purple-400 font-semibold">creativity</span>,{" "}
          <span className="text-blue-400 font-semibold">problem-solving</span>{" "}
          skills, and passion for building impactful digital solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
