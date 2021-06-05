import React from 'react';
import tortoise from '../images/tortoise.png';


// **LIVES IN DIV CLASS=CONTAINER**

function Projects() {
    return(
        // <!-- BEGIN PROJECTS -->
      <div class="row">
            <div class="side-content-sm"></div>
            <div class="main-content-lg">
                <div class="content-header">
                    <a class="anchor" name="projects"></a>
                    <h2>Projects</h2>
                </div>
                <div class="content-body">
                        {/* <!--  #1 --> */}
                        <div class="project-card">
                            <div class="project-image">
                                <img src="https://zipclinic.com/wp-content/uploads/2019/12/plant.jpg" />
                            </div>
                            <div class="project-content">
                                <h4>Melty</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#">Link Text</a>
                            </div>
                        </div>
                        {/* <!--  #2 --> */}
                        <div class="project-card">
                            <div class="project-image">
                                <img src={tortoise} alt="Tortoise" />
                            </div>
                            <div class="project-content">
                                <h4>JS Racer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#">Link Text</a>
                            </div>
                        </div>
                        {/* <!--  #3 --> */}
                        <div class="project-card">
                            <div class="project-image">
                                <img src="https://www.pngitem.com/pimgs/m/625-6251290_nic-cage-face-png-nicolas-cage-high-resolution.png" alt="Tortoise" />
                            </div>
                            <div class="project-content">
                                <h4>Cage-DB</h4>
                                <p>Cage DB is a site designed for fans of Nicolas Cage. Visit Cage DB to catch up on all the comings and goings of the actor, Nic Cage.</p>
                                <a href="#">Link Text</a>
                            </div>
                        </div>
                

                </div>
            </div>
        <div class="side-content-sm"></div>
      </div>
    //   <!-- END PROJECTS -->
    )
}

export default Projects;