import React from 'react';
import './HomePage.css'; // Assurez-vous que ce fichier est importé correctement

const projects = [
  { title: 'Prestataire des Mecaniciens', description: 'Mon projet "Prestataire Mécanicien" a deux objectifs. Le premier est daider un prestataire, quil soit isolé ou quil ne travaille pas dans un garage, à trouver des clients. Le second est daider un client à trouver un mécanicien adapté à ses besoins, en fonction de son expérience ou de ses tarifs. De plus, il permet de localiser rapidement un mécanicien pour un dépannage lorsque le client tombe en panne, grâce à la position géographique.', link: '#' },
  { title: 'Project Two', description: 'A description of project two.', link: '#' },
  { title: 'Project Three', description: 'A description of project three.', link: '#' },
];

const ProjectsSection = () => (
  
  <div className="projects-section" id="projects">
    <h2>My Projects</h2>
    <div class="row projectRow gy-4">
    {projects.map(project => (
        
          
            <div className="project-card col-md-3 " key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>View Project</a>
            </div>
      
    ))}
    </div>
  </div>
  
);

export default ProjectsSection;
