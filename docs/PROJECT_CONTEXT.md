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

## Profile redesign and multilingual preview — 2026-09-17

This entry supersedes the earlier single-language source-map and design notes. This was initially a local preview; the user subsequently authorized publication of the complete redesign, translations, hobbies and supplied portrait through the existing main/GitHub Pages workflow.

- Replaced cobalt dashboard styling with a restrained professional profile using #141414, #292929, #666666, #E3E3E3 and #F7F7F5. The introduction leads with the name, student status, accounting/tax interest and résumé, LinkedIn and email links. Background content uses aligned rows, compact paragraphs and subtle dividers.
- Read the primary Kim & Chang profile (https://www.kimchang.com/ko/professionals/view/hanjun.chon) and recovered the official BKL profile (https://www.bkl.co.kr/law/member/11236-namwook-kim) after the supplied share link failed. Their text structure informed the identity/contact/introduction/background hierarchy. No connected browser was available, so neither reference was visually inspected. No branding, portrait or professional claims were copied.
- Verified exact roles, dates, email, coursework and project facts against the existing public résumé. The email is pparkk@my.yorku.ca. Retained all three roles; omitted time-sensitive graduation and active-course claims. Excel remains coursework-based; the cash-flow/GST-HST tracker is explicitly planned. The portfolio is an ongoing project built using AI-assisted tools.
- Added a compact “Beyond Accounting” section after Projects and before Contact, without a navigation item. The user's supplied Haedong Kumdo wording is consistent with the approved approximately ten years of training, 4th Dan and instructor certification in the project context and résumé. No extra hobbies, anecdotes or professional-strength claims were added.
- `app/profile-config.ts` owns contact destinations and an optional portrait setting. `portrait: null` renders an aria-hidden blank neutral surface with no image request or visitor-facing placeholder text. To add the user's future portrait, place it in `public/` and configure its source. The desktop area is 3:4; the empty mobile area is only 96px high and follows the introduction. An actual configured portrait retains its 3:4 ratio on mobile.
- `app/translations.ts` centralizes complete EN, KO, JA and Simplified Chinese dictionaries, language metadata and stable section IDs. Korean uses 박현준; other languages use Hyeonjun Park. Stated spoken languages remain Korean and English. Non-English résumé links explicitly identify the unchanged PDF as English. All translated content, especially Japanese/Chinese idiom and translated role/qualification wording, should receive the user's language review before publication.
- `app/[[...locale]]/page.tsx` statically generates `/`, `/ko/`, `/ja/`, `/zh/`. The root layout lives alongside it so the initial HTML language is correctly en, ko, ja or zh-Hans. Invalid locale segments are rejected. `app/profile.tsx` shares the layout across locales. No server runtime, deployment or dependency changes were introduced.
- Localized titles, descriptions, Open Graph locale/URL and Twitter text use self-canonical URLs and reciprocal en/ko/ja/zh-Hans/x-default alternates. `app/sitemap.xml` now lists all four pages with reciprocal alternates. Existing English metadata, robots rules, favicon assets and Search Console verification are retained.
- `app/navigation.tsx` supplies keyboard-accessible native language links with active-language indication and preserves a recognized section fragment when switching. Mobile navigation contains the selector and closes on link selection. English section IDs from the prior page remain valid. No extra hobby navigation item was added.
- CSS covers desktop, tablet and mobile, including long translated text wrapping, stacked background rows and reduced-motion scrolling. Visible monochrome focus and underlined content links are included. Visual overflow, mobile interactions and actual keyboard behaviour remain unverified because the browser inventory was empty; source/static-output checks do not substitute for visual QA.
- Verification: ESLint passed; production build passed with TypeScript and all four static pages. The initial font fetch required network-enabled execution; stale generated route types and a Windows build-cache lock were resolved by clearing only `.next` and rebuilding. Complete translation-schema checks passed for all four locales. Export checks passed for HTML languages, unique IDs, every local link and section anchor, hobby ordering, no rendered portrait image, canonical URLs, five alternates per page, active selectors, contact links and four sitemap URLs. Exported résumé and verification-file bytes match the public originals. Résumé SHA-256 remains `6F7E92267D191C4FD04A9BBA6D28933E46333A577E97610E653679F75B6615CC`.
- Local development preview started in a hidden background process at http://127.0.0.1:3000/ using `npm.cmd run dev -- --hostname 127.0.0.1`. Localized previews are `/ko/`, `/ja/` and `/zh/`. This is not a live deployment.


## Portrait and redesign release preparation ? 2026-09-17

- Inserted the user-supplied portrait as `public/portrait.jpg`, preserving the original file bytes. Enabled it in `app/profile-config.ts` for all four languages. The image fills the existing 3:4 frame with a centred cover crop and localized name alt text; the image itself was not retouched. Mobile uses the existing maximum 300px-wide portrait after the introduction.
- At the user's request, added a subtle light-gray outline and very soft shadow around the portrait, retaining square corners and the monochrome layout.
- User authorized committing and pushing all relevant work from this task. Reviewed the redesign source, translations, routes, metadata, sitemap and context changes. Remote main matched local HEAD before release. Deployment configuration, dependencies, r?sum? and verification assets remain unchanged.
- Portrait lint and production export passed; all four exported pages contain the portrait with nonempty localized alt text, and exported image bytes match the supplied file. Final frame validation and deployment monitoring follow. Browser-based desktop/mobile visual QA remains unavailable; publication authorization does not change that limitation.
- Final frame checks passed: ESLint, TypeScript, four-language production static export and whitespace checks. A recurring Windows generated-cache lock was resolved by clearing only .next. This records pre-push validation; verify the release Actions run and live assets after pushing.

## Custom domain preparation - 2026-09-17

- User confirmed hyeonjunpark.com, purchased via Cloudflare. Preserve GitHub Pages hosting; no Vercel migration is authorized.
- Reverified active hosting through successful deployment run 35253844605 for 9b9a429, HTTP 200 from Server: GitHub.com, and authenticated Pages API settings: build_type workflow, cname null, default GitHub Pages URL, HTTPS enforced. The redesign and language versions were already published by the earlier authorization; this domain task begins from a clean checkout and changes none of that content.
- Cloudflare nameservers resolve to alec.ns.cloudflare.com and elinore.ns.cloudflare.com. Apex A and www CNAME answers were absent. No browser/Cloudflare account-management access was available. GitHub settings were readable with existing authentication; no secrets were printed or requested.
- Prepared domain-only edits to app/site-config.ts, app/sitemap.xml and app/robots.txt. Existing relative metadata canonicals and multilingual alternates resolve against the new metadataBase. Preserved all verification assets, relative resume links and deployment workflow. No CNAME file is required for workflow-based Pages publishing.
- docs/DOMAIN_SETUP.md records exact DNS entries, dashboard sequence, optional IPv6, certificate setup and follow-up checks. Changes remain local pending DNS setup; no commit, push, DNS mutation or Pages domain activation was performed. Activation was deferred to avoid redirecting the currently working default URL to a domain without working DNS.
- Domain preparation validation passed: ESLint, production build/TypeScript/static export, whitespace checks, canonical and Open Graph URLs plus five alternates for every locale, four sitemap URLs and robots sitemap reference. Exported resume, portrait and Search Console verification bytes match the unchanged public files. Final diff is limited to three domain URL files and two documentation files.


## Custom domain activation - 2026-09-17

- User completed DNS/hosting setup and authorized publishing only domain changes. Verified the apex A records are the four GitHub Pages addresses, and public DNS confirms www CNAME to peterpark-kr.github.io. A local resolver initially returned a stale negative www result; public DNS plus successful HTTPS verified propagation elsewhere.
- Authenticated Pages API confirms cname hyeonjunpark.com, workflow publishing and HTTPS enforced. Validated HTTPS requests to apex and www. HTTP, www and old GitHub Pages URLs return 301 redirects to https://hyeonjunpark.com/; tested language paths are preserved.
- Release scope is app/site-config.ts, app/robots.txt, app/sitemap.xml, docs/DOMAIN_SETUP.md and this context. The already-deployed redesign/translations at 9b9a429 are unchanged. No isolated worktree is needed because the checkout has no unrelated edits.
- Final lint, production build/TypeScript/static export passed. Canonical, Open Graph, multilingual alternate and sitemap origins use the new domain. Resume and verification assets remain untouched. Domain setup documentation now includes exact manual Search Console Domain-property/TXT verification, sitemap, URL Inspection and Change of Address steps while preserving the existing property.
- This entry records release preparation and verified infrastructure, not post-push deployment success. Check the release workflow and live metadata after pushing. Browser interaction/visual QA and authenticated Search Console ownership/indexing remain unverified.
