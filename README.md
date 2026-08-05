# Dipak Majumdar Portfolio

A responsive developer portfolio built with Next.js, React, and SCSS. The site showcases profile details, experience, projects, skills, and contact options with smooth section transitions, AOS-powered animations, and a persistent light/dark theme toggle.

## Features

- Hero section with quick actions for call, email, resume download, and project navigation
- About, stats, experience, projects, and skills sections
- Floating social sidebar that shifts to the footer on smaller screens when the footer enters view
- Dark mode with theme preference saved in `localStorage`
- SCSS-based styling with shared design tokens in [`src/styles/_variables.scss`](src/styles/_variables.scss)
- Animated section reveals powered by `aos`
- Built with Next.js App Router and React 19

## Tech Stack

- Next.js 16
- React 19
- Sass
- AOS
- Lucide icons
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

Open the local Next.js URL shown in the terminal, usually `http://localhost:3000`.

## Scripts

```bash
yarn dev      # start the Next.js development server
yarn build    # create a production build
yarn start    # run the production server after build
yarn lint     # run ESLint
```

## Project Structure

```text
src/
  app/
    globals.scss           # global styles imported by Next.js App Router
    layout.jsx             # root app layout
    loading.jsx            # loading state for route transitions
    not-found.jsx          # custom 404 fallback
    page.jsx               # homepage entry point
    projects/
      [slug]/
        page.jsx           # dynamic project detail route
  components/
    home/
      About.jsx            # summary section
      Experience.jsx       # work experience cards
      Hero.jsx             # intro, CTA buttons, dark-mode toggle
      Projects.jsx         # featured project grid
      Skills.jsx           # grouped skills with devicon assets
      Stats.jsx            # quick stats
    layout/
      Footer.jsx           # footer + responsive social dock
      SocialSidebar.jsx    # floating social links
    ui/
  data/
    profile.js             # profile content and metadata
    projects.js            # featured projects data
    skills.js              # skill groups data
    socials.jsx            # shared social link data
  lib/
    constants.js           # site constants
    metadata.js            # SEO metadata config
    schema.js              # structured data helpers
  styles/
    _base.scss             # global styles
    _mixins.scss           # reusable Sass mixins
    _variables.scss        # theme tokens and breakpoints
    components/            # section-level SCSS modules
public/
  resume.pdf               # add this file if you want the Resume button to work
```

## Customization

- Update personal details, contact info, and hero actions in [`src/components/home/Hero.jsx`](src/components/home/Hero.jsx).
- Replace placeholder social links in [`src/data/socials.jsx`](src/data/socials.jsx) before deploying.
- Edit the about copy in [`src/components/home/About.jsx`](src/components/home/About.jsx).
- Update work history in [`src/components/home/Experience.jsx`](src/components/home/Experience.jsx).
- Update project cards in [`src/components/home/Projects.jsx`](src/components/home/Projects.jsx).
- Adjust skill groups in [`src/components/home/Skills.jsx`](src/components/home/Skills.jsx).
- Tweak colors, typography, spacing, and breakpoints in [`src/styles/_variables.scss`](src/styles/_variables.scss).
- Change the document title or external CDN links in [`src/app/layout.jsx`](src/app/layout.jsx).

## Important Notes

- The Resume button in the hero section points to `/resume.pdf`, but that file is not included in the current `public/` folder. Add `public/resume.pdf` if you want the download button to work.
- The shared social data currently includes generic placeholder links such as `https://github.com`, `https://linkedin.com`, and `mailto:your@email.com`. Update them to your real profiles.

## Build for Production

```bash
yarn build
```

Run the production server after building with:

```bash
yarn start
```

The production-ready files will be served by Next.js and optimized at build time.
