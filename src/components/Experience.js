// import ImgCarousel from "./ImgCarousel";

// **LIVES IN DIV className=CONTAINER**

function Experience() {
  return (
    // <!-- BEGIN EXPERIENCE -->
    <div className="row">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
          <a className="anchor" name="experience"></a>
          <h2>Experience</h2>
        </div>

        {/* <!-- CARD #0 --> */}

        <div className="card">
          <div className="card-header">
            <h4>
              Eventric • April 2022-current{' '}
              <span className="job-title">Front-End Developer</span>
            </h4>
          </div>
          <div className="card-content">
            <p>
              Eventric is the leading SaaS developer of live event and tour
              management software solutions. We power efficiency and measurable
              bottom-line profitability for event production and tour
              management. We’ve designed and cultivated our web, mobile, and
              cloud solutions Master Tour and Live Access to precisely benefit
              the needs of the top professionals across music, tv/film, sports,
              production, corporate, and touring industries.
            </p>
            <ul className="knowcap-ul">
              <li>
                Stack includes: React, Electron, Redux, React-Native, React w/
                Typescript, React Context, Styled Components, Mocha and Cypress
                Unit testing
              </li>
              <li>
                Agile Scrum workflow with daily standups, sprints, and PR review
              </li>
              <li>
                Reformatted a lot of legacy React code to more modern functional
                components with hooks
              </li>
              <li>
                Upkeep of user feedback and feature requests, as well as bug
                fixes
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h4>
              Ace Relocation Systems • Jan 2022-April 2022{' '}
              <span className="job-title">Front-End Developer</span>
            </h4>
          </div>
          <div className="card-content">
            <p>
              Managing the end-to-end life cycle for the production of software
              and applications. Overseeing and guiding the analyzing, writing,
              building, and deployment of software. Overseeing the automated
              testing and providing feedback to management during the
              development process.
            </p>
            <ul className="knowcap-ul">
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
                Design and implementation of low-latency, high-availability, and
                performant web applications
              </li>
              <li>
                Integration of data storage solutions (SQL Server, Azure Blob
                Storage)
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h4>
              Knowcap • Nov 2021-Jan 2022{' '}
              <span className="job-title">Contract Role-Software Engineer</span>
            </h4>
          </div>
          <div className="card-content">
            <p>
              Utilizing MERN stack to develop an API that allows companies to
              agree to pay a service provider based on revenue for a period of
              time.
            </p>
            <ul className="knowcap-ul">
              <li>
                Responsible for implementing Plaid API to add user bank
                accounts, calculate revenue percentage, find income/revenue.
              </li>
              <li>
                Implement test driven development using Jest library for API
                backend.
              </li>
              <li>
                Use GitHub Actions as the basis for CI/CD pipeline with GCP.
              </li>
              <li>
                Implement OpenAPI v3.0.+ for the backend API to service the
                frontend.
              </li>
              <li>Use JSON Web Tokens for session authorization.</li>
              <li>React Bootstrap is used for components.</li>
            </ul>
          </div>
        </div>

        {/* <!-- CARD #1 --> */}
        <div className="content-body">
          <div className="card">
            <div className="card-header">
              <h4>
                Live Concert Production • 2010-2021{' '}
                <span className="job-title">
                  Positions include: Production Manager, Tour Manager, Audio
                  Engineer
                </span>
              </h4>
            </div>
            <div className="card-content">
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
              <p className="audio-engineer">
                <strong>
                  <u>Audio Engineer:</u>
                </strong>{' '}
                Responsible for all aspects of audio for concerts and events
                with capacity up to 80,000 people. High stress and high stakes
                trouble-shooting with complex audio systems. Maintained
                performance morale between management and artist. Highly
                autonomous.
              </p>
              <div className="experience-flex">
                <ul className="gig-list two">
                  <li>Rage Against the Machine • 2020</li>
                  <li>Tom Morello/Audioslave • 2018-2019</li>
                  <li>Usher • 2018</li>
                  <li>John Fogerty • 2018</li>
                  <li>Rancid • 2018</li>
                  <li>Backstreet Boys • 2017-2019</li>
                  <li>Rachel Platten • 2017-2018</li>
                  {/* </ul> */}
                  {/* <ul className="gig-list two"> */}
                  <li>Plain White Ts • 2017</li>
                  <li>Camila Cabello • 2017</li>
                  <li>Iggy Azalea • 2016-2018</li>
                  <li>Lupe Fiasco • 2016</li>
                  <li>Cypress Hill • 2015-2019</li>
                  <li>The Wild Feathers • 2015-2018</li>
                  <li>Foo Fighters • 2015</li>
                  {/* </ul> */}
                  {/* <ul> */}
                  <li>Queens of the Stone Age • 2014-2016</li>
                  <li>Neyo • 2014-2015</li>
                  <li>Blues Traveler • 2013-2014</li>
                  <li>Dawes • 2013</li>
                  <li>Sara Bareilles • 2013</li>
                  <li>Hanson • 2012</li>
                  <li>Mat Kearney • 2012</li>
                  <li>Cee Lo • 2011-2012</li>
                </ul>
              </div>
            </div>
            {/* <ImgCarousel /> */}
          </div>

          {/* <!-- CARD #2 --> */}

          <div className="card">
            <div className="card-header">
              <h4>
                Sound Image • 2018-2020{' '}
                <span className="job-title">Global Account Manager</span>
              </h4>
            </div>
            <div className="card-content">
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
            </div>
          </div>

          {/* <!-- CARD #3 --> */}

          <div className="card">
            <div className="card-header">
              <h4>
                ECS Jets • 2019-2020{' '}
                <span className="job-title">Aviation Advisor/Sales</span>
              </h4>
            </div>
            <div className="card-content">
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
            </div>
          </div>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
    //   <!-- END EXPERIENCE -->
  );
}

export default Experience;
