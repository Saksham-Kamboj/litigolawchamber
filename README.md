# Litigo Law Chambers — React + Vite

A production-grade React Vite project for **Litigo Law Chambers**, faithfully converted from the original HTML with full component architecture, theme context, and Tailwind CSS + shadcn-compatible gold/dark color scheme.

---

## 🗂️ Project Structure

```
litigo-law/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root — assembles all sections
    ├── index.css             # Global styles, CSS variables, animations
    ├── context/
    │   └── ThemeContext.jsx  # Dark/light mode context + toggle
    ├── data/
    │   └── siteData.jsx      # All content: nav, services, courts, team, values
    ├── hooks/
    │   └── useScrollReveal.js # IntersectionObserver-based reveal hook
    └── components/
        ├── Reveal.jsx         # Scroll-reveal wrapper component
        ├── Logo.jsx           # Animated gold diamond logo
        ├── ScrollProgress.jsx # Fixed gold progress bar at top
        ├── Navbar.jsx         # Sticky nav with theme toggle + mobile menu
        ├── HeroSection.jsx    # Full-screen hero with stats
        ├── AboutSection.jsx   # About + founder quote block
        ├── ServicesSection.jsx# 6 practice area cards
        ├── CourtsSection.jsx  # Courts & tribunals list
        ├── TeamSection.jsx    # Founder spotlight + associates grid
        ├── ValuesSection.jsx  # I·P·R·T values + strengths
        ├── ContactSection.jsx # Contact info + enquiry form
        └── Footer.jsx         # Footer with links
```

---

## 🎨 Theme

- **Colors**: Gold (`#c9a84c`) accent on deep slate/stone dark backgrounds
- **Fonts**: `Cormorant Garamond` (display) + `DM Sans` (body) — loaded via Google Fonts
- **Dark/Light**: Controlled via `ThemeContext`, persisted in `localStorage`
- **CSS Variables**: `--gold`, `--gold-light`, `--gold-dim` used throughout

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✨ Features

- **Multi-section SPA** with smooth scroll navigation
- **Scroll progress bar** (gold gradient, fixed top)
- **Scroll reveal animations** via `IntersectionObserver` (no GSAP dependency)
- **Dark/light mode** with theme context and localStorage persistence
- **Responsive** — mobile hamburger menu, adaptive grid layouts
- **Floating hero decorations** with CSS keyframe animations
- **Gold noise texture overlay** via SVG filter
- **Animated service cards** with hover lift + gold border reveal
- **Contact form** with controlled React state
