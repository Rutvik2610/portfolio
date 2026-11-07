# Verification · redesigned portfolio

Run in the supplied managed environment on 7 November 2026 (Node 24, npm 11).

## Executed

- Reproducible dependency installation (`npm ci`).
- TypeScript, ESLint, production builds at root and `/portfolio/`.
- Render-level regression checks (`npm test`): unique IDs, internal section targets, real/hidden project visibility, expandable project write-ups, confirmed role dates, production versus personal-project skill contexts, configured contact links, and empty-contact fallback behavior.
- Privacy checks: no phone link, downloadable resume, PDF path in rendered markup, or PDF under public assets; mismatched resume project repository links excluded.
- Deployment-output checks: repository-prefixed JS/CSS/favicon resolve to actual files; canonical, JSON-LD, sitemap, and robots contain the configured deployment URL.
- Resume content extracted locally; email typo corrected only after Rutvik confirmed the address. Resume PDF and extracted document were not added to the repository.
- Reference content reviewed from all three requested portfolios and the developer-portfolios collection; no third-party copy, photographs, or site assets reused.

## Browser limit

This managed environment exposes the preview CLI, but the required `cua_repl.js` browser-control tool is absent from both the available tool catalog and executor. The Sites skill explicitly says: “If `cua_repl.js` is unavailable, skip browser QA: do not start a preview server, install a browser, or improvise another browser-control path.” No substitute browser was installed or started.

Desktop/mobile appearance, sticky behavior, keyboard interaction, theme persistence, copy-to-clipboard behavior, native details interaction, and Lighthouse scores have **not been verified in a browser**. Responsive layouts are implemented at 1150, 900, 720, and 390px; motion respects reduced-motion settings. Browser review remains appropriate before sharing broadly.

Project implementation statements and certifications are resume-sourced, not independently audited. The supplied project repository hyperlinks do not match the named projects and are not published as their source links.
