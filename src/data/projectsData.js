// import tortoise from '../images/tortoise.png';
import x from '../images/x-2.png';
import covid19 from '../images/covid19-2.png';
import memories from '../images/memories2.png';
import lasso from '../images/lasso.png';
import melty from '../images/melty.png';
import jsracer from '../images/jsracer.png';
// import instaclone1 from '../images/instaclone1.png'

const projects = [
  {
    name: 'SASS Portfolio',
    image: lasso,
    description:
      'The intention of this project is to become better equiped with using the Sass preprocessor, as well as continuing to work on my design responsiveness for different window sizes and mobile.',
    tech: 'HTML, SASS/CSS, JavaScript',
    link: 'https://austinschroeder.github.io/sass-learn/index.html',
    gh: 'https://github.com/austinschroeder/sass-learn',
  },
  {
    name: '"Remember this?"',
    image: memories,
    description: (
      <>
        MERN app for uploading images with descriptions and image tags
        <br />
        <i>(Please allow time for Heroku server to start up)</i>
      </>
    ),
    tech: 'React + Redux, Node, Express, MongoDB, Material-UI',
    link: 'https://memories-austin.netlify.app/',
    gh: 'https://github.com/austinschroeder/memories-client',
  },
  {
    name: 'Covid-19 Daily Tracker',
    image: covid19,
    description: (
      <>
        App to track Covid stats via country using React, Leaflet maps, and{' '}
        <a target="_blank" rel="noreferrer" href="https://disease.sh/">
          Disease.sh
        </a>{' '}
        API
      </>
    ),
    tech: 'HTML, CSS, React, Leaflet, Numeral, Material-UI',
    link: 'https://austinschroeder.github.io/covid-19-tracker/',
    gh: 'https://github.com/austinschroeder/covid-19-tracker/',
  },
  {
    name: 'Insta Clone',
    image: x,
    description:
      'Full CRUD Instagram clone implementing Firebase to handle backend and auth.',
    tech: 'HTML, CSS, Material-UI, React, Firebase',
    link: 'https://insta-clone-9079b.web.app/',
    gh: 'https://github.com/austinschroeder/insta-clone',
  },
  {
    name: 'JS Racer',
    image: jsracer,
    description:
      'Fun little racing game, made with JavaScript, jQuery and HTML/CSS',
    tech: 'HTML, CSS, JS, jQuery',
    link: 'https://pages.git.generalassemb.ly/austinschroeder/Austin-JS-Racer/',
    gh: 'https://github.com/austinschroeder/javascript-racer',
  },
  {
    name: 'Melty',
    image: melty,
    description:
      'Melty is a full CRUD site for customers interested in finding delicious plant-based cheeses in their area. Able to find out information about top brands of plant-based cheeses, read user reviews, and submit reviews.',
    tech: 'HTML, MongoDB, Mongoose, NodeJS, ExpressJS',
    link: 'https://melty-plant-based.herokuapp.com/',
    gh: 'https://github.com/austinschroeder/melty',
  },
  {
    name: 'Cage-DB',
    image:
      'https://www.pngitem.com/pimgs/m/625-6251290_nic-cage-face-png-nicolas-cage-high-resolution.png',
    description: (
      <>
        Cage DB is a full CRUD web app containing a detailed database on Nicolas
        Cage movies
        <br />
        <i>(Please allow time for Heroku server to start up)</i>
      </>
    ),
    tech: 'Python, Django, HTML, CSS-Materialize',
    link: 'https://cage-db.herokuapp.com/',
    gh: 'https://github.com/austinschroeder/cage-db',
  },
];

export default projects;
