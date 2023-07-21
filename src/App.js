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
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';

// import ImgCarousel from './components/ImgCarousel';

// document.getElementById('about').addEventListener('click', function(){
//   document.getElementById('about-header').scrollIntoView({behavior:"smooth"});
// })

const App = () => {
  // Google Analytics
  useEffect(() => {
    ReactGA.initialize('G-HWLV1VERR4');
    ReactGA.send('pageview');
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <ImgCarousel /> */}
      <Education />
      <Footer />
    </div>
  );
};

export default App;
