import React from 'react';
import projects from '../data/projectsData';
import styled from 'styled-components';
// import { device } from '../device';

const ProjectCard = (props) => {
  const { project } = props;
  const ProjectBullets = styled.li`
    margin: 0;
  `;
  const bulletItems = project.bullets.map((bullet) => {
    return <ProjectBullets key={bullet}>{bullet}</ProjectBullets>;
  });

  return (
    <ProjectCardWrapper>
      <ProjectImage>
        <img alt="" src={project.image} />
      </ProjectImage>
      <ProjectContent>
        <ProjectHeader>- {project.name} -</ProjectHeader>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectTech>Tech used: {project.tech}</ProjectTech>
        <ul>{bulletItems}</ul>
        <ProjectLinksContainer>
          {project.link && (
            <ProjectLink href={project.link} target="_blank" rel="noreferrer">
              Live Demo
            </ProjectLink>
          )}
          {project.gh && (
            <ProjectLink href={project.gh} target="_blank" rel="noreferrer">
              Source Code
            </ProjectLink>
          )}
        </ProjectLinksContainer>
      </ProjectContent>
    </ProjectCardWrapper>
  );
};

const Projects = (props) => {
  return (
    <ProjectsContainer>
      <SideContentSm />
      <MainContentLg>
        <div>
          <h2 id="projects">Projects</h2>
        </div>
        <ContentBobdy>
          {projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </ContentBobdy>
      </MainContentLg>
      <SideContentSm />
    </ProjectsContainer>
  );
};

const ContentBobdy = styled.div`
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.75);
`;

const SideContentSm = styled.div`
  flex: 0 0 10%;

  @media screen and (max-width: 600px) {
    /* flex: 0 0 35px; */
  }
`;

const MainContentLg = styled.div`
  flex: 0 0 80%;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  background-color: white;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.div`
  align-items: center;
  border-right: #054b6170 solid 1px;

  img {
    height: 100%;
    width: 250px;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    border-right: none;
    border-bottom: #054b6170 solid 1px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`;

const ProjectContent = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ProjectHeader = styled.h4`
  margin: 0;
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-style: italic;
`;

const ProjectTech = styled.p`
  margin: 0;
`;

const ProjectLinksContainer = styled.div`
  margin: 0;
`;

const ProjectLink = styled.a`
  display: inline-block;
  font-size: larger;
  margin-left: 20px;
  height: 30px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: #054c61;
    color: white;
    text-decoration: none;
    height: 30px;
  }
`;

export default Projects;
