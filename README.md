# 66 Days Prep landing page

Next.js landing page for the 66 Days Prep iPhone/iPad app. The design is adapted
from the Interview Pilot landing project with 66 Days Prep-specific content.

## Local development

```sh
npm install
npm run dev -- --hostname 127.0.0.1 --port 3001
```

## Validation

```sh
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm run start -- --hostname 127.0.0.1 --port 3001
```

Stop the development server before building: both use `.next`.

Product links are in `constants/links.ts`; prices are in `data/pricing.tsx`.
See [migration decisions](docs/landing-overhaul.md) and
[verification results](docs/landing-verification.md) before release.

## Release

Production uses the existing Vercel GitHub integration: an authorized push to
`main` in `66-Days-Prep/landing` triggers deployment. Verify the identities and
release result described in [the release workflow](docs/release-workflow.md).
Do not use a direct provider deployment command.
