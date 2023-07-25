import './App.css';
import './css/style.css';
import styled from 'styled-components';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience2';
import Education from './components/Education';
import Projects from './components/Projects2';
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
    <Container>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <ImgCarousel /> */}
      <Education />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default App;
