import { Fragment, useState, useEffect, useRef } from "react";
import ButtonNav from "../components/elements/ButtonNav";
import CodeTemplate from "../components/elements/CodeTemplate";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ButtonHome from "../components/elements/ButtonHome";
import Experiences from "../components/fragments/Experiences";
import About from "../components/fragments/About";
import Projects from "../components/fragments/Projects";

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);
  const HomeSection = useRef(null);
  const AboutSection = useRef(null);
  const ExperiencesSection = useRef(null);
  const ProjectsSection = useRef(null);
  const JumpToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Fragment>
      <div ref={HomeSection} className="flex mx-auto w-full h-full bg-neutral-800 flex-col dark:text-white">
        <section id="navbar" className={`flex sticky top-0 w-full justify-center bg-neutral-800 z-50 ${isScroll ? 'shadow-lg transition-all' : ''}`}>
          <div className="flex w-4/5 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 h-20 items-center justify-between font-[500]">
            <div className="hidden md:flex lg:flex xl:flex">
              <ButtonNav onClick={() => JumpToSection(HomeSection)} text="🙀😼😻" />
              <ButtonNav onClick={() => JumpToSection(AboutSection)} text="About" />
              <ButtonNav onClick={() => JumpToSection(ExperiencesSection)} text="Experiences" />
              <ButtonNav onClick={() => JumpToSection(ProjectsSection)} text="Projects" />
              <ButtonNav onClick={() => { }} text="Contact" />
            </div>
            <div className="flex md:hidden lg:hidden xl:hidden">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z" />
              </svg>
            </div>
            <div className="flex">
              <span className="flex items-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              </span>
            </div>
          </div>
        </section>
        <section id="home" className="flex flex-col mx-auto justify-center -mt-10">
          <div className="flex flex-col h-screen w-full items-start justify-center">
            <h1 className="text-5xl font-[700] px-10">
              Hello there! <span className="hidden sm:inline">😹</span>
              <br />
              You can call me{" "}
              <span className="text-5xl font-[700] text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400">
                Iko
              </span>
              <br />
              I'm a Web Developer
            </h1>
            <CodeTemplate />
            <div className="flex gap-3 sm:gap-4 pt-10 text-sm px-10">
              <ButtonHome link="#" icon={faDownload} text="Download CV" additionalClass="hidden md:inline lg:inline xl:inline" margin="mr-0" />
              <ButtonHome link="https://github.com/hamma-nyk" icon={faGithub} text="Github" margin="mr-2" />
              <ButtonHome link="https://linkedin.com/in/myikos" icon={faLinkedin} text="Linkedin" margin="mr-2" />
            </div>
          </div>
        </section>
        <About goto={AboutSection} />
        <Experiences goto={ExperiencesSection} />
        {/* <Projects goto={ProjectsSection} /> */}
      </div>
    </Fragment>
  );
};

export default Home;
