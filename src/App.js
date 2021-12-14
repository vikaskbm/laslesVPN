import GlobalStyle from './globalStyle';
import React from 'react';
import { Navbar, IntroSection, PlanSection, ReviewSection, Footer } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <IntroSection/>
      <PlanSection />
      <ReviewSection />
      <Footer />
    </Router>
  );
}

export default App;
