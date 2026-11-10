# Yazan Al-Sedih — Portfolio

Personal portfolio for an AI/ML and full-stack engineer, built with Next.js 16 (App Router), React 19 and TypeScript.

Live: https://yazansedih.duckdns.org/

## Features

- Single page with sections for focus areas, selected work, experience, skills, education and contact
- Featured project card with a screenshot, picked by one setting in the content file
- Light and dark mode that follows the system setting, with a toggle that remembers the choice
- Downloadable CV and a generated link-preview image for LinkedIn, WhatsApp and Slack
- All copy kept in one data file, so updating the site rarely means touching components

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
src/
  app/            layout, page, global styles, icon and link-preview image
  components/     one component per page section (Hero, Work, Experience, ...)
  data/content.ts all copy, links and project data
  lib/theme.ts    light/dark theme handling
public/           photo, CV and project screenshots
```

## Editing content

All copy, links and project data live in `src/data/content.ts`. Links set to `null` are hidden until you fill them in.

- **Photo:** add an image to `public/` and set `profile.photo` (e.g. `"/photo.jpg"`).
- **CV:** replace `public/YazanAlSedih_CV.pdf`, or add a new PDF and set `profile.cvUrl`.
- **Projects:** each entry in `projects` has an `id`, copy, optional `highlights` or `metrics`, a `stack` line and `links`. Set `hidden: true` to keep a project's copy without showing it.
- **Featured project:** set `featuredProjectId` to a project's `id` (for example `"apex"` or `"nexus"`). The other visible projects fill the grid in list order.
- **Screenshots:** add the image to `public/` and set the project's `image` to `{ src, width, height }`. The width and height keep the screenshot uncropped when the project is featured.
