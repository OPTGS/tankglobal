# Tank Global Solutions Website

Corporate website for **Tank Global Solutions** - Over 20 years delivering reliable and innovative ISO tank solutions for operations, sales, leasing, and specialized consulting.

🌐 **Live Site:** [tankglobalsolution.com](https://tankglobalsolution.com)

## Features

- **Astro 5** - Modern static-site generation framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **Preline UI** - Prebuilt UI components
- **GSAP & Lenis** - Smooth animations and scroll
- **Starlight** - Documentation theme
- **i18n** - English and Spanish support
- **SEO optimized** - Meta tags, structured data, sitemap

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── data/                 # CMS-editable content (JSON)
│   ├── site.json         # Site configuration & SEO
│   ├── navigation.json   # Navigation menus (EN/ES)
│   ├── content/          # FAQs, features, testimonials
│   ├── pages/            # Page content (home, services, contact)
│   └── products/         # Product catalog
├── public/               # Static assets
└── src/
    ├── components/       # Astro components
    ├── content/          # Markdown content (blog, docs, products)
    ├── data_files/       # Legacy data files
    ├── images/           # Image assets
    ├── layouts/          # Layout templates
    ├── pages/            # Route pages
    └── utils/            # Helper functions
```

## Content Management

The `/data` folder contains JSON files designed for CMS integration (e.g., sitepins.com):

- `site.json` - Global site settings, SEO, contact info
- `navigation.json` - Navbar and footer links
- `content/*.json` - FAQs, features, testimonials
- `pages/*.json` - Page-specific content
- `products/*.json` - Product catalog

All content supports English (`en`) and Spanish (`es`) localization.

## Deployment

The site is deployed on Vercel. Push to `main` triggers automatic deployment.

```bash
npm run build  # Creates dist/ folder
```

## License

This project is based on [ScrewFast](https://github.com/mearashadowfax/ScrewFast), licensed under the [MIT License](LICENSE).

---

**Tank Global Solutions** - Solving all your tank needs.
