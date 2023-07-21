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
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a target="_blank" rel="noreferrer" href={resume}>
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
