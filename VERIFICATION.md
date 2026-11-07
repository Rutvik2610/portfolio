# Verification

## Automated checks

- Reproducible dependency installation with `npm ci`.
- TypeScript and ESLint validation.
- Production builds at root and repository base paths.
- Content checks covering section anchors, unique IDs, project visibility, expandable write-ups, and contact-link fallbacks.
- Checks for disabled resume downloads and exclusion of private document assets.
- Deployment metadata and asset-path checks for GitHub Pages.

Run `npm run check` and `npm test` locally. The GitHub Pages workflow also runs types, lint, tests, and the build before deployment.

## Browser review

Automated browser review and Lighthouse measurement have not been completed. Responsive appearance, keyboard interactions, theme persistence, and clipboard behavior should be reviewed in a browser before claiming measured accessibility or performance scores.
