import { socials } from '../data/socials';

// hidden=true  → footer is in view, sidebar fades out
// hidden=false → normal floating sidebar
export default function SocialSidebar({ hidden }) {
    return (
        <div
            className={`social-sidebar${hidden ? ' social-sidebar--hidden' : ''}`}
            aria-hidden={hidden}
            aria-label="Social media links"
        >
            {/* Vertical line from top */}
            <div className="social-sidebar__line-top" />

            {/* Icon list */}
            <ul className="social-sidebar__icons">
                {socials.map(({ id, label, href, icon }) => (
                    <li key={id}>
                        <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`social-icon social-icon--${id}`}
                            aria-label={label}
                            title={label}
                            tabIndex={hidden ? -1 : 0}
                        >
                            {icon}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Vertical line to bottom */}
            <div className="social-sidebar__line-bottom" />
        </div>
    );
}
