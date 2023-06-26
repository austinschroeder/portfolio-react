import React, { useEffect } from 'react';

const skillNames = [
  'Javascript',
  'React',
  'Typescript',
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
  useEffect(() => {
    const skillItems = document.querySelectorAll('.li-skills');

    const fadeInSkills = () => {
      skillItems.forEach((skillItem) => {
        const bounding = skillItem.getBoundingClientRect();
        const windowBottom = window.innerHeight;

        if (bounding.top < windowBottom) {
          skillItem.classList.add('fade-in');
        }
      });
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', fadeInSkills);

    // Trigger the fade-in effect for initial skills in view
    fadeInSkills();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', fadeInSkills);
    };
  }, []);

  return (
    <div className="row white box-shadow">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
          <a className="anchor" name="skills"></a>
          <h2>Skills</h2>
        </div>
        <div className="content-body">
          <ul className="ul-skills">
            {skillNames.map((skillName) => {
              return (
                <li key={skillName} className="li-skills fade">
                  {skillName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
  );
};

export default Skills;
