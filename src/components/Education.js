import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    <Row>
      <SideContent />
      <MainContent>
        <Anchor id="education" />
        <h2>Education</h2>
        <ContentBody>
          {/* <!-- EDUCATION 1 --> */}
          <Card>
            <CardHeader>
              <h4>
                General Assembly <JobTitle>2021</JobTitle>
              </h4>
            </CardHeader>
            <CardContent>
              <p>
                <u>Software Engineering Immersive</u>
              </p>
              <p>
                -650+ hours of full-stack immersive web development challenging
                12 week curriculum
              </p>
              <p>
                -Developed 4 projects using pair programming with the focus on
                full-stack web applications, debugging, and collaboration using
                git version control
              </p>
            </CardContent>
          </Card>
          {/* <!-- EDUCATION 2 --> */}
          <Card>
            <CardHeader>
              <h4>
                Full Sail <JobTitle>2005-2007</JobTitle>
              </h4>
            </CardHeader>
            <CardContent>
              <p>BS Entertainment Business and Recording Engineering</p>
              <p>-Perfect Attendance award</p>
            </CardContent>
          </Card>
        </ContentBody>
      </MainContent>
      <SideContent />
    </Row>
  );
};

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -30px;
  visibility: hidden;
`;

const Row = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ContentBody = styled.div`
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.75);
`;

const SideContent = styled.div`
  flex: 0 0 16.6%;
  @media screen and (max-width: 600px) {
    flex: 0 0 25px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const CardContent = styled.div`
  padding: 0.25rem 1.25rem;
  flex: 1 1 auto;
`;

const JobTitle = styled.span`
  float: right;
`;
export default Education;
