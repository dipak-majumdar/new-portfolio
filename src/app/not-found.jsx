"use client";
import Link from "next/link";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";
import "@/styles/page/_404.scss";

export default function NotFound() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const darkTheme = storedTheme !== "light";
      setIsDark(darkTheme);
      document.body.classList.toggle("dark", darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next ? "dark" : "light");
      document.body.classList.toggle("dark", next);
    }
  };

  return (
    <main className={`error-page ${isDark ? "error-page--dark" : "error-page--light"}`}>
      <button onClick={toggleTheme} className="error-page__toggle" aria-label="Toggle dark mode" />
      <h1 className="error-page__code">404</h1>
      <h2 className="error-page__title">Page Not Found</h2>
      <p className="error-page__message">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="error-page__button">
        <Home className="error-page__icon" /> Back to Home
      </Link>
    </main>
  );
}


