# Personal Portfolio — Farid Aliyev

A responsive personal portfolio website built with **Jekyll**, **HTML**, **CSS**, and **JavaScript**. Deployed on GitHub Pages with modern design and clean code structure.

**Live Site:** https://faridaliyev2007.github.io/site1101/  
**Repository:** https://github.com/faridaliyev2007/site1101

## Project Structure

```
project3/
├── _layouts/
│   └── default.html              # Base template for all pages
├── _includes/
│   ├── nav.html                  # Navigation component (reused on all pages)
│   └── footer.html               # Footer component (reused on all pages)
├── _config.yml                   # Jekyll configuration
├── css/
│   └── style.css                 # Modern responsive styles
├── js/
│   └── main.js                   # Mobile navigation toggle
├── images/
│   ├── profile.jpg               # Profile photo
│   ├── project1.png              # Project 1 screenshot
│   └── project2.jpeg             # Project 2 screenshot
├── index.html                    # Home page (hero section)
├── about.html                    # About page (bio, skills, languages)
├── projects.html                 # Projects showcase
├── Gemfile                       # Ruby dependencies for Jekyll
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

## Features

✅ **Modern Design** — Clean, responsive layout with smooth animations  
✅ **Mobile-Friendly** — Mobile nav menu, scalable images, responsive grid  
✅ **Jekyll-Powered** — Fast static site generation, easy content updates  
✅ **GitHub Pages Ready** — One-click deployment, automatic builds  
✅ **Component Reuse** — Nav and footer via Jekyll `_includes`  
✅ **Customizable** — Easily update content, colors, and styling  

## Customization

### Update Your Info
- **Name & Contact:** Edit `_includes/footer.html`
- **Social Links:** Edit `_includes/nav.html` (GitHub, Codecademy, etc.)
- **Profile Photo:** Replace `images/profile.jpg`
- **Colors & Styles:** Edit `css/style.css` (CSS variables at top)

### Update Pages
- **Home:** Edit `index.html` (intro, buttons)
- **About:** Edit `about.html` (bio, skills, languages)
- **Projects:** Edit `projects.html` (add/remove project cards)

## Run Locally

### Prerequisites
- [Ruby](https://rubyinstaller.org/) (3.0+)
- Jekyll: `gem install jekyll bundler`

### Start Development Server
```bash
cd c:\Users\User\Desktop\project3
jekyll serve
```
Visit `http://localhost:4000` in your browser. Changes auto-reload!

**For GitHub Pages subdirectory deployment:**
- `baseurl: /site1101` is configured in `_config.yml`
- All assets use `{{ site.baseurl }}` for correct paths

## Deploy to GitHub Pages

✅ **Already configured!** This repo is set up for automatic deployment.

### To publish changes:
```bash
git add .
git commit -m "Your message"
git push origin main
```

GitHub automatically:
1. Detects the push
2. Runs Jekyll build
3. Deploys to https://faridaliyev2007.github.io/site1101/

Build completes in ~1-2 minutes. Refresh to see changes!

## Git Workflow

```bash
# View commit history
git log

# Check changed files
git status

# View file differences
git diff

# Stage changes
git add .

# Commit with message
git commit -m "Describe your changes"

# Push to GitHub
git push origin main
```

## File Descriptions

| File | Purpose |
|------|---------|
| `_config.yml` | Jekyll site settings (title, baseurl, plugins) |
| `_layouts/default.html` | Base HTML template wrapping all pages |
| `_includes/nav.html` | Navigation bar (included on every page) |
| `_includes/footer.html` | Footer with contact & social links |
| `css/style.css` | All styling (mobile-first, responsive) |
| `js/main.js` | Mobile menu toggle, footer year update |
| `Gemfile` | Ruby gem dependencies (tells GitHub this is a Jekyll project) |

## Next Steps

- [ ] Add Hour of AI video link to Project 2 when available
- [ ] Customize colors and fonts in `css/style.css`
- [ ] Add more projects to `projects.html`
- [ ] Update resume/CV information
- [ ] Add custom domain (optional)

## Tech Stack

- **Jekyll** — Static site generator
- **HTML5** — Semantic markup
- **CSS3** — Modern responsive design
- **JavaScript** — Interactive mobile menu
- **GitHub Pages** — Free hosting & deployment

## Contact

📧 Email: ferid2007aliyev@gmail.com  
🔗 GitHub: https://github.com/faridaliyev2007  
📚 Codecademy: https://www.codecademy.com/profiles/faliyev23980  
📍 Location: Baku, Azerbaijan  
📱 Phone: +994 (50) 522 20 07

---

**Built with ❤️ using Jekyll & GitHub Pages**
