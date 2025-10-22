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
        "Melakukan troubleshooting perangkat keras & jaringan.",
        "Mendukung implementasi ERP internal perusahaan.",
        "Menangani maintenance komputer & printer.",
      ],
    },
    {
      img: "/assets/image/udinus.png",
      title: "Universitas Dian Nuswantoro",
      position: "IT Lab Assistant",
      date: "2022 - 2024",
      jobdesk: [
        "Melakukan troubleshooting perangkat keras & jaringan.",
        "Mendukung implementasi ERP internal perusahaan.",
        "Menangani maintenance komputer & printer.",
      ],
    },
    {
      img: "/assets/image/bangkit.png",
      title: "Bangkit Academy",
      position: "Machine Learning Student",
      date: "2023 (6 Months)",
      jobdesk: [
        "Melakukan troubleshooting perangkat keras & jaringan.",
        "Mendukung implementasi ERP internal perusahaan.",
        "Menangani maintenance komputer & printer.",
      ],
    },
    {
      img: "/assets/image/fga.png",
      title: "Digital Talent Scholarship",
      position: "ORACLE - Database Design and Programming with SQL",
      date: "2022 (2 Months)",
    },
    {
      img: "/assets/image/sadasa.png",
      title: "Sadasa Academy",
      position: "KMMI - Student of Social Network in R",
      date: "2021 (3 Months)",
    },
  ];

  return (
    <Fragment>
      <section
        id="experiences"
        ref={goto}
        className="flex flex-col mx-5 sm:mx-10 justify-center py-20"
      >
        <h1 className="text-4xl font-[700] mx-auto mb-10 mt-10">EXPERIENCES</h1>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 bg-blue-400 h-full w-[3px] rounded-full"></div>

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
