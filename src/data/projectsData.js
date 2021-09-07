import tortoise from '../images/tortoise.png';
import x from '../images/X.jpg'
import covid19 from '../images/covid19.png'
import memories from '../images/memories.png'
// import instaclone1 from '../images/instaclone1.png'

const projects = [
    {
        name: '"Remember this?"',
        image: memories,
        description: 'MERN app for uploading images with descriptions',
        tech: 'React + Redux, Node, Epress, MongoDB, Material-UI',
        link: 'https://memories-austin.netlify.app/',
        gh: 'https://github.com/austinschroeder/memories-client'
    },
    {
        name: 'Covid-19 Daily Tracker',
        image: covid19,
        description: <>App to track Covid stats via country using React, Leaflet maps, and <a target="_blank" rel="noreferrer" href='https://disease.sh/'>Disease.sh</a> API</>,
        tech: 'HTML, CSS, React, Leaflet, Numeral, Material-UI',
        link: 'https://austinschroeder.github.io/covid-19-tracker/',
        gh: 'https://github.com/austinschroeder/covid-19-tracker/'
    },
    {
        name: 'Insta Clone',
        image: x,
        description: 'Full CRUD Instagram clone implementing Firebase to handle backend and auth.',
        tech: 'HTML, CSS, Material-UI, React, Firebase',
        link: 'https://insta-clone-9079b.web.app/',
        gh: 'https://github.com/austinschroeder/insta-clone'
    },
    {
        name: 'JS Racer',
        image: tortoise,
        description: 'Fun little racing game, made with JavaScript, jQuery and HTML/CSS',
        tech: 'HTML, CSS, JS, jQuery',
        link: 'https://pages.git.generalassemb.ly/austinschroeder/Austin-JS-Racer/',
        gh: 'https://github.com/austinschroeder/javascript-racer'
        
    },
    {
        name: 'Melty',
        image: 'https://zipclinic.com/wp-content/uploads/2019/12/plant.jpg',
        description: 'Melty is a full CRUD site for customers interested in finding delicious plant-based cheeses in their area. Able to find out information about top brands of plant-based cheeses, read user reviews, and submit reviews.',
        tech: 'HTML, MongoDB, Mongoose, NodeJS, ExpressJS',
        link: 'https://melty-plant-based.herokuapp.com/',
        gh: 'https://github.com/austinschroeder/melty'
        
    },
    {
        name: 'Cage-DB',
        image: 'https://www.pngitem.com/pimgs/m/625-6251290_nic-cage-face-png-nicolas-cage-high-resolution.png',
        description: 'Cage DB is a full CRUD web app containing a detailed database on Nicolas Cage movies',
        tech: 'Python, Django, HTML, CSS-Materialize',
        link: 'https://cage-db.herokuapp.com/',
        gh: 'https://github.com/austinschroeder/cage-db'
        
    },

];

export default projects;