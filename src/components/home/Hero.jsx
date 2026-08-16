"use client";
import { Globe, Phone, Mail, Download, Layers, Moon, Sun, Loader } from 'lucide-react';
// import image from '../assets/dipak-majumdar.png';

export default function Hero({ dark, toggleDark }) {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">

                    {/* Text side */}
                    <div data-aos="fade-up">
                        {/* <div className="badge">🚀 Available for opportunities</div> */}
                        <h1 className="hero-title">
                            <span className="accent">Dipak Majumdar</span>
                        </h1>
                        <p className="hero-subtitle">Full Stack Developer</p>
                        <div className="hero-location">
                            <Globe className="hero-icon" aria-hidden="true" />
                            <span>Kolkata, India</span>
                        </div>
                        <div className="hero-btns">
                            <a href="tel:+917699753019" className="btn-primary hero-btn--icon-only" aria-label="Call" title="Call">
                                <Phone className="hero-icon" strokeWidth={2.5} aria-hidden="true" />
                            </a>
                            <a href="mailto:dipakmajumdar@zohomail.com" className="btn-primary hero-btn--icon-only" aria-label="Mail" title="Mail">
                                <Mail className="hero-icon" strokeWidth={2.5} aria-hidden="true" />
                            </a>
                            <a href="/dipak-majumdar-resume-python-developer.pdf" download className="btn-outline">
                                <Download className="hero-icon" aria-hidden="true" />
                                <span>Resume</span>
                            </a>
                            <a href="#projects" className="btn-outline">
                                <Layers className="hero-icon" aria-hidden="true" />
                                <span>Projects</span>
                            </a>
                        </div>
                    </div>

                    {/* Visual side */}
                    <div className="hero-visual" data-aos="zoom-in">
                        <div className="terminal w-full max-w-md">
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <div className="dot red"></div>
                                    <div className="dot yellow"></div>
                                    <div className="dot green"></div>
                                </div>
                                {/* Dark mode toggle in the terminal header */}
                                <div className="terminal-theme-toggle">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        id="theme-checkbox"
                                        checked={dark}
                                        onChange={toggleDark}
                                    />
                                    <label htmlFor="theme-checkbox" className="checkbox-label">
                                        <Moon className="toggle-icon moon-icon" aria-hidden="true" />
                                        <Sun className="toggle-icon sun-icon" aria-hidden="true" />
                                        <span className="ball"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="terminal-body text-emerald-400">
                                <div>{'>'} whoami</div>
                                <div className="cmd-res-text">Dipak Majumdar</div>
                                <div className="mt-12">{'>'} stack</div>
                                <div className="cmd-res-text">FastAPI • Laravel • React • MySQL</div>
                                <div className="mt-12">{'>'} status</div>
                                <div className="cmd-res-text">Available for hire<span className="animate-pulse">_</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
