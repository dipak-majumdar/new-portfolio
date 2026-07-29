# Project Architecture

This project is a personal developer portfolio built with React, Vite, and SCSS. It is designed as a single-page website that presents profile information, experience, projects, skills, and contact links.

## Rendering Model

The application uses client-side rendering (CSR).

- `index.html` provides the base HTML shell.
- `src/main.jsx` mounts the React app into `<div id="root"></div>`.
- `src/App.jsx` composes the visible page sections.
- Vite builds the app into static files inside `dist/`.

There is no server-side rendering, static pre-rendering, backend API, or routing layer in the current architecture.

## High-Level Flow

```text
Browser
  |
  | loads index.html
  v
Vite-built JS bundle
  |
  | runs src/main.jsx
  v
React root
  |
  | renders App.jsx
  v
Portfolio sections
  |
  | Hero / About / Stats / Experience / Projects / Skills / Footer
  v
User sees single-page portfolio
```

## Application Entry

`src/main.jsx` is the React entry point.

It imports global SCSS, loads `App`, and renders the component tree using React DOM's `createRoot`.

## App Composition

`src/App.jsx` is the central layout component. It controls:

- Global dark/light theme state.
- Theme persistence using `localStorage`.
- Applying the `dark` class to `document.body`.
- Initializing AOS scroll animations.
- Detecting when the footer is visible using `IntersectionObserver`.
- Showing or hiding the floating social sidebar depending on footer visibility.

The page is assembled in this order:

```text
SocialSidebar
main
  Hero
  About
  Stats
  Experience
  Projects
  Skills
Footer
```

## Component Architecture

Components are organized by portfolio section.

- `Hero` shows the name, role, location, contact buttons, resume link, projects link, terminal-style card, and theme toggle.
- `About` contains a short professional summary.
- `Stats` displays quick achievement metrics.
- `Experience` renders work history from a local array.
- `Projects` renders project cards from `src/data/projects.js` and includes simple pagination controls.
- `Skills` renders grouped skills from `src/data/skills.js`.
- `SocialSidebar` renders shared social links in a floating sidebar.
- `Footer` renders copyright information and responsive social links.

## Data Flow

The project currently uses local static data rather than remote APIs.

```text
src/data/projects.js
  -> Projects.jsx

src/data/skills.js
  -> Skills.jsx

src/data/socials.jsx
  -> SocialSidebar.jsx
  -> Footer.jsx
```

State is minimal and local to components:

- Theme state lives in `App.jsx`.
- Project pagination state lives in `Projects.jsx`.
- Footer visibility state lives in `App.jsx`.

There is no global state library such as Redux, Zustand, or Context API.

## Styling Architecture

Styles are written in SCSS.

- `src/index.scss` imports the global style layers.
- `src/styles/_variables.scss` stores shared design tokens.
- `src/styles/_mixins.scss` stores reusable SCSS helpers.
- `src/styles/_base.scss` defines global/base styles.
- `src/styles/components/` contains section-specific styles.

The styling approach is component-oriented but not CSS Modules-based. Class names are global.

## Assets

Static assets are split between `src/assets/` and `public/`.

- `src/assets/` is for assets imported by React or bundled by Vite.
- `public/` is for files served directly from the site root.
- Favicons and PWA manifest files are stored under `public/assets/images/site/`.

The resume button points to `/resume.pdf`, so `public/resume.pdf` must exist for that link to work.

## SEO Architecture

SEO metadata is mainly defined in `index.html`.

Current SEO features include:

- Page title.
- Meta description.
- Robots directives.
- Canonical URL.
- Hreflang links.
- Open Graph tags.
- Twitter card tags.
- JSON-LD structured data.
- `public/robots.txt`.
- `public/sitemap.xml`.

Because the app uses CSR, most visible page content is not present in the initial HTML. Search engines like Google can usually render JavaScript, but static pre-rendering or SSR would make the content easier and faster for crawlers to discover.

## Build and Deployment

Development server:

```bash
yarn dev
```

Production build:

```bash
yarn build
```

Preview production build:

```bash
yarn preview
```

The production build outputs static files to `dist/`.

If deploying under a subpath such as GitHub Pages at `/new-portfolio/`, configure Vite's `base` option so generated asset URLs match the deployment path.

## Important Constraints

- This is a single-page portfolio, not a multi-page site.
- There is no backend.
- There is no database.
- There is no API layer.
- There is no route-based code splitting.
- Most content is maintained directly in React components or local data files.

## Recommended Future Architecture Improvements

- Add static pre-rendering or migrate to an SSG framework for stronger SEO.
- Move all profile, experience, project, and skills content into structured data files.
- Add route-based pages for projects, experience, and case studies.
- Add project detail pages with richer text, screenshots, live links, and repository links.
- Configure deployment base path explicitly in `vite.config.js`.
- Add automated checks for build, linting, broken links, and metadata validation.
