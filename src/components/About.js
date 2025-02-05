import React from "react";
import { motion } from "framer-motion";

const AboutTextOnly = () => {
  return (
    <section
      className="about-text-only py-5 BackAbout"
      id="about"
      style={{
       
        color: "#ffffff",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <div className="container">
        <motion.h2
          className="display-4 fw-bold skill-title mb-4"
          style={{ textAlign: "center",
            marginBottom: "2rem",
            color: "#d0e1f1",
            fontSize: "2.5rem", }}
        >
          À propos de moi
        </motion.h2>
        <motion.p
          className="lead text-light mb-4"
          style={{ fontSize: "1.2rem", lineHeight: "1.8" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bonjour, je suis <span className="text-primary">Raf Eric</span>, un développeur
          passionné par la création d'applications web innovantes. Avec une expérience dans
          le développement front-end et back-end, je m'efforce de créer des solutions qui
          répondent aux besoins des utilisateurs tout en étant élégantes et fonctionnelles.
        </motion.p>

        <motion.p
          className="text-light mb-4"
          style={{ fontSize: "1.2rem", lineHeight: "1.8" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Mon approche du développement repose sur l'écriture de code propre, l'utilisation
          des meilleures pratiques et la collaboration étroite avec les clients pour
          garantir des solutions sur mesure. Je suis toujours à la recherche de nouvelles
          opportunités pour apprendre et m'améliorer.
        </motion.p>

        <motion.p
          className="text-light mb-4"
          style={{ fontSize: "1.2rem", lineHeight: "1.8" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Si vous souhaitez discuter de projets, de collaborations ou simplement en savoir
          plus sur mon travail, n'hésitez pas à me contacter.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutTextOnly;
