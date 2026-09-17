# CPA portfolio project context

Last inspected: 2026-09-17. This is a dated evidence snapshot; recheck changing facts before relying on them.

## Repository and architecture

- Repository: https://github.com/PeterPark-KR/peterpark-kr.github.io (origin uses the same URL with `.git`). Local folder: `cpa-journey`.
- Initial checkout was clean on `main` at `7e875e943c998353a93e041f4d143d3b319e67bd` (Update resume and add LinkedIn profile). A live `git ls-remote origin refs/heads/main` matched that commit.
- Next.js 16.2.10 App Router, React 19.2.4, TypeScript, Tailwind CSS 4 with custom global CSS, ESLint 9. npm lockfile is present.
- `next.config.ts`: `output: "export"`, `trailingSlash: true`, unoptimized images. Build output is `out/`; no server runtime or API routes were found.
- `app/page.tsx`: single-page portfolio, journey/experience/skills/contact sections, timeline and skills data, resume and LinkedIn links.
- `app/globals.css`: layout, animation, reduced-motion handling, responsive breakpoints at 1180px and 820px. Mobile navigation uses native `details`/`summary`; desktop navigation is hidden at 820px and below. Links target section anchors.
- `app/site-config.ts`: shared name, title, description, and GitHub Pages URL. `app/layout.tsx`: English document language, Geist/Geist Mono via Google Fonts, canonical, Open Graph, Twitter, robots and favicon metadata.
- `public/resume.pdf`: served at `/resume.pdf`, replaced with the user-supplied finalized PDF on 2026-09-17. SHA-256: `6F7E92267D191C4FD04A9BBA6D28933E46333A577E97610E653679F75B6615CC`. Its one-page text and rendered page were inspected; the file was copied without modifying its contents. See release validation below for publication checks.
- LinkedIn target: https://www.linkedin.com/in/hyeonjun-park-a50296322/ . Resume and LinkedIn open in a new tab with `noopener noreferrer`; LinkedIn account details were not independently verified.
- `app/robots.txt` allows crawling and points to the GitHub Pages sitemap. `app/sitemap.xml` lists the GitHub Pages homepage.
- `public/google6d8d4f33d42b5d22.html` contains the matching Google site-verification declaration. Preserve it. Public availability does not establish authenticated Search Console ownership or indexing status.
- `public/favicon.svg` and `app/favicon.ico` provide favicon assets. Other public SVGs are file/globe/next/window/vercel starter assets; `vercel.svg` is not evidence of hosting.
- Root `AGENTS.md` contains project rules and the existing Next.js guide requirement. No nested AGENTS.md or CLAUDE.md was found outside dependencies/build output. `CLAUDE.md` references AGENTS.md. README remains the create-next-app starter guide.

## Commands and deployment

Use Node 24 to match CI. Inspection used Node v24.18.0 and npm 11.16.0.

| Purpose | Command | Notes |
| --- | --- | --- |
| Install locked dependencies | `npm.cmd ci` | CI uses `npm ci`; not rerun during setup because dependencies were already installed. |
| Development preview | `npm.cmd run dev` | Open http://localhost:3000; use the actual port printed if occupied. |
| Lint | `npm.cmd run lint` | Existing ESLint script. |
| Production static export | `npm.cmd run build` | Includes TypeScript checking and emits `out/`. Google font download needs network access. |
| Whitespace/diff check | `git diff --check` | Also inspect status and relevant diffs. |

On this Windows PowerShell environment, `npm` selected the blocked `npm.ps1` launcher; `npm.cmd` works without changing execution policy. On CI/POSIX use `npm` normally. `npm run start` exists but runs `next start`, which is not the serving workflow for static exports; use development mode or a static HTTP server rooted at `out/`. No test script or browser-test suite is configured.

`.github/workflows/deploy-pages.yml` triggers on pushes to `main` or manual dispatch. It checks out source, sets up Node 24 and Pages, runs `npm ci` and `npm run build`, uploads `out/`, and deploys through `actions/deploy-pages` to the `github-pages` environment. Permissions are contents read, pages write, and id-token write. Do not change hosting or domains without an explicit request.

## Hosting evidence and historical conflicts

- https://peterpark-kr.github.io/ returned HTTP 200 without a redirect, `Server: GitHub.com`, and title `Hyeonjun Park | Aspiring CPA` on inspection.
- Its `/resume.pdf`, `/robots.txt`, `/sitemap.xml`, and `/google6d8d4f33d42b5d22.html` endpoints also returned HTTP 200. The live resume response was 60,086 bytes; byte identity with the local PDF was not checked.
- Repository config, metadata URLs, sitemap, workflow, and live HTTP response consistently support GitHub Pages. No tracked CNAME or Vercel project configuration was found. README's Vercel deployment section is generic starter guidance, not the operative deployment instructions.
- Historical material mentions `cparoadmap.ca` and Vercel. The domain failed DNS resolution from this environment on inspection. Its registration, any separate deployment, and past hosting remain unverified; this does not establish that the domain never existed. No migration is authorized.
- GitHub Actions run history, repository Pages settings, push permissions, and authenticated Search Console status were not checked. A working public site is not proof of a particular workflow run or future push access.

## Purpose and factual constraints

User-confirmed direction for future work (not newly published website copy):

