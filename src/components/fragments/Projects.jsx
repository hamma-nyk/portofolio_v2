import { Fragment } from "react";
import ProjectCard from "../elements/ProjectCard";

const Projects = ({ goto }) => {
  const projects = [
    {
      title: "QRNBI",
      img: "./assets/image/qrnbi.png",
      desc: "QR code generator for PT Nusantara Building Industries operational use. Simple, fast, and ad-free.",
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

  return (
    <Fragment>
      <section
        id="projects"
        ref={goto}
        className="flex flex-col mx-auto justify-center py-20 px-5"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 mt-10">
          PROJECTS
        </h1>

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
