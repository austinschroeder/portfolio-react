// **LIVES IN DIV className=CONTAINER**

const Education = () => {
  return (
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
              <h4>
                General Assembly <span className="job-title">2021</span>
              </h4>
            </div>
            <div className="card-content">
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
            </div>
          </div>
          {/* <!-- EDUCATION 2 --> */}
          <div className="card">
            <div className="card-header">
              <h4>
                Full Sail <span className="job-title">2005-2007</span>
              </h4>
            </div>
            <div className="card-content">
              <p>BA Entertainment Business and Recording Engineering</p>
              <p>-Perfect Attendance award</p>
            </div>
          </div>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
    //   <!-- END EDUCATION -->
  );
};

export default Education;
