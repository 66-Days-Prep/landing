# Landing overhaul verification

Verified locally on 2026-08-31, using the final `npm run build` output served by
`npm run start -- --hostname 127.0.0.1 --port 3001`.

## Build and static checks

- `npm run build`: passed, including ESLint, TypeScript validation, all page
  generation, and build tracing. Homepage: 27.5 kB route / 193 kB first-load JS.
- Standalone lint and TypeScript checks also passed during implementation.
- `git diff --check`: passed.
- No dependency, lockfile, provider configuration, product-link constants,
  native-app, or backend changes.
- Existing legal page text and password-reset/email-verification implementations
  were checked against Git and are unchanged. Only their shared design and
  route metadata changed.

## Production HTTP checks

- 200 responses: homepage, privacy, terms, reset-password, verify-email,
  sitemap.xml, robots.txt, web manifest, and the social preview image.
- `/download/hero` and `/download/mobile`: HTTP 307 with the exact existing
  66 Days Prep App Store URL in the `Location` header.
- Unknown route: HTTP 404 with the new branded recovery page.
- All 14 distinct homepage image URLs responded successfully. Both manifest
  icon paths also responded successfully.
- Social preview: valid 1200 × 630 PNG, rendered and visually inspected.
- Homepage/legal canonicals resolve to their own production URLs. Account-action
  pages emit `noindex`. Sitemap contains only the actual homepage/legal routes.

## Browser checks

- Desktop/mobile views checked at widths 320, 390, 768, 1024, 1280, and 1440 px.
  No document-level horizontal overflow. Narrow workflow headings fit their
  containers. The hero headline and download action precede the phone on mobile.
- Visually inspected hero, firm logos, textured benefits, feature grid, light
  workflow, pricing, FAQ, closing CTA, and footer.
- One H1, no duplicate IDs, no missing homepage hash targets, no broken rendered
  images, and no nested button-inside-anchor controls.
- Section navigation, mobile drawer open/close, Escape/focus return, and mobile
  drawer dismissal after selecting a link checked. Desktop resize closes the
  mobile menu.
- Company-logo pause, review pause, workflow pause/manual step selection, and
  hashtag-copy feedback checked in the browser.
- FAQ opens and shows the shared $15.99 monthly / $49.99 yearly pricing.
- Mobile download bar appears after the hero and is suppressed at the footer;
  the implementation accounts for the bottom safe area.
- Final production browser checks show fixed dark markup and no warnings/errors
  after correcting theme hydration and download-link prefetch behavior.

## Scope and limitations

### Investment banking practice revision

- Replaced the percentage question with an EBITDA normalization and valuation
  case, including the enterprise-to-equity bridge and diluted share price.
- Independently checked the calculation: $110m normalized EBITDA, $990m
  enterprise value, $720m equity value, and $14.40 per share.
- Worked answer opens/closes using click, Enter, and Space; revealing it marks
  the correct option and pauses the preview. The practice step has 15 seconds
  of reading time during automatic playback.
- Rebuilt successfully with lint and TypeScript validation. Rechecked widths
  320, 390, 768, 1024, and 1440 px with the answer expanded; no horizontal
  overflow in the document or workflow content. No browser warnings/errors.

### Remaining limitations

- Reduced-motion and off-screen animation handling are implemented and reviewed
  in source; an OS-level reduced-motion session was not separately exercised.
- Account pages were tested without tokens. No real password reset, verification
  email, subscription, or other backend mutation was performed.
- Prices, customer counts, ratings, testimonials, legal statements, external
  social profiles, and the native app's current compatibility were not certified
  against production accounts. See `landing-overhaul.md` for follow-ups.
- These local checks preceded the separately authorized commit and release.
  No provider configuration or external resources were created.
- The pre-existing `.DS_Store` change was retained. Existing generated
  `tsconfig.tsbuildinfo` remains untracked.
