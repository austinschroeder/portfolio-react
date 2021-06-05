
// **LIVES IN DIV CLASS=CONTAINER**

function Header() {
    return(
        // <!-- HEADER -->
      <div class="jumbotron">
        <div class="jumbotron-text">
          <h1>AUSTIN SCHRODER</h1>
          <p>Full-Stack Web Developer in San Diego, CA.</p>
        </div>
        <div class="jumbotron-social">
          <ul class="ul-social">
            <li class="li-social-links">
              <a class="social" href="https://github.com/austinschroeder" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li class="li-social-links">
              <a class="social" href="https://www.linkedin.com/in/austin-schroeder100/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li class="li-social-links">
              <a class="social" href="https://twitter.com/austinshreddar" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
        <div id="down-arrow">
          <span><a href="#about"><i class="fa fa-chevron-down" aria-hidden="true"></i></a></span>
        </div>
      </div>
    //   <!-- END HEADER -->
    )
}

export default Header;