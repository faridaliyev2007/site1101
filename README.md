# Personal Portfolio (GitHub Pages)

This repository is a simple, responsive personal portfolio starter built with only HTML, CSS, and JavaScript. It is structured for deployment to GitHub Pages.

Files of interest:
- [index.html](index.html) — Home (replace name, photo, intro)
- [about.html](about.html) — About page
- [projects.html](projects.html) — Projects page (replace project titles, descriptions, and images in `images/`)
- [resume.html](resume.html) — Extra page (Resume placeholder)
- [components/nav.html](components/nav.html) and [components/footer.html](components/footer.html) — Shared components loaded by JavaScript
- [css/style.css](css/style.css) — Styles
- [js/main.js](js/main.js) — Loads components and handles mobile nav

Where to replace content
- Replace `Your Name` text and all `your-username` / `your-repo` link placeholders in `components/footer.html` and `components/nav.html`.
- Replace `images/profile-placeholder.svg` with your photo (keep the filename or update the `img` src in `index.html`).
- Update project images in `images/` and edit descriptions in `projects.html`.

Run locally (Live Server)
1. Install the Live Server extension in VS Code (or use any static file server).
2. Open this folder in VS Code.
3. Right-click `index.html` and choose "Open with Live Server", or run a simple Python server:

```bash
# Python 3
python -m http.server 5500
# then visit http://localhost:5500 in your browser
```

Deploy to GitHub Pages
1. Create a new repository on GitHub and push this project.
2. In the repository Settings → Pages, set the source to the `main` (or `master`) branch and the root folder (`/`).
3. After a short build time, your site will be available at `https://<your-username>.github.io/<your-repo>/`.

Notes
- The nav and footer are shared HTML files loaded at runtime by `js/main.js`. This keeps pages consistent while keeping the site GitHub Pages friendly (no server-side includes needed).
- All links are relative so the site will work on GitHub Pages when pushed to a repo.

If you want, I can:
- Replace placeholder text with your actual name, photo filename, and profile links.
- Add a downloadable resume PDF and update the `resume.html` page.
