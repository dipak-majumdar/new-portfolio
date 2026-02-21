import { useState } from 'react';

export default function Navbar({ dark, toggleDark }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
    ];

    return (
        <header className="navbar">
            <nav className="container navbar-inner">
                <a href="#" className="nav-logo">Portfolio</a>

                {/* Desktop links */}
                <ul className="nav-links">
                    {navItems.map(({ label, href }) => (
                        <li key={label}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                    <li>
                        <div className="theme-toggle">
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="theme-checkbox"
                                checked={dark}
                                onChange={toggleDark}
                            />
                            <label htmlFor="theme-checkbox" className="checkbox-label">
                                <i className="fas fa-moon"></i>
                                <i className="fas fa-sun"></i>
                                <span className="ball"></span>
                            </label>
                        </div>
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Open menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navItems.map(({ label, href }) => (
                    <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                        {label}
                    </a>
                ))}
                <div className="theme-toggle mobile-theme-toggle">
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="theme-checkbox-mobile"
                        checked={dark}
                        onChange={toggleDark}
                    />
                    <label htmlFor="theme-checkbox-mobile" className="checkbox-label">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <span className="ball"></span>
                    </label>
                </div>
            </div>
        </header>
    );
}
