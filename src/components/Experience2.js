import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    // <!-- BEGIN EXPERIENCE -->
    <Row>
      <SideContent />
      <MainContent>
        <Anchor id="experience" />
        <h2>Experience</h2>
        {/* <!-- CARD #0 --> */}
        <Card>
          <CardHeader>
            <h4>
              Eventric • April 2022-July 2023{' '}
              <JobTitle>Front-End Developer</JobTitle>
            </h4>
          </CardHeader>
          <CardContent>
            <p>
              Eventric is the leading SaaS developer of live event and tour
              management software solutions. We power efficiency and measurable
              bottom-line profitability for event production and tour
              management. We’ve designed and cultivated our web, mobile, and
              cloud solutions Master Tour and Live Access to precisely benefit
              the needs of the top professionals across music, tv/film, sports,
              production, corporate, and touring industries.
            </p>
            <Ul>
              <li>
                Stack includes: React, Electron, Redux, React-Native, React w/
                Typescript, React Context, Styled Components, Mocha and Cypress
                Unit testing
              </li>
              <li>
                Pioneered the initiative to adopt newer technologies and develop
                custom UI components
              </li>
              <li>
                Modernized codebase to latest React standards using Context API
                and functional components
              </li>
              <li>
                Confidently led demos and presentations to non technical team
                members and users
              </li>
              <li>
                Designed, architected, and developed flagship web app alongside
                design team
              </li>
            </Ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h4>
              Ace Relocation Systems • Jan 2022-April 2022{' '}
              <JobTitle>Front-End Developer</JobTitle>
            </h4>
          </CardHeader>
          <CardContent>
            <p>
              Managing the end-to-end life cycle for the production of software
              and applications. Overseeing and guiding the analyzing, writing,
              building, and deployment of software. Overseeing the automated
              testing and providing feedback to management during the
              development process.
            </p>
            <Ul>
              <li>
                Integration of VueJS, ReactJS and NodeJS applications into other
                3rd party APIs and systems
              </li>
              <li>
                Created{' '}
                <a
                  href="https://customer.acerelocation.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ace Customer Portal
                </a>
                <p>
                  Example- Order Number: <b>AHU192580</b> Email:{' '}
                  <b>CHAHAL408@GMAIL.COM</b>
                </p>
              </li>
              <li>
                Integrated Puppeteer.js to automate repetitive internal tasks
                (processing reports, updating order statuses, etc) saving
                employees 5+ hours of time per week
              </li>
              <li>
                Utilized Azure cloud storage to create a system enabling users
                to manage documents related to their move, such as contracts,
                permits, and insurance forms
              </li>
            </Ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h4>
              Knowcap • Nov 2021-Jan 2022{' '}
              <JobTitle>Contract Role-Software Engineer</JobTitle>
            </h4>
          </CardHeader>
          <CardContent>
            <p>Implemented test driven development and CI/CD pipeline</p>
            <Ul>
              <li>
                Responsible for implementing Plaid API to add user bank
                accounts, calculate revenue percentage, and find income/revenue
              </li>
              <li>Implemented test driven development and CI/CD pipeline</li>
              <li>
                Implement OpenAPI v3.0.+ for the backend API to service the
                frontend
              </li>
              <li>
                Implement OpenAPI v3.0.+ for the backend API to service the
                frontend
              </li>
              <li>
                Worked with the Auth team to migrate the UI away from
                cookie-based session management to JWT
              </li>
            </Ul>
          </CardContent>
        </Card>

        {/* <!-- CARD #1 --> */}
        <ContentBody>
          <Card>
            <CardHeader>
              <h4>
                Live Concert Production • 2010-2021{' '}
                <JobTitle>
                  Positions include: Production Manager, Tour Manager, Audio
                  Engineer
                </JobTitle>
              </h4>
            </CardHeader>
            <CardContent>
              <p>
                <strong>
                  <u>Production Manager:</u>
                </strong>{' '}
                Pre-planned and executed all technical logistics for individual
                events, as well as entire tours. Worked with six-figure budgets
                on securing production vendors and maintaining relationships.
                Hired/fired crew members. Managed conflicting priorities.
              </p>
              <p>
                <strong>
                  <u>Tour Manager:</u>
                </strong>{' '}
                Worked with all members of production to create, inspire, and
                delegate teams. Managed blockbuster events and tours. Created
                VIP experience packages for fans. Planned and executed multiple
                complex travel arrangements.
              </p>
              <AudioEngineer>
                <strong>
                  <u>Audio Engineer:</u>
                </strong>{' '}
                Responsible for all aspects of audio for concerts and events
                with capacity up to 80,000 people. High stress and high stakes
                trouble-shooting with complex audio systems. Maintained
                performance morale between management and artist. Highly
                autonomous.
              </AudioEngineer>
              <ExperienceFlex>
                <GigList>
                  <li>Rage Against the Machine • 2020</li>
                  <li>Tom Morello/Audioslave • 2018-2019</li>
                  <li>Usher • 2018</li>
                  <li>John Fogerty • 2018</li>
                  <li>Rancid • 2018</li>
                  <li>Backstreet Boys • 2017-2019</li>
                  <li>Rachel Platten • 2017-2018</li>
                  <li>Plain White Ts • 2017</li>
                  <li>Camila Cabello • 2017</li>
                  <li>Iggy Azalea • 2016-2018</li>
                  <li>Lupe Fiasco • 2016</li>
                  <li>Cypress Hill • 2015-2019</li>
                  <li>The Wild Feathers • 2015-2018</li>
                  <li>Foo Fighters • 2015</li>
                  <li>Queens of the Stone Age • 2014-2016</li>
                  <li>Neyo • 2014-2015</li>
                  <li>Blues Traveler • 2013-2014</li>
                  <li>Dawes • 2013</li>
                  <li>Sara Bareilles • 2013</li>
                  <li>Hanson • 2012</li>
                  <li>Mat Kearney • 2012</li>
                  <li>Cee Lo • 2011-2012</li>
                </GigList>
              </ExperienceFlex>
            </CardContent>
            {/* <ImgCarousel /> */}
          </Card>

          {/* <!-- CARD #2 --> */}

          <Card>
            <CardHeader>
              <h4>
                Sound Image • 2018-2020{' '}
                <JobTitle>Global Account Manager</JobTitle>
              </h4>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  Coordinated and negotiated audio equipment for worldwide arena
                  concert tours and events
                </li>
                <li>
                  Closed an annual average of $500k+ in sales and budget
                  management
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* <!-- CARD #3 --> */}

          <Card>
            <CardHeader>
              <h4>
                ECS Jets • 2019-2020 <JobTitle>Aviation Advisor/Sales</JobTitle>
              </h4>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  Sourced and maintained client relationships for a luxury
                  private jet charter service
                </li>
                <li>
                  Coordinated aircraft operators with international hubs on
                  logistics and sourcing aircraft{' '}
                </li>
              </ul>
            </CardContent>
          </Card>
        </ContentBody>
      </MainContent>
      <SideContent />
    </Row>
    //   <!-- END EXPERIENCE -->
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

// const H2 = styled.h2`
//   font-weight: 200;
//   font-size: 2rem;
//   color: #054c61;
//   text-transform: uppercase;
// `;

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

  /* h4 {
    @media screen and (max-width: 600px) {
      font-size: 1em;
    }
  } */
`;

const CardContent = styled.div`
  padding: 0.25rem 1.25rem;
  flex: 1 1 auto;
`;

const JobTitle = styled.span`
  float: right;
`;

const Ul = styled.ul`
  li {
    margin-bottom: 10px;
  }
`;

const ContentBody = styled.div`
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.75);
`;

const AudioEngineer = styled.p`
  margin-bottom: 0;
`;

const ExperienceFlex = styled.div`
  /* display: flex; */
  /* border: 1px solid red; */
`;

const GigList = styled.ul`
  columns: 3;
  padding-left: 15px;

  li {
    margin: 0 5px;
  }

  @media screen and (max-width: 600px) {
    columns: 1;
  }
`;

export default Experience;
