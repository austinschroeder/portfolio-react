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
            becoming a dad inspired me to transition to into Software
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
  /* background: white; */
  -webkit-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
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

// const Header = styled.h2`
//   font-weight: 200;
//   font-size: 2rem;
//   color: #054c61;
//   text-transform: uppercase;
//   text-align: center;
// `;

const Body = styled.p`
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.75);
`;

export default About;
