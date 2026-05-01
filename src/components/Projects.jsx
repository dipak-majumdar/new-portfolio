const projects = [
    {
        title: 'Microfinance System',
        description: 'Built a loan management system supporting head office and branch operations, with features for customer loan handling, EMI collection automation and Tracking.',
        tags: ['Django Rest Framework', 'JavaScript', 'PostgreSQL', 'Docker'],
        delay: 50,
    },
    {
        title: 'Stock Prediction Application',
        description: 'Implemented a stock prediction solution using Prophet, Pandas, and NumPy, with data ingestion from yfinance and JWT-based authentication to ensure secure user access.',
        tags: ['Django Rest Framework', 'JWT', 'MySQL', 'React Js'],
        delay: 100,
    },
    {
        title: 'Email Outreach SaaS Platform',
        description: 'Built a scalable SaaS product with multi-tier subscriptions, quota-based bulk emailing, and seamless payment processing using Cashfree and PayPal for global transactions.',
        tags: ['Laravel', 'Filament', 'Websocket', 'JavaScript', 'MySQL'],
        delay: 150,
    },
    {
        title: 'Healthcare Operations System',
        description: 'Unified platform for managing pharmacy inventory, lab workflows, and doctor appointments with a focus on performance and reliability.',
        tags: ['PHP', 'JWT', 'MySQL', 'React JS'],
        delay: 200,
    },
    {
        title: 'Logistics operations Platform',
        description: 'Scalable logistics handling fleet operations across owned and vendor vehicles, branch reward system, and RBAC for efficient operations.',
        tags: ['FastAPI', 'React js', 'PostgreSQL', 'Websocket'],
        delay: 250,
    },
    {
        title: 'Guest Post Marketplace SaaS',
        description: 'Built a scalable SaaS product with multi-tier subscriptions, quota-based blog publishing, and seamless payment processing with Cashfree and PayPal.',
        tags: ['PHP', 'MySql', 'JS', 'Bootstrap'],
        delay: 300,
    },
    {
        title: 'IT Agency Website with CRM',
        description: 'Built a scalable agency website featuring dynamic content management and conversion-optimized landing pages that feed leads directly into CRM.',
        tags: ['Laravel', 'JS', 'MySQL'],
        delay: 350,
    },
    {
        title: 'Grocery Store POS System',
        description: 'Developed a complete retail solution for grocery stores featuring real-time inventory tracking, seamless billing, and advanced sales and profit analytics.',
        tags: ['Laravel', 'JS', 'PostgreSQL'],
        delay: 400,
    },
    {
        title: 'POS for Restaurants',
        description: 'Supports dine-in and takeaway orders, with real-time inventory tracking of raw materials and advanced reporting for business insights with RBAC.',
        tags: ['FastAPI', 'JWT', 'React Js', 'PostgreSQL'],
        delay: 450,
    }

];


// LeeLija
// Laravel
// JS
// MySql
// Bootstrap
// LeeLija
// Live

// MSOLS Int
// HTML
// CSS
// JS
// Tailwind
// MSOLS Int
// Live

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
