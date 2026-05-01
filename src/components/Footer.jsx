import { forwardRef } from 'react';
import { socials } from '../data/socials';

// showSocials=true  → footer is in view, render bare social icons inside
// showSocials=false → plain copyright footer
const Footer = forwardRef(function Footer({ showSocials }, ref) {
    return (
        <footer ref={ref} className="footer">
            {/* Bare social icons — no box, no border, no shadow */}
            <div className={`footer-socials${showSocials ? ' footer-socials--visible' : ''}`}>
                {socials.map(({ id, label, href, icon }) => (
                    <a
                        key={id}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`footer-social-icon footer-social-icon--${id}`}
                        aria-label={label}
                        title={label}
                        tabIndex={showSocials ? 0 : -1}
                    >
                        {icon}
                    </a>
                ))}
            </div>

            <p className="footer-copy">
                Deployed on <a href="https://www.oracle.com/in/cloud/">Oracle Cloud</a> By Dipak Majumdar &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
});

export default Footer;
