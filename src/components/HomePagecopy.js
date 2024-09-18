import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css'; // Assurez-vous que ce fichier est importé
import ProjectsSection from './ProjectsSection';
//import ContactSection from './ContactSection';
//import Footer from './Footer';
import SkillsSection from './SkillsSection';

import backgroundImg from '../assets/bb.jpeg';
const HomePage = () => {
  return (
    <>
    <section className="home-intro">
      <div className="background-overlay"></div>
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
            
       
         <div class="row gy-4">
        <div class="col-md-7">
            
            
        </div>
         <div class="col-md-5">
            <h1 class="animated-text">Welcome,
             je suis RAFANOMEZANTSOA Santatriniaiana Eric</h1>
            <p>
          jeune diplomé passionné par la technologie et avide de défis, je suis determiné à exporter de nouvelles opportunités dans le développement web
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
        
        
      </motion.div>
      <motion.div
        className="background-image"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
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
