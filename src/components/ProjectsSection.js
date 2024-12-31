import React from 'react';
import './HomePage.css'; // Assurez-vous que ce fichier est importé correctement

const projects = [
  {
    title: 'Prestataire des Mécaniciens',
    description:
      'Ce projet aide les prestataires et clients à se connecter. Trouvez un mécanicien en fonction de vos besoins ou localisez un dépanneur rapidement grâce à la géolocalisation.',
    link: '#',
    image: 'mechanic.jpg', // Exemple de chemin vers une image
  },
  {
    title: 'Gestion PV Réunion',
    description:
      'Un outil permettant de simplifier la gestion des procès-verbaux de réunion avec des fonctionnalités de suivi et de partage.',
    link: '#',
    image: 'meeting.jpg', // Exemple de chemin vers une image
  },
];

const ProjectsSection = () => (
  <div className="projects-section" id="projects">
    <h2>Mes Projets</h2>
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-card" key={project.title}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} className="project-link">
            Voir le projet
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;
