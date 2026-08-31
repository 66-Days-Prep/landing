# Landing page overhaul

The design reference is `/Users/jerryding123/Projects/interview-pilot/landing`.
Only the 66 Days Prep landing repository was edited. The reference, native app,
backend, and provider configuration were not changed. Localization is omitted.
The initial implementation was local only; the subsequent user-authorized
release follows `docs/release-workflow.md`.

## Transferred and adapted

- Interview Pilot's bright yellow accent (`#FFE500`), neutral dark surfaces,
  typography scale, rounded rectangular calls to action, subtle beams, grain,
  borders, and floating header. Old gold backgrounds and particles were removed.
- Centered hero with 66 Days Prep copy, existing social proof, and an App Store
  action. The existing phone screenshot sits below the hero as requested.
- Relevant banking/consulting firm logos with an explicit no-endorsement note.
- Three textured benefit cards, including pointer tilt on supported devices.
- Compact feature grid adapted to lessons, daily drills, AI mock interviews,
  and target roles.
- Light three-step workflow panel. The purpose-built conceptual previews show
  learning, a worked investment banking valuation case, and a 66-cell progress grid. They are
  explicitly labeled illustrative rather than represented as app screenshots.
- Two moving review rows using the existing 66 Days Prep testimonials; no
  Interview Pilot testimonials or new individual star ratings were introduced.
- Pricing with the reference's blue textured recommended card, accordion FAQ,
  pastel closing CTA, and a multi-column footer using real routes.
- Mobile download bar, accessible menu with focus trapping/Escape support,
  pause controls, reduced-motion behavior, and off-screen animation suspension.
- Single-anchor CTA semantics, unique section IDs, anchor offsets, social preview,
  fixed dark rendering, named social links, working manifest icon paths,
  legal/account page metadata, branded 404, and sitemap entries for actual pages.
  Download endpoints now return proper HTTP redirects; download CTAs use native
  anchor navigation rather than Next.js page prefetching.

## Differences and follow-up decisions

1. **Hero and workflow graphics.** There is no 66 Days Prep equivalent of the
   reference's desktop copilot animation. The phone screenshot is intentional.
   The conceptual workflow previews can later be replaced with current app
   captures or bespoke animations. The phone's existing in-app colors were not
   altered as part of this website redesign.
2. **Pricing.** The old yearly card said $59.99, while the FAQ and checked-in iOS
   StoreKit configuration both said $49.99. Both monthly ($15.99) and yearly
   ($49.99) prices now come from `data/pricing.tsx`, including the FAQ. This is
   local repository evidence, not verification of live App Store Connect prices.
   Confirm live prices before publishing.
3. **Promotions and trial terms.** The stale Spring/50%-off banner, inconsistent
   crossed-out reference prices, and unconditional unlimited free-trial claims
   were removed. The checked-in StoreKit products have no introductory offer.
   The page says the app is free to download and that subscriptions/offers are
   shown in-app. Supply current campaign terms before reintroducing promotions.
4. **Product differences.** Desktop/Android downloads, web checkout, platform
   login, stealth interview copilot features, multilingual claims, and live
   service/growth metrics were not copied. No equivalent destinations or data
   sources were established for this product. Every purchase CTA still goes to
   the existing 66 Days Prep App Store listing; it does not preselect a plan.
5. **Proof and support details.** The existing 30,000+ users, 4.9 rating,
   testimonials, social URLs, and `Support@sellwithuru.com` were retained. They
   were not independently revalidated as current public facts. Confirm them
   before release. Firm logos describe target employers, not endorsements.
6. **Additional content.** Interview Pilot's blog, comparisons, question-bank
   pages, and role guides are separate product/editorial content. They were not
   imported as 66 Days Prep pages or linked to nonexistent destinations.
7. **Legal content.** Existing privacy/terms text and account verification/reset
   behavior were preserved. The existing privacy policy's claims about data and
   audio processing need a separate review against the current native app and
   backend; the design migration does not certify those statements.
8. **Localization.** Deliberately omitted, as requested.

## Verification

Final verification results are recorded in `docs/landing-verification.md`.
