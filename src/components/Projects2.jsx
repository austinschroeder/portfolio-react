import React, { useRef, useEffect } from 'react';
import projects from '../data/projectsData';
import styled from 'styled-components';



const ProjectCard = (props) => {
  const { project, index } = props;

  const ref = useRef(null);

  const bulletItems = project.bullets.map((bullet) => {
    return <ProjectBullets key={bullet}>{bullet}</ProjectBullets>;
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add the 'visible' class when the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <ProjectCardWrapper ref={ref} animateDirection={index % 2 === 0 ? 'left' : 'right'}>
      <ProjectImage>
        <img alt={project.name} src={project.image} />
      </ProjectImage>
      <ProjectContent>
        <h4>- {project.name} -</h4>
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
          <Anchor id="projects" />
          <h2>Projects</h2>
        </div>
        <ContentBody>
          {projects.map((project, index) => {
            return <ProjectCard project={project} key={project.name} index={index} />;
          })}
        </ContentBody>
      </MainContentLg>
      <SideContentSm />
    </ProjectsContainer>
  );
};

const ProjectBullets = styled.li`
    margin: 0;
  `;

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -60px;
  visibility: hidden;
`;

const ContentBody = styled.div`
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.75);
`;

const SideContentSm = styled.div`
  flex: 0 0 10%;
`;

const MainContentLg = styled.div`
  flex: 0 0 80%;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
  transform: translateX(${props => props.animateDirection === 'left' ? '-100%' : '100%'});

  &:hover {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }

  &.visible {
    opacity: 1;
    transform: translateX(0);
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
