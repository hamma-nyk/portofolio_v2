import { Fragment } from "react";
import ButtonCard from "../elements/ButtonCard";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const About = (props) => {
  const { goto } = props;
  const Frameworks = ["ReactJS", "Laravel", "ReactJS"];

  return (
    <Fragment>
      <section
        id="about"
        ref={goto}
        className="flex flex-col sm:h-screen mx-auto justify-center pt-26"
      >
        <div className="flex flex-col h-full px-2 sm:px-10 w-full items-start justify-center">
          <h1 className="text-4xl font-[700] mx-auto">ABOUT</h1>
          <p className="w-11/12 sm:w-2/3 mx-auto mt-4 text-center leading-relaxed text-gray-200">
            Hi! I'm Iko 👋 I work in two areas that I really enjoy —{" "}
            <span className="text-blue-400 font-semibold">IT Support</span> and{" "}
            <span className="text-purple-400 font-semibold">
              Web Development
            </span>
            . They’re different fields, but both teach me how technology helps
            people do their work better.
          </p>

          {/* <p className="w-2/3 mx-auto mt-2 text-justify indent-6">
              My ability to bridge the gap between web development and IT
              support allows me to offer comprehensive solutions and ensure that
              both frontend applications and underlying systems function
              seamlessly.
            </p> */}
          <div className="flex flex-wrap w-full gap-4 mt-6 mx-auto justify-center">
            <div class="flex flex-col max-w-md rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
              <div class="px-6 py-4 h-full">
                <div className="font-bold text-xl mb-3 text-blue-400">
                  IT Support
                </div>{" "}
                <p className="text-gray-200 text-base leading-relaxed">
                  I handle troubleshooting for both hardware and software,
                  maintain networks, and support ERP system operations. I’ve
                  worked with various devices and tools from Ubiquiti, MikroTik,
                  and Ruijie Reyee.
                </p>
              </div>
              <div class="px-6 pt-2 pb-4 ">
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
            <div class="flex flex-col max-w-md rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
              <div class="px-6 py-4 mb-0 md:mb-4">
                <div className="font-bold text-xl mb-3 text-purple-400">
                  Web Developer
                </div>{" "}
                <p className="text-gray-200 text-base leading-relaxed">
                  I build simple and functional web applications using modern
                  tools like ReactJS, NextJS, and Laravel. I focus on creating
                  clean interfaces and systems that make work easier — both for
                  users and teams.
                </p>
              </div>
              <div class="px-6 pt-2 pb-2 mb-2 mt-0 md:mt-2">
                {Frameworks.map((framework) => {
                  return (
                    <span class="inline-block bg-neutral-800 rounded-sm p-2 text-sm font-semibold text-white mr-2 mb-2">
                      {framework}
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
