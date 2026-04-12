import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // true when the <footer> element enters the viewport
  const [footerInView, setFooterInView] = useState(false);
  const footerRef = useRef(null);

  // Apply / remove dark class on <body>
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Initialise AOS once
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  // Watch footer visibility — drives sidebar hide / footer icons show
  // Only active on screens ≤ 1200px; ignored on wider viewports
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const MAX_WIDTH = 1200;

    const apply = (isIntersecting) => {
      // Only dock on small/medium screens
      setFooterInView(window.innerWidth <= MAX_WIDTH && isIntersecting);
    };

    const observer = new IntersectionObserver(
      ([entry]) => apply(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);

    // When resizing to a large screen, always un-dock immediately
    const onResize = () => {
      if (window.innerWidth > MAX_WIDTH) setFooterInView(false);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const toggleDark = () => setDark(d => !d);

  return (
    <>
      {/* Floating sidebar hidden when footer is in view */}
      <SocialSidebar hidden={footerInView} />
      
      <main>
        <Hero dark={dark} toggleDark={toggleDark} />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
      </main>

      {/* Pass ref for IntersectionObserver + showSocials flag */}
      <Footer ref={footerRef} showSocials={footerInView} />
    </>
  );
}

export default App;
