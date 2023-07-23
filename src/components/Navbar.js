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
        About
      </a>
      <a href="#skills" aria-label="Skills Section">
        Skills
      </a>
      <a href="#experience" aria-label="Experience Section">
        Experience
      </a>
      <a href="#projects" aria-label="Projects Section">
        Projects
      </a>
      <a href="#education" aria-label="Education Section">
        Education
      </a>
      <a target="_blank" rel="noreferrer" href={resume} aria-label="Resume">
        Resume
      </a>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  z-index: 3;
  background-color: #054c61;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    font-weight: 200;
    color: white;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
      text-shadow: 2px 2px 5px white;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
      padding: 14px 6px;
    }
  }
`;

export default NavBar;
