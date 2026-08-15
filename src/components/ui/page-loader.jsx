"use client";
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const darkTheme = storedTheme !== 'light';
      setIsDark(darkTheme);
      document.body.classList.toggle('dark', darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light');
      document.body.classList.toggle('dark', nextDark);
    }
  };

  return (
    <div className={`loader-container ${isDark ? 'loader-container--dark' : 'loader-container--light'}`}>
      <div className="loader-container__grid" />

      <button
        onClick={toggleTheme}
        className="loader-container__toggle"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <svg className="loader-container__toggle-icon loader-container__toggle-icon--sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="loader-container__toggle-icon loader-container__toggle-icon--moon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      <div className="loader-container__animation">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="loader-container__square"
            style={{
              animationDelay: `${-1.4285714286 * i}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
