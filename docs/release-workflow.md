# Landing production release

Verified on 2026-08-31 from existing Git history, GitHub deployment records,
and the public website. These instructions document the existing integration;
they do not establish a new deployment method.

## Verified identities

- Repository: `git@github.com:66-Days-Prep/landing.git`
- GitHub organization/repository: `66-Days-Prep/landing`
- Release branch: `main`
- Authorized GitHub and SSH account for this release: `jerryding123`
- Deployment integration: `vercel[bot]`, GitHub commit status context `Vercel`
- Provider team: `gemmas-projects-178e2e30`
- Provider project: `66daysprep`
- GitHub deployment environment: `Production`
- Public website: <https://www.66daysprep.com>
- Project alias: <https://66daysprep.vercel.app>

## Independent evidence

1. Local `origin/main` reflog records `update by push` for prior releases,
   including `535555a3c642d418e0da2b5389674f94307e27c8` on July 15 at
   22:18:34 UTC and `1eb1e348618709163a05a4a120ed333f12c3fcb3` on May 31
   at 00:54:11 UTC. These are successive commits on `main`.
2. GitHub records successful Vercel Production deployments for those exact
   commits shortly afterward: deployment IDs `5464899390` and `4876572696`.
   Their commit statuses identify the same provider team and project. The
   July deployment completed at 22:20:42 UTC. There is no GitHub Actions
   workflow used for these releases.
3. Before this release, both the canonical website and project alias returned
   HTTP 200 with the same ETag and HTML length. The live page matched the
   previous landing design. The canonical domain is also present in the
   checked-in app metadata and product-link constants.

## Authorized release procedure

1. Review all intended files, build, and verify the local production page.
   Keep unrelated `.DS_Store` and generated `tsconfig.tsbuildinfo` changes out
   of the commit.
2. Commit the reviewed landing changes. Immediately before pushing, recheck
   repository instructions, remote, branch, exact commit, GitHub/SSH identity,
   and the production target against the GitHub records above. Confirm remote
   `main` has not moved unexpectedly.
3. With explicit user authorization, push the intended commit to `origin/main`.
   That push triggers the established Vercel GitHub integration. Do not invoke
   a provider CLI/API, change aliases, or manually create a deployment.
4. Verify remote `main` equals the intended commit. Use `gh api` to verify that
   commit's `Vercel` status and its Production deployment result. Check the
   live website, assets, download redirects, and representative interactions.
   Complete this verification before any further release operation.

If identity, workflow, or target evidence no longer matches, stop the release
and resolve the discrepancy rather than trying an alternate deployment path.
