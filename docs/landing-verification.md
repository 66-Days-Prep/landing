# Landing overhaul verification

Verified locally on 2026-08-31, using the final `npm run build` output served by
`npm run start -- --hostname 127.0.0.1 --port 3001`.

## Build and static checks

- `npm run build`: passed, including ESLint, TypeScript validation, all page
  generation, and build tracing. Latest homepage: 29 kB route / 195 kB first-load JS.
- Standalone lint and TypeScript checks also passed during implementation.
- `git diff --check`: passed.
- The original overhaul made no dependency changes. The later back-to-school
  revision adds only `lottie-web@5.13.0` and updates both lockfiles. Provider
  configuration, product-link constants, native app, and backend are unchanged.
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

### Back-to-school offer and audience revision

- Audience text and accessible labels share the user-specified 60,000+ count.
  The landing source no longer contains the previous audience count.
- Adapted the reference's active rotating hero pill: Back to School, Limited
  Time Only, 40% off, linked to pricing. Its disabled popup/banner were not
  enabled here, and no web-checkout coupon behavior was copied.
- Rocket JSON is byte-identical to the reference (163,513 bytes; about 8 KB
  gzip). Playback uses the dynamically imported light SVG player, frames
  60–110 in alternating directions, with subframe interpolation disabled.
- Build output puts the player in a deferred chunk (about 46 KB gzip), absent
  from the initial homepage bundle. Loading is guarded by viewport visibility;
  playback pauses off-screen, in hidden tabs, and with reduced motion.
- Browser-verified rotation, pause/resume, changing/stable SVG frames during
  play/pause, off-screen suspension, and the pricing anchor. Checked widths
  320, 390, 768, 1024, and 1440 px with no document or pill overflow.
- Hover/focus also pauses the announcement. Reduced-motion users get a static
  offer and rocket frame; the 60,000+ trust line remains visible. This path was
  reviewed in source; OS-level reduced-motion settings were not changed.
- No browser warnings/errors during local interaction checks. Existing App
  Store prices, offer redemption, subscriptions, and backend behavior remain
  unchanged by this website promotion.

### Landing cleanup revision

- Removed all visible pause/play controls from the hero offer, company logos,
  workflow, and testimonials, plus the workflow disclaimer. Hover/focus,
  reduced-motion, and off-screen handling remain automatic.
- Testimonial rows now sit outside the constrained heading container and fill
  the page width. Each row measures its cards and repeats enough groups to cover
  the viewport throughout a loop, including after resizing. Speed is a constant
  50 px/second (previously approximately 19–20 px/second on desktop).
- Header actions now use CSS gap rather than stack sibling margins. The scrolled
  desktop header's right padding matches its vertical padding at 10 px.
- Production build passed with lint, TypeScript, and all 12 generated pages.
  HTTP checks confirmed removed text/controls are absent from rendered HTML and
  all initial JavaScript, both testimonial rows exist, all 14 image assets load,
  and both download redirects still point to the existing App Store listing.
  The 60,000+ audience and Back to School / 40%-off offer are preserved.
- The earlier browser checks above describe the previous revisions. A fresh
  visual/interaction check of this cleanup is blocked: the connected preview tab
  remains on an internal connection-error page, and browser security prevents
  navigation out of that page. The user has been asked to reopen the site.

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
