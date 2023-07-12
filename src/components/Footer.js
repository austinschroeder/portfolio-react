// **LIVES IN DIV className=CONTAINER**
import googleAnalytics from '../images/google-analytics.png';

const Footer = () => {
  return (
    // <!-- BEGIN FOOTER -->
    <>
      <div className="row">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header"></div>
          <div className="jumbotron-social">
            <ul className="ul-social">
              <li className="li-social-links">
                <a
                  className="social"
                  href="https://github.com/austinschroeder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github footer" aria-hidden="true"></i>
                </a>
              </li>
              <li className="li-social-links">
                <a
                  className="social"
                  href="https://www.linkedin.com/in/austin-schroeder100/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin footer" aria-hidden="true"></i>
                </a>
              </li>
              <li className="li-social-links">
                <a
                  className="social"
                  href="https://twitter.com/austinshreddar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter footer" aria-hidden="true"></i>
                </a>
              </li>
              <li className="li-social-links">
                <a
                  className="social"
                  href="mailto:austinsoundy@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-envelope-o footer" aria-hidden="true"></i>
                </a>
              </li>
              <div className="image-container">
                <p>&copy; AUSTIN SCHROEDER 2023</p>
                <img
                  height="40"
                  width="88"
                  src={googleAnalytics}
                  alt="googleAnalytics"
                />
              </div>
            </ul>
          </div>
        </div>
        <div className="side-content"></div>
      </div>
    </>

    //   <!-- END FOOTER -->
  );
};

export default Footer;
