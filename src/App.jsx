import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply / remove dark class on <body>
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Initialise AOS once
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  const toggleDark = () => setDark(d => !d);

  return (
    <>
      <Navbar dark={dark} toggleDark={toggleDark} />

      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer />

      {/* Floating GitHub button */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="github-fab"
      >
        View GitHub
      </a>
    </>
  );
}

export default App;
