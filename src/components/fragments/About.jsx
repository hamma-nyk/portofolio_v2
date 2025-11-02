import { Fragment } from "react";
import ButtonCard from "../elements/ButtonCard";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { CodeXml, MonitorCog } from "lucide-react";
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
        className="flex flex-col xl:mt-0 xl:h-screen mx-auto justify-center"
      >
        <div className="flex flex-col h-full px-2 sm:px-10 w-full items-start justify-center">
          <h1 className="text-3xl sm:text-4xl font-[700] mx-auto text-white mt-30 xl:mt-0">
            ABOUT
          </h1>
          <p className="w-11/12 sm:w-2/3 mx-auto mt-4 text-center leading-relaxed text-gray-200">
            Hello! 👋 I work in two areas that I really enjoy,{" "}
            <span className="text-blue-400 font-semibold">IT Support</span> and{" "}
            <span className="text-purple-400 font-semibold">
              Web Development
            </span>
            . They’re different fields, but both teach me how technology helps
            people do their work better.
          </p>

          <div className="flex flex-wrap w-full gap-4 mt-6 mx-auto justify-center">
            <div className="flex flex-col max-w-md mx-2 sm:max-w-lg rounded-xl overflow-hidden shadow-lg border-2 border-blue-400/20 bg-neutral-700/60 backdrop-blur shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
              <div className="px-6 py-4 h-full">
                <div className="font-bold text-xl mb-3 text-blue-400">
                  <span className="flex items-center">
                    <MonitorCog className=" mr-2 " strokeWidth={2.5} />
                    IT Support
                  </span>
                </div>{" "}
                <p className="text-gray-100 leading-relaxed text-sm">
                  I handle troubleshooting for both hardware and software,
                  maintain networks, and support ERP system operations. I’ve
                  worked with various devices and tools from Ubiquiti, MikroTik,
                  and Ruijie Reyee.
                </p>
              </div>
              <div className="px-6 pt-2 pb-4">
                <ButtonCard
                  link="https://www.ui.com/introduction"
                  icon={faCircleQuestion}
                  text="Ubiquiti"
                />
                <ButtonCard
                  link="https://www.mikrotik.com"
                  icon={faCircleQuestion}
                  text="MikroTik"
                />
                <ButtonCard
                  link="https://reyee.ruijie.com"
                  icon={faCircleQuestion}
                  text="Ruijie Reyee"
                />
              </div>
            </div>
            <div className="flex flex-col max-w-md mx-2 sm:max-w-lg rounded-xl overflow-hidden shadow-lg border-2 border-purple-400/20 bg-neutral-700/60 backdrop-blur shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
              <div className="px-6 py-4 mb-0 md:mb-4">
                <div className="font-bold text-xl mb-3 text-purple-400">
                  <span className="flex items-center">
                    <CodeXml className="mr-2 " strokeWidth={2.5} />
                    Web Developer
                  </span>
                </div>{" "}
                <p className="text-gray-100 leading-relaxed text-sm">
                  I build simple and functional web applications using modern
                  technologies. I usually work with the tech stack listed below,
                  focusing on creating clean, efficient, and user-friendly
                  systems that make work easier for both users and teams.
                </p>
              </div>
              <div className="px-6 pt-2 pb-4">
                {techs.map((t) => {
                  return (
                    <span
                      key={t.name}
                      className="inline-block hover:-translate-y-[2px] duration-300 transition ease-in-out border border-neutral-600 text-md bg-neutral-800 rounded-sm p-2 text-center text-white mr-2 mb-1"
                    >
                      <a href={t.link} target="_blank">
                        {t.icon}
                      </a>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
