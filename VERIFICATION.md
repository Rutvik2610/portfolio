# Verification

Executed in the supplied managed environment on 7 November 2026 with Node 24 and npm 11:

- Dependency install and reproducible `npm ci`: passed.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- Production build at `/`: passed.
- Production build at `/portfolio/` with a test HTTPS canonical URL: passed.
- Built asset and favicon paths under the repository prefix resolve to files: passed.
- Configured canonical, Person structured data, sitemap, robots sitemap reference: passed.
- Server-rendered component checks (`npm test`): passed for internal hash targets, hidden projects, explicitly enabled project and Draft label, missing email/social links, resume notice and available-download state, and initial mobile menu semantics.
- Current official action majors checked against GitHub release API: checkout 7, setup-node 7, configure-pages 6, upload-pages-artifact 5, deploy-pages 5. Configure-pages output names verified against its action definition.

## Verification limits

The supported managed browser-control tool (`cua_repl.js`) is unavailable in this session. Per the Sites runtime guidance, no substitute browser or preview server was installed or started. Desktop/mobile visual inspection, keyboard interaction, navigation tracking, persisted theme switching, dialog focus behavior, real browser downloads, and Lighthouse scores were therefore **not browser-tested**. Responsive breakpoints and accessibility behaviors are implemented but should receive a browser review before public launch.

GitHub Actions was not executed on a remote repository, and the website was not deployed. No repository ownership, contact details, resume PDF, employment dates, additional learning experience, or completed personal projects were assumed. The social sharing image is SVG; a PNG replacement is recommended for broad crawler compatibility (see README).
