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
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "Bootstrap", icon: faBootstrap },
  ]},
  { category: "Backend", items: [
    { name: "Python", icon: faPython },
    { name: "Django", icon: faCogs },
    { name: "APIs", icon: faPlug },
  ]},
  { category: "Bases de Données", items: [
    { name: "MySQL", icon: faDatabase },
    { name: "SQLite", icon: faDatabase },
    { name: "PostgreSQL", icon: faDatabase },
  ]},
  { category: "Outils", items: [
    { name: "Git", icon: faGithub },
    { name: "GitHub", icon: faGithub },
  ]},
  { category: "Systèmes d'Exploitation", items: [
    { name: "Linux", icon: faLinux },
    { name: "Windows", icon: faWindows },
  ]},
];

const SkillsSection = () => (
  <div className="skills-section" id="skills">
    <h2 className="skills-title">Mes Compétences</h2>
    <div className="skills-grid">
      {skills.map((skillGroup, index) => (
        <div className="skill-group" key={index}>
          <h3 className="skill-category">{skillGroup.category}</h3>
          <div className="skill-items">
            {skillGroup.items.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <FontAwesomeIcon icon={skill.icon} size="3x" />
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
