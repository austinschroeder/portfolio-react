import './App.css';
import GlobalStyle from './globalStyles';
import { theme } from './theme';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

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

const App = () => {
  // Google Analytics
  useEffect(() => {
    ReactGA.initialize('G-HWLV1VERR4');
    ReactGA.send('pageview');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default App;
