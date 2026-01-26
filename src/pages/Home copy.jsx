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
import Message from "@/components/fragments/Message";
import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { House, User, Briefcase, FolderKanban, Mail } from "lucide-react";
const Home = () => {
  const [isScroll, setIsScroll] = useState(false);
  const HomeSection = useRef(null);
  const AboutSection = useRef(null);
  const ExperiencesSection = useRef(null);
  const ProjectsSection = useRef(null);
  const MessageSection = useRef(null);

  const words = ["I'm an IT Support", "I'm a Developer"];
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
        className="flex mx-auto w-full h-full bg-neutral-900 flex-col dark:text-white "
      >
        {/* 🔹 NAVBAR */}
        <section
          id="navbar"
          className={`flex sticky top-0 w-full justify-center z-50 ${
            isScroll
              ? "shadow-lg transition-all bg-neutral-900/90 duration-300 ease-in-out backdrop-blur-md border-b border-neutral-700/50"
              : "bg-neutral-900 transition-all duration-300 ease-in-out border-b border-neutral-700/0"
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
            <div className="flex sm:hidden justify-between w-full text-gray-200">
              <button
                onClick={() => JumpToSection(HomeSection)}
                className={`p-3 rounded-full transition-all cursor-pointer`}
              >
                <House className="w-6 h-6" />
              </button>
              <button
                onClick={() => JumpToSection(AboutSection)}
                className={`p-3 rounded-full transition-all cursor-pointer`}
              >
                <User className="w-6 h-6" />
              </button>
              <button
                onClick={() => JumpToSection(ExperiencesSection)}
                className={`p-3 rounded-full transition-all cursor-pointer`}
              >
                <Briefcase className="w-6 h-6" />
              </button>
              <button
                onClick={() => JumpToSection(ProjectsSection)}
                className={`p-3 rounded-full transition-all cursor-pointer`}
              >
                <FolderKanban className="w-6 h-6" />
              </button>
              <button
                onClick={() => JumpToSection(MessageSection)}
                className={`p-3 rounded-full transition-all cursor-pointer`}
              >
                <Mail className="w-6 h-6" />
              </button>
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
        <Message goto={MessageSection} />
      </div>
    </Fragment>
  );
};

export default Home;
