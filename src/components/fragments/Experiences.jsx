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
        className="flex flex-col ml-5 sm:mx-10 justify-center py-20"
      >
        <h1 className="text-white text-3xl sm:text-4xl font-[700] pr-5 text-center mt-10 mx-auto sm:pr-0">
          EXPERIENCES
        </h1>
        <p className="w-11/12 sm:w-2/3 sm:pr-0 pr-5 mx-auto mt-4 text-center leading-relaxed text-gray-200 mb-10">
          A <span className="text-blue-400 font-semibold">summary</span> of my{" "}
          <span className="text-purple-400 font-semibold">journey</span>.
        </p>
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 bg-gray-400/30 h-full w-[3px] rounded-full"></div>

          <div className="flex flex-col space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={i}
                {...exp}
                side={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Experiences;
