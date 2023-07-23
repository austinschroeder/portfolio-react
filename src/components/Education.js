import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    // <!-- BEGIN EDUCATION -->
    <div className="row white box-shadow">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
          <div id="education" className="anchor" />
          <h2>Education</h2>
        </div>
        <div className="content-body">
          {/* <!-- EDUCATION 1 --> */}
          <Card>
            <CardHeader>
              <h4>
                General Assembly <span className="job-title">2021</span>
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
                Full Sail <span className="job-title">2005-2007</span>
              </h4>
            </CardHeader>
            <CardContent>
              <p>BS Entertainment Business and Recording Engineering</p>
              <p>-Perfect Attendance award</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
    //   <!-- END EDUCATION -->
  );
};

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

export default Education;
