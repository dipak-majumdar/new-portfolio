const projects = [
    {
        title: 'Logistics Management System',
        description: 'Branch‑based logistics platform with real‑time notifications.',
        tags: ['FastAPI', 'React', 'WebSocket', 'MySQL'],
    },
    {
        title: 'Headless Blog Platform',
        description: 'SEO‑optimized headless WordPress with modern frontend.',
        tags: ['WordPress', 'React', 'REST API'],
        delay: 100,
    },
    {
        title: 'Pharmacy Management API',
        description: 'Secure JWT‑based pharmacy backend system.',
        tags: ['Laravel', 'JWT', 'MySQL'],
        delay: 200,
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h3 className="section-title" data-aos="fade-up">Projects</h3>
                <div className="projects-grid">
                    {projects.map(({ title, description, tags, delay = 0 }) => (
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
