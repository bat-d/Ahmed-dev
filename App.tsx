import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-darker text-slate-300 relative selection:bg-primary selection:text-white">
      <MatrixBackground />
      
      {/* Content Wrapper with z-index to sit above canvas */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;