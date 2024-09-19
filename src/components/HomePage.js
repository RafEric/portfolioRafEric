import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css'; // Assurez-vous que ce fichier est importé
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import backgroundImg from '../assets/bb.jpeg';
import profileImg from '../assets/BackgroundEraser_20240918_175909117.png'; // Assurez-vous d'importer votre image de profil

const HomePage = () => {
  return (
    <>
      <section className="home-intro">
        <div className="background-overlay"></div>

        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
         
        >
          
            {/* Colonne contenant l'image et le texte */}
            
              <div className="row  gy-4">
                {/* Image de profil */}
                <div className="col-md-7">
                  <motion.div
                   className="profile-frame-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                   
                  >
                    <img src={profileImg} alt="Profile" className="profile-img" />
                  </motion.div>
                </div>

                {/* Texte à droite de l'image */}
                <div className="col-md-5  text-start">
                  
                      <h1 className="animated-text">
                    Welcome, je suis RAFANOMEZANTSOA Santatriniaiana Eric
                  </h1>
                  <p>
                    Jeune diplômé passionné par la technologie et avide de défis, je suis déterminé
                    à explorer de nouvelles opportunités dans le développement web.
                  </p> 
                  
                  
                  <motion.a
                    href="#projects"
                    className="btn"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    View My Projects
                  </motion.a>
                </div>
              </div>
            
            {/* Colonne vide */}
            <div className="col-md-5"></div>
          
        </motion.div>

        <motion.div
          className="background-image"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          
        >
          <img src={backgroundImg} alt="Background" />
        </motion.div>
      </section>

      <SkillsSection />
      <ProjectsSection />
    </>
  );
};

export default HomePage;
