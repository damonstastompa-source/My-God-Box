# My God Box

A simple, elegant, local-first God Box web app designed for GitHub Pages or any static host.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload **all files in this folder** to the repository root.
3. In GitHub: **Settings → Pages → Deploy from a branch**.
4. Select the `main` branch and `/ (root)`.
5. Save. GitHub will publish the app.

No build step, package manager, or server is required.

## Data & privacy

Entries and reflections are stored in the browser's `localStorage`. Nothing is sent to a backend. Use **Menu → Settings → Backup & Transfer** to export a JSON backup or import/merge one later.

## Included

- God Box entry flow
- Surrender confirmation
- Optional reflection
- My Entries search/history
- Quiet Space
- Themes: Classic, Midnight, Forest, Burgundy
- JSON backup/export + import/merge
- Plain-text entry export
- Printer-friendly/PDF via browser print dialog
- Responsive mobile-first design
- Basic offline caching / PWA support


## v1.1.0
- Added the My God Box logo as the PWA/app icon and favicon.
- Removed the redundant Menu item from the bottom navigation.
- Kept the hamburger drawer for secondary navigation and settings.
- Added a dedicated My Reflections view with search, detail, and delete.
- Added Turned Over / Reflections tabs and a View Saved Reflections action.
