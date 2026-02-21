const experiences = [
    {
        title: 'Application Developer',
        company: 'Web Idea Solution LLP.',
        period: 'Jan-2026 — Present',
        description:
            'Building scalable logistics and real‑time systems using FastAPI, Laravel, React, and MySQL. Leading a small dev team and handling production deployments.',
    },
    {
        title: 'Full Stack Developer',
        company: 'Leelija Web Solutions Private Limited.',
        period: 'Oct-2021 — Dec-2025',
        description:
            'Developed full‑stack applications, REST APIs, and WordPress solutions. Focused on performance optimization and SEO improvements.',
        delay: 100,
    },
];

export default function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <h3 className="section-title" data-aos="fade-up">Experience</h3>
                <div className="experience-list">
                    {experiences.map(({ title, company, period, description, delay = 0 }) => (
                        <div
                            key={title}
                            className="exp-card"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-delay={delay}
                        >
                            <div className="exp-header">
                                <h4 className="exp-title">{title}</h4>
                                <span className="exp-date">{period}</span>
                            </div>
                            <p className="exp-company">{company}</p>
                            <p className="exp-desc">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
