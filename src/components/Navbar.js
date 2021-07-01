function NavBar() {
  const handleAboutClick = () => {
    document.getElementById('about-header').scrollIntoView({behavior:"smooth"});
  }
    return(
        // <!-- BEGIN NAVBAR -->
    <div className="navbar">
      <a onClick={handleAboutClick} href="#about">About</a>
      <a className="skills" href="#skills">Skills</a>
      <a className="projects" href="#projects">Projects</a>
      <a className="experience" href="#experience">Experience</a>
      <a className="education" href="#education">Education</a>
      {/* <a href="#contact">Contact</a> */}
    </div>
    // <!-- END NAVBAR -->
    )
}

export default NavBar;