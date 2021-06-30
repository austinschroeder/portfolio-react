
// **LIVES IN DIV className=CONTAINER**

function Education() {
    return(
        // <!-- BEGIN EDUCATION -->
      <div className="row white box-shadow">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header">
            <a className="anchor" name="education"></a>
            <h2>Education</h2>
          </div>
          <div className="content-body">

            {/* <!-- EDUCATION 1 --> */}
            <div className="card">
              <div className="card-header">
                <h4>General Assembly <span className="job-title">2021</span></h4>
              </div>
              <div className="card-content">
                  <p>Software Engineering Immersive</p>
                <p>Full-time, full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies.</p>
              </div>
            </div>
            {/* <!-- EDUCATION 2 --> */}
            <div className="card">
              <div className="card-header">
                <h4>Full Sail <span className="job-title">2005-2007</span></h4>
              </div>
              <div className="card-content">
                  <p>BA Entertainment Business and Recording Engineering</p>
                    <p>-Completed Bachelors Degree with honors for entertainment business and audio engineering.
                    <p>-Perfect Attendance award</p>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="side-content"></div>
      </div>
    //   <!-- END EDUCATION -->
    )
};

export default Education;