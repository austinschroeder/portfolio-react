
// **LIVES IN DIV className=CONTAINER**

function Footer() {
    return (
      // <!-- BEGIN FOOTER -->
      <>
        <div className="row">
          <div className="side-content"></div>
          <div className="main-content">
            <div className="content-header"></div>
            {/* <div className="content-body"> */}

              {/* ////////////////////////////////// */}
              <div className="jumbotron-social">
                <ul className="ul-social">
                  <li className="li-social-links">
                    <a className="social" href="https://github.com/austinschroeder" target="_blank"><i className="fa fa-github footer" aria-hidden="true"></i></a>
                  </li>
                  <li className="li-social-links">
                    <a className="social" href="https://www.linkedin.com/in/austin-schroeder100/" target="_blank"><i className="fa fa-linkedin footer" aria-hidden="true"></i></a>
                  </li>
                  <li className="li-social-links">
                    <a className="social" href="https://twitter.com/austinshreddar" target="_blank"><i className="fa fa-twitter footer" aria-hidden="true"></i></a>
                  </li>
                  <li className="li-social-links">
                    <a className="social" href="mailto:austinsoundy@gmail.com" target="_blank"><i className="fa fa-envelope-o footer" aria-hidden="true"></i></a>
                  </li>
                  <p>&copy; AUSTIN SCHROEDER 2021</p>
                </ul>
              </div>
              {/* ////////////////////////////////// */}

            {/* </div> */}
          </div>
          <div className="side-content"></div>
        </div>
      </>

      //   <!-- END FOOTER -->
    );
};

export default Footer;