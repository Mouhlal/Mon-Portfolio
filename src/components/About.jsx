import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      
      {/* Image Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="Illustration de moi" />
      </motion.div>

      {/* Texte Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          À propos de <span className="font-extrabold">Moi</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          Je m’appelle <span className="font-bold">Mouhlal Akram</span>, 
          un développeur full-stack passionné spécialisé en <strong>React.js, Laravel et Django</strong>. 
          Mon objectif est de créer des applications modernes, performantes et adaptées aux besoins des utilisateurs.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Mon parcours en développement web a commencé en <strong>2021</strong> et, depuis, 
          j’ai acquis de l’expérience sur différents projets : 
          <strong> sites e-commerce, systèmes de gestion scolaire, et applications web interactives</strong>. 
          J’aime relever de nouveaux défis et apprendre les dernières technologies.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          En dehors du codage, je partage mes connaissances, j’explore les innovations du numérique, 
          et je participe à des projets collaboratifs. 
          Vous pouvez découvrir mes réalisations sur <a href="https://github.com/Mouhlal" target="_blank" rel="noopener noreferrer" className="font-bold underline">GitHub</a> 
          ou entrer en contact avec moi sur <a href="https://www.linkedin.com/in/akram-mouhlal-755b42291/" target="_blank" rel="noopener noreferrer" className="font-bold underline">LinkedIn</a>.
        </p>
      </motion.div>
    </div>
  );
}
