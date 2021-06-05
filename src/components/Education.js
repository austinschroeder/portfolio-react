
// **LIVES IN DIV CLASS=CONTAINER**

function Education() {
    return(
        // <!-- BEGIN EDUCATION -->
      <div class="row white box-shadow">
        <div class="side-content"></div>
        <div class="main-content">
          <div class="content-header">
            <a class="anchor" name="education"></a>
            <h2>Education</h2>
          </div>
          <div class="content-body">

            {/* <!-- EDUCATION 1 --> */}
            <div class="card">
              <div class="card-header">
                <h4>General Assembly <span class="job-title">2021</span></h4>
              </div>
              <div class="card-content">
                  <p>Software Engineering Immersive</p>
                <p>Full-time, full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies.</p>
              </div>
            </div>
            {/* <!-- EDUCATION 2 --> */}
            <div class="card">
              <div class="card-header">
                <h4>Full Sail <span class="job-title">2005-2007</span></h4>
              </div>
              <div class="card-content">
                  <p>Software Engineering Immersive</p>
                    <p>-Completed my Bachelors Degree with honors for entertainment business and audio engineering.
                    <p>-Perfect Attendance award</p>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div class="side-content"></div>
      </div>
    //   <!-- END EDUCATION -->
    )
};

export default Education;