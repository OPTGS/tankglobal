### Tank Global website.

### Features

* **Astro-Powered:** Utilize a modern static-site generation framework.
* **Tailwind CSS:** Enjoy rapid UI development with a utility-first CSS framework.
* **Preline UI:** Implement prebuilt UI components for added elegance.
* **GSAP Integration:** Impress with professional and polished animations.
* **Markdown Content Collections:** Organize and manage your content seamlessly.
* **Starlight Documentation:** A sleek, user-friendly, full-featured documentation theme.
* **Internationalization (i18n):** Integrates Astro’s internationalization features.
* **SEO and Responsiveness:** Ensure your site is discoverable and accessible on any device.


### Installation

Start by installing the project dependencies. Open your terminal, navigate to the project's root directory, and execute:

```bash
npm install
```

This command will install all the necessary dependencies defined in the `package.json` file.

### Development Commands

With dependencies installed, you can utilize the following npm scripts to manage your project's development lifecycle:

* `npm run dev`: Starts a local development server with hot reloading enabled.
* `npm run preview`: Serves your build output locally for preview before deployment.
* `npm run build`: Bundles your site into static files for production.

For detailed help with Astro CLI commands, visit [Astro's documentation](https://docs.astro.build/en/reference/cli-reference/).

## Deployment

### Building Your Site

Before deployment, you need to create a production build:

```bash
npm run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

## Project Structure

Tank Global website organizes modular components, content, and layouts to streamline development and content management.

```md

src/
├── assets/               
│   ├── scripts/          # JS scripts
│   └── styles/           # CSS styles
├── components/           # Reusable components
│   ├── Meta.astro        # Meta component for SEO
│   ├── sections/         # Components for various sections of the website
│   ├── ThemeIcon.astro   # Component for toggling light/dark themes
│   └── ui/               # UI components categorized by functionality
├── content/              # Markdown files for blog posts, insights, products, and site configuration
│   ├── blog/
│   ├── docs/           
│   ├── insights/         
│   └── products/         
├── data_files/           # Strings stored as JSON files
├── images/               # Static image assets for use across the website
├── layouts/              # Components defining layout templates
│   └── MainLayout.astro  # The main wrapping layout for all pages
├── pages/                # Astro files representing individual pages and website sections
│   ├── 404.astro         # Custom 404 page
│   ├── blog/   
│   ├── es/               # Localized content
│   ├── contact.astro     
│   ├── index.astro       # The landing/home page
│   ├── insights/         
│   ├── products/         
│   ├── robots.txt.ts     # Dynamically generates robots.txt
│   └── services.astro
├── utils/                # Shared utility functions and helpers
└── content.config.ts     # Contains content collections configuration options
```

## Static Assets and Public Resources

Static files served directly to the browser are within the `public` directory at the root of the project.

```md

public/
└── banner-pattern.svg
    
```


