# Arbaz Mansuri — Frontend Web Developer Portfolio

Vanilla HTML, CSS and JavaScript portfolio upgraded for Web Developer / Frontend Developer applications.

## Files
- `index.html` — semantic page structure, navigation, sections, project modal and contact UI
- `style.css` — responsive visual system, glass UI, browser previews, motion, focus states and mobile layouts
- `script.js` — project/experience/skill rendering, filters, modal, theme switcher, active navigation, contact validation and interactions
- `assets/` — existing hero visual assets and resume PDF

## Run locally
Open `index.html` directly in a browser, or serve the folder with any static HTTP server.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Personal details to update
The project intentionally does not invent missing contact/project information.

1. In `script.js`, set `CONTACT_EMAIL` to your real email address to enable the contact form's `mailto:` fallback.
2. Replace any project `link: null` / `live: null` values with real URLs when available.
3. Keep `assets/resume.pdf` updated with the resume you want recruiters to download.

## Included interactions
- Sticky glass navigation with active section indicator
- Scroll progress indicator
- Responsive accessible mobile navigation
- Light/dark theme switcher with localStorage preference
- Desktop custom cursor, hover labels and subtle magnetic controls
- Cursor-driven hero reveal using the existing supplied assets
- Scroll-triggered reveals with reduced-motion support
- Project category filters
- Featured project treatment and browser-style previews
- Project case-study modal with keyboard focus handling
- Descriptive skill categories without misleading percentage bars
- Timeline progress animation
- Contact validation with safe frontend-only email fallback
- Back-to-top control

No framework or animation library was added.
