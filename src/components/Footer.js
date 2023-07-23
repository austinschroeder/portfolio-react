import styled from 'styled-components';
import googleAnalytics from '../images/google-analytics.png';

const Footer = () => {
  return (
    <Row>
      <SideContent />
      <MainContent>
        <ContentHeader />
        <JumbotronSocial>
          <UlSocial>
            <LiSocialLinks>
              <Social
                href="https://github.com/austinschroeder"
                target="_blank"
                rel="noreferrer"
              >
                <FooterIcon
                  className="fa fa-github"
                  aria-hidden="true"
                ></FooterIcon>
              </Social>
            </LiSocialLinks>
            <LiSocialLinks>
              <Social
                href="https://www.linkedin.com/in/austin-schroeder100/"
                target="_blank"
                rel="noreferrer"
              >
                <FooterIcon
                  className="fa fa-linkedin"
                  aria-hidden="true"
                ></FooterIcon>
              </Social>
            </LiSocialLinks>
            <LiSocialLinks>
              <Social
                href="https://twitter.com/austinshreddar"
                target="_blank"
                rel="noreferrer"
              >
                <FooterIcon
                  className="fa fa-twitter"
                  aria-hidden="true"
                ></FooterIcon>
              </Social>
            </LiSocialLinks>
            <LiSocialLinks>
              <Social
                href="mailto:austinsoundy@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FooterIcon
                  className="fa fa-envelope-o"
                  aria-hidden="true"
                ></FooterIcon>
              </Social>
            </LiSocialLinks>
            <ImageContainer>
              <CopyRight>&copy; AUSTIN SCHROEDER 2023</CopyRight>
              <img
                height="40"
                width="88"
                src={googleAnalytics}
                alt="googleAnalytics"
              />
            </ImageContainer>
          </UlSocial>
        </JumbotronSocial>
      </MainContent>
      <SideContent></SideContent>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
`;

const SideContent = styled.div`
  flex: 0 0 16.6%;

  @media screen and (max-width: 600px) {
    flex: 0 0 25px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ContentHeader = styled.div``;

const JumbotronSocial = styled.div``;

const UlSocial = styled.ul`
  text-align: center;
  padding-left: 0;
`;

const LiSocialLinks = styled.li`
  display: inline-block;
  list-style: none;
`;

const Social = styled.a`
  font-size: 3em;
  color: white;
  padding: 20px;

  &:hover {
    text-shadow: 2px 2px 5px white;
  }
`;

const FooterIcon = styled.i`
  color: #054c61;
  transition: none;

  &:hover {
    color: white;
    background-color: #054c61;
    border: 5px solid #054c61;
    border-radius: 5px;
    margin: -5px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const CopyRight = styled.p`
  margin-bottom: 0;
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

export default Footer;
