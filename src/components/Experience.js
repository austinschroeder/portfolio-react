
// **LIVES IN DIV className=CONTAINER**

function Experience() {
    return(
        // <!-- BEGIN EXPERIENCE -->
      <div className="row">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header">
            <a className="anchor" name="experience"></a>
            <h2>Experience</h2>
          </div>
          {/* <!-- CARD #1 --> */}
          <div className="content-body">
            <div className="card">
              <div className="card-header">
                <h4>Live Concert Production • 2010-2021 <span className="job-title">Positions include: Production Manager, Tour Manager, Audio Engineer</span></h4>
              </div>
              <div className="card-content">
                <p>I've spent most of my adulthood working with artists, helping bring their sound to life all around the world. Along the way I've been lucky to be surrounded by many talented people in production, equipment manufacturing, management, as well as on stage talent. Experienced in leadership, communication, organization, and problem solving. Able to lead and work with a team to timely solve problems and meet deadlines.  Productions I've been directily invlolved with, include:</p>
                <div className="experience-flex">
                  <ul className="gig-list two">
                    <li>Rage Against the Machine • 2020</li>
                    <li>Tom Morello/Audioslave • 2018-2019</li>
                    <li>Usher • 2018</li>
                    <li>John Fogerty • 2018</li>
                    <li>Rancid • 2018</li>
                    <li>Backstreet Boys • 2017-2019</li>
                    <li>Rachel Platten • 2017-2018</li>
                  </ul>
                  <ul className="gig-list two">
                    <li>Plain White Ts • 2017</li>
                    <li>Camila Cabello • 2017</li>
                    <li>Iggy Azalea • 2016-2018</li>
                    <li>Lupe Fiasco • 2016</li>
                    <li>Cypress Hill • 2015-2019</li>
                    <li>The Wild Feathers • 2015-2018</li>
                    <li>Foo Fighters • 2015</li>
                  </ul>
                  <ul>
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
            </div>

          {/* <!-- CARD #2 --> */}

            <div className="card">
              <div className="card-header">
                <h4>Sound Image <span className="job-title">Global Account Manager</span></h4>
              </div>
              <div className="card-content">
                <p>Directly maintain client relationships and coordinate logistics for international concert tours and events.  Sales and budget management</p>
              </div>
            </div>

          {/* <!-- CARD #3 --> */}

            <div className="card">
              <div className="card-header">
                <h4>ECS Jets <span className="job-title">Aviation Advisor/Sales</span></h4>
              </div>
              <div className="card-content">
                <p>Working with clients on providing an exceptional private travel experience, focusing on comfort, efficiency, performance, reliability, and safety.  Trip sourcing.  Working with international hubs on sourcing aircraft and logistics.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="side-content"></div>
      </div>
    //   <!-- END EXPERIENCE -->
    )
};

export default Experience;