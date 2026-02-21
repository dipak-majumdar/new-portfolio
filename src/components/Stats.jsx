const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Built' },
    { value: '5+', label: 'APIs Designed' },
    { value: '99%', label: 'Uptime Focus' },
];

export default function Stats() {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid" data-aos="fade-up">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="glass">
                            <div className="stat-number">{value}</div>
                            <div className="stat-label">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
