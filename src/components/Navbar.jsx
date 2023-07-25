import resume from '../static/resume.pdf';
import styled from 'styled-components';

const NavBar = () => {
  const handleAboutClick = (e) => {
    e.preventDefault();
    document
      .getElementById('about-header')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <NavBarContainer>
      <a onClick={handleAboutClick} href="#about">
        <p>About</p>
      </a>
      <a href="#skills" aria-label="Skills Section">
        <p>Skills</p>
      </a>
      <a href="#experience" aria-label="Experience Section">
        <p>Experience</p>
      </a>
      <a href="#projects" aria-label="Projects Section">
        <p>Projects</p>
      </a>
      <a href="#education" aria-label="Education Section">
        <p>Education</p>
      </a>
      <a target="_blank" rel="noreferrer" href={resume} aria-label="Resume">
        <p>Resume</p>
      </a>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  z-index: 3;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    font-weight: 200;
    color: ${(props) => props.theme.colors.white};
    padding: 10px 16px;
    text-decoration: none;

    @media screen and (max-width: 600px) {
      padding: 10px 8px;
    }
  }

  p {
    margin: 0;
    padding: 3px 0;
    position: relative;
    display: inline-block;
  }

  p:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -1px;
    background: ${(props) => props.theme.colors.white};
    height: 2px;
    transition: width 0.3s ease;
  }

  p:hover:after {
    width: 100%;
    left: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 1px 10px;
  }
`;

export default NavBar;
