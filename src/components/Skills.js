// **LIVES IN DIV className=CONTAINER**

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

function Skills() {
  return (
    // <!-- BEGIN SKILLS -->
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
                <li key={skillName} className="li-skills">
                  {skillName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
    //   <!-- END SKILLS -->
  );
}

export default Skills;
