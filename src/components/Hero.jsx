// import image from '../assets/dipak-majumdar.png';

export default function Hero({ dark, toggleDark }) {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">

                    {/* Text side */}
                    <div data-aos="fade-up">
                        {/* <div className="badge">🚀 Available for opportunities</div> */}
                        <h2 className="hero-title">
                            <span className="accent">Dipak Majumdar</span>
                        </h2>
                        <p className="hero-subtitle">Full Stack Developer</p>
                        <div className="hero-location">
                            <i className="fas fa-globe-asia" aria-hidden="true"></i>
                            <span>Kolkata, India</span>
                        </div>
                        <div className="hero-btns">
                            <a href="tel:+917699753019" className="btn-primary hero-btn--icon-only" aria-label="Call" title="Call">
                                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                            </a>
                            <a href="mailto:dipakmajumdar@zohomail.com" className="btn-primary hero-btn--icon-only" aria-label="Mail" title="Mail">
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                            </a>
                            <a href="/resume.pdf" download className="btn-outline">
                                <i className="fas fa-download" aria-hidden="true"></i>
                                <span>Resume</span>
                            </a>
                            <a href="#projects" className="btn-outline">
                                <i className="fas fa-layer-group" aria-hidden="true"></i>
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
                                        <i className="fas fa-moon"></i>
                                        <i className="fas fa-sun"></i>
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
