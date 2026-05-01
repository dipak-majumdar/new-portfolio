const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const skills = [
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
]

export default skills;