
import { useState } from 'react';
import projects from '../data/projects';

export default function Projects() {
    const [startIndex, setStartIndex] = useState(0);
    const pageSize = 6;
    const endIndex = startIndex + pageSize;
    const canGoLeft = startIndex > 0;
    const canGoRight = endIndex < projects.length;

    const handleLeft = () => {
        if (canGoLeft) setStartIndex(startIndex - pageSize);
    };

    const handleRight = () => {
        if (canGoRight) setStartIndex(startIndex + pageSize);
    };

    return (
        <section id="projects">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                    <h3 className="section-title" data-aos="fade-up" style={{ margin: 0 }}>Projects</h3>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            aria-label="Previous projects"
                            onClick={handleLeft}
                            disabled={!canGoLeft}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: canGoLeft ? 'pointer' : 'not-allowed',
                                opacity: canGoLeft ? 1 : 0.4,
                                padding: '0 0.5rem',
                                transition: 'opacity 0.2s',
                            }}
                        >
                            &#8592;
                        </button>
                        <button
                            aria-label="Next projects"
                            onClick={handleRight}
                            disabled={!canGoRight}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: canGoRight ? 'pointer' : 'not-allowed',
                                opacity: canGoRight ? 1 : 0.4,
                                padding: '0 0.5rem',
                                transition: 'opacity 0.2s',
                            }}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
                <div className="projects-grid">
                    {projects.slice(startIndex, endIndex).map(({ title, description, tags, delay = 0 }) => (
                        <div
                            key={title}
                            className="project-card hover-border"
                            data-aos="fade-up"
                            data-aos-delay={delay}
                        >
                            <h4 className="project-title">{title}</h4>
                            <p className="project-desc">{description}</p>
                            <div className="tags">
                                {tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
