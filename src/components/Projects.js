import React from "react";
// import tortoise from "../images/tortoise.png";
import projects from "../data/projectsData";

// **LIVES IN DIV className=CONTAINER**

function ProjectCard(props) {
  //bring {project} in to replace props param to replace variable in next line
  const { project } = props;
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} />
      </div>
      <div className="project-content">
        <h4 className="project-header">- {project.name} -</h4>
        <p>{project.description}</p>
        <p className="project-tech">- {project.tech} -</p>
        <div className="project-links-container">
          <a className="project-link"  href={project.link} target="_blank">Live Demo</a>
          <a className="project-link"  href={project.gh} target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  );
}

function Projects(props) {
  return (
    <div className="row bgflipped">
      <div className="side-content-sm"></div>
      <div className="main-content-lg">
        <div className="content-header">
          <a className="anchor" name="projects"></a>
          <h2>Projects</h2>
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
}

export default Projects;
