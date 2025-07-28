import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaLaravel, FaPhp, FaSymfony, FaHtml5, FaLinux, FaDocker } from "react-icons/fa";
import { DiDjango, DiMongodb } from "react-icons/di";
import { SiMysql, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { HiCommandLine } from "react-icons/hi2";
import { GrOracle } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Laravel", icon: <FaLaravel size={50} /> },
    { id: 2, name: "Php", icon: <FaPhp size={50} /> },
    { id: 3, name: "React", icon: <FaReact size={50} /> },
    { id: 4, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 5, name: "Python", icon: <FaPython size={50} /> },
    { id: 6, name: "Django", icon: <DiDjango size={50} /> },
    { id: 7, name: "MongoDB", icon: <DiMongodb size={50} /> },
    { id: 8, name: "Java", icon: <FaJava size={50} /> },
    { id: 9, name: "MySQL", icon: <SiMysql size={50} /> },
    { id: 10, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 11, name: "Typescript", icon: <SiTypescript size={50} /> },
    { id: 12, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 13, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 14, name: "Docker", icon: <FaDocker size={50} /> },
    { id: 15, name: "C++", icon: <TbBrandCpp size={50} /> },
    { id: 16, name: "Symfony", icon: <FaSymfony size={50} /> },
    { id: 17, name: "HTML5", icon: <FaHtml5 size={50} /> },
    { id: 18, name: "Linux", icon: <FaLinux size={50} /> },
    { id: 19, name: "Command Line", icon: <HiCommandLine size={50} /> },
    { id: 20, name: "Oracle", icon: <GrOracle size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "SG2i Consulting",
      role: "Stagiaire Développeur Full-Stack",
      period: "Juillet 2025",
      description:
        "Participation au développement d’applications web au sein d’une équipe projet. Contribution à la conception et à l’optimisation d’une solution de gestion des réservations, tout en renforçant mes compétences en Next.js et en technologies modernes du web.",
      logo: "https://sg2i.com/wp-content/uploads/2025/02/SG2I-2-scaled.jpg", 
    },
    {
      id: 2,
      company: "Freelance",
      role: "Développeur Full-Stack",
      period: "2024 – 2025",
      description:
        "Réalisation du projet Nutstree (nutstree.ma), un site e-commerce complet pour la vente de fruits secs au Maroc. Intégration d’un système de paiement en ligne, gestion du panier et interface moderne avec Tailwind CSS, Laravel, MySQL.",
      logo: "https://cdn.dribbble.com/userupload/22808646/file/original-cd940b45bbed325d172547e4181e59b2.jpg", 
    },
    {
      id: 3,
      company: "ModitelCom (Orange)",
      role: "Stagiaire Développeur Web",
      period: "Mars 2024",
      description:
      "Stage d’observation d’un mois, axé sur la découverte des processus de développement web et l’intégration de solutions numériques au sein de l’entreprise.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg", 
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mes <span className="font-extrabold">Compétences</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mon <span className="font-extrabold">Expérience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt={exp.company} />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} chez {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
