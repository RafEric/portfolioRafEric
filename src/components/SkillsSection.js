import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDatabase, faPlug } from '@fortawesome/free-solid-svg-icons';
import { faPython , faGithub, faHtml5, faCss3,faJs, faBootstrap, faLinux, faWindows} from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';

const skills = [
  { name: 'Python', icon: faPython },
  { name: 'Django', icon: faCogs },
  { name: 'MySQL - Sqlite - Sql', icon: faDatabase },
  { name: 'APIs', icon: faPlug },
  {name: 'Git - Github', icon: faGithub },
  { name: 'html', icon: faHtml5 },
  { name: 'css', icon: faCss3 },
  {name: 'js', icon: faJs },
  { name: 'linux', icon: faLinux },
  { name: 'windows', icon: faWindows },
  {name: 'bootstrap', icon: faBootstrap },
  
];

const SkillsSection = () => (
  <div className="skills-section" id="skills">
    <h2>mes compétences</h2>
    <div className="skills-list">
      {skills.map(skill => (
        <div className="skill-card" key={skill.name}>
          <FontAwesomeIcon icon={skill.icon} />
          <h3>{skill.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
