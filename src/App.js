import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProjectsPage from './components/pages/ProjectsPage'
import ContactPage from './components/pages/ContactPage';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} />
        </Routes>
        <Footer />
    </Router>

  );
}

export default App;
