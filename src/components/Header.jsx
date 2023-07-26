import styled from 'styled-components';
import backgroundGradient from '../images/gradient-bkgrnd.png';

const ExternalLink = ({ href, children, ariaLabel }) => (
  <StyledA href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
    {children}
  </StyledA>
);

const handleArrowClick = (e) => {
  e.preventDefault();
  document
    .getElementById('about-header')
    .scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
  return (
    <Jumbotron>
      <JumbotronText>
        <h1>AUSTIN SCHROEDER</h1>
        <p>Software Developer in San Diego, CA</p>
      </JumbotronText>
      <SocialContainer>
        <ul>
          <SocialLink>
            <ExternalLink
              href="https://github.com/austinschroeder"
              ariaLabel="GitHub Profile"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
          <SocialLink>
            <ExternalLink
              href="https://www.linkedin.com/in/austin-schroeder100/"
              ariaLabel="LinkedIn Profile"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
          <SocialLink>
            <ExternalLink
              href="https://twitter.com/austinshreddar"
              ariaLabel="Twitter Profile"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
          <SocialLink>
            <ExternalLink
              href="mailto:austinsoundy@gmail.com"
              ariaLabel="Email Address"
            >
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
        </ul>
      </SocialContainer>
      <ArrowLink>
        <a onClick={handleArrowClick} href="#about" aria-label="About Section">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </ArrowLink>
    </Jumbotron>
  );
};

const StyledA = styled.a`
  font-size: 3em;
  color: ${(props) => props.theme.colors.white};
  padding: 20px;

  &:hover {
    text-shadow: 2px 2px 5px white;
  }
`;

const Jumbotron = styled.div`
  height: 100vh;
  background:${(props) => props.theme.colors.primary} url(${backgroundGradient});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;

const JumbotronText = styled.div`
  font-weight: 400;
  font-size: 2em;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding-top: 150px;

  h1 {
    font-weight: 800;
    font-size: 3em;
    margin-bottom: 0;
    user-select: none;
    @media screen and (max-width: 600px) {
      font-size: 3rem;
    }
  }
  p {
    margin: 0;
    user-select: none;
    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const SocialContainer = styled.nav`
  text-align: center;
  padding-left: 0;

  ul {
    list-style: none;
    padding: 0;
  }
`;

const SocialLink = styled.li`
  display: inline-block;
`;

const ArrowLink = styled.div`
  margin-top: auto;
  text-align: center;
  margin-bottom: 50px;

  a {
    color: ${(props) => props.theme.colors.white};

    &:hover {
      text-shadow: 2px 2px 5px white;
    }
  }
`;

export default Header;
