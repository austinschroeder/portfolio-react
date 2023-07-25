import styled from 'styled-components';
import backgroundGradient from '../images/gradient-bkgrnd.png';

const ExternalLink = ({ href, children, ariaLabel }) => (
  <StyledA href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
    {children}
  </StyledA>
);

const Header = () => {
  return (
    <Jumbotron>
      <JumbotronText>
        <h1>AUSTIN SCHROEDER</h1>
        <p>Full-Stack Web Developer in San Diego, CA</p>
      </JumbotronText>
      <SocialContainer>
        <ul>
          <SocialLink>
            <ExternalLink
              href="https://github.com/austinschroeder"
              aria-label="GitHub Profile"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
          <SocialLink>
            <ExternalLink
              href="https://www.linkedin.com/in/austin-schroeder100/"
              aria-label="LinkedIn Profile"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
          <SocialLink>
            <ExternalLink
              href="https://twitter.com/austinshreddar"
              aria-label="Twitter Profile"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
          <SocialLink>
            <ExternalLink
              href="mailto:
              austinsoundy@gmail.com"
              aria-label="Email Address"
            >
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </ExternalLink>
          </SocialLink>
        </ul>
      </SocialContainer>
      <ArrowLink>
        <a href="#about" aria-label="About Section">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </ArrowLink>
    </Jumbotron>
  );
};

const StyledA = styled.a`
  font-size: 3em;
  color: white;
  padding: 20px;

  &:hover {
    text-shadow: 2px 2px 5px white;
  }
`;

const Jumbotron = styled.div`
  height: 100vh;
  background: #054c61 url(${backgroundGradient});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    height: 600px;
  }
`;

const JumbotronText = styled.div`
  font-weight: 400;
  font-size: 2em;
  color: white;
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
    color: white;

    &:hover {
      text-shadow: 2px 2px 5px white;
    }
  }
`;

export default Header;
