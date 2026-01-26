import { Fragment } from "react";
import ButtonCard from "../elements/ButtonCard";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { MonitorCog, CodeXml, ExternalLink } from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiFlask,
  SiPython,
  SiLaravel,
} from "react-icons/si";

const About = (props) => {
  const { goto } = props;
  const techs = [
    {
      name: "ReactJS",
      icon: <SiReact className="text-sky-400" />,
      link: "https://react.dev/",
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs className="text-gray-200" />,
      link: "https://nextjs.org/",
    },
    {
      name: "ExpressJS",
      icon: <SiExpress className="text-gray-300" />,
      link: "https://expressjs.com/",
    },
    {
      name: "NodeJS",
      icon: <SiNodedotjs className="text-green-500" />,
      link: "https://nodejs.org/en/",
    },
    {
      name: "Flask",
      icon: <SiFlask className="text-gray-400" />,
      link: "https://flask.palletsprojects.com/en/2.2.x/",
    },
    {
      name: "Python",
      icon: <SiPython className="text-yellow-400" />,
      link: "https://www.python.org/",
    },
    {
      name: "Laravel",
      icon: <SiLaravel className="text-red-500" />,
      link: "https://laravel.com/",
    },
  ];

  return (
    <Fragment>
      <section
        id="about"
        ref={goto}
        className="relative w-full py-24 px-4 overflow-hidden min-h-screen flex flex-col justify-center"
      >
        {/* --- Background Glow Effects --- */}
        <div className="absolute bottom-35 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-35 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* --- Header Utama --- */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Me
              </span>
            </h1>
            <p className="w-full sm:w-2/3 mx-auto text-gray-400 leading-relaxed text-sm sm:text-base">
              Hello! 👋 I work in two areas that I really enjoy:
              <span className="text-blue-400 font-semibold">
                {" "}
                IT Support
              </span>{" "}
              and
              <span className="text-purple-400 font-semibold">
                {" "}
                App Development
              </span>
              . They’re different fields, but both teach me how technology helps
              people do their work better.
            </p>
          </div>

          {/* --- Cards Container --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* === CARD 1: IT SUPPORT === */}
            <div className="group relative bg-neutral-800/50 backdrop-blur-md border border-neutral-700 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <MonitorCog size={32} strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">IT Support</h2>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  I handle troubleshooting for both hardware and software,
                  maintain networks, and support ERP system operations. I’ve
                  worked with various enterprise devices and tools to ensure
                  seamless connectivity.
                </p>

                {/* Buttons / Tools Links */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {[
                    {
                      name: "Ubiquiti",
                      link: "https://www.ui.com/introduction",
                    },
                    { name: "MikroTik", link: "https://www.mikrotik.com" },
                    { name: "Ruijie Reyee", link: "https://reyee.ruijie.com" },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-gray-300 transition-all duration-300 
  
  group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:text-gray-100
  
  hover:!bg-blue-600/20 hover:!border-blue-500/80 hover:!text-blue-400"
                    >
                      <span>{item.name}</span>
                      <ExternalLink
                        size={12}
                        className="opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* === CARD 2: APP DEVELOPER === */}
            <div className="group relative bg-neutral-800/50 backdrop-blur-md border border-neutral-700 hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20">
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <CodeXml size={32} strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    App Developer
                  </h2>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  I build simple and functional web applications using modern
                  technologies. I focus on creating clean, efficient, and
                  user-friendly systems that facilitate team productivity.
                </p>

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {techs.map((t, i) => (
                    <a
                      key={t.name || i}
                      href={t.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-400 transition-all duration-300 flex items-center justify-center w-10 h-10
  
  group-hover:bg-purple-500/10 group-hover:border-purple-500/30 group-hover:text-purple-300
  
  hover:!bg-purple-600/20 hover:!border-purple-500 hover:!text-white hover:scale-110"
                      title={t.name}
                    >
                      {t.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
