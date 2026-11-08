# Yazan Al-Sedih — Portfolio

Personal portfolio built with Next.js (App Router) and TypeScript.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy, links and project data live in `src/data/content.ts`. Links set to `null` are hidden until you fill them in.

- Photo: add an image to `public/` and set `profile.photo` (e.g. `"/photo.jpg"`).
- CV: add the PDF to `public/` and set `profile.cvUrl`.
- Featured project: set `featuredProjectId` to a project's `id`. Each project can carry an `image` (`src`, `width`, `height`) shown when it is featured.
