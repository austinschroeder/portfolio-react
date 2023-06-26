import x from '../images/x-2.png';
import covid19 from '../images/covid19-2.png';
import lasso from '../images/lasso.png';
import jsracer from '../images/jsracer.png';
import etch from '../images/etch.png';
import rta from '../images/rta.png';
import trivia from '../images/trivia.png';
// import memories from '../images/memories2.png';
// import melty from '../images/melty.png';
// import cage from '../images/cage.png';
// import tortoise from '../images/tortoise.png';

const projects = [
  {
    name: 'React/Typescript Triva Game',
    image: trivia,
    description:
      'Fun trivia game that pulls questions from Open Trivia Database API.  Built to better understand Typescript and Styled Components.',
    bullets: [
      'Experimented with creative CSS techniques',
      'Paid close attention to async/await and speed of API calls',
      'Easily customizable to add more questions or change difficulty of questions pulled from API',
    ],
    tech: 'React, Typescript, Styled Components',
    link: 'https://austinschroeder.github.io/react-trivia/',
    gh: 'https://github.com/austinschroeder/react-trivia',
  },
  {
    name: 'Audio Analyzer',
    image: rta,
    description:
      'Real Time Analyzer (RTA) web app that will provide a visual display of audio data being collected via device microphone.',
    bullets: [
      'RGB to HSL conversion to provide coloration for amplitude of specific frequency data',
      'No libraries or frameworks used',
      'Will make everybody else in your office wonder what the heck you are doing…',
    ],
    tech: 'HTML, CSS, Canvas, vanilla JavaScript, Parcel bundler',
    link: 'https://austinschroeder.github.io/rta/',
    gh: 'https://github.com/austinschroeder/rta',
  },
  {
    name: 'SASS Portfolio',
    image: lasso,
    description:
      'A responsive multi page mock ‘tech’ portfolio site.  Created to learn SASS and try out some humor in my work.',
    bullets: [
      'Used Photoshop to edit custom images',
      'Completed over the course of 2 days',
      'No build system.  Raw HTML, JS',
    ],
    tech: 'HTML, SASS/CSS, JavaScript, Adobe Photoshop',
    link: 'https://austinschroeder.github.io/sass-learn/index.html',
    gh: 'https://github.com/austinschroeder/sass-learn',
  },
  // {
  //   name: '"Remember this?"',
  //   image: memories,
  //   description: (
  //     <>
  //       A responsive web application that enables users to upload an image file
  //       or “memory”, with a title, creator, short message, and image tags.
  //       <br />
  //       <i>(Please allow time for Heroku server to start up)</i>
  //     </>
  //   ),
  //   bullets: [
  //     'Implemented CRUD API, where users can like posts',
  //     'Built to learn React using Hooks and Redux for data store',
  //   ],
  //   tech: 'React + Redux, Node, Express, MongoDB, Material-UI',
  //   link: 'https://memories-austin.netlify.app/',
  //   gh: 'https://github.com/austinschroeder/memories-client',
  // },
  {
    name: '"Etch-A-Sketch"',
    image: etch,
    description:
      'A web app modeling the Etch-A-Sketch toy to learn about canvas and javascript animation.',
    bullets: [
      'Designed using Photoshop and CSS',
      'No libraries or frameworks used',
    ],
    tech: 'HTML, CSS, Canvas, JavaScript, Adobe Photoshop',
    link: 'https://austinschroeder.github.io/etch-a-sketch/',
    gh: 'https://github.com/austinschroeder/etch-a-sketch',
  },
  {
    name: 'Covid-19 Daily Tracker',
    image: covid19,
    description: (
      <>
        A responsive web app for monitoring Covid-19 statistics that update
        daily based on country. Created to get a better understanding of React
        with Hooks and implement a map API.
      </>
    ),
    bullets: [
      'The Chart.js API  used to create a  graph for displaying data in UI friendly visual form',
      'Numeral.js library is used for formatting and manipulating the data stored as numbers',
      'React-Leaflet component is used for displaying data via map visual',
    ],
    tech: 'HTML, CSS, React, Leaflet, Numeral, Material-UI',
    link: 'https://austinschroeder.github.io/covid-19-tracker/',
    gh: 'https://github.com/austinschroeder/covid-19-tracker/',
  },
  {
    name: 'Insta Clone',
    image: x,
    description:
      'A clone of the popular app, created to learn Firebase, Material-UI, and mobile first design fundamentals.',
    bullets: [
      'Features account creation and user authentication',
      'Users can add and edit images and comments',
    ],
    tech: 'HTML, CSS, Material-UI, React, Firebase',
    link: 'https://insta-clone-9079b.web.app/',
    gh: 'https://github.com/austinschroeder/insta-clone',
  },
  {
    name: 'JS Racer',
    image: jsracer,
    description:
      'Two player racing game with keyboard controls, sound effects, and score tracking.',
    bullets: [
      'Built to learn jQuery fundamentals as my first app  at bootcamp',
      'Learned web audio API to include background music, sound effects, and winner declaration',
    ],
    tech: 'HTML, CSS, JS, jQuery',
    link: 'https://pages.git.generalassemb.ly/austinschroeder/Austin-JS-Racer/',
    gh: 'https://github.com/austinschroeder/javascript-racer',
  },
  // {
  //   name: 'Melty',
  //   image: melty,
  //   description:
  //     'A site for customers interested in finding plant-based cheeses in their area. Includes information about top brands of plant-based cheeses including a product picture, and user reviews.',
  //   bullets: [
  //     'Implemented CRUD API, able to create a brand and product by uploading details to DB',
  //     'Decorative buttons animate using CSS',
  //   ],
  //   tech: 'HTML, MongoDB, Mongoose, NodeJS, ExpressJS',
  //   link: 'https://melty-plant-based.herokuapp.com/',
  //   gh: 'https://github.com/austinschroeder/melty',
  // },
  // {
  //   name: 'Cage-DB',
  //   image: cage,
  //   description: (
  //     <>
  //       Cage DB is a RESTful web app containing a detailed database on Nicolas
  //       Cage movies
  //       <br />
  //       <i>(Please allow time for Heroku server to start up)</i>
  //     </>
  //   ),
  //   bullets: [
  //     'Used Photoshop to edit custom images',
  //     'Completed over the course of 2 days',
  //     'No build system.  Raw HTML, JS',
  //   ],
  //   tech: 'Python, Django, HTML, CSS-Materialize',
  //   link: 'https://cage-db.herokuapp.com/',
  //   gh: 'https://github.com/austinschroeder/cage-db',
  // },
];

export default projects;