- Hyeonjun Park, also called Peter; personal accounting and CPA journey portfolio for recruiters and networking.
- York University BCom Accounting, co-op stream; intends to pursue the Canadian CPA designation. Verify academic year, graduation date, course and employment status before publishing time-sensitive claims.
- Accounting motivation: understanding how cash moves through a business; intended specialization in tax.
- Republic of Korea Navy background includes Korean-English interpretation and operational briefing support. Values communication, diverse teams, adaptability, consistency and discipline.
- Desired tone: personal, credible, professional and committed. Earlier feedback found the site too code-like and text-heavy; future improvements should emphasize personal story and concrete evidence. No redesign was performed during setup.
- Never invent accomplishments, results, credentials, metrics or employment. Existing website text is not independent evidence that a claim is current or approved.
- ADMS 3370 Advanced Spreadsheets: A. Skills were applied in coursework, quizzes and exams; do not claim an independently created course workbook.
- Small-Business Cash Flow and GST/HST Tracker is planned, using fictional transactions, real CRA rules and Canadian industry benchmarks. No completion evidence was reviewed; do not present it as completed.
- Approximately ten years of Haedong Kumdo and a 4th Dan instructor qualification were supplied as background. Check approved materials for exact public wording before adding either claim.

## Setup results, open issues and next work

- Completed: inspected source/config/assets/instructions; verified remote main and live public endpoints; added persistent context and appended AGENTS.md while preserving existing guidance. No site design/content, hosting configuration, commit or publication changes are part of setup.
- `npm.cmd run lint` passed. `npm.cmd run build` passed, including TypeScript and static prerendering, after retrying with network permission. The first sandboxed build failed fetching Geist fonts; no source fix was required.
- Export inspection found no missing internal anchor targets and confirmed the resume, robots, sitemap and verification file in `out/`. `git diff --check` passed; Git emitted only its LF-to-CRLF normalization notice for AGENTS.md. Final status showed only AGENTS.md and the new docs directory changed; tracked website files remained unchanged.
- Browser tool reported no browser available, so desktop/mobile visual previews and interaction testing were not performed. Source inspection alone does not establish visual correctness.
- At initial setup, copy emphasized accounting/finance, internal audit, advisory and banking and asserted fourth-year status. The subsequent local homepage revision below addresses these items.
- README still contains generic Vercel and server-start guidance; use this context for the actual workflow. A future documentation request can replace that boilerplate.
- Next website request: inspect relevant source and status, implement directly using reasonable judgment, run appropriate checks, inspect desktop/mobile when available, fix introduced issues and refresh this context. Ask only for material missing facts or authorization beyond the request.
- A publishing request authorizes the existing review/commit/push/verification workflow for relevant changes only. Report local edits, commit, push and live verification separately; preserve unrelated work and never force-push.

## Homepage revision — 2026-09-17

- Reframed the introduction around Peter's interest in cash movement, accounting and tax. Added a hero resume link, retained section navigation and LinkedIn, and replaced generic experience copy with deli reconciliation, Navy interpretation and academic Excel examples.
- Removed the repeated quotation and second CPA development track. Replaced unsupported fourth-year and relocation wording with education and employment details from the finalized resume. Tax remains a study/career direction, not claimed professional tax experience.
- The supplied finalized resume confirms ADMS 3520 (A), ADMS 3370 (A), York co-op, Paris Baguette work in 2025, Navy SITREPs and briefing support, Korean-English interpretation, deli till reconciliation and inventory coordination. These support the revised public copy. No new claims of completed projects were added.
- Shortened mobile section spacing, reduced oversized headings, removed fixed minimum heights on mobile cards, stacked progress labels, and made the hero resume button full-width on mobile. Existing responsive navigation and reduced-motion support remain.
- Changed `app/page.tsx`, `app/globals.css`, `public/resume.pdf` and this context. Preserved the earlier uncommitted AGENTS.md setup work. Deployment configuration, dependencies, metadata, robots, sitemap and Search Console verification were not modified.
- Checks passed: ESLint; production build including TypeScript and static export; `git diff --check`; exported internal anchors (zero missing targets); LinkedIn target retained. The upload, local PDF, exported PDF and HTTP-served PDF have matching SHA-256 hashes.
- Existing development server reused at http://localhost:3000/. HTTP 200 and the updated heading were verified. The browser tool returned no connected browsers, so desktop/mobile visual and interaction QA remain unverified. The PDF itself was rendered and visually inspected.
- At completion of the editing task, no commit, push or deployment had been performed. Publication was subsequently authorized; see release validation below.

## Release validation — 2026-09-17

- User authorized publication of the reviewed homepage, mobile spacing, finalized resume and relevant project context through the existing `main` push workflow. Scope includes `app/page.tsx`, `app/globals.css`, `public/resume.pdf`, `docs/PROJECT_CONTEXT.md` and the companion `AGENTS.md` project instructions. No hosting, domain or dependency changes.
- Remote main matched the original checkout before release. Final lint, production build (including TypeScript/static export) and whitespace checks passed again.
- Browser inventory remained empty, so desktop/mobile appearance and actual menu-click interaction could not be verified. Source and exported anchor checks supplement but do not replace that visual check.
- This entry records pre-push validation, not a claim of completed deployment. Verify the release commit's `Deploy Next.js site to GitHub Pages` Actions run and live homepage, navigation anchors, PDF hash and SEO assets after pushing. Actions history is the authoritative deployment record: https://github.com/PeterPark-KR/peterpark-kr.github.io/actions/workflows/deploy-pages.yml .
