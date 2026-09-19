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

## Personal website expansion - confirmed facts, 2026-09-17

- User confirmed golf as a personal interest; no ability, handicap, frequency or competition history is supplied.
- User reconfirmed ten years of Haedong Kumdo training and an instructor qualification. Existing approved resume also supports 4th Dan.
- User confirmed participation in 무림피아 twice, awards including gold in paper cutting, and a sense of unity through team performances. No award year, exact formal event translation, other award categories or placings were supplied.
- User confirmed actual instruction during sessions and demonstration competitions, and generally covering instruction when the head instructor was absent. Do not imply a paid teaching position, a regular teaching schedule or student counts.
- Re-read the existing public resume: a seven-day price promotion and a Naver Band group for daily specials contributed to approximately 10% higher monthly POS-recorded store sales than the preceding month. Preserve the qualified contribution and monthly comparison; do not claim sole causation, profit improvement or a seven-day sales result. The Navy Barracks Room Leader duty lasted approximately six months.

## Local personal-site revision - 2026-09-17

- User requested a warmer, concise personal homepage with deeper pages; local review only. No commit, push or deployment is authorized for this revision. Initial Git status was clean.
- Reviewed https://sigilwen.ca/ as text for its personal introduction and deeper-topic links, without copying wording or claims. Browser inventory was empty; no reference or local rendered browser inspection was possible.
- Expanded the existing optional catch-all route to statically export Home, About, Interests and Projects in all four languages (16 pages). Existing /, /ko/, /ja/, /zh/ stay valid. Home retains the previous section fragment targets as short introductions linking to deeper pages. Language selectors preserve the equivalent page and recognized section fragments. Each route has localized title/description, canonical and reciprocal alternates on https://hyeonjunpark.com.
- Replaced static app/sitemap.xml with app/sitemap.ts, using the shared route list and site origin so all 16 URLs and language alternates are exported consistently. Existing robots URL, custom-domain settings and GitHub Pages workflow remain unchanged.
- Reworked app/profile.tsx and app/globals.css into a brief first-person homepage, reading-width detail pages and short conversational contact section. Reused the supplied portrait at a smaller mobile size; no hobby stock images or placeholders. Added lightweight inline LinkedIn/envelope SVGs with text labels and preserved separate resume/LinkedIn/mailto destinations. Removed decorative link arrows.
- Centralized new multilingual page writing in the typed pageCopy dictionaries in app/translations.ts. Keep English natural and conversational, as explicitly requested; translate Korean meaning rather than copying Korean sentence structure. Keep hobby accounts independent from professional positioning.
- English terminology checked against the official Mulimpia Haidong Gumdo rules (https://mulimpia.eu/wp-content/uploads/2019/12/2020_EuroMulimpia_RR_HaidongGumdo_v5.pdf), which use Mulimpia and Paper Cutting. The European association also uses paper cutting (https://euhaidong.com/about/training-disciplines/). Preserve the user's preferred Haedong Kumdo spelling. Team demonstrations and head instructor are plain-English translations of the user's account, not unverified formal event titles. External sources establish terminology only; awards and teaching experience come from the user's confirmation.
- Dedicated Interests content includes ten years of training, 4th Dan, instructor qualification, two Mulimpia appearances, gold in paper cutting, team unity through demonstrations, and actual instruction/cover for the head instructor. No year, medal count, class frequency, student number or paid teaching role is claimed. Golf remains a simple confirmed interest.
- Re-read public/resume.pdf for concrete evidence. Detailed About copy includes approximately six months as Barracks Room Leader and the deli's seven-day promotion/Naver Band contribution to approximately 10% higher monthly POS-recorded sales versus the previous month. Never use the friend's hypothetical $34,000 figure.
- Final verification passed: ESLint; production build with TypeScript and all 16 static routes; complete new translation-field checks; direct HTTP 200 loading of all 16 pages from the static export; unique IDs and one H1 per page; internal links and legacy fragment targets; self-canonical URLs and five equivalent-page alternates; 16-entry sitemap and preserved robots reference; resume open behaviour, LinkedIn and mailto destinations; byte-identical exported/served resume, portrait and Search Console verification file. No dependency, hosting workflow, site-origin, robots or public-asset edits.
- Local static preview is http://127.0.0.1:3100/ (port 3000 belongs to an older preview). Inspect /about/, /interests/, /projects/ and the corresponding /ko/, /ja/, /zh/ paths. Source breakpoints and icon markup were reviewed, but actual desktop/mobile rendering, overflow, keyboard interaction and menu clicks remain unverified without a connected browser. No commit, push or deployment performed.
- Follow-up: user requested removal of visible resume links and LinkedIn followed by email in their place. Applied the shared link ordering to the homepage, contact and footer across every locale; public/resume.pdf remains available at its existing direct URL. This supersedes the earlier visible-resume-access requirement. Local review only.
- 2026-09-18 follow-up: removed ADMS 3520 from the homepage and About introduction in all four languages; English now says: I study accounting at York University in Toronto. I am particularly interested in tax and intend to pursue the Canadian CPA designation (rendered with a natural contraction). Course identifiers remain only in the detailed coursework list. Verified the served homepage at port 3100 in all four languages has no resume anchor and shows LinkedIn followed by email; the older port 3000 preview returns HTTP 500. Final lint/build passed after clearing the generated cache lock. Use http://127.0.0.1:3100/?v=tax-update to review the current export; not published.
- 2026-09-18 portrait replacement: replaced public/portrait.jpg with the new user-supplied black-shirt photograph, copying the original bytes without retouching. Shared portrait configuration applies to all four homepages; existing frame and responsive layout are preserved. Source/public SHA-256: 87F7D2E124236D882FA42594E67CE806A861BE430D13458F48A4392145B8C7CD. Local review only; no commit or publication.
- Replacement validation passed: production build and TypeScript, identical public/exported/HTTP-served image bytes, and portrait references in all four homepages. Browser visual inspection remains unavailable.
- 2026-09-18 portrait cache fix: the user still saw the old suit portrait. Pointed the shared portrait configuration to public/portrait-87f7d2e1.jpg, a distinct filename containing the new photograph hash prefix, to prevent reuse of the old asset URL. Production build/TypeScript passed; all four HTTP-served homepages reference the new filename, and public/exported/served image bytes match the original black-shirt photo hash above. Preview: http://127.0.0.1:3100/?v=portrait-87f7d2e1. Visual browser verification remains unavailable. Local only; no commit, push or publication.

## Personal-site publication - 2026-09-18

- User approved publication of the reviewed local revision, including deeper pages, translations, LinkedIn/email replacing visible resume links, tax-interest wording, and the new black-shirt portrait with a distinct cache-safe filename. This supersedes the local-only restriction above.
- Remote main matched local ab9f7de before release. Reviewed the relevant diff; deployment workflow, dependencies, domain settings, resume PDF and Search Console verification remain unchanged.
- Release checks passed: production build/TypeScript, ESLint, whitespace, all 16 exported routes and internal navigation/fragment targets, canonical URLs, five alternates per page, 16-entry sitemap and byte-identical preserved assets. No source changes followed those checks except documentation. Browser-based mobile/keyboard/visual checks remain unverified. Deployment and live verification follow the push.

## Homepage link discoverability - 2026-09-18

- Added explicit, localized invitations beneath the three homepage summaries: Read my story, More about life outside accounting, and See what I am working on (rendered with contraction). Each row has one native keyboard-accessible link, with its click target extended across the row, an always-visible underline, subtle hover background and visible focus. Preserved restrained typography/dividers, mobile stacking, legacy anchors and existing page destinations.
- Production build/TypeScript passed; all four served homepages have the three correct localized links and their destinations return HTTP 200. Browser inventory is empty, so visual and pointer/keyboard interaction checks remain unverified. Local preview: http://127.0.0.1:3100/?v=read-more. This follow-up is not published.

## Expanded-page navigation and hobby stories - 2026-09-18

- Added a native left-arrow Back to home link above About, Interests and Projects in all four languages. It always targets the matching-language homepage, including for direct visitors; it does not depend on browser history. Uses a 44px minimum target and existing focus treatment.
- User confirmed golf began two years ago, enjoyment of rounds and simulator golf, a tendency to hit a draw whose cause remains a personal puzzle, and an aspiration to become a scratch golfer within five years before turning 30. Rendered as conversational personal copy, not a current skill claim. Relative durations reflect this confirmation date.
- User confirmed their mother started them in Haedong Kumdo at age five to develop discipline, and that training gradually helped them become calmer and more disciplined. Added this origin story without inferring uninterrupted training since age five; retained the separately confirmed ten years of training.
- Updated all four centralized dictionaries. Production build/TypeScript and served checks for all 12 localized back links passed. Browser visual/mobile interaction verification remains unavailable. These changes and the preceding homepage link improvements remain local and unpublished. Preview: http://127.0.0.1:3100/interests/.

## Copy review and back-link placement - 2026-09-18

- Reviewed centralized English, Korean, Japanese and Simplified Chinese website copy, including labels and metadata. Changed mum to the requested mom variant; smoothed English About and Kumdo prose; clarified the English description as current student status and future CPA intent. Corrected Korean golf phrasing and simplified awkward Korean link text. Improved Chinese simulator phrasing and retained draw without assuming handedness. Preserved facts, dates, qualifications and contact destinations.
- Moved the back link nearer the header while retaining alignment with the reading column. Reduced the link-to-title gap, used muted 13px text and retained a 44px target/focus styling. Fixed the extra About top padding caused by the back link displacing the first child. Applied smaller mobile spacing consistently.
- Production build/TypeScript passed; all 16 preview routes and 12 localized back links passed HTTP/markup checks, with corrected mom wording served. Browser visual/mobile verification remains unavailable; Japanese and Chinese idiom still benefits from native-speaker review. Local only, not published.

- Back-link benchmark follow-up: reviewed GOV.UK back-link/layout guidance (https://design-system.service.gov.uk/components/back-link/ and https://design-system.service.gov.uk/styles/layout/) and NHS guidance (https://service-manual.nhs.uk/design-system/components/back-link). Moved the localized Back to home link outside main into the shared shell immediately below the header, with 8px top padding, aligned to the header divider left edge. Retained narrow article alignment, 44px link target and focus styles. Removed obsolete adjacent-section spacing rule; original first-child rule now handles About correctly. Build/TypeScript passed and all 12 served expanded pages have correct localized links before main. Visual verification remains unavailable. Local only.

- ADMS 3370 clarification: replaced the generic coursework note with one short, first-person sentence directly beneath Advanced Spreadsheets: I used Excel to clean data, build PivotTables and compare scenarios in coursework, quizzes and exams. Added equivalent concise descriptions in all four languages. Uses existing approved academic Excel skills; no independent workbook or professional project claimed. User requested a maximum of one to two sentences and natural writing. Production build/TypeScript passed; served course-row checks passed in all four languages. Local only, not published.

- ADMS 3520 and contact follow-up: added a one-sentence academic explanation of Canadian personal/corporate income tax, tax planning and GST, matching the official York course description (https://courseoutlines.laps.yorku.ca/outlines/2026w-apadms3520m-03/). No tax-return preparation or client experience claimed. Benchmarked direct contact/LinkedIn presentation in BDO accountant Stephanie Chatterton (https://www.bdo.ca/our-people/stephanie-chatterton) and Osler tax lawyer Kim Maguire (https://www.osler.com/en/people/kim-maguire/) profiles. Adapted the pattern to student status: Get in touch, with an invitation to discuss accounting/tax co-op opportunities or hear professional experiences. Preserved LinkedIn/email destinations and ordering. Updated all four dictionaries. Build/TypeScript and 16-page served checks passed; no visual browser verification. Local only.

- Contact wording refinement: user requested Contact me here and a natural invitation to hear about professional experience, discuss contributing to a team, and ask questions. Applied two concise sentences and matching translations in all four languages. Preserved student-level positioning and LinkedIn/email destinations. Production build/TypeScript passed. Local preview only; not published.

## Follow-up publication - 2026-09-18

- User authorized publishing all reviewed follow-ups: clearer homepage links, header-aligned back links, expanded confirmed golf/Kumdo stories, copy corrections, short coursework descriptions, and Contact me here wording in all four languages. This supersedes the local-only notes for these changes.
- Release scope is app/globals.css, app/profile.tsx, app/translations.ts and this context. Remote main matched local 0df77de. Production build/TypeScript passed on final source; release lint and whitespace checks passed. Existing deployment, domain, resume and verification assets remain unchanged. Deployment/live checks follow the push; browser visual and mobile interaction checks remain unverified.

## Contact visual refinement - 2026-09-18

- User requested a visual-only contact adjustment and publication. Replaced the narrow heading/sidebar grid with a single left-aligned column: heading above the existing 620px reading-width copy and links, with a 16px gap. Removes the awkward desktop heading wrap while retaining mobile spacing, typography, wording and all destinations across languages.
- Clean initial Git status; release changes limited to app/globals.css and this context. Production build/TypeScript, lint and whitespace checks passed. Remote main matched c7f4ac3. Browser visual interaction checks remain unavailable; deployment and live asset checks follow publication.

## Evidence-led storytelling draft - 2026-09-18

- User requested a recruiter-oriented story explaining potential contribution, inspired by personal portfolios while retaining their own identity; explicitly do not publish. Initial Git status was clean at 25ecc58.
- Reviewed Brittany Chiang (https://brittanychiang.com/) for positioning supported by concrete work, Tania Rascia (https://www.taniarascia.com/) for a readable progression across different careers while retaining personal interests, and search-visible Edward Kenna accounting-student profile (https://sites.psu.edu/ejk5676/about-me/) for coursework/experience connections. Direct fetch of the last profile failed; do not claim full-page or visual review. No hiring-performance evidence was established, and no wording, credentials or achievements were copied.
- Reframed Home around confirmed till reconciliation, reviewed Navy materials and Korean-English interpretation, leading into current accounting study and tax interest. About now tells the chronological deli-to-Navy-to-Paris-Baguette story, with thematic chapter headings while preserving organizations, dates, roles and evidence. Added a concluding What I would bring to a team passage: careful record checking, academic Excel skills, clear communication and willingness to learn team processes. These are proposed framing and prospective contributions, not claims of professional tax experience or guaranteed outcomes.
- Projects introduction connects cash-flow learning to the existing story and explicitly preserves planned status. Hobby stories and the approved visual design/contact wording remain unchanged. All four locales use a typed narrative dictionary in app/translations.ts. User review of the personal interpretation and Japanese/Chinese idiom is still appropriate.
- Production build/TypeScript passed. All 16 local routes, internal links/anchors, four contribution sections and chronological narrative checks passed. Preview: http://127.0.0.1:3100/ and /about/. Visual/mobile browser verification remains unavailable. No commit, push or publication.

## Concise introduction and verified recognition - 2026-09-18

- Shortened the homepage introduction to two sentences covering current accounting co-op study, tax interest and distinctive business/Navy/bilingual experience. Strengthened the About teaser; removed Today from the English About transition. Replaced the resume-comparison hobby introduction with a straightforward personal-interests line. Explicitly identifies Haedong Kumdo as a Korean sword martial art in the homepage teaser and surfaces rank, instructor qualification and confirmed Mulimpia gold. Projects now precedes Interests in desktop/mobile navigation and homepage rows in all languages.
- Re-extracted public/resume.pdf: confirmed International Scholarship of Merit; YU Automatic Entrance Scholarship (2020); and commendation from the commanding officer of ROKS Incheon for performance and service. Added compact Selected recognition on About, retaining official scholarship names without inventing amounts, selection criteria, award dates or military medal titles.
- User supplied Udemy learning URL. Verified public title A deep understanding of deep learning (with Python intro), instructor Mike X Cohen, at https://www.udemy.com/course/deeplearning_x/. Added a separate Currently learning section, explicitly In progress, with user-confirmed Python learning. No completion certificate, advanced proficiency, projects or learning progress inferred from syllabus.
- Updated four languages. Production build/TypeScript passed; HTTP checks verified localized order, scholarships, commendation and linked course. Restarted stopped static preview at http://127.0.0.1:3100/. Browser visual QA remains unavailable. No commit, push or publication.

- User supplied a photograph of the Navy award certificate. Visible document heading is award certificate; dated 2 July 2023 and issued by the commanding officer of ROKS Incheon. Citation recognizes diligent service and contributions to navigational safety during operations, specifically lookout and communications duties. Replaced the generic service wording in all four languages with the supported navigational-safety contribution and date. English commendation is a descriptive translation, not an asserted formal medal title. Did not copy the photograph or personal service identifier into the repository. Local review only; do not publish.

- Homepage tone refinement: replaced the resume-like experience list with two sentences connecting the confirmed family-business origin of accounting interest to York accounting co-op study and the intended tax career. Retained fuller Navy/bilingual evidence on About. Updated all four languages; no new professional qualifications claimed. Local review only; not published.

## Storytelling and recognition release - 2026-09-18

- User approved publication of the reviewed narrative revision, concise homepage, Projects-before-Interests ordering, explicit martial-art description, scholarships, certificate-verified naval commendation and in-progress Udemy course. Supersedes local-only restrictions for this revision. No certificate photograph or service identifier is included.
- Reviewed four-file release scope: app/locale.ts, app/profile.tsx, app/translations.ts and this context. Remote main matched 25ecc58. Production build/TypeScript passed on final source; whitespace checks passed. Preserved CSS, hosting/domain configuration, resume PDF and verification assets. Browser visual/mobile checks remain unverified. Deployment/live verification follows push.

- Header/skills refinement: changed Accounting portfolio to My journey toward becoming a CPA, and contribution heading to What I would bring to your team (rendered with contraction), with equivalent translations. Replaced Business operations with Cash handling & reconciliation and a short first-person description of verified cash/record checks, payment processing and stock coordination. Checked terminology against Government of Canada Job Bank cashier duties (https://www.jobbank.gc.ca/marketreport/occupation/24164/ON); source supports terminology only, not candidate experience. No bank reconciliation, bookkeeping or professional accounting claims added. Local-only follow-up; no publication authorized for this edit.

- User authorized publishing the header, cash-handling skills and your-team heading refinement. Reviewed release scope: app/translations.ts and this context only. Remote main matched bc4c4ab. Final production build/TypeScript, lint and whitespace checks passed. Existing routes, styling, resume, verification assets and deployment configuration remain unchanged. Deployment and live checks follow push; visual mobile verification remains unavailable.

## Contact colour preview - 2026-09-18

- User requested a restrained contact-only colour treatment and corrected reference scope to individual professionals rather than company sites. Reviewed personal attorney sites Corey K. Ferguson (https://ckferguson.com/contact-us) and John Bandler (https://johnbandler.com/), plus individual-led CPA Holly Signorelli (https://www.hollysignorelli.com/). Their readable text supports direct personal contact presentation; no visual colour benchmark was established because browser inventory was empty. Do not attribute the chosen palette to these sites.
- Local design proposal: contact section background #e5ece8, border #cbd8d0, existing charcoal text and unchanged single-column alignment, copy and links. Sage tint is an original choice to separate the contact area from off-white pages. Calculated contrast is 15.35:1 for headings and 12.12:1 for body text. Production build/TypeScript passed. Not committed or published; browser visual verification unavailable. Preview: http://127.0.0.1:3100/#contact.

- 2026-09-19 colour feedback: replaced the provisional sage contact background with neutral light grey #f1f1f1 and softened its border to #e7e7e7. Reduced section-to-page contrast while retaining dark readable text, existing layout and wording. Local preview only; not published.


## UI and usability refinement - 2026-09-19

- User requested implementation against first-impression, typography, spacing, contrast, mobile, navigation, CTA, storytelling and performance criteria, retaining a human personal style. Initial working tree contained the contact-grey CSS change and its context notes; preserved both.
- Added a localized accounting co-op / tax-interest line immediately below the name; retained the personal greeting and family-business story. Made existing LinkedIn/email links outlined/filled actions on the homepage, preserving their ordering and the prior explicit removal of visible resume links. Added Contact to desktop/mobile navigation and an About section index.
- Retained the restrained Georgia/Geist typography, off-white/charcoal palette and grey contact block. Increased language targets to 44px and switch to mobile navigation at 1050px to accommodate the extra link. No new animations or dependencies.
- Projects now separate motivation, approach and current state in all four languages. Website status describes the existing four-language site; tracker remains explicitly planned with no completed tool or tested outcome claimed. Added typed UI copy in app/ui-copy.ts.
- Removed unused Geist Mono loading and marked the existing hero image eager/high priority. Original portrait bytes and framing remain intact. This changes loading behavior; no measured loading-time or Core Web Vitals improvement is claimed.
- Validation: lint and production build/TypeScript/static export passed; checked all 16 routes for unique IDs, one H1, valid internal links/fragments, image assets, localized additions and preserved resume/portrait/verification bytes. Calculated contrast: muted text on paper 5.35:1; primary CTA 13.56:1. Preview HTTP 200 at http://127.0.0.1:3100/. Final responsive CSS rebuild passed; all 16 HTTP-served routes returned 200 and the exported CSS includes the final navigation breakpoint.
- Browser inventory returned no connected browsers or apps, so actual desktop/mobile appearance, keyboard/touch interaction and loading speed remain unverified. External account/course link availability was not reverified; destinations were preserved. Browser review should cover 320/390/768/1050/1440px and all four languages. Build initially hit font-network restrictions, then a generated-cache lock; network-enabled build after verified .next cleanup succeeded.
- Local edits only; no commit, push or deployment. Hosting, domain, SEO metadata, PDF, portrait and Search Console assets remain unchanged. Use /about/ and /projects/ plus matching /ko/, /ja/ and /zh/ routes for review.


## UI refinement publication - 2026-09-19

- User explicitly authorized publishing the current local revision, including the neutral contact background. Release scope: app/[[...locale]]/layout.tsx, app/globals.css, app/profile.tsx, app/ui-copy.ts and this context. This supersedes local-only status for these changes.
- Reviewed the complete source diff; prior final-source lint, production build/TypeScript, 16-route HTTP and internal-link checks passed in this session. No website source changes since validation. Preserved domain, deployment, metadata, portrait, resume and verification assets.
- Deployment and live checks follow the release push. Browser visual/mobile interaction checks remain unavailable.
