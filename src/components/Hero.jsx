import image from '../assets/dipak-majumdar.png';

export default function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">

                    {/* Text side */}
                    <div data-aos="fade-up">
                        <div className="badge">🚀 Available for opportunities</div>
                        <h2 className="hero-title">
                            {/* Hi, I'm <br />  */}
                            <span className="accent">Dipak Majumdar</span>
                        </h2>
                        <p className="hero-desc">
                            A Results-driven software developer specializing in performance, scalability, and clean architecture.
                        </p>
                        <div className="hero-btns">
                            <a href="#projects" className="btn-primary">View Work</a>
                            <a href="/resume.pdf" download className="btn-outline">Download Resume</a>
                        </div>
                    </div>

                    {/* Visual side */}
                    <div className="hero-visual" data-aos="zoom-in">
                        {/* <img className="avatar-box glow" src={image} alt="" /> */}
                        {/* <div className="avatar-box glow" /> */}
                        <div className="terminal w-full max-w-md">
                            <div className="terminal-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
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

