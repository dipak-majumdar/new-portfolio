# Dipak Majumdar Portfolio

A responsive single-page developer portfolio built with React, Vite, and SCSS. The site highlights my profile, experience, projects, skills, and contact options with smooth scroll navigation, AOS-based entrance animations, and a persistent light/dark theme toggle.

## Features

- Hero section with quick actions for call, email, resume download, and project navigation
- About, stats, experience, projects, and skills sections
- Floating social sidebar that shifts to the footer on smaller screens when the footer enters view
- Dark mode with theme preference saved in `localStorage`
- SCSS-based styling with shared design tokens in [`src/styles/_variables.scss`](src/styles/_variables.scss)
- Animated section reveals powered by `aos`

## Tech Stack`

- React 19
- Vite 7
- Sass
- AOS
- Font Awesome via CDN
- Devicon icons via CDN

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- Yarn

### Install and Run

```bash
yarn
yarn dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

## Scripts

```bash
yarn dev      # start the development server
yarn build    # create a production build in dist/
yarn preview  # preview the production build locally
yarn lint     # run ESLint
```

## Project Structure

```text
src/
  App.jsx                  # app composition, theme persistence, AOS setup
  components/
    Hero.jsx               # intro, CTA buttons, dark-mode toggle
    About.jsx              # summary section
    Stats.jsx              # quick stats
    Experience.jsx         # work experience cards
    Projects.jsx           # featured project grid
    Skills.jsx             # grouped skills with devicon assets
    SocialSidebar.jsx      # floating social links
    Footer.jsx             # footer + responsive social dock
  data/
    socials.jsx            # shared social link data
  styles/
    _variables.scss        # theme tokens and breakpoints
    _base.scss             # global styles
    components/            # section-level SCSS modules
public/
  resume.pdf               # add this file if you want the Resume button to work
```

## Customization

- Update personal details, contact info, and hero actions in [`src/components/Hero.jsx`](src/components/Hero.jsx).
- Replace the placeholder social links in [`src/data/socials.jsx`](src/data/socials.jsx) before deploying.
- Edit the about copy in [`src/components/About.jsx`](src/components/About.jsx).
- Update work history in [`src/components/Experience.jsx`](src/components/Experience.jsx).
- Update project cards in [`src/components/Projects.jsx`](src/components/Projects.jsx).
- Adjust skill groups in [`src/components/Skills.jsx`](src/components/Skills.jsx).
- Tweak colors, typography, spacing, and breakpoints in [`src/styles/_variables.scss`](src/styles/_variables.scss).
- Change the document title or external CDN links in [`index.html`](index.html).

## Important Notes

- The Resume button in the hero section points to `/resume.pdf`, but that file is not included in the current `public/` folder. Add `public/resume.pdf` if you want the download button to work.
- The shared social data currently includes generic placeholder links such as `https://github.com`, `https://linkedin.com`, and `mailto:your@email.com`. Update them to your real profiles.

## Build for Production

```bash
yarn build
```

The production-ready files will be generated in the `dist/` directory.
