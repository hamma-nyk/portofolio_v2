import { Fragment } from "react";
import ExperienceCard from "../elements/ExperienceCard";
import { motion } from "framer-motion";

const Experiences = (props) => {
  const { goto } = props;

  const experiences = [
    {
      img: "/assets/image/nbi.png",
      title: "PT Nusantara Building Industries",
      position: "IT Support Staff",
      date: "2024 - Present",
      jobdesk: [
        "ERP Operations & Maintenance.",
        "Hardware & Software Troubleshooting, Installation, and Maintenance.",
        "CCTV Installation & Maintenance.",
        "Network Infrastructure Installation & Maintenance [Fiber Optic, Mikrotik, Ubiquiti, Ruijie].",
        "IoT Application Programmer [Python].",
        "Internal Web Developer [NextJS, Flask].",
        "Database Administrator [PostgreSQL, Microsoft SQL].",
        "TrueNAS Infrastructure Administrator.",
        "VMware ESXi Infrastructure Administrator.",
      ],
    },
    {
      img: "/assets/image/udinus.png",
      title: "Universitas Dian Nuswantoro",
      position: "IT Lab Assistant",
      date: "2022 - 2024",
      jobdesk: [
        "Responsible for managing and supervising laboratory operations.",
        "Organized lab activities and assistance schedules to ensure smooth sessions.",
        "Supported students in understanding programming materials delivered by lecturers.",
      ],
    },
    {
      img: "/assets/image/bangkit.png",
      title: "Bangkit Academy",
      position: "Machine Learning Student",
      date: "2023 (6 Months)",
      jobdesk: [
        "Developed APIs and implemented Machine Learning models [Python, TensorFlow, Flask].",
        "Collaborated with the Android Development Team to build and integrate application features.",
      ],
    },
    {
      img: "/assets/image/fga.png",
      title: "Digital Talent Scholarship",
      position: "ORACLE - Database Design and Programming with SQL",
      date: "2022 (2 Months)",
      jobdesk: [
        "Database Design: From requirements analysis to conceptual (ERD), logical (schema, keys, normalization), and physical (storage, indexing) design.",
        "SQL Programming: Using DDL, DML, DCL, and TCL for defining, querying, and maintaining data.",
        "PL/SQL: Extends SQL with procedural features, including variables, loops, and stored procedures, for automation and advanced logic.",
      ],
    },
    // {
    //   img: "/assets/image/sadasa.png",
    //   title: "Sadasa Academy",
    //   position: "KMMI - Student of Social Network in R",
    //   date: "2021 (3 Months)",
    //   jobdesk: [
    //     "Learned the fundamentals of R programming language, including data manipulation and visualization using ggplot2 and dplyr packages.",
    //   ],
    // },
  ];

  return (
    <Fragment>
      <section
        id="experiences"
        ref={goto}
        className="relative w-full py-24 px-4 overflow-hidden min-h-screen"
      >
        {/* --- Background Glow Effects (Konsisten dengan section lain) --- */}
        <div className="absolute top-1/3 -left-30 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 -right-30 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* --- Header Utama --- */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Journey
              </span>
            </h1>
            <p className="w-full sm:w-2/3 mx-auto text-gray-400 leading-relaxed text-sm sm:text-base">
              A timeline of my career path, highlighting the
              <span className="text-blue-400 font-semibold"> roles</span>,
              <span className="text-purple-400 font-semibold">
                {" "}
                environments
              </span>
              , and
              <span className="text-blue-400 font-semibold">
                {" "}
                milestones
              </span>{" "}
              that have shaped my expertise.
            </p>
          </div>

          {/* --- Timeline Wrapper --- */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Garis Vertikal (Timeline Line) dengan Gradient */}
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent rounded-full z-0"></div>
            {/* <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 bg-gray-400/30 h-full w-[3px] rounded-full"></div> */}

            {/* List Experiences */}
            <div className="flex flex-col gap-12 sm:gap-0 relative z-10">
              {experiences.map((exp, i) => (
                <ExperienceCard
                  key={i}
                  {...exp}
                  side={i % 2 === 0 ? "left" : "right"}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Experiences;
