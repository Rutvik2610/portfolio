# Rutvik Purohit · Software Engineer Portfolio

A dark-first, responsive portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide. Fonts are bundled locally. No backend, analytics, third-party embeds, or confidential client details.

## Run locally

Use Node.js 24 LTS and npm:

```sh
npm ci
npm run dev
```

`npm run check` runs TypeScript, ESLint, and the production build. `npm run preview` serves the built site. The lockfile pins dependency versions for reproducible installation.

## Edit content

| File | Content |
| --- | --- |
| `src/data/profile.ts` | Name, summary, about, education, location, principles, resume |
| `src/data/experience.ts` | Roles, descriptions, and configurable employment dates |
| `src/data/skills.ts` | Production skills and separately labelled personal/learning technologies |
| `src/data/projects.ts` | Project visibility, status, problem, stack, architecture, decisions, links |
| `src/data/socials.ts` | Email, LinkedIn, GitHub |

No employment dates, contact details, repository URLs, or completed personal projects have been invented. Replace `Current role` and `Earlier role` with confirmed dates when ready. The scale figure refers to workloads across supported systems, not personal throughput.

### Projects

Three project ideas are included with `visible: false`. They never appear in the public UI until explicitly enabled. Set `status` to `Draft`, `Planned`, `In progress`, or `Completed`, write accurate details, then enable `visible`. GitHub and demo links are optional; only valid HTTPS URLs render. Do not add client architecture or proprietary code. When all projects are hidden, the site shows an honest case-study preparation state.

### Resume and contact

Add the real PDF at `public/assets/Rutvik-Purohit-Resume.pdf`, then set `profile.resume.available` to `true`. The path is relative to the public folder and resolves using Vite’s base, including repository subpaths. Until enabled, every resume CTA opens an accessible native dialog instead of downloading a nonexistent file.

Set `socials.email` to a plain email address and social URLs to complete HTTPS links. Empty values render no links and show a contact-pending message. No nonfunctional contact form is included.

### SEO

Copy `.env.example` to `.env.local`. Set `VITE_SITE_URL` to the full HTTPS deployment URL including any repository path. Build output then includes a canonical link, Person JSON-LD, Open Graph URL/image, and sitemap. Without a URL, these are deliberately omitted. Metadata is in `index.html`; update it alongside profile changes. The sharing image is `public/assets/social.svg`; for broad social crawler support, replace it with a 1200×630 PNG and update `scripts/seo.mjs`. Favicon: `public/favicon.svg`. Robots output is generated at build time.

## GitHub Pages

The source is prepared for deployment; nothing has been published.

1. Create or choose your own repository and push this project to its `main` branch.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Enable Actions if prompted, then run **Deploy portfolio to GitHub Pages** or push to `main`.
4. The official configure-pages action supplies the URL and base path automatically. Both `USERNAME.github.io` root repositories and project repositories work without editing source or a repository name in components.

The workflow installs with `npm ci`, checks TypeScript and lint, builds, uploads the Pages artifact, and deploys in the `github-pages` environment. It uses the built-in GitHub token with `pages: write` and `id-token: write`; no personal access token is needed. Official action majors were checked against their latest GitHub releases during implementation (November 2026).

For manual builds:

```sh
VITE_BASE_PATH=/REPOSITORY/ VITE_SITE_URL=https://USERNAME.github.io/REPOSITORY npm run build
# Root site:
VITE_BASE_PATH=/ VITE_SITE_URL=https://USERNAME.github.io npm run build
```

Navigation uses section hashes, so refreshes require no SPA rewrites. Assets and resume links resolve against the configured base.

### Custom domain later

Configure the domain in repository Pages settings, add the DNS records GitHub documents for that domain type, and enable HTTPS after verification. If using a CNAME file, put it in `public/CNAME`. Re-run the workflow so configure-pages picks up the domain and root base path. For manual builds set `VITE_BASE_PATH=/` and `VITE_SITE_URL=https://your-domain.example`.

## Interaction and accessibility

Sticky navigation tracks visible sections; mobile navigation exposes its expanded state. Theme persists locally, with a dark default and a pre-render theme initializer to avoid flashing. Reduced-motion preferences disable CSS animation and smooth scroll; Motion respects the same preference. Native dialog supports Escape and focus handling. Skip link, semantic landmarks, visible focus rings, and keyboard-operable flow stages are included. The schematic is illustrative, not a representation of a client system.

## Structure

```
src/components/    Reusable data-flow visual
src/data/          Editable typed content
src/App.tsx        Section composition and UI
src/styles.css    Theme tokens, responsive styling, microinteractions
scripts/seo.mjs    Deployment-aware static SEO output
public/           Fonts are imported through npm; favicon and sharing art live here
.github/workflows/ Official Pages CI/CD
```

## Checks and remaining setup

See `VERIFICATION.md` for executed checks and environment limits. Supply real contact links, a resume PDF, employment dates, confirmed additional technologies, and real project write-ups before using the portfolio for applications. Browser-based Lighthouse scores are targets, not claimed results.
