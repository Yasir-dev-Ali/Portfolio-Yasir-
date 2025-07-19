// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Header/Home';
import AboutSection from './pages/AboutPage/AboutSection';
import NavBar from './components/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import ProjectSection from './pages/Project/ProjectSection';
import ContactPage from './pages/Contact/ContactPage';
import { Article } from './pages/Article/Article';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar active="home" />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
