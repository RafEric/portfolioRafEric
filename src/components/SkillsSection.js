import React from 'react';
import './HomePage.css'; // Assurez-vous que ce fichier est importé correctement


const skills = [
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Django', icon: 'fas fa-cogs' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'APIs', icon: 'fas fa-plug' },
];

const SkillsSection = () => (
  <div className="skills-section" id="skills">
    <h2>My Skills</h2>
    <div className="skills-list">
      {skills.map(skill => (
        <div className="skill-card" key={skill.name}>
          <i className={skill.icon}></i>
          <h3>{skill.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
