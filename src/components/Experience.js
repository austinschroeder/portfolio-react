// import Carousel from 'react-bootstrap/Carousel'

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
                <p><strong><u>Production Manager:</u></strong>  Pre-planned and executed all technical logistics for individual events, as well as entire tours.  Worked with six-figure budgets on securing production vendors and maintaining relationships.  Hired/fired crew members.  Managed conflicting priorities.  Acts  include: Tom Morello Projects, Cypress Hill, Rachel Platten, Iggy Azalea + many more.
                </p>
                <p><strong><u>Tour Manager:</u></strong> Worked with all members of production to create, inspire, and delegate teams. Managed blockbuster events and tours. Created VIP experience packages for fans. Planned and executed multiple complex travel arrangements.  Acts include: Plain White T’s, The Wild Feathers, Hanson + many more.
                </p>
                <p className="audio-engineer"><strong><u>Audio Engineer:</u></strong> Responsible for all aspects of audio for concerts and events with capacity up to 80,000 people.  High stress and high stakes trouble-shooting  with complex audio systems.  Maintained performance morale between management and artist.  Highly autonomous.  Acts include: Rage Against the Machine, Backstreet Boys, Usher, John Fogerty, Foo Fighters, Sara Bareilles + many more</p>
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
                <p>• Coordinated and negotiated audio equipment for worldwide arena concert tours and events</p>
                <p>• Closed an annual average of $500k+ in sales and budget management</p>
              </div>
            </div>

          {/* <!-- CARD #3 --> */}

            <div className="card">
              <div className="card-header">
                <h4>ECS Jets <span className="job-title">Aviation Advisor/Sales</span></h4>
              </div>
              <div className="card-content">
                <p>• Sourced and maintained client relationships for a luxury private jet charter service</p>
                <p>• Coordinated aircraft operators with international hubs on logistics and sourcing aircraft </p>
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