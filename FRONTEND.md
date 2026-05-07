# Frontend: Local documentation viewer (TypeScript + Vite + React)

You asked for a TypeScript frontend instead of Python. I added a lightweight React + Vite app that renders the Markdown files from the `docs/` folder and provides a sidebar navigation built from `mkdocs.yml`.

Overview

- Framework: React + TypeScript
- Bundler/dev server: Vite
- Markdown rendering: markdown-it
- YAML parsing: js-yaml (to read `mkdocs.yml` and build the navigation)

Install and run (no Python required)

1. Ensure you have Node.js (>=16) and npm or Yarn installed.

2. From the project root, change to the frontend folder:

   cd frontend

3. Install dependencies:

   npm install

4. Start the dev server:

   npm run dev

5. Open the app in your browser at the address shown by Vite (usually http://localhost:5173).

Build

- To create a production build run:

  npm run build

- Preview the build locally:

  npm run preview

How it works (short)

- The app uses Vite's `import.meta.glob('../../docs/**/*.md', { as: 'raw' })` to load all Markdown files under `docs/` at build time.
- It parses `mkdocs.yml` to build the sidebar navigation and maps nav entries to the corresponding Markdown files.
- Clicking an item loads the Markdown (via the globbed modules) and renders it using `markdown-it`.

Notes and limitations

- This is a minimal viewer intended for a local dev environment or static site generation with `vite build`.
- Relative links and images in Markdown are left as written — they should resolve relative to the built site. If you need special handling for example/asset links I can add resolvers.
- If you prefer a non-React, zero-build alternative (pure client-side solution) I can produce a Docsify single-file solution instead.

Next steps I can take

- Add a small script to open the browser automatically.
- Improve rendering (code highlighting, table of contents, search) — I can add highlight.js and a search index.
- Configure an automatic GitHub Pages deploy workflow using `npm run build` and `gh-pages` or `vite` preview.

Run the dev server now? If you want, I can run `npm install` and `npm run dev` here to verify (it will install Node packages and run a dev server in this environment). Otherwise you can run it locally with the commands above.
