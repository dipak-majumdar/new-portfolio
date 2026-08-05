'use client';

import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/home/Hero';
import Stats from './components/home/Stats';
import About from './components/home/About';
import Experience from './components/home/Experience';
import Skills from './components/home/Skills';
import Projects from './components/home/Projects';
import Footer from './components/layout/Footer';
import SocialSidebar from './components/layout/SocialSidebar';

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem('theme') !== 'light';
  });

  const [footerInView, setFooterInView] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const MAX_WIDTH = 1200;

    const apply = (isIntersecting) => {
      setFooterInView(window.innerWidth <= MAX_WIDTH && isIntersecting);
    };

    const observer = new IntersectionObserver(
      ([entry]) => apply(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);

    const onResize = () => {
      if (window.innerWidth > MAX_WIDTH) setFooterInView(false);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const toggleDark = () => setDark((d) => !d);

  return (
    <>
      <SocialSidebar hidden={footerInView} />

      <main>
        <Hero dark={dark} toggleDark={toggleDark} />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer ref={footerRef} showSocials={footerInView} />
    </>
  );
}

export default App;
