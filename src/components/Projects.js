import React from 'react';
import projects from '../data/projectsData';

// **LIVES IN DIV className=CONTAINER**

const ProjectCard = (props) => {
  const { project } = props;
  console.log(props);
  const bulletItems = project.bullets.map((bullet) => {
    return (
      <li key={bullet} className="project-bullets">
        {bullet}
      </li>
    );
  });

  return (
    <div className="project-card">
      <div className="project-image">
        <img alt="" src={project.image} />
      </div>
      <div className="project-content">
        <h4 className="project-header">- {project.name} -</h4>
        <p className="project-description">{project.description}</p>
        <p className="project-tech">Tech used: {project.tech}</p>
        <ul>{bulletItems}</ul>
        <div className="project-links-container">
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            className="project-link"
            href={project.gh}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = (props) => {
  return (
    <div className="row bgflipped">
      <div className="side-content-sm"></div>
      <div className="main-content-lg">
        <div className="content-header">
          <h2 id="projects">Projects</h2>
        </div>
        <div className="content-body">
          {projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
      <div className="side-content-sm"></div>
    </div>
  );
};

export default Projects;
