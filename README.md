# Rutvik Purohit — Software Engineer

[View portfolio](https://rutvik2610.github.io/portfolio/)

Personal website highlighting my work in backend development, enterprise integrations, and data processing, alongside personal projects in modern .NET and cloud services.

## Featured projects

- **LedgerFlow** — A transaction-processing backend with idempotent operations, database transactions, caching, and asynchronous processing.
- **TenancyTrace** — An evidence-based tenancy platform with role-based access, audit trails, and record-history tracking.

## Technology

React · TypeScript · Vite · Tailwind CSS · Motion · Lucide

The site is fully static and deploys to GitHub Pages through GitHub Actions. Features include responsive layouts, a persistent light/dark theme, accessible section navigation, and expandable engineering write-ups. Fonts are self-hosted.

## Local development

Requires Node.js 24 LTS.

```sh
npm ci
npm run dev
```

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | Check TypeScript |
| `npm run lint` | Run ESLint |
| `npm test` | Run content and navigation checks |
| `npm run build` | Create the production site |
| `npm run check` | Check types, lint, and build |
| `npm run preview` | Preview the production build |

## Content and configuration

Content lives separately from presentation:

| File | Content |
| --- | --- |
| `src/data/profile.ts` | Introduction, education, certifications, and engineering principles |
| `src/data/experience.ts` | Roles and responsibilities |
| `src/data/projects.ts` | Project descriptions, technical decisions, status, and links |
| `src/data/skills.ts` | Technologies organized by experience context |
| `src/data/socials.ts` | Contact and profile links |

Projects render only when `visible` is enabled. Repository and demo links are optional HTTPS URLs. Certification entries accept an optional public verification `url`; entries without one appear as plain text. Resume downloads are disabled by default.

`src/components/` contains reusable project cards and conceptual illustrations. Theme tokens, typography, and responsive layouts are in `src/styles.css`.

## Deployment

Select **GitHub Actions** in repository **Settings → Pages**. A push to `main` or a manual workflow run installs dependencies, checks types, runs lint and tests, builds the site, and deploys it with the official Pages actions.

The workflow derives the base path and deployment URL from GitHub Pages configuration, supporting both root and repository sites. Manual builds can set them explicitly:

```sh
VITE_BASE_PATH=/portfolio/ VITE_SITE_URL=https://rutvik2610.github.io/portfolio npm run build
```

Copy `.env.example` to `.env.local` for local configuration. Setting `VITE_SITE_URL` generates the canonical URL, structured data, sitemap, and social-sharing metadata. Section navigation uses hash links and requires no server-side routing rules.

For a custom domain, configure DNS and the domain in GitHub Pages settings, enable HTTPS, and re-run the workflow. A tracked CNAME can be placed in `public/CNAME`.

## Assets

- `public/favicon.svg` — Site icon.
- `public/assets/social.svg` — Social-sharing artwork. A PNG alternative can be configured in `scripts/seo.mjs` for broader crawler support.

## Contact

[Email](mailto:rutvikpurohit10@gmail.com) · [LinkedIn](https://linkedin.com/in/rutvik-purohit-8360b61b5) · [GitHub](https://github.com/Rutvik2610)
