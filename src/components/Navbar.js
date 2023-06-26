import resume from '../static/resume.pdf';

const NavBar = () => {
  const handleAboutClick = () => {
    document
      .getElementById('about-header')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    // <!-- BEGIN NAVBAR -->
    <div className="navbar">
      <a onClick={handleAboutClick} href="#about">
        About
      </a>
      <a className="skills" href="#skills">
        Skills
      </a>
      <a className="projects" href="#projects">
        Projects
      </a>
      <a className="experience" href="#experience">
        Experience
      </a>
      <a className="education" href="#education">
        Education
      </a>
      <a className="resume" target="_blank" rel="noreferrer" href={resume}>
        Resume
      </a>
      {/* <a className="resume" target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vQ9leWbR4c_KeiIzCIIascAYY24lgjNSMXmQPvriu8BM0vMhmzWqoupalsyG8lsZXS4IXOS7TlCDmUr/pub">Resume</a> */}
      {/* <a href="#contact">Contact</a> */}
    </div>
    // <!-- END NAVBAR -->
  );
};

export default NavBar;
