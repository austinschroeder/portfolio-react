import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const skillNames = [
  'Javascript',
  'React',
  'Typescript',
  'Angular',
  'HTML',
  'CSS',
  'Googling',
  'Node.js',
  'Bootstrap',
  'jQuery',
  'Express',
  'Mongo',
  'MongoDB',
  'Python',
  'Django',
  'PostgreSQL',
];

const Skills = () => {
  const skillItems = useRef([]);

  useEffect(() => {
    const fadeInSkills = () => {
      skillItems.current.forEach((skillItem) => {
        const bounding = skillItem.getBoundingClientRect();
        const windowBottom = window.innerHeight;

        if (bounding.top < windowBottom) {
          skillItem.style.opacity = 1;
        }
      });
    };

    window.addEventListener('scroll', fadeInSkills);

    // Trigger the fade-in effect for initial skills in view
    fadeInSkills();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', fadeInSkills);
    };
  }, []);

  return (
    <Row>
      <SideContent />
      <MainContent>
        <ContentHeader>
          <Anchor id="skills" />
          <h2>Skills</h2>
        </ContentHeader>
        <ContentBody>
          <SkillList>
            {skillNames.map((skillName, index) => {
              return (
                <SkillItem
                  ref={(el) => (skillItems.current[index] = el)}
                  key={skillName}
                >
                  {skillName}
                </SkillItem>
              );
            })}
          </SkillList>
        </ContentBody>
      </MainContent>
      <SideContent />
    </Row>
  );
};

export default Skills;

const Row = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 1px 0px ${(props) => props.theme.colors.lightBlack};
  -moz-box-shadow: 0px 0px 1px 0px ${(props) => props.theme.colors.lightBlack};
  box-shadow: 0px 0px 1px 0px ${(props) => props.theme.colors.lightBlack};
`;

const SideContent = styled.div`
  flex: 0 0 16.6%;
`;

const MainContent = styled.div`
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ContentHeader = styled.div``;

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -60px;
  visibility: hidden;
`;

const ContentBody = styled.div`
  line-height: 1.5;
  color: ${(props) => props.theme.colors.lightBlack};
`;

const SkillList = styled.ul`
  text-align: center;
  padding-left: 0;
`;

const SkillItem = styled.li`
  display: inline-block;
  margin: 7px;
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.white};
  background: ${props => props.theme.colors.skills};
  list-style: none;
  font-size: 1.2em;
  opacity: 0;
  transition: opacity 3s ease;
  cursor: default;
`;
