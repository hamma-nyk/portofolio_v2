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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatBot from "@/components/elements/ChatBot";
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
  // 1. Tambahkan State untuk menyimpan section mana yang sedang aktif
  const [activeNav, setActiveNav] = useState("home");

  // 2. Gunakan useEffect untuk mendeteksi posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Offset 200px agar active-nya pindah sedikit sebelum section benar-benar sampai atas
      const scrollPosition = window.scrollY + 300;

      // Daftar section dan ID-nya
      const sections = [
        { id: "home", ref: HomeSection },
        { id: "about", ref: AboutSection },
        { id: "experiences", ref: ExperiencesSection },
        { id: "projects", ref: ProjectsSection },
        { id: "message", ref: MessageSection },
      ];

      // Loop untuk cek posisi
      sections.forEach((section) => {
        if (
          section.ref.current &&
          section.ref.current.offsetTop <= scrollPosition &&
          section.ref.current.offsetTop + section.ref.current.offsetHeight >
            scrollPosition
        ) {
          setActiveNav(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        quantity={60}
        ease={60}
        staticity={100}
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
          className={`flex fixed top-0 w-full justify-center z-50 transition-all duration-300 ease-in-out ${
            isScroll
              ? "shadow-lg transition-all bg-neutral-900/90 duration-300 ease-in-out backdrop-blur-md border-b border-neutral-700/50"
              : "bg-neutral-900 transition-all duration-300 ease-in-out border-b border-neutral-700/0"
          }`}
        >
          <div className="flex w-4/5 sm:w-2/3 h-20 items-center justify-between font-[500]">
            <div className="hidden sm:flex items-center gap-2">
              {[
                { id: "home", section: HomeSection, text: "Home" },
                { id: "about", section: AboutSection, text: "About" },
                {
                  id: "experiences",
                  section: ExperiencesSection,
                  text: "Experiences",
                },
                { id: "projects", section: ProjectsSection, text: "Projects" },
                { id: "message", section: MessageSection, text: "Contact" },
              ].map((item, index) => (
                <ButtonNav
                  key={index}
                  text={item.text}
                  isActive={activeNav === item.id} // 👈 Logika Active State
                  onClick={() => {
                    JumpToSection(item.section);
                    setActiveNav(item.id); // Set active saat diklik
                  }}
                />
              ))}
            </div>
            <div className="flex sm:hidden justify-evenly w-full items-center px-1">
              {[
                {
                  id: "home",
                  icon: House,
                  section: HomeSection,
                  label: "Home",
                },
                {
                  id: "about",
                  icon: User,
                  section: AboutSection,
                  label: "About",
                },
                {
                  id: "experiences",
                  icon: Briefcase,
                  section: ExperiencesSection,
                  label: "Exp",
                },
                {
                  id: "projects",
                  icon: FolderKanban,
                  section: ProjectsSection,
                  label: "Projects",
                },
                {
                  id: "message",
                  icon: Mail,
                  section: MessageSection,
                  label: "Contact",
                },
              ].map((item, index) => {
                // Cek apakah tombol ini sedang aktif
                const isActive = activeNav === item.id;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      JumpToSection(item.section);
                      setActiveNav(item.id); // Set active langsung saat diklik biar responsif
                    }}
                    aria-label={item.label}
                    className={`group relative p-3 rounded-2xl transition-all duration-300 focus:outline-none ${
                      isActive ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    {/* 🔹 Background Glow (Muncul jika Active ATAU Hover) */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 transition-opacity duration-300 pointer-events-none ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    ></div>

                    {/* 🔹 Icon Styling */}
                    <item.icon
                      className={`relative z-10 w-6 h-6 transition-colors duration-300 drop-shadow-sm ${
                        isActive
                          ? "text-blue-300"
                          : "text-gray-400 group-hover:text-blue-300"
                      }`}
                      strokeWidth={isActive ? 2 : 2} // Icon lebih tebal jika aktif
                    />

                    {/* 🔹 Active Indicator (Titik di bawah icon) */}
                    {/*<span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0 group-hover:opacity-50"
                      }`}
                    ></span>*/}
                  </button>
                );
              })}
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
            {/*<div className="flex gap-3 sm:gap-4 pt-10 text-sm px-5">
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
            </div>*/}
            {/* 3. UNIFIED BUTTONS (Satu Tema) */}
            <div className="flex flex-wrap gap-2 sm:gap-4 pl-2 sm:pl-5">
              {[
                {
                  text: "Download CV",
                  icon: faDownload,
                  link: "#",
                  primary: true,
                }, // Primary flag jika ingin sedikit beda
                {
                  text: "Github",
                  icon: faGithub,
                  link: "https://github.com/hamma-nyk",
                },
                {
                  text: "Linkedin",
                  icon: faLinkedin,
                  link: "https://linkedin.com/in/myikos",
                },
              ].map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.link}
                  target={btn.link === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  // HAPUS: hover:border-transparent
                  // TAMBAH: hover:border-purple-500/50 (Langsung ganti warna border parent saat hover)
                  className="w-10 sm:w-auto mt-6 text-sm group relative px-3 sm:px-5 py-3 rounded-xl bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 text-gray-300 font-medium transition-all duration-300 hover:text-white hover:-translate-y-1 overflow-hidden hover:border-purple-500/50"
                >
                  {/* Gradient Hover Background Effect (Tetap simpan ini untuk efek glowing dalam) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* HAPUS DIV BORDER GLOW EFFECT YANG LAMA */}
                  {/* Karena border color sudah dihandle oleh parent <a> di atas */}

                  {/* Button Content */}
                  <div className="relative flex items-center gap-3 z-10">
                    <FontAwesomeIcon
                      icon={btn.icon}
                      className={`transition-transform duration-300 group-hover:scale-105 ${
                        btn.primary ? "text-blue-400" : ""
                      }`}
                    />
                    <span className="hidden sm:inline">{btn.text}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <About goto={AboutSection} />
        <Experiences goto={ExperiencesSection} />
        <Projects goto={ProjectsSection} />
        <Message goto={MessageSection} />
        <ChatBot />
      </div>
    </Fragment>
  );
};

export default Home;
