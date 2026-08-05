## Plan: Replace Font Awesome with Lucide icons

TL;DR: Replace the current Font Awesome icon usage in `src/components/home/Hero.jsx` with Lucide React components, remove Font Awesome-specific SCSS styles, and add the `lucide-react` dependency.

**Steps**
1. Add `lucide-react` to the project dependencies in `package.json`.
2. Update `src/components/home/Hero.jsx`:
   - Import the needed icons from `lucide-react` (Globe, Phone, Mail, Download, Layers, Moon, Sun).
   - Replace `<i className="fas fa-...">` tags with corresponding Lucide icon components.
   - Use a consistent className or inline props for sizing and color as needed.
3. Remove or update Font Awesome-specific SCSS selectors:
   - In `src/styles/components/Hero.scss`, remove `.fa-moon` and `.fa-sun` rules and replace them with styles targeting the new icon classes or parent selectors.
   - In `src/styles/components/DarkToggle.scss`, remove `.fa-moon` and `.fa-sun` selectors and add styles for the new icon component wrappers if needed.
4. Verify visual appearance and interactivity in the hero section and dark mode toggle.

**Relevant files**
- `package.json` — add `lucide-react` dependency.
- `src/components/home/Hero.jsx` — replace Font Awesome icons with Lucide components.
- `src/styles/components/Hero.scss` — remove old icon class styles and preserve layout.
- `src/styles/components/DarkToggle.scss` — remove Font Awesome icon styles used by the toggle.

**Verification**
1. Run `yarn` to install `lucide-react` and confirm there are no dependency installation errors.
2. Start the app and confirm the hero section icons render correctly for location, call, email, resume, projects, moon, and sun.
3. Verify the color and sizing of the new icons match the existing design and that the dark mode toggle still functions.
4. Confirm no Font Awesome class names remain in `src/components/home/Hero.jsx` or the related SCSS files.

**Decisions**
- Use `lucide-react` package for React-friendly icon components.
- Keep the replacement limited to the Hero component and toggle icons, since no other Font Awesome usage was found.
- Do not change the README unless the project already documents icons elsewhere beyond the tech stack.
