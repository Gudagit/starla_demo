# designstarla — Portfolio

Personal portfolio of **Ivana Gudovic (designstarla)** — junior software developer with over a decade of freelance logo design experience.

Live site: https://starla-demo.vercel.app

## Features

- Single-page style home that combines Hero, About Me, Gallery, Projects and Contact sections, plus a dedicated page for each section
- Responsive layout with a mobile burger menu
- Logo gallery with a full-screen lightbox (previous / next / close)
- About Me page: skills, experience timeline, education, languages
- Contact form that sends email directly from the browser via EmailJS (with sending / success / error feedback)
- Deployed to GitHub Pages with client-side routing support (SPA redirect via `404.html`)

## Tech stack

- React 18 (Create React App)
- React Router v6
- EmailJS (`@emailjs/browser`)
- react-icons, Font Awesome
- Plain CSS, per-component stylesheets

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build in /build
npm run deploy   # build with /starla_demo as base path and publish to gh-pages
```

## Project structure

```
public/          static files, index.html, 404.html (SPA redirect for GitHub Pages), images in slike/
src/
  component/     reusable pieces (Navbar, Footer, Hero, Gallery, Contact form)
  routes/        pages (Home, About, Galeri, Project, Contac)
  App.js         route table
  index.js       entry point, BrowserRouter with basename for GitHub Pages
```

## Deployment notes

The site is hosted under a sub-path (`/starla_demo`), so `PUBLIC_URL` is set in the `predeploy` script and passed to `BrowserRouter` as `basename`. GitHub Pages has no server-side routing, so `404.html` redirects unknown paths back to `index.html`, where a small script in `index.html` restores the original URL.

## Roadmap

- Add real projects to the Projects page
- Replace the 99designs-hosted gallery images with self-hosted, optimized copies

## Contact

designstarla@gmail.com · [GitHub](https://github.com/Gudagit) · [LinkedIn](https://www.linkedin.com/in/ivana-gudovic-bb6171107) · [99designs](https://99designs.com/profiles/2993835)
