import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projets = [
  {
    id: 1,
    titre: "Nutstree.ma",
    description: "Nutstree est une plateforme e-commerce permettant aux clients d'acheter des fruits secs en ligne avec une expérience fluide et sécurisée. Le site propose une interface moderne, une gestion avancée des commandes et un système de paiement en ligne via CMI.",
    image: "/assets/image.png",
    lien: "https://nutstree.ma"
  },
  {
    id: 2,
    titre: "Absencia",
    description: "Absencia est une application web complète pour la gestion des absences scolaires. Elle permet de suivre les présences des élèves, de générer des rapports d’absences, et d’alerter automatiquement les parents en cas d’absences répétées.",
    image: "https://github.com/Mouhlal/Absencia/raw/main/screen/home.png",
    lien: "https://github.com/Mouhlal/Absencia.git"
  },
  {
    id: 3,
    titre: "Movies-App",
    description: "Movies-App est une application web permettant aux utilisateurs de découvrir des films et séries populaires avec leurs détails (titres, affiches, notes, synopsis, etc.)",
    image: "/assets/img.png",
    lien: "https://akrmovies.netlify.app/"
  },
  {
    id: 4,
    titre: "School-Express",
    description: "School-Express est une application web de gestion du stocks développée avec Laravel et MySQL.qui permet de gérer efficacement les stocks de produits et les informations des employés au sein d’un entreprise (école, établissement , etc.)",
    image: "/assets/ii.png",
    lien: "https://github.com/Mouhlal/School-Express.git"
  },
  
];

export default function Projets() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projets">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        Mes <span className="font-extrabold">Projets</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projets.map((projet, index) => (
          <motion.div
            key={projet.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={projet.image}
                alt={projet.titre}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(projet.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{projet.titre}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {projet.description}
              </p>
              <a href={projet.lien} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
