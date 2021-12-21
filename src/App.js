import './App.css';
import './css/style.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
// Google Analytics
import ReactGA from 'react-ga';
import React, { useEffect } from 'react';

// import ImgCarousel from './components/ImgCarousel';

// const aboutButton = document.getElementsById('about');
// console.log(aboutButton[0])

// document.getElementById('about').addEventListener('click', function(){
//   document.getElementById('about-header').scrollIntoView({behavior:"smooth"});
// })

// Google Analytics
useEffect(() => {
  ReactGA.initialize('TRACKING ID');
  ReactGA.pageview(window.location.pathname + window.location.search);
}, []);

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <ImgCarousel /> */}
      <Education />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
