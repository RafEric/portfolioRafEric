import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faDatabase,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faGithub,
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import "./HomePage.css";

const skills = [
  { category: "Frontend", items: [
    { name: "HTML", icon: faHtml5, color: "#E44D26" },
    { name: "CSS", icon: faCss3, color: "#1572B6" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
  ]},
  { category: "Backend", items: [
    { name: "Python", icon: faPython, color: "#3776AB" },
    { name: "Django", icon: faCogs, color: "rgb(88, 189, 142)" },
    { name: "APIs", icon: faPlug, color: "#FFA500" },
  ]},
  { category: "Bases de Données", items: [
    { name: "MySQL", icon: faDatabase, color: "#4479A1" },
    { name: "SQLite", icon: faDatabase, color: "rgb(172, 45, 93)" },
    { name: "PostgreSQL", icon: faDatabase, color: "#336791" },
  ]},
  { category: "Outils", items: [
    { name: "Git", icon: faGithub, color: "#F1502F" },
    { name: "GitHub", icon: faGithub, color: "rgb(199, 195, 210)" },
  ]},
  { category: "Systèmes d'Exploitation", items: [
    { name: "Linux", icon: faLinux, color: "#FCC624" },
    { name: "Windows", icon: faWindows, color: "#0078D6" },
  ]},
];

const SkillsSection = () => (
  <div className="skills-section " id="skills">
    <h2 className="skills-title">Mes Compétences</h2>
    <div className="skills-grid container">
      {skills.map((skillGroup, index) => (
        <div className="skill-group" key={index}>
          <h3 className="skill-category">{skillGroup.category}</h3>
          <div className="skill-items">
            {skillGroup.items.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  size="3x" 
                  style={{ color: skill.color }} // Ajout de la couleur ici
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
