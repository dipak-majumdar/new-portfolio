import skillGroups from '../data/skills.js'

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <h3 className="section-title" data-aos="fade-up">Skills</h3>
                <div className="skills-grid">
                    {skillGroups.map(({ title, skills, delay }) => (
                        <div
                            key={title}
                            className="skill-card"
                            data-aos="fade-up"
                            data-aos-delay={delay}
                        >
                            <h4 className="skill-card-title">{title}</h4>
                            <div className="skill-icons-grid">
                                {skills.map(({ name, icon }) => (
                                    <div key={name} className="skill-item">
                                        <img className="skill-icon" src={icon} alt={name} />
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
