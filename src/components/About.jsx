import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Row>
        <SideContent />
        <MainContent>
          <Anchor id="about-header" />
          <h2>About</h2>
          <Body>
            A self-motivated tech geek, woodworker, and devoted father +
            husband. Reaching the top of my field in Audio Engineering and
            Production Management for live events, living through a pandemic and
            becoming a dad inspired me to transition into Software
            Development where I have advanced quickly working on both small and
            large scale applications. I am deeply curious about AI tools,
            component libraries, and API design. I am looking to further develop
            my skill set, contribute to a company's rapid growth in an uncertain
            economic climate, and eventually grow into a leadership position.
          </Body>
          <Body></Body>
        </MainContent>
        <SideContent />
      </Row>
    </Container>
  );
};

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -30px;
  visibility: hidden;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  -webkit-box-shadow: 0px 0px 1px 0px ${(props) => props.theme.colors.lightBlack};
  -moz-box-shadow: 0px 0px 1px 0px ${(props) => props.theme.colors.lightBlack};
  box-shadow: 0px 0px 1px 0px ${(props) => props.theme.colors.lightBlack};
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

const Body = styled.p`
  line-height: 1.5;
  color: ${(props) => props.theme.colors.lightBlack};
`;

export default About;
