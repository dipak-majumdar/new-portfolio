const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const skillGroups = [
    {
        title: 'Languages',
        delay: 0,
        skills: [
            { name: 'PHP', icon: `${CDN}/php/php-original.svg` },
            { name: 'Python', icon: `${CDN}/python/python-original.svg` },
            { name: 'Java', icon: `${CDN}/java/java-original.svg` },
            { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
        ],
    },
    {
        title: 'Frameworks',
        delay: 100,
        skills: [
            { name: 'Laravel', icon: `${CDN}/laravel/laravel-original.svg` },
            { name: 'Django', icon: `${CDN}/django/django-plain.svg` },
            { name: 'FastAPI', icon: `${CDN}/fastapi/fastapi-original.svg` },
            { name: 'React', icon: `${CDN}/react/react-original.svg` },
        ],
    },
    {
        title: 'Database',
        delay: 200,
        skills: [
            { name: 'MySQL', icon: `${CDN}/mysql/mysql-original.svg` },
            { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg` },
        ],
    },
    {
        title: 'Tools & Others',
        delay: 200,
        skills: [
            { name: 'REST API', icon: `${CDN}/fastapi/fastapi-original.svg` },
            { name: 'Cloud', icon: `${CDN}/googlecloud/googlecloud-original.svg` },
            { name: 'VPS', icon: `${CDN}/linux/linux-original.svg` },
            { name: 'Docker', icon: `${CDN}/docker/docker-original.svg` },
            { name: 'Jenkins', icon: `${CDN}/jenkins/jenkins-original.svg` },
            { name: 'Git', icon: `${CDN}/git/git-original.svg` },
        ],
    },
];

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
