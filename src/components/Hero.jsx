export default function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">

                    {/* Text side */}
                    <div data-aos="fade-up">
                        <div className="badge">🚀 Available for opportunities</div>
                        <h2 className="hero-title">
                            Hi, I'm <span className="accent">Dipak Majumdar</span>
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
                        <div className="avatar-box glow" />
                    </div>

                </div>
            </div>
        </section>
    );
}

