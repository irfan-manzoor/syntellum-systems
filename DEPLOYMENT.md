# Syntellum Systems — Production Deployment Guide

This repository contains the complete source code, production build assets, and all configuration files required to deploy Syntellum across any hosting platform.

---

## 1. Quick Start / Prerequisites

- **Node.js**: `v20.x` or later
- **Package Manager**: `npm` (or `bun` / `pnpm`)

```bash
# 1. Install dependencies
npm install

# 2. Build production bundle (generates ./dist)
npm run build

# 3. Preview production build locally
npm run preview
```

---

## 2. Deployment Options

### Option A: Apache / LiteSpeed (cPanel, Plesk, Shared Hosting)
The `public/.htaccess` file is automatically copied to `dist/.htaccess` upon building.
1. Run `npm run build`.
2. Upload all contents of the `dist/` directory into your `public_html/` or web root.
3. `.htaccess` handles:
   - HTTPS 301 redirection to `https://syntellum.si/`
   - Canonical `www` to non-www redirection
   - Client-side SPA routing (`index.html` fallback)
   - 1-year caching for fingerprinted assets (`/assets/*`)
   - Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)

---

### Option B: Nginx Web Server (Linux VPS / Dedicated Server)
An optimized production configuration is included in `nginx.conf`.

1. Copy the contents of `dist/` to `/var/www/syntellum/html`:
   ```bash
   sudo mkdir -p /var/www/syntellum/html
   sudo cp -r dist/* /var/www/syntellum/html/
   ```
2. Link or copy `nginx.conf` into `/etc/nginx/sites-available/syntellum.conf`:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/syntellum.conf
   sudo ln -s /etc/nginx/sites-available/syntellum.conf /etc/nginx/sites-enabled/
   ```
   *(Update the `root` path in `nginx.conf` to `/var/www/syntellum/html` if not using Docker)*
3. Test and reload Nginx:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

---

### Option C: Docker & Docker Compose
A multi-stage `Dockerfile` and `docker-compose.yml` are included.

1. Build and run using Docker Compose:
   ```bash
   docker compose up -d --build
   ```
2. The container will build the application and serve it via Nginx Alpine on port `80`.
3. Check container status:
   ```bash
   docker compose ps
   ```

---

### Option D: Vercel
A `vercel.json` file is included in the project root.
1. Connect your GitHub repository to Vercel.
2. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**.

---

### Option E: Netlify
A `netlify.toml` file is included in the project root.
1. Link your repository to Netlify.
2. Netlify reads `netlify.toml` and applies SPA rewrites and asset headers automatically.

---

### Option F: GitHub Pages / CI/CD Pipeline
A GitHub Actions workflow is pre-configured at `.github/workflows/deploy.yml`.
1. Push your code to branch `main` on GitHub.
2. The workflow automatically builds and publishes the production bundle to branch `production`.

---

## 3. SEO & Verification Assets Included

- **Sitemap**: `/sitemap.xml` with all 12 platform routes, prioritized and structured.
- **Robots.txt**: `/robots.txt` pointing to `https://syntellum.si/sitemap.xml`.
- **Favicons & Metadata**: Fully configured in `index.html`.
