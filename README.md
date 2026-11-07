# Rutvik Purohit · Backend Engineer

A personal portfolio with oversized editorial typography, a sticky profile card, and original project illustrations. Built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide; hosted on GitHub Pages.

## Run locally

Use Node.js 24 LTS:

```sh
npm ci
npm run dev
```

- `npm run check` — TypeScript, ESLint, and production build.
- `npm test` — render-level content, privacy, visibility, and navigation checks.
- `npm run preview` — serve the production build.

Fonts ship locally. No backend, analytics, or third-party embeds are required.

## Update the content

| File | What to change |
| --- | --- |
| `src/data/profile.ts` | Name, introduction, about, education, awards, certifications, principles |
| `src/data/experience.ts` | Companies, exact role dates, responsibilities |
| `src/data/projects.ts` | Projects, visibility/status, descriptions, implementation details, links |
| `src/data/skills.ts` | Enterprise versus personal-project technologies and additional tools |
| `src/data/socials.ts` | Confirmed email and profile URLs |

The current details come from Rutvik’s supplied resume and confirmed email. Enterprise workload figures describe the systems he contributes to, not throughput attributable to one engineer. No client-specific architecture or healthcare data is included.

### Projects

LedgerFlow and TenancyTrace are visible personal projects described in the supplied resume. Their illustrations are conceptual, not screenshots or running services. Expand **Inside the engineering** for the problem, implementation, and technical decisions.

The resume’s embedded project links pointed to differently named repositories. Those links were deliberately excluded. Add `github` or `demo` only when the correct HTTPS URL is available; no inactive placeholder buttons appear. `Completed` describes the implementation stated in the resume, not independent code verification or a promise that a public demo is online.

A third project idea remains `visible: false`. Status supports `Draft`, `Planned`, `In progress`, and `Completed`; only explicitly visible projects render. Set `visible: false` to hide any project without deleting its content.

### Privacy and resume

**There is no public resume download.** `profile.resume.enabled` is false, the asset path is empty, and the original PDF is not included in source, public assets, or deployment output. No mobile number is stored in the website content.

If you later choose to offer a resume, first create a public-safe PDF without information you wish to keep private. Put it in `public/assets/`, set a relative `resume.path`, and enable the flag. The optional download resolves against Vite’s repository base. The privacy regression test intentionally rejects PDFs and download links by default; update that expectation deliberately when changing this policy.

Email is a mailto link with a copy button. If clipboard access is unavailable, the button falls back to email. Empty contact values render no broken links. GitHub and LinkedIn links open in a new tab.

## Design and behavior

- Dark-first warm charcoal, off-white, and orange; persistent optional light theme.
- 18px base text, large headings, and roomier project and experience copy.
- Profile card stays visible on desktop and becomes a compact horizontal card on mobile. RP artwork is a monogram, not an invented portrait.
- Active section navigation, mobile menu with Escape handling, back-to-top link.
- Native expandable case studies and an interactive conceptual retry illustration.
- Reduced-motion support, skip link, visible keyboard focus, semantic landmarks.

The direction draws on the profile-led layout of [Sawad](https://sawad.framer.website/), the large identity typography of [Andy Wong](https://www.andy-hk.com/), and the project depth of [Abhishek Agrawal](https://abhish0.github.io/My-Portfolio/). Composition, illustrations, and copy are original. [Developer Portfolios](https://github.com/emmabostian/developer-portfolios) provided further reference context.

## Deploy with GitHub Pages

Repository: `Rutvik2610/portfolio`.

1. In **Settings → Pages**, select **GitHub Actions** as the build source.
2. Push to `main` or manually run **Deploy portfolio to GitHub Pages** in Actions.
3. The official workflow installs with `npm ci`, runs types/lint/content tests, builds, uploads the artifact, and deploys using the `github-pages` environment.

`actions/configure-pages` supplies the URL and base path automatically for both root and repository Pages sites. Only the built-in GitHub token is required. No personal access token is used by the workflow. Official actions: checkout 7, setup-node 7, configure-pages 6, upload-pages-artifact 5, deploy-pages 5 (verified against release metadata during initial setup in November 2026).

Manual production builds:

```sh
VITE_BASE_PATH=/portfolio/ VITE_SITE_URL=https://rutvik2610.github.io/portfolio npm run build
# A root-domain site instead:
VITE_BASE_PATH=/ VITE_SITE_URL=https://your-domain.example npm run build
```

Copy `.env.example` to `.env.local` for local settings. Navigation uses section hashes and requires no server-side routing rewrites.

### SEO and assets

Set the full HTTPS `VITE_SITE_URL` to emit canonical URL, Person structured data, Open Graph image/URL, sitemap, and robots sitemap reference. With no URL set, deployment-specific metadata is omitted. Metadata is in `index.html` and `scripts/seo.mjs`; update it alongside profile content.

The favicon is `public/favicon.svg`; sharing art is `public/assets/social.svg`. Replace sharing art with a 1200×630 PNG and update the script if broader social-crawler compatibility is needed.

### Custom domain

Configure the domain in repository Pages settings, add GitHub’s documented DNS records, and enable HTTPS after domain verification. If using a tracked CNAME, add `public/CNAME`. Run the workflow again; configure-pages will provide the custom URL and root base. Manual builds should use `VITE_BASE_PATH=/` and the full custom-domain URL.

## Structure

```text
src/components/  Project cards and conceptual illustrations
src/data/        Typed editable content
src/App.tsx      Layout, sections, navigation, theme, contact interactions
src/styles.css   Theme tokens, responsive layouts, typography
scripts/         Static SEO and content regression checks
public/          Public-safe favicon and sharing art only
.github/         Official GitHub Pages workflow
```

See `VERIFICATION.md` for executed checks and the remaining browser-testing limit.
