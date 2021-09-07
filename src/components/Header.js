
// **LIVES IN DIV className=CONTAINER**

function Header() {
    return(
        // <!-- HEADER -->
      <div className="jumbotron">
        <div className="jumbotron-text">
          <h1>AAUSTIN SCHROEDER</h1>
          <p>Full-Stack Web Developer in San Diego, CA.</p>
        </div>
        <div className="jumbotron-social">
          <ul className="ul-social">
            <li className="li-social-links">
              <a className="social" href="https://github.com/austinschroeder" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://www.linkedin.com/in/austin-schroeder100/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://twitter.com/austinshreddar" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="mailto:austinsoundy@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
        <div id="down-arrow">
          <span><a href="#about"><i className="fa fa-chevron-down" aria-hidden="true"></i></a></span>
        </div>
      </div>
    //   <!-- END HEADER -->
    )
}

export default Header;