import { Fragment, useState, useEffect, useRef } from "react";
import ButtonNav from "@/components/elements/ButtonNav";
import CodeTemplate from "@/components/elements/CodeTemplate";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ButtonHome from "@/components/elements/ButtonHome";
import Experiences from "@/components/fragments/Experiences";
import About from "@/components/fragments/About";
import Projects from "@/components/fragments/Projects";
import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "@/components/ui/shadcn-io/particles";

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);
  const HomeSection = useRef(null);
  const AboutSection = useRef(null);
  const ExperiencesSection = useRef(null);
  const ProjectsSection = useRef(null);
  const MessageSection = useRef(null);

  const words = ["I'm an IT Support", "I'm a Web Developer"];
  const [index, setIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = useRef(null);

  // 🔹 Hitung ulang width saat index berubah / resize layar
  useEffect(() => {
    const updateWidth = () => {
      if (measureRef.current) {
        setMaxWidth(measureRef.current.offsetWidth);
      }
    };
    updateWidth();

    // Gunakan ResizeObserver agar reaktif terhadap perubahan font-size (breakpoint md)
    const resizeObserver = new ResizeObserver(updateWidth);
    if (measureRef.current) {
      resizeObserver.observe(measureRef.current);
    }

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      resizeObserver.disconnect();
    };
  }, [index]);

  // 🔹 Ganti teks setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const JumpToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Navbar shadow saat scroll
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <Particles
        className="absolute inset-0 fixed z-0 pointer-events-none"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
      <div
        ref={HomeSection}
        className="flex mx-auto w-full h-full bg-neutral-800 flex-col dark:text-white "
      >
        {/* 🔹 NAVBAR */}
        <section
          id="navbar"
          className={`flex sticky top-0 w-full justify-center z-50 ${
            isScroll
              ? "shadow-lg transition-all bg-neutral-900/90 duration-300 ease-in-out backdrop-blur-md"
              : "bg-neutral-800 transition-all duration-300 ease-in-out"
          }`}
        >
          <div className="flex w-4/5 sm:w-2/3 h-20 items-center justify-between font-[500]">
            <div className="hidden sm:flex">
              <ButtonNav
                onClick={() => JumpToSection(HomeSection)}
                text="Home"
              />
              <ButtonNav
                onClick={() => JumpToSection(AboutSection)}
                text="About"
              />
              <ButtonNav
                onClick={() => JumpToSection(ExperiencesSection)}
                text="Experiences"
              />
              <ButtonNav
                onClick={() => JumpToSection(ProjectsSection)}
                text="Projects"
              />
              <ButtonNav
                onClick={() => JumpToSection(MessageSection)}
                text="Contact"
              />
            </div>
            <div className="flex sm:hidden">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z" />
              </svg>
            </div>
          </div>
        </section>

        {/* 🔹 HOME SECTION */}
        <section
          id="home"
          className="flex flex-col mx-auto justify-center -mt-10"
        >
          <div className="flex flex-col h-screen w-full items-start justify-center">
            <h1 className="text-3xl sm:text-5xl font-[700] px-5 relative text-white">
              {" "}
              Hello there! <span className="sm:inline">😹</span>
              <br />
              You can call me{" "}
              <span className="text-3xl sm:text-5xl font-[700] text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400">
                Iko
              </span>
              <br />
              <div
                className="inline-block overflow-hidden align-top mt-1"
                style={{
                  height: "1.2em",
                  minWidth: maxWidth ? `${maxWidth}px` : "auto",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="block font-[700] text-blue-400 text-3xl sm:text-5xl"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              {/* 🔹 Hidden element for width measurement */}
              <span
                ref={measureRef}
                className="opacity-0 absolute left-0 top-0 font-[700] text-3xl sm:text-5xl whitespace-nowrap pointer-events-none select-none"
              >
                I'm a Web Developer
              </span>
            </h1>

            <CodeTemplate />
            <div className="flex gap-3 sm:gap-4 pt-10 text-sm px-5">
              <ButtonHome
                link="#"
                icon={faDownload}
                text="Download CV"
                additionalClass="hidden sm:inline"
              />
              <ButtonHome
                link="https://github.com/hamma-nyk"
                icon={faGithub}
                text="Github"
                additionalClass={"ml-2 sm:ml-0"}
              />
              <ButtonHome
                link="https://linkedin.com/in/myikos"
                icon={faLinkedin}
                text="Linkedin"
                additionalClass={"ml-2 sm:ml-0"}
              />
            </div>
          </div>
        </section>

        <About goto={AboutSection} />
        <Experiences goto={ExperiencesSection} />
        <Projects goto={ProjectsSection} />
        {/* <Message goto={MessageSection} /> */}
      </div>
    </Fragment>
  );
};

export default Home;
